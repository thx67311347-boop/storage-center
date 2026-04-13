import { NextRequest, NextResponse } from 'next/server';
import { getMegaStorage } from '@/app/lib/mega-storage';

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileLink = searchParams.get('link');

    if (!fileLink) {
      return NextResponse.json({ error: 'Missing file link' }, { status: 400 });
    }

    // 使用共享的会话管理
    const storage = await getMegaStorage();

    // 删除文件
    // @ts-ignore - megajs类型定义不完整
    const file = storage.file(fileLink);
    await file.delete();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mega delete failed:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}