import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 上传目录
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileName = searchParams.get('file');

    if (!fileName) {
      return NextResponse.json({ error: '缺少文件参数' }, { status: 400 });
    }

    // 构建文件路径
    const filePath = path.join(UPLOAD_DIR, fileName);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: '文件不存在' }, { status: 404 });
    }

    // 删除文件
    fs.unlinkSync(filePath);

    console.log('✅ 文件删除成功:', fileName);

    return NextResponse.json({ success: true, message: '文件删除成功' });
  } catch (error: any) {
    console.error('❌ 文件删除失败:', error);
    return NextResponse.json(
      { error: error.message || '删除失败' },
      { status: 500 }
    );
  }
}
