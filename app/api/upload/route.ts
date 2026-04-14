import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import fs from 'fs';
import { generateUniqueFileName, getStoragePath } from '../../lib/storage-utils';
import { ensureUploadDirExists } from '../../lib/storage-utils-server';
import { cloudStorage } from '../../lib/cloud-storage';

// 确保上传目录存在
// 注意：由于这是在模块级别调用，无法使用await
// 实际应用中，应该在POST函数内部调用
// ensureUploadDirExists();

export async function POST(request: NextRequest) {
  try {
    // 确保上传目录存在
    await ensureUploadDirExists();
    
    // 解析表单数据
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: '未提供文件' }, { status: 400 });
    }

    console.log(`📁 收到文件: ${file.name}, 大小: ${file.size} 字节`);

    // 生成唯一文件名
    const fileName = generateUniqueFileName(file.name);
    
    // 获取当前存储状态
    const storageStatus = await cloudStorage.getStorageStatus();
    const usedStorage = storageStatus?.used || 0;
    const totalStorage = storageStatus?.total || 5 * 1024 * 1024 * 1024; // 默认5GB
    
    // 获取存储路径
    const storageInfo = getStoragePath(file.size, fileName, usedStorage, totalStorage);
    
    let fileUrl: string;
    
    if (storageInfo.storageType === 'local') {
      // 本地存储
      const filePath = storageInfo.path;
      
      // 获取文件流
      const webStream = file.stream();
      const nodeStream = Readable.fromWeb(webStream as any);

      // 创建写入流
      const writeStream = fs.createWriteStream(/* turbo-ignore */ filePath);

      // 管道传输
      await new Promise<void>((resolve, reject) => {
        nodeStream.pipe(writeStream)
          .on('finish', () => resolve())
          .on('error', reject);
      });

      console.log('✅ 本地存储上传成功:', fileName);

      // 生成访问路径
      fileUrl = `/uploads/${fileName}`;
    } else {
      // 云存储
      const cloudResult = await cloudStorage.uploadFile(file, fileName);
      
      if (!cloudResult.success || !cloudResult.url) {
        throw new Error(cloudResult.error || '云存储上传失败');
      }

      console.log('✅ 云存储上传成功:', fileName);
      fileUrl = cloudResult.url;
    }

    return NextResponse.json({ 
      success: true, 
      link: fileUrl,
      fileName: file.name,
      filePath: fileName,
      fileSize: file.size,
      storageType: storageInfo.storageType,
      switched: storageInfo.switched
    });
  } catch (error: any) {
    console.error('❌ 文件上传失败:', error);
    return NextResponse.json(
      { error: error.message || '上传失败' },
      { status: 500 }
    );
  }
}
