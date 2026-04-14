import { NextRequest, NextResponse } from 'next/server';
import { calculateDirectorySize, ensureUploadDirExists } from '../../lib/storage-utils-server';
import { cloudStorage } from '../../lib/cloud-storage';

// 上传目录 - 仅在服务器端使用
const UPLOAD_DIR = './uploads';

// 确保上传目录存在
// 注意：由于这是在模块级别调用，无法使用await
// 实际应用中，应该在GET函数内部调用
// ensureUploadDirExists();

// 获取文件列表
async function getFileList(dir: string): Promise<Array<{name: string; size: number; lastModified: number}>> {
  // 动态导入fs和path模块
  const fs = await import('fs');
  const path = await import('path');
  
  const files: Array<{name: string; size: number; lastModified: number}> = [];
  
  try {
    // 构建完整的目录路径
    const fullDir = path.join(process.cwd(), dir);
    const fileNames = fs.readdirSync(fullDir);
    
    for (const fileName of fileNames) {
      const filePath = path.join(fullDir, fileName);
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
    await ensureUploadDirExists();
    
    // 计算本地存储使用情况
    const localUsedSize = await calculateDirectorySize(UPLOAD_DIR);
    const localFileList = await getFileList(UPLOAD_DIR);
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
