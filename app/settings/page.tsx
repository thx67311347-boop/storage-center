'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MobileLayout from '../components/layout/MobileLayout';
import Breadcrumb from '../components/layout/Breadcrumb';
import UserInfo from '../components/settings/UserInfo';
import PasswordChange from '../components/settings/PasswordChange';
import LoginHistory from '../components/settings/LoginHistory';
import SecuritySettings from '../components/settings/SecuritySettings';
import PrivacySettings from '../components/settings/PrivacySettings';
import StorageManager from '../components/settings/StorageManager';

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('userInfo');
  const [usedStorage, setUsedStorage] = useState(1024 * 1024 * 1024); // 1GB
  const [totalStorage, setTotalStorage] = useState(5 * 1024 * 1024 * 1024); // 5GB

  const handleSectionSelect = (section: string) => {
    // 处理侧边栏选择
  };

  const handleSettingsClick = () => {
    // 处理设置按钮点击
  };

  const handleSearch = (query: string) => {
    // 处理搜索
  };

  const handleClearSearch = () => {
    // 清除搜索
  };

  const handleLogout = () => {
    // 清除登录状态
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('currentUser');
    // 重定向到登录页面
    router.push('/login');
  };

  const breadcrumb = [
    { id: 'root', name: '主页' },
    { id: 'settings', name: '设置' }
  ];

  const handleBreadcrumbClick = (index: number) => {
    if (index === 0) {
      router.push('/');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'userInfo':
        return <UserInfo />;
      case 'password':
        return <PasswordChange />;
      case 'loginHistory':
        return <LoginHistory />;
      case 'security':
        return <SecuritySettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'storage':
        return <StorageManager />;
      default:
        return <UserInfo />;
    }
  };

  return (
    <MobileLayout
      selectedSection="settings"
      onSectionSelect={handleSectionSelect}
      onSettingsClick={handleSettingsClick}
      usedStorage={usedStorage}
      totalStorage={totalStorage}
      onSearch={handleSearch}
      onClearSearch={handleClearSearch}
      searchQuery=""
      onLogout={handleLogout}
      breadcrumb={breadcrumb}
      onBreadcrumbClick={handleBreadcrumbClick}
      isMobile={false}
    >
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <Breadcrumb items={breadcrumb} onItemClick={handleBreadcrumbClick} />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-6">设置</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* 左侧设置菜单 */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('userInfo')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'userInfo' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>用户信息</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('password')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'password' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>密码修改</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('loginHistory')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'loginHistory' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>登录历史</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'security' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>安全设置</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'privacy' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span>隐私设置</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('storage')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${activeTab === 'storage' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <span>存储管理</span>
                  </button>
                </nav>
              </div>
            </div>
            
            {/* 右侧设置内容 */}
            <div className="flex-1">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
