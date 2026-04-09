// 初始化管理员账户
const initAdmin = () => {
  // 设置管理员登录状态
  localStorage.setItem('isLoggedIn', 'true');
  // 设置用户角色为管理员
  localStorage.setItem('userRole', 'admin');
  // 设置当前用户信息
  localStorage.setItem('currentUser', JSON.stringify({
    id: 'admin123',
    name: 'Admin User',
    email: 'admin@example.com'
  }));
  
  console.log('管理员账户已初始化');
  console.log('登录状态:', localStorage.getItem('isLoggedIn'));
  console.log('用户角色:', localStorage.getItem('userRole'));
  console.log('当前用户:', localStorage.getItem('currentUser'));
};

// 执行初始化
initAdmin();

// 提示用户
console.log('\n管理员账户初始化完成！');
console.log('现在可以访问 http://localhost:3000/admin 页面');
