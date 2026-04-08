#!/usr/bin/env node

/**
 * 初始化管理员账号脚本
 * 用于在系统首次运行时创建管理员账号
 */

const fs = require('fs');
const path = require('path');

// 检查是否已经初始化
const checkInitStatus = () => {
  return fs.existsSync(path.join(__dirname, '../admin-initialized.txt'));
};

// 初始化管理员账号
const initAdmin = () => {
  console.log('初始化管理员账号...');

  // 检查是否已经初始化
  if (checkInitStatus()) {
    console.log('管理员账号已经初始化，跳过操作');
    return;
  }

  // 创建管理员用户数据
  const adminUser = {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    createdAt: new Date().toISOString(),
    lastLogin: null,
  };

  // 创建用户凭证（密码：admin123，使用Base64编码）
  const userCredentials = {
    'admin@example.com': {
      password: Buffer.from('admin123').toString('base64'),
      role: 'admin',
    },
  };

  // 保存用户数据
  fs.writeFileSync(
    path.join(__dirname, '../admin-initialized.txt'),
    'Admin account initialized on ' + new Date().toISOString()
  );

  console.log('管理员账号初始化完成！');
  console.log('账号：admin@example.com');
  console.log('密码：admin123');
  console.log('请登录后立即修改密码');
};

// 运行初始化
initAdmin();
