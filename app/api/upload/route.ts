import { NextRequest, NextResponse } from 'next/server';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { generateUniqueFileName, getStoragePath, FIVE_MB } from '../../lib/storage-utils';
import { ensureUploadDirExists } from '../../lib/storage-utils-server';
import { cloudStorage } from '../../lib/cloud-storage';

// 确保上传目录存在
// 注意：由于这是在模块级别调用，无法使用await
// 实际应用中，应该在POST函数内部调用
// ensureUploadDirExists();

// 分块上传相关
const CHUNK_SIZE = 3 * 1024 * 1024; // 3MB 块大小，小于Vercel的4MB限制

// 分块上传处理
export async function POST(request: NextRequest) {
  try {
    // 确保上传目录存在
    await ensureUploadDirExists();
    
    // 检查Content-Type是否为multipart/form-data
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Content-Type必须为multipart/form-data' }, { status: 400 });
    }
    
    // 解析表单数据
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const chunkIndex = formData.get('chunkIndex') as string | null;
    const totalChunks = formData.get('totalChunks') as string | null;
    const fileName = formData.get('fileName') as string | null;
    const fileSize = formData.get('fileSize') as string | null;
    
    // 分块上传处理
    if (chunkIndex && totalChunks && fileName) {
      return await handleChunkUpload(formData, parseInt(chunkIndex), parseInt(totalChunks), fileName, fileSize ? parseInt(fileSize) : 0);
    }
    
    // 传统上传处理
    if (!file) {
      return NextResponse.json({ error: '未提供文件' }, { status: 400 });
    }

    console.log(`📁 收到文件: ${file.name}, 大小: ${file.size} 字节`);

    // 生成唯一文件名
    const uniqueFileName = generateUniqueFileName(file.name);
    
    // 获取当前存储状态
    const storageStatus = await cloudStorage.getStorageStatus();
    const usedStorage = storageStatus?.used || 0;
    const totalStorage = storageStatus?.total || 5 * 1024 * 1024 * 1024; // 默认5GB
    
    // 获取存储路径
    const storageInfo = getStoragePath(file.size, uniqueFileName, usedStorage, totalStorage);
    
    let fileUrl: string;
    
    if (storageInfo.storageType === 'local') {
      // 本地存储 - 使用绝对路径
      const absoluteFilePath = path.join(process.cwd(), storageInfo.path);
      
      console.log('📁 本地存储路径:', absoluteFilePath);
      
      // 确保目录存在
      const dir = path.dirname(absoluteFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // 获取文件流
      const webStream = file.stream();
      const nodeStream = Readable.fromWeb(webStream as any);

      // 创建写入流
      const writeStream = fs.createWriteStream(absoluteFilePath);

      // 管道传输
      await new Promise<void>((resolve, reject) => {
        nodeStream.pipe(writeStream)
          .on('finish', () => {
            console.log('✅ 本地存储写入完成:', uniqueFileName);
            resolve();
          })
          .on('error', (error) => {
            console.error('❌ 本地存储写入失败:', error);
            reject(error);
          });
      });

      console.log('✅ 本地存储上传成功:', uniqueFileName);

      // 生成访问路径
      fileUrl = `/uploads/${uniqueFileName}`;
    } else {
      // 云存储
      const cloudResult = await cloudStorage.uploadFile(file, uniqueFileName);
      
      if (!cloudResult.success || !cloudResult.url) {
        throw new Error(cloudResult.error || '云存储上传失败');
      }

      console.log('✅ 云存储上传成功:', uniqueFileName);
      fileUrl = cloudResult.url;
    }

    return NextResponse.json({ 
      success: true, 
      link: fileUrl,
      fileName: file.name,
      filePath: uniqueFileName,
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

// 处理分块上传
async function handleChunkUpload(
  formData: FormData,
  chunkIndex: number,
  totalChunks: number,
  fileName: string,
  fileSize: number
): Promise<NextResponse> {
  try {
    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ error: '未提供文件块' }, { status: 400 });
    }

    console.log(`📁 收到分块: ${chunkIndex + 1}/${totalChunks}, 大小: ${file.size} 字节`);

    // 确保上传目录存在
    await ensureUploadDirExists();

    // 临时存储分块的目录
    const tempDir = path.join(process.cwd(), 'uploads', 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    // 分块文件路径
    const chunkPath = path.join(tempDir, `${fileName}.chunk${chunkIndex}`);

    // 写入分块文件
    const webStream = file.stream();
    const nodeStream = Readable.fromWeb(webStream as any);
    const writeStream = fs.createWriteStream(chunkPath);

    await new Promise<void>((resolve, reject) => {
      nodeStream.pipe(writeStream)
        .on('finish', () => {
          console.log('✅ 分块写入完成:', chunkPath);
          resolve();
        })
        .on('error', (error) => {
          console.error('❌ 分块写入失败:', error);
          reject(error);
        });
    });

    // 检查是否所有分块都已上传
    if (chunkIndex === totalChunks - 1) {
      // 合并所有分块
      return await mergeChunks(fileName, totalChunks, fileSize);
    }

    // 分块上传成功，等待下一个分块
    return NextResponse.json({
      success: true,
      message: `分块 ${chunkIndex + 1}/${totalChunks} 上传成功`,
      chunkIndex
    });
  } catch (error: any) {
    console.error('❌ 分块上传失败:', error);
    return NextResponse.json(
      { error: error.message || '分块上传失败' },
      { status: 500 }
    );
  }
}

// 合并分块
async function mergeChunks(
  fileName: string,
  totalChunks: number,
  fileSize: number
): Promise<NextResponse> {
  try {
    console.log('🔄 开始合并分块...');

    // 临时存储分块的目录
    const tempDir = path.join(process.cwd(), 'uploads', 'temp');
    const finalFilePath = path.join(process.cwd(), 'uploads', fileName);

    // 确保最终文件目录存在
    const finalDir = path.dirname(finalFilePath);
    if (!fs.existsSync(finalDir)) {
      fs.mkdirSync(finalDir, { recursive: true });
    }

    // 创建最终文件
    const finalFileStream = fs.createWriteStream(finalFilePath);

    // 按顺序读取并合并分块
    for (let i = 0; i < totalChunks; i++) {
      const chunkPath = path.join(tempDir, `${fileName}.chunk${i}`);
      
      if (!fs.existsSync(chunkPath)) {
        throw new Error(`分块 ${i} 不存在`);
      }

      // 读取分块并写入最终文件
      const chunkBuffer = fs.readFileSync(chunkPath);
      finalFileStream.write(chunkBuffer);

      // 删除已处理的分块
      fs.unlinkSync(chunkPath);
      console.log(`✅ 处理并删除分块 ${i + 1}/${totalChunks}`);
    }

    // 完成写入
    finalFileStream.end();

    console.log('✅ 分块合并完成:', finalFilePath);

    // 生成访问路径
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      message: '文件上传完成',
      link: fileUrl,
      fileName: path.basename(fileName),
      filePath: fileName,
      fileSize,
      storageType: 'local',
      switched: false
    });
  } catch (error: any) {
    console.error('❌ 分块合并失败:', error);
    return NextResponse.json(
      { error: error.message || '分块合并失败' },
      { status: 500 }
    );
  }
}
