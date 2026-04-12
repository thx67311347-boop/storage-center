import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 创建测试文件
const testFilePath = path.join(__dirname, 'test-small.txt');
fs.writeFileSync(testFilePath, 'Hello MEGA test at ' + new Date().toISOString());

// 测试上传
async function testUpload() {
  try {
    const formData = new FormData();
    const file = fs.createReadStream(testFilePath);
    
    formData.append('file', file, 'test-small.txt');
    
    console.log('测试小文件上传...');
    console.log('文件路径:', testFilePath);
    
    const response = await fetch('http://localhost:3000/api/mega/upload', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    });
    
    const result = await response.json();
    console.log('响应状态:', response.status);
    console.log('响应结果:', result);
    
    if (response.ok && result.success) {
      console.log('✅ 小文件上传成功！');
      console.log('分享链接:', result.link);
    } else {
      console.log('❌ 小文件上传失败:', result.error);
    }
  } catch (error) {
    console.error('测试失败:', error);
  } finally {
    // 清理测试文件
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  }
}

testUpload();