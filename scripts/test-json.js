// 测试脚本：检查JSON序列化和反序列化

// 模拟文件对象
const testFile = {
  id: '1',
  name: '测试文件.txt',
  type: 'text/plain',
  size: 1024,
  lastModified: Date.now(),
  url: 'data:text/plain;base64,SGVsbG8gV29ybGQ=',
  isFolder: false,
  parentId: null,
  userId: 'user@example.com'
};

// 测试JSON.stringify
console.log('Testing JSON.stringify...');
try {
  const jsonString = JSON.stringify(testFile);
  console.log('JSON string:', jsonString);
  
  // 测试JSON.parse
  console.log('\nTesting JSON.parse...');
  const parsedFile = JSON.parse(jsonString);
  console.log('Parsed file:', parsedFile);
  
  console.log('\nAll tests passed!');
} catch (error) {
  console.error('Error during testing:', error);
}

// 测试包含特殊字符的文件名
console.log('\n\nTesting with special characters in filename...');
try {
  const testFileWithSpecialChars = {
    ...testFile,
    name: '测试文件 (1).txt'
  };
  
  const jsonString = JSON.stringify(testFileWithSpecialChars);
  console.log('JSON string:', jsonString);
  
  const parsedFile = JSON.parse(jsonString);
  console.log('Parsed file:', parsedFile);
  
  console.log('\nAll tests passed!');
} catch (error) {
  console.error('Error during testing:', error);
}
