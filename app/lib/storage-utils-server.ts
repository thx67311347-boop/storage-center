import { LOCAL_UPLOAD_DIR } from './storage-utils.js';

// 确保上传目录存在
export async function ensureUploadDirExists(): Promise<void> {
  // 动态导入fs和path模块
  const fs = await import('fs');
  const path = await import('path');
  
  // 构建完整的上传目录路径
  const fullUploadDir = path.join(process.cwd(), LOCAL_UPLOAD_DIR);
  
  if (!fs.existsSync(fullUploadDir)) {
    fs.mkdirSync(fullUploadDir, { recursive: true });
  }
}

// 计算目录大小
export async function calculateDirectorySize(dir: string): Promise<number> {
  // 动态导入fs和path模块
  const fs = await import('fs');
  const path = await import('path');
  
  let totalSize = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        totalSize += stats.size;
      } else if (stats.isDirectory()) {
        totalSize += await calculateDirectorySize(filePath);
      }
    }
  } catch (error) {
    console.error('计算目录大小失败:', error);
  }
  
  return totalSize;
}
