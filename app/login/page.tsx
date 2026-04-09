'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 模拟登录请求
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 检查是否是管理员登录
      let userCredentialsStr = localStorage.getItem('userCredentials');
      console.log('userCredentialsStr:', userCredentialsStr);
      
      // 如果用户凭证不存在，自动初始化
      if (!userCredentialsStr) {
        console.log('No userCredentials found, initializing...');
        const defaultCredentials = {
          'admin@example.com': {
            password: btoa('admin123'),
            role: 'admin'
          },
          'user@example.com': {
            password: btoa('user123'),
            role: 'user'
          }
        };
        localStorage.setItem('userCredentials', JSON.stringify(defaultCredentials));
        userCredentialsStr = localStorage.getItem('userCredentials');
        console.log('User credentials initialized:', userCredentialsStr);
      }

      const userCredentials = JSON.parse(userCredentialsStr || '{}');
      console.log('userCredentials:', userCredentials);
      
      const userData = userCredentials[email];
      console.log('userData:', userData);

      if (userData) {
        // 验证密码（使用Base64解码，实际应使用更安全的方式）
        const decodedPassword = atob(userData.password);
        console.log('Decoded password:', decodedPassword);
        console.log('Input password:', password);
        
        if (decodedPassword === password) {
          // 登录成功
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userRole', userData.role);
          localStorage.setItem('currentUser', email);
          
          console.log('Login successful:', {
            email,
            role: userData.role,
            redirect: userData.role === 'admin' ? '/admin' : '/'
          });
          
          // 根据角色重定向
          if (userData.role === 'admin') {
            router.push('/admin');
          } else {
            router.push('/');
          }
          return;
        } else {
          setError('密码错误');
          console.log('Password mismatch');
        }
      } else {
        setError('邮箱不存在');
        console.log('Email not found:', email);
      }

      // 验证用户输入
      console.log('Login attempt:', { email });
      setError('邮箱或密码错误');
      console.log('Login failed:', { email });
    } catch (err) {
      console.error('Login error:', err);
      setError('登录失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900">
      <div className="w-full max-w-md mx-4 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Storage Center</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">登录以访问您的存储空间</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              邮箱
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-base transition-all duration-300"
                placeholder="请输入邮箱"
                required
                autoCapitalize="none"
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              密码
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white text-base transition-all duration-300"
                placeholder="请输入密码"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                aria-label={isPasswordVisible ? '隐藏密码' : '显示密码'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {isPasswordVisible ? (
                    <>
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" y1="2" x2="22" y2="22" />
                    </>
                  ) : (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg animate-fade-in border border-red-200 dark:border-red-800">
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mr-3"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3.5 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center text-base font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {isLoading ? (
              <>
                <svg 
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                登录中...
              </>
            ) : '登录'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="bg-gray-200 dark:bg-gray-700 h-px w-full mb-6 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">
              或
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            请输入您的账号和密码登录
          </p>
        </div>
      </div>
    </div>
  );
}
