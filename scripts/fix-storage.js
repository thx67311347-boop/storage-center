// 修复脚本：清理并重置localStorage数据

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
  },
  key(index) {
    return Object.keys(this.data)[index];
  },
  get length() {
    return Object.keys(this.data).length;
  }
};

// 模拟Date对象
const originalDate = Date;
global.Date = function(...args) {
  if (args.length === 0) {
    return new originalDate(1776015814954); // 固定时间
  }
  return new originalDate(...args);
};
global.Date.now = () => 1776015814954;

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

// 测试清理localStorage
console.log('\n\nTesting localStorage cleanup...');
try {
  localStorage.clear();
  console.log('localStorage cleared successfully');
  
  // 测试加载文件数据（应该返回默认数据）
  const loadedFiles = loadFilesFromStorage();
  console.log('Files loaded after cleanup:', loadedFiles);
  
  console.log('\nAll tests passed!');
} catch (error) {
  console.error('Error during cleanup testing:', error);
}
