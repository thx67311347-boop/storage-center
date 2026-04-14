import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { generateUniqueFileName, getStoragePath, ensureUploadDirExists } from '../../lib/storage-utils';
import { cloudStorage } from '../../lib/cloud-storage';

// 确保上传目录存在
ensureUploadDirExists();

export async function POST(request: NextRequest) {
  try {
    // 解析表单数据
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    
    if (!file) {
      return NextResponse.json({ error: '未提供文件' }, { status: 400 });
    }

    console.log(`📁 收到文件: ${file.name}, 大小: ${file.size} 字节`);

    // 生成唯一文件名
    const fileName = generateUniqueFileName(file.name);
    
    // 获取存储路径
    const storageInfo = getStoragePath(file.size, fileName);
    
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
      storageType: storageInfo.storageType
    });
  } catch (error: any) {
    console.error('❌ 文件上传失败:', error);
    return NextResponse.json(
      { error: error.message || '上传失败' },
      { status: 500 }
    );
  }
}
