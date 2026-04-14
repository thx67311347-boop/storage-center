import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { calculateDirectorySize, ensureUploadDirExists } from '../../lib/storage-utils';
import { cloudStorage } from '../../lib/cloud-storage';

// 动态导入fs模块
const fs = require('fs');

// 上传目录
const UPLOAD_DIR = path.join(/* turbo-ignore */ process.cwd(), 'uploads');

// 确保上传目录存在
ensureUploadDirExists();

// 获取文件列表
function getFileList(dir: string): Array<{name: string; size: number; lastModified: number}> {
  const files: Array<{name: string; size: number; lastModified: number}> = [];
  
  try {
    const fileNames = fs.readdirSync(/* turbo-ignore */ dir);
    
    for (const fileName of fileNames) {
      const filePath = path.join(/* turbo-ignore */ dir, fileName);
      const stats = fs.statSync(/* turbo-ignore */ filePath);
      
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
    // 计算本地存储使用情况
    const localUsedSize = calculateDirectorySize(UPLOAD_DIR);
    const localFileList = getFileList(UPLOAD_DIR);
    const localFileCount = localFileList.length;

    // 本地存储总容量固定为50GB
    const localTotalSize = 50 * 1024 * 1024 * 1024;
    const localAvailableSize = localTotalSize - localUsedSize;
    const localUsagePercentage = (localUsedSize / localTotalSize) * 100;

    // 获取云存储状态
    const cloudStatus = await cloudStorage.getStorageStatus();
    let cloudTotalSize = 0;
    let cloudUsedSize = 0;
    let cloudAvailableSize = 0;
    let cloudUsagePercentage = 0;

    if (cloudStatus.success) {
      cloudTotalSize = cloudStatus.total;
      cloudUsedSize = cloudStatus.used;
      cloudAvailableSize = cloudTotalSize - cloudUsedSize;
      cloudUsagePercentage = (cloudUsedSize / cloudTotalSize) * 100;
    }

    return NextResponse.json({
      success: true,
      localStorage: {
        total: localTotalSize,
        used: localUsedSize,
        available: localAvailableSize,
        usagePercentage: localUsagePercentage.toFixed(2),
        fileCount: localFileCount
      },
      cloudStorage: {
        total: cloudTotalSize,
        used: cloudUsedSize,
        available: cloudAvailableSize,
        usagePercentage: cloudUsagePercentage.toFixed(2)
      },
      files: localFileList
    });
  } catch (error: any) {
    console.error('❌ 获取存储信息失败:', error);
    return NextResponse.json(
      { error: error.message || '获取存储信息失败' },
      { status: 500 }
    );
  }
}
