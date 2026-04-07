const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 日志文件路径
const LOG_FILE = path.join(__dirname, '../test-fix.log');

// 清空日志文件
fs.writeFileSync(LOG_FILE, `=== 自动化检测与修复流程启动 ===
时间: ${new Date().toISOString()}
\n`);

// 日志函数
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage + '\n');
}

// 执行命令并返回结果
function executeCommand(command) {
  try {
    log(`执行命令: ${command}`);
    const result = execSync(command, { stdio: 'pipe', encoding: 'utf8' });
    log(`命令执行成功: ${result}`);
    return { success: true, output: result };
  } catch (error) {
    log(`命令执行失败: ${error.message}`);
    log(`错误输出: ${error.stdout || error.stderr}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// 尝试修复问题
function tryFixIssues() {
  log('开始尝试修复问题...');
  
  // 1. 尝试修复依赖问题
  log('尝试修复依赖问题...');
  executeCommand('npm install');
  
  // 2. 尝试修复 lint 错误
  log('尝试修复 lint 错误...');
  executeCommand('npm run lint -- --fix');
  
  log('修复尝试完成');
}

// 主流程
async function main() {
  log('开始执行自动化检测与修复流程');
  
  // 1. 运行所有测试
  log('运行所有测试...');
  const testResult = executeCommand('npm run test:all');
  
  if (testResult.success) {
    log('所有测试通过！');
  } else {
    log('测试失败，尝试修复问题...');
    
    // 2. 尝试修复问题
    tryFixIssues();
    
    // 3. 再次运行测试
    log('再次运行测试...');
    const retryResult = executeCommand('npm run test:all');
    
    if (retryResult.success) {
      log('修复成功！所有测试通过');
    } else {
      log('修复失败，仍有问题需要手动解决');
    }
  }
  
  log('自动化检测与修复流程完成');
  log('详细日志已保存到 test-fix.log 文件');
}

// 执行主流程
main().catch(error => {
  log(`流程执行出错: ${error.message}`);
  process.exit(1);
});
