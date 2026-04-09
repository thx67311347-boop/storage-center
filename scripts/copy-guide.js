const fs = require('fs');
const path = require('path');

// 源文件路径
const sourcePath = path.join(__dirname, '..', '滴滴出行使用指南.html');
// 目标文件路径
const targetPath = path.join(__dirname, '..', 'public', '滴滴出行使用指南.html');

console.log('正在复制滴滴出行使用指南...');
console.log(`源文件: ${sourcePath}`);
console.log(`目标文件: ${targetPath}`);

try {
    // 检查源文件是否存在
    if (!fs.existsSync(sourcePath)) {
        console.error('错误: 源文件不存在');
        process.exit(1);
    }
    
    // 读取源文件内容
    const content = fs.readFileSync(sourcePath, 'utf8');
    
    // 写入目标文件
    fs.writeFileSync(targetPath, content);
    
    console.log('成功: 滴滴出行使用指南已复制到public目录');
    console.log(`访问地址: http://localhost:3000/滴滴出行使用指南.html`);
} catch (error) {
    console.error('错误: 复制文件失败', error);
    process.exit(1);
}