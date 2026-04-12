// 测试脚本：检查localStorage中的数据

// 模拟localStorage
const localStorage = {
  data: {},
  getItem(key) {
    return this.data[key] || null;
  },
  setItem(key, value) {
    this.data[key] = value;
  },
  removeItem(key) {
    delete this.data[key];
  },
  clear() {
    this.data = {};
  }
};

// 导入相关函数
const { saveFilesToStorage, loadFilesFromStorage, getDefaultFiles } = require('../app/hooks/useFileStorage');

// 测试默认文件数据
console.log('Testing default files...');
try {
  const defaultFiles = getDefaultFiles();
  console.log('Default files:', defaultFiles);
  
  // 测试保存文件数据
  console.log('\nTesting saveFilesToStorage...');
  saveFilesToStorage(defaultFiles);
  console.log('Files saved successfully');
  
  // 测试加载文件数据
  console.log('\nTesting loadFilesFromStorage...');
  const loadedFiles = loadFilesFromStorage();
  console.log('Files loaded successfully:', loadedFiles);
  
  console.log('\nAll tests passed!');
} catch (error) {
  console.error('Error during testing:', error);
}
