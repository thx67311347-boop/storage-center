// 检查localStorage使用情况
function getStorageUsage() {
  let totalSize = 0;
  let storageCenterSize = 0;
  const storageCenterKeys = [];
  
  try {
    // 估算localStorage总容量（通常为5MB）
    const total = 5 * 1024 * 1024;
    
    // 计算当前使用情况
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const value = localStorage[key];
        const itemSize = new Blob([value]).size;
        totalSize += itemSize;
        
        if (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_')) {
          storageCenterSize += itemSize;
          storageCenterKeys.push({ key, size: itemSize });
        }
      }
    }
    
    return {
      total,
      used: totalSize,
      storageCenterUsed: storageCenterSize,
      storageCenterKeys
    };
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return {
      total: 5 * 1024 * 1024,
      used: 0,
      storageCenterUsed: 0,
      storageCenterKeys: []
    };
  }
}

// 格式化存储大小
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 执行检查
const storageUsage = getStorageUsage();
console.log('Storage Usage:');
console.log(`Total: ${formatSize(storageUsage.total)}`);
console.log(`Used: ${formatSize(storageUsage.used)} (${((storageUsage.used / storageUsage.total) * 100).toFixed(1)}%)`);
console.log(`Storage Center Used: ${formatSize(storageUsage.storageCenterUsed)}`);
console.log(`Storage Center Keys: ${storageUsage.storageCenterKeys.length}`);
console.log('\nStorage Center Keys:');
storageUsage.storageCenterKeys.forEach(item => {
  console.log(`${item.key}: ${formatSize(item.size)}`);
});

// 检查是否有大文件
const largeFiles = storageUsage.storageCenterKeys.filter(item => item.size > 1024 * 1024); // 大于1MB
if (largeFiles.length > 0) {
  console.log('\nLarge Files ( > 1MB ):');
  largeFiles.forEach(item => {
    console.log(`${item.key}: ${formatSize(item.size)}`);
  });
}