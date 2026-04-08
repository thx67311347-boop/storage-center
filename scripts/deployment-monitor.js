#!/usr/bin/env node

/**
 * 自动化部署监控系统
 * 用于监控Vercel部署状态并发送通知
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// 配置信息 - 从环境变量读取敏感信息
const config = {
  // Vercel项目信息
  vercel: {
    projectId: process.env.VERCEL_PROJECT_ID || '', // 从环境变量读取项目ID
    token: process.env.VERCEL_API_TOKEN || '', // 从环境变量读取API Token
  },
  // 监控配置
  monitor: {
    checkInterval: 10000, // 检查间隔（毫秒）
    timeout: 3600000, // 超时时间（1小时）
  },
  // 通知配置
  notification: {
    // 可以配置邮件、Slack、Discord等通知渠道
    email: process.env.NOTIFICATION_EMAIL || '', // 从环境变量读取邮箱
  },
  // 部署历史记录文件
  deploymentHistoryFile: path.join(__dirname, '../deployment-history.json'),
};

// 部署状态
const DEPLOYMENT_STATUS = {
  PENDING: 'PENDING',
  BUILDING: 'BUILDING',
  READY: 'READY',
  ERROR: 'ERROR',
};

// 部署历史记录
let deploymentHistory = [];

/**
 * 初始化部署历史记录
 */
function initDeploymentHistory() {
  try {
    if (fs.existsSync(config.deploymentHistoryFile)) {
      const data = fs.readFileSync(config.deploymentHistoryFile, 'utf8');
      deploymentHistory = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading deployment history:', error);
    deploymentHistory = [];
  }
}

/**
 * 保存部署历史记录
 */
function saveDeploymentHistory() {
  try {
    fs.writeFileSync(config.deploymentHistoryFile, JSON.stringify(deploymentHistory, null, 2));
  } catch (error) {
    console.error('Error saving deployment history:', error);
  }
}

/**
 * 记录新的部署
 */
function recordNewDeployment(deployment) {
  const deploymentId = deployment.id || deployment.uid; // 支持id或uid字段
  const newRecord = {
    id: deploymentId,
    startTime: new Date().toISOString(),
    endTime: null,
    duration: null,
    status: DEPLOYMENT_STATUS.PENDING,
    url: deployment.url,
  };
  deploymentHistory.push(newRecord);
  saveDeploymentHistory();
  return newRecord;
}

/**
 * 更新部署记录
 */
function updateDeploymentRecord(deploymentId, status) {
  const record = deploymentHistory.find(d => d.id === deploymentId);
  if (record) {
    record.status = status;
    if (status === DEPLOYMENT_STATUS.READY || status === DEPLOYMENT_STATUS.ERROR) {
      record.endTime = new Date().toISOString();
      record.duration = Math.round((new Date(record.endTime) - new Date(record.startTime)) / 1000); // 持续时间（秒）
    }
    saveDeploymentHistory();
  }
}

/**
 * 获取Vercel部署状态
 */
async function getVercelDeploymentStatus(deploymentId) {
  return new Promise((resolve, reject) => {
    // 使用正确的Vercel API端点
    const options = {
      hostname: 'api.vercel.com',
      path: `/v6/deployments/${deploymentId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.vercel.token}`,
        'Content-Type': 'application/json',
      },
    };

    console.log('=== 获取部署状态 ===');
    console.log('URL:', `https://api.vercel.com/v6/deployments/${deploymentId}`);

    const req = https.request(options, (res) => {
      console.log('=== 状态API响应 ===');
      console.log('状态码:', res.statusCode);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log('状态响应数据:', data);
        try {
          const deployment = JSON.parse(data);
          console.log('解析后的状态数据:', deployment);
          resolve(deployment);
        } catch (error) {
          console.error('解析状态数据失败:', error);
          reject(new Error('Failed to parse deployment data'));
        }
      });
    });

    req.on('error', (error) => {
      console.error('状态API请求错误:', error);
      reject(error);
    });

    req.end();
  });
}

/**
 * 获取最新的部署
 */
async function getLatestDeployment() {
  return new Promise((resolve, reject) => {
    // 使用正确的Vercel API端点
    const options = {
      hostname: 'api.vercel.com',
      path: `/v6/deployments?projectId=${config.vercel.projectId}&limit=1`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.vercel.token}`,
        'Content-Type': 'application/json',
      },
    };

    console.log('=== 调用Vercel API ===');
    console.log('URL:', `https://api.vercel.com/v6/deployments?projectId=${config.vercel.projectId}&limit=1`);

    const req = https.request(options, (res) => {
      console.log('=== API响应 ===');
      console.log('状态码:', res.statusCode);
      console.log('响应头:', res.headers);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log('响应数据:', data);
        try {
          const response = JSON.parse(data);
          console.log('解析后的数据:', response);
          const deployments = response.deployments || [];
          resolve(deployments[0] || null);
        } catch (error) {
          console.error('解析数据失败:', error);
          reject(new Error('Failed to parse deployments data'));
        }
      });
    });

    req.on('error', (error) => {
      console.error('API请求错误:', error);
      reject(error);
    });

    req.end();
  });
}

/**
 * 发送通知
 */
function sendNotification(subject, message) {
  console.log(`\n📢 通知: ${subject}`);
  console.log(message);
  
  // 这里可以添加实际的通知逻辑，如发送邮件、Slack消息等
  // 例如使用nodemailer发送邮件
  // const nodemailer = require('nodemailer');
  // const transporter = nodemailer.createTransport({...});
  // transporter.sendMail({...});
}

/**
 * 监控部署状态
 */
async function monitorDeployment(deployment) {
  const deploymentId = deployment.id || deployment.uid; // 支持id或uid字段
  const record = recordNewDeployment(deployment);
  console.log(`开始监控部署: ${deploymentId}`);
  console.log(`部署URL: ${deployment.url}`);
  
  const startTime = Date.now();
  let lastStatus = null;
  let errorCount = 0;
  const maxErrors = 5; // 最大错误次数
  
  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      try {
        const deploymentStatus = await getVercelDeploymentStatus(deploymentId);
        const currentStatus = deploymentStatus.state; // 正确的状态字段是state
        
        // 检查是否超时
        if (Date.now() - startTime > config.monitor.timeout) {
          clearInterval(interval);
          updateDeploymentRecord(deploymentId, DEPLOYMENT_STATUS.ERROR);
          sendNotification('部署超时', `部署 ${deploymentId} 已超时，超过 ${config.monitor.timeout / 1000 / 60} 分钟`);
          resolve(DEPLOYMENT_STATUS.ERROR);
          return;
        }
        
        // 状态变化时更新
        if (currentStatus !== lastStatus) {
          console.log(`部署状态更新: ${currentStatus}`);
          lastStatus = currentStatus;
        }
        
        // 检查部署是否完成
        if (currentStatus === 'READY') {
          clearInterval(interval);
          updateDeploymentRecord(deploymentId, DEPLOYMENT_STATUS.READY);
          const duration = Math.round((Date.now() - startTime) / 1000);
          sendNotification('部署成功', `部署 ${deploymentId} 已成功完成！\n持续时间: ${duration} 秒\n部署URL: ${deployment.url}`);
          resolve(DEPLOYMENT_STATUS.READY);
        } else if (currentStatus === 'ERROR') {
          clearInterval(interval);
          updateDeploymentRecord(deploymentId, DEPLOYMENT_STATUS.ERROR);
          sendNotification('部署失败', `部署 ${deploymentId} 失败！\n错误信息: ${deploymentStatus.error?.message || '未知错误'}`);
          resolve(DEPLOYMENT_STATUS.ERROR);
        }
        
        // 重置错误计数
        errorCount = 0;
      } catch (error) {
        console.error('Error checking deployment status:', error);
        errorCount++;
        
        // 连续错误超过最大次数时停止监控
        if (errorCount >= maxErrors) {
          clearInterval(interval);
          updateDeploymentRecord(deploymentId, DEPLOYMENT_STATUS.ERROR);
          sendNotification('监控错误', `部署 ${deploymentId} 监控过程中出现连续错误，已停止监控`);
          resolve(DEPLOYMENT_STATUS.ERROR);
        }
      }
    }, config.monitor.checkInterval);
  });
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 自动化部署监控系统启动');
  
  // 初始化部署历史记录
  initDeploymentHistory();
  
  try {
    // 获取最新的部署
    const latestDeployment = await getLatestDeployment();
    
    if (latestDeployment) {
      console.log(`找到最新部署: ${latestDeployment.id}`);
      console.log(`部署状态: ${latestDeployment.status}`);
      
      // 只有当部署状态不是READY或ERROR时才开始监控
      if (latestDeployment.status !== 'READY' && latestDeployment.status !== 'ERROR') {
        await monitorDeployment(latestDeployment);
      } else {
        console.log('部署已完成，无需监控');
      }
    } else {
      console.log('未找到部署记录');
    }
  } catch (error) {
    console.error('Error in main function:', error);
    sendNotification('监控系统错误', `监控系统遇到错误: ${error.message}`);
  }
}

// 运行主函数
console.log('=== 部署监控系统启动 ===');
console.log('项目ID:', config.vercel.projectId);
console.log('API Token:', config.vercel.token.substring(0, 10) + '...'); // 只显示前10个字符，保护隐私
main();
