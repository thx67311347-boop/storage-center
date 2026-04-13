import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// 上传目录
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// 计算目录大小
function calculateDirectorySize(dir: string): number {
  let totalSize = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        totalSize += stats.size;
      } else if (stats.isDirectory()) {
        totalSize += calculateDirectorySize(filePath);
      }
    }
  } catch (error) {
    console.error('计算目录大小失败:', error);
  }
  
  return totalSize;
}

// 获取文件列表
function getFileList(dir: string): Array<{name: string; size: number; lastModified: number}> {
  const files: Array<{name: string; size: number; lastModified: number}> = [];
  
  try {
    const fileNames = fs.readdirSync(dir);
    
    for (const fileName of fileNames) {
      const filePath = path.join(dir, fileName);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        files.push({
          name: fileName,
          size: stats.size,
          lastModified: stats.mtimeMs
        });
      }
    }
  } catch (error) {
    console.error('获取文件列表失败:', error);
  }
  
  return files;
}

export async function GET(request: NextRequest) {
  try {
    // 确保上传目录存在
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    // 计算存储使用情况
    const usedSize = calculateDirectorySize(UPLOAD_DIR);
    const fileList = getFileList(UPLOAD_DIR);
    const fileCount = fileList.length;

    // 假设总存储容量为5GB
    const totalSize = 5 * 1024 * 1024 * 1024;
    const availableSize = totalSize - usedSize;
    const usagePercentage = (usedSize / totalSize) * 100;

    return NextResponse.json({
      success: true,
      storage: {
        total: totalSize,
        used: usedSize,
        available: availableSize,
        usagePercentage: usagePercentage.toFixed(2),
        fileCount: fileCount
      },
      files: fileList
    });
  } catch (error: any) {
    console.error('❌ 获取存储信息失败:', error);
    return NextResponse.json(
      { error: error.message || '获取存储信息失败' },
      { status: 500 }
    );
  }
}
