// 5MB阈值（字节）
export const FIVE_MB = 5 * 1024 * 1024;

// 本地存储路径 - 仅在服务器端使用
export const LOCAL_UPLOAD_DIR = 'uploads';

// 生成唯一文件名
export function generateUniqueFileName(originalName) {
  var timestamp = Date.now();
  var randomStr = Math.random().toString(36).substring(2, 10);
  var extIndex = originalName.lastIndexOf('.');
  var ext = extIndex > -1 ? originalName.substring(extIndex) : '';
  var baseName = extIndex > -1 ? originalName.substring(0, extIndex) : originalName;
  return baseName + '_' + timestamp + '_' + randomStr + ext;
}

// 检测文件大小是否超过5MB
export function isFileSizeOverThreshold(fileSize) {
  // 精度误差控制在±10KB以内
  var thresholdWithTolerance = FIVE_MB + 10 * 1024;
  return fileSize > thresholdWithTolerance;
}

// 检查云存储是否已满
export function isCloudStorageFull(usedStorage, totalStorage) {
  var usagePercentage = (usedStorage / totalStorage) * 100;
  return usagePercentage >= 100;
}

// 获取存储路径
export function getStoragePath(fileSize, fileName, usedStorage, totalStorage) {
  // 检查云存储是否已满
  var cloudFull = isCloudStorageFull(usedStorage, totalStorage);
  
  if (isFileSizeOverThreshold(fileSize) || cloudFull) {
    // 大文件或云存储已满时存储到本地
    return {
      storageType: 'local',
      path: LOCAL_UPLOAD_DIR + '/' + fileName,
      switched: cloudFull
    };
  } else {
    // 小文件且云存储未满时存储到云存储
    return {
      storageType: 'cloud',
      path: fileName,
      switched: false
    };
  }
}

// 格式化文件大小
export function formatFileSize(size) {
  if (size < 1024) return size + ' B';
  if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
  if (size < 1024 * 1024 * 1024) return (size / (1024 * 1024)).toFixed(2) + ' MB';
  return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

// 格式化存储大小（用于UI显示）
export function formatStorageSize(size) {
  return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

// 计算存储使用率
export function calculateStorageUsage(used, total) {
  return (used / total) * 100;
}
