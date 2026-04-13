const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// 使用动态导入获取 fetch
let fetch;
async function getFetch() {
  if (!fetch) {
    const module = await import('node-fetch');
    fetch = module.default;
  }
  return fetch;
}

// 创建测试文件
const testFilePath = path.join(__dirname, 'test.txt');
fs.writeFileSync(testFilePath, 'Test file content');
console.log('Created test file:', testFilePath);

// 测试上传API
async function testUpload() {
  try {
    const fetch = await getFetch();
    const formData = new FormData();
    formData.append('file', fs.createReadStream(testFilePath));
    
    const response = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    });
    
    const result = await response.json();
    console.log('Upload response:', result);
    
    if (result.success) {
      console.log('✅ Upload test passed!');
      console.log('File URL:', result.link);
    } else {
      console.error('❌ Upload test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Upload test error:', error);
  } finally {
    // 清理测试文件
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
      console.log('Cleaned up test file');
    }
  }
}

// 测试存储信息API
async function testStorage() {
  try {
    const fetch = await getFetch();
    const response = await fetch('http://localhost:3000/api/storage');
    const result = await response.json();
    console.log('\nStorage info:', result);
    
    if (result.success) {
      console.log('✅ Storage test passed!');
      console.log('Used storage:', result.storage.used);
      console.log('Available storage:', result.storage.available);
      console.log('File count:', result.storage.fileCount);
    } else {
      console.error('❌ Storage test failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Storage test error:', error);
  }
}

// 运行测试
async function runTests() {
  console.log('=== Testing Local Storage API ===');
  await testUpload();
  await testStorage();
  console.log('=== Test completed ===');
}

runTests();
