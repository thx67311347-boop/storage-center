// 初始化用户凭证
const initCredentials = () => {
  // 准备用户数据
  const userCredentials = {
    'admin@example.com': {
      password: btoa('admin123'), // Base64编码密码
      role: 'admin'
    },
    'user@example.com': {
      password: btoa('user123'), // Base64编码密码
      role: 'user'
    }
  };

  // 保存到localStorage
  localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
  
  console.log('用户凭证已初始化');
  console.log('管理员账号: admin@example.com');
  console.log('管理员密码: admin123');
  console.log('普通用户账号: user@example.com');
  console.log('普通用户密码: user123');
};

// 执行初始化
initCredentials();

// 提示用户
console.log('\n用户凭证初始化完成！');
console.log('现在可以使用以下账号登录：');
console.log('管理员: admin@example.com / admin123');
console.log('普通用户: user@example.com / user123');
