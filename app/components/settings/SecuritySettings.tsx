'use client';

import React, { useState, useEffect } from 'react';

interface SecuritySettingsProps {
  // 可以添加props
}

export default function SecuritySettings({}: SecuritySettingsProps) {
  const [securityStatus, setSecurityStatus] = useState({
    score: 75,
    level: '中等',
    color: 'text-yellow-500',
    recommendations: [
      '启用两步验证',
      '设置更复杂的密码',
      '定期更换密码'
    ]
  });
  
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 模拟从服务器获取安全状态
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleTwoFactorToggle = () => {
    setIsLoading(true);
    // 模拟启用/禁用两步验证
    setTimeout(() => {
      setTwoFactorEnabled(!twoFactorEnabled);
      setIsLoading(false);
      // 更新安全状态
      if (!twoFactorEnabled) {
        setSecurityStatus({
          score: 90,
          level: '高',
          color: 'text-green-500',
          recommendations: [
            '设置更复杂的密码',
            '定期更换密码'
          ]
        });
      } else {
        setSecurityStatus({
          score: 75,
          level: '中等',
          color: 'text-yellow-500',
          recommendations: [
            '启用两步验证',
            '设置更复杂的密码',
            '定期更换密码'
          ]
        });
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">安全设置</h2>
        
        {/* 安全状态卡片 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">账户安全状态</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">安全等级</div>
                <div className={`text-2xl font-bold ${securityStatus.color}`}>
                  {securityStatus.level}
                </div>
              </div>
              <div className="flex-1 md:max-w-md">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>安全分数</span>
                  <span>{securityStatus.score}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full transition-all duration-500 ${securityStatus.score >= 80 ? 'bg-green-500' : securityStatus.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${securityStatus.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">安全建议</h4>
              <ul className="space-y-2">
                {securityStatus.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mt-0.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 两步验证设置 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">两步验证</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">启用两步验证</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  启用后，登录时需要输入密码和验证码，提高账户安全性
                </p>
              </div>
              <button
                onClick={handleTwoFactorToggle}
                disabled={isLoading}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactorEnabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              >
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <span 
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-5' : 'translate-x-1'}`}
                ></span>
              </button>
            </div>
            
            {twoFactorEnabled && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p className="text-xs text-blue-700 dark:text-blue-400">
                    两步验证已启用。请使用您的验证器应用（如 Google Authenticator）扫描二维码并输入验证码。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 登录设备管理 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">登录设备管理</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Windows 10 - Chrome</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      上次登录：2026-04-13 12:45:30
                    </p>
                  </div>
                </div>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  当前设备
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-400">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">MacOS - Safari</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      上次登录：2026-04-12 18:23:45
                    </p>
                  </div>
                </div>
                <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                  登出
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-400">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">iOS - Safari Mobile</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      上次登录：2026-04-11 09:12:15
                    </p>
                  </div>
                </div>
                <button className="text-sm text-red-600 dark:text-red-400 hover:underline">
                  登出
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 安全日志 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">安全日志</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">登录成功</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    2026-04-13 12:45:30 - 从 IP 192.168.1.100 登录
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-400">
                    <path d="M12 9v2m0 4h.01" />
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">密码修改</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    2026-04-12 18:23:45 - 密码修改成功
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 dark:text-red-400">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">登录失败</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    2026-04-11 09:12:15 - 密码错误，从 IP 192.168.1.101 尝试登录
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                查看全部安全日志
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
