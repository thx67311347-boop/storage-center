// 认证服务

// 模拟用户数据
interface User {
  password: string;
  role: string;
}

const users: Record<string, User> = {
  'admin@example.com': {
    password: 'admin123', // 实际应用中应该存储哈希后的密码
    role: 'admin'
  },
  'user@example.com': {
    password: 'user123',
    role: 'user'
  }
};

// 生成JWT token（模拟）
const generateToken = (email: string, role: string): string => {
  // 实际应用中应该使用真实的JWT库
  const payload = {
    email,
    role,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24小时过期
    iat: Date.now()
  };
  return btoa(JSON.stringify(payload));
};

// 验证JWT token（模拟）
const verifyToken = (token: string): any => {
  try {
    const payload = JSON.parse(atob(token));
    if (payload.exp < Date.now()) {
      return null;
    }
    return payload;
  } catch (error) {
    return null;
  }
};

// 认证服务对象
export const authService = {
  // 登录
  async login(email: string, password: string) {
    const lowerCaseEmail = email.toLowerCase();
    const user = users[lowerCaseEmail];
    
    if (!user) {
      throw new Error('邮箱不存在');
    }
    
    if (user.password !== password) {
      throw new Error('密码错误');
    }
    
    const token = generateToken(lowerCaseEmail, user.role);
    
    // 存储认证信息
    localStorage.setItem('authToken', token);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', user.role);
    localStorage.setItem('currentUser', lowerCaseEmail);
    
    return {
      email: lowerCaseEmail,
      role: user.role,
      token
    };
  },
  
  // 登出
  logout() {
    // 清除认证信息
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
  },
  
  // 检查登录状态
  checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return false;
    }
    
    const payload = verifyToken(token);
    if (!payload) {
      // token过期，清除认证信息
      this.logout();
      return false;
    }
    
    return true;
  },
  
  // 获取当前用户
  getCurrentUser() {
    if (!this.checkAuth()) {
      return null;
    }
    
    const email = localStorage.getItem('currentUser');
    const role = localStorage.getItem('userRole');
    
    return {
      email,
      role
    };
  },
  
  // 检查用户角色
  hasRole(role: string) {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.role === role;
  }
};
