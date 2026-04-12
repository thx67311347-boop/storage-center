import { NextRequest, NextResponse } from 'next/server';
import { Storage } from 'megajs';

export async function GET(request: NextRequest) {
  try {
    // 检查环境变量
    const email = process.env.MEGA_EMAIL || '';
    const password = process.env.MEGA_PASSWORD || '';
    
    if (!email || !password) {
      return NextResponse.json({ error: 'MEGA credentials not configured' }, { status: 500 });
    }
    
    const searchParams = request.nextUrl.searchParams;
    const fileLink = searchParams.get('link');

    if (!fileLink) {
      return NextResponse.json({ error: 'Missing file link' }, { status: 400 });
    }

    // 连接到MEGA，使用邮箱密码登录
    const storage = new Storage({
      email: email,
      password: password
    });

    await storage.ready;

    // 下载文件
    // @ts-ignore - megajs类型定义不完整
    const file = storage.file(fileLink);
    const buffer = await file.downloadBuffer();

    // 返回文件数据
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${file.name}"`
      }
    });
  } catch (error) {
    console.error('Mega download failed:', error);
    return NextResponse.json({ error: 'Download failed' }, { status: 500 });
  }
}