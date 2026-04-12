import { Storage } from 'megajs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function testUpload() {
  try {
    console.log('1. 登录 MEGA...');
    const storage = await new Storage({
      email: process.env.MEGA_EMAIL,
      password: process.env.MEGA_PASSWORD,
    }).ready;
    console.log('✓ 登录成功');

    // 创建测试文件
    const testContent = `MEGA test at ${new Date().toISOString()}`;
    const testFilePath = path.join(__dirname, 'test-upload.txt');
    fs.writeFileSync(testFilePath, testContent);
    const fileBuffer = fs.readFileSync(testFilePath);
    const fileName = 'test-upload.txt';

    console.log(`2. 上传文件 (${fileBuffer.length} 字节)...`);
    const uploadStream = storage.upload(
      { name: fileName, size: fileBuffer.length },
      fileBuffer
    );
    const result = await uploadStream.complete;
    console.log('✓ 上传成功！');
    console.log('文件节点:', result);
    console.log('分享链接:', `https://mega.nz/file/${result.fileId}#${result.key}`);

    // 清理测试文件
    fs.unlinkSync(testFilePath);
  } catch (err) {
    console.error('✗ 测试失败');
    console.error('错误类型:', err.name);
    console.error('错误消息:', err.message);
    if (err.code) console.error('错误代码:', err.code);
    console.error('完整堆栈:', err.stack);
  }
}

testUpload();