import { NextRequest, NextResponse } from 'next/server';
import { getMegaStorage } from '@/app/lib/mega-storage';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileLink = searchParams.get('link');

    if (!fileLink) {
      return NextResponse.json({ error: 'Missing file link' }, { status: 400 });
    }

    // 使用共享的会话管理
    const storage = await getMegaStorage();

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