import path from 'path';

// 5MB阈值（字节）
export const FIVE_MB = 5 * 1024 * 1024;

// 本地存储路径
export const LOCAL_UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// 生成唯一文件名
export function generateUniqueFileName(originalName: string): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 10);
  const ext = path.extname(originalName);
  const baseName = path.basename(originalName, ext);
  return `${baseName}_${timestamp}_${randomStr}${ext}`;
}

// 检测文件大小是否超过5MB
export function isFileSizeOverThreshold(fileSize: number): boolean {
  // 精度误差控制在±10KB以内
  const thresholdWithTolerance = FIVE_MB + 10 * 1024;
  return fileSize > thresholdWithTolerance;
}

// 获取存储路径
export function getStoragePath(fileSize: number, fileName: string): { storageType: 'local' | 'cloud', path: string } {
  if (isFileSizeOverThreshold(fileSize)) {
    // 大文件存储到本地
    return {
      storageType: 'local',
      path: path.join(LOCAL_UPLOAD_DIR, fileName)
    };
  } else {
    // 小文件存储到云存储
    return {
      storageType: 'cloud',
      path: fileName
    };
  }
}

// 格式化文件大小
export function formatFileSize(size: number): string {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

// 格式化存储大小（用于UI显示）
export function formatStorageSize(size: number): string {
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

// 计算存储使用率
export function calculateStorageUsage(used: number, total: number): number {
  return (used / total) * 100;
}

// 服务器端专用函数
export let ensureUploadDirExists: () => void;
export let calculateDirectorySize: (dir: string) => number;

if (typeof window === 'undefined') {
  const fs = require('fs');
  
  // 确保上传目录存在
  ensureUploadDirExists = function() {
    if (!fs.existsSync(LOCAL_UPLOAD_DIR)) {
      fs.mkdirSync(LOCAL_UPLOAD_DIR, { recursive: true });
    }
  };
  
  // 计算目录大小
  calculateDirectorySize = function(dir: string): number {
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
  };
} else {
  // 客户端空实现
  ensureUploadDirExists = function() {};
  calculateDirectorySize = function() { return 0; };
}
