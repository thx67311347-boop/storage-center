// 在浏览器控制台中运行此脚本来清理localStorage
(function() {
  const keysToRemove = [];
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key.startsWith('storageCenter')) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
    console.log('Removed:', key);
  });
  
  console.log(`Cleaned up ${keysToRemove.length} Storage Center keys`);
  console.log('Now refresh the page to continue.');
})();
