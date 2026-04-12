import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 创建50MB测试文件
const testFilePath = path.join(__dirname, 'test-large.txt');
const fileSize = 50 * 1024 * 1024; // 50MB
const buffer = Buffer.alloc(fileSize, 'x');
fs.writeFileSync(testFilePath, buffer);

// 测试上传
async function testUpload() {
  try {
    const formData = new FormData();
    const file = fs.createReadStream(testFilePath);
    
    formData.append('file', file, 'test-large.txt');
    
    console.log('测试大文件上传...');
    console.log('文件大小:', (fileSize / 1024 / 1024).toFixed(2), 'MB');
    console.log('文件路径:', testFilePath);
    
    const startTime = Date.now();
    
    const response = await fetch('http://localhost:3000/api/mega/upload', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    });
    
    const endTime = Date.now();
    const uploadTime = (endTime - startTime) / 1000;
    
    const result = await response.json();
    console.log('响应状态:', response.status);
    console.log('响应结果:', result);
    console.log('上传时间:', uploadTime.toFixed(2), '秒');
    console.log('上传速度:', (fileSize / 1024 / 1024 / uploadTime).toFixed(2), 'MB/s');
    
    if (response.ok && result.success) {
      console.log('✅ 大文件上传成功！');
      console.log('分享链接:', result.link);
    } else {
      console.log('❌ 大文件上传失败:', result.error);
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