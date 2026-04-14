import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

// 上传目录
const UPLOAD_DIR = path.join(/* turbo-ignore */ process.cwd(), 'uploads');

// 确保上传目录存在
if (!fs.existsSync(/* turbo-ignore */ UPLOAD_DIR)) {
  fs.mkdirSync(/* turbo-ignore */ UPLOAD_DIR, { recursive: true });
}

// 生成唯一文件名
function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 10);
  const ext = path.extname(originalName);
  const baseName = path.basename(originalName, ext);
  return `${baseName}_${timestamp}_${randomStr}${ext}`;
}

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
    const filePath = path.join(UPLOAD_DIR, fileName);

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

    console.log('✅ 文件上传成功:', fileName);

    // 生成访问路径
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({ 
      success: true, 
      link: fileUrl,
      fileName: file.name,
      filePath: fileName,
      fileSize: file.size
    });
  } catch (error: any) {
    console.error('❌ 文件上传失败:', error);
    return NextResponse.json(
      { error: error.message || '上传失败' },
      { status: 500 }
    );
  }
}
