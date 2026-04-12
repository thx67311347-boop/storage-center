import { NextRequest, NextResponse } from 'next/server';
import { Storage } from 'megajs';

export async function DELETE(request: NextRequest) {
  try {
    // 检查环境变量
    const email = process.env.MEGA_EMAIL;
    const password = process.env.MEGA_PASSWORD;
    
    if (!email || !password) {
      return NextResponse.json({ error: 'MEGA credentials not configured' }, { status: 500 });
    }
    
    const searchParams = request.nextUrl.searchParams;
    const fileLink = searchParams.get('link');

    if (!fileLink) {
      return NextResponse.json({ error: 'Missing file link' }, { status: 400 });
    }

    // 连接到MEGA
    const storage = new Storage({
      email,
      password
    });

    await storage.ready;

    // 删除文件
    const file = storage.file(fileLink);
    await file.delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mega delete failed:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
