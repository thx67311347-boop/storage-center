import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 上传目录
const UPLOAD_DIR = path.join(/* turbo-ignore */ process.cwd(), 'uploads');

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileName = searchParams.get('file');
    const originalName = searchParams.get('name');

    if (!fileName) {
      return NextResponse.json({ error: '缺少文件参数' }, { status: 400 });
    }

    // 构建文件路径
    const filePath = path.join(/* turbo-ignore */ UPLOAD_DIR, fileName);

    // 检查文件是否存在
    if (!fs.existsSync(/* turbo-ignore */ filePath)) {
      return NextResponse.json({ error: '文件不存在' }, { status: 404 });
    }

    // 读取文件
    const fileBuffer = fs.readFileSync(/* turbo-ignore */ filePath);

    // 生成文件名
    const downloadName = originalName || fileName;

    // 返回文件
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(downloadName)}"`,
        'Content-Length': fileBuffer.length.toString()
      }
    });
  } catch (error: any) {
    console.error('❌ 文件下载失败:', error);
    return NextResponse.json(
      { error: error.message || '下载失败' },
      { status: 500 }
    );
  }
}
