import { NextRequest, NextResponse } from 'next/server';
import { Storage } from 'megajs';
import { Readable } from 'stream';

export async function POST(request: NextRequest) {
  try {
    // 检查环境变量
    const email = process.env.MEGA_EMAIL;
    const password = process.env.MEGA_PASSWORD;
    
    if (!email || !password) {
      return NextResponse.json({ error: 'MEGA credentials not configured' }, { status: 500 });
    }
    
    // 解析请求体
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const fileName = formData.get('fileName') as string;
    const fileSize = parseInt(formData.get('fileSize') as string);

    if (!file || !fileName || !fileSize) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    // 连接到MEGA
    const storage = new Storage({
      email,
      password
    });

    await storage.ready;

    // 创建上传
    const upload = storage.upload({
      name: fileName,
      size: fileSize
    });

    // 获取Web Stream并转换为Node Stream
    const webStream = file.stream();
    const nodeStream = Readable.fromWeb(webStream as any);
    
    // 使用管道对接，自动处理背压
    nodeStream.pipe(upload);

    // 等待上传完成
    const uploadedFile = await upload.complete;

    return NextResponse.json({ link: uploadedFile.link });
  } catch (error) {
    console.error('Mega upload failed:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
