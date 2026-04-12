// 清理localStorage数据的脚本

// 检查当前localStorage使用情况
function checkStorageUsage() {
  let totalSize = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const value = localStorage[key];
      const itemSize = new Blob([value]).size;
      totalSize += itemSize;
      console.log(`Key: ${key}, Size: ${(itemSize / 1024).toFixed(2)} KB`);
    }
  }
  console.log(`Total localStorage usage: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  return totalSize;
}

// 清理storageCenter相关的数据
function cleanupStorageCenterData() {
  console.log('清理Storage Center数据...');
  const keysToRemove = [];
  
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_'))) {
      keysToRemove.push(key);
    }
  }
  
  console.log(`找到 ${keysToRemove.length} 个Storage Center相关的键`);
  
  keysToRemove.forEach(key => {
    console.log(`移除: ${key}`);
    localStorage.removeItem(key);
  });
  
  console.log('清理完成！');
  checkStorageUsage();
}

// 运行清理
console.log('=== Storage Center 数据清理工具 ===');
console.log('当前存储使用情况:');
checkStorageUsage();

// 询问是否清理
const confirmCleanup = confirm('确定要清理Storage Center的所有数据吗？这将删除所有上传的文件和文件夹。');

if (confirmCleanup) {
  cleanupStorageCenterData();
  alert('Storage Center数据已清理完成！');
} else {
  console.log('取消清理操作');
}
