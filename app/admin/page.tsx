'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from './components/AdminSidebar';
import UserManagement from './components/UserManagement';
import FileManagement from './components/FileManagement';
import AdminUpload from './components/AdminUpload';
import AdminDashboard from './components/AdminDashboard';

export default function AdminPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查管理员权限
    const checkAdminStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userRole = localStorage.getItem('userRole');
      
      if (!isLoggedIn) {
        router.push('/login');
        return;
      }
      
      if (userRole !== 'admin') {
        // 如果不是管理员，重定向到普通用户页面
        router.push('/');
        return;
      }
      
      setIsAdmin(true);
      setIsLoading(false);
    };

    checkAdminStatus();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'users':
        return <UserManagement />;
      case 'files':
        return <FileManagement />;
      case 'upload':
        return <AdminUpload />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {activeTab === 'dashboard' && '管理员控制台'}
              {activeTab === 'users' && '用户管理'}
              {activeTab === 'files' && '文件管理'}
              {activeTab === 'upload' && '文件上传'}
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              {activeTab === 'dashboard' && '查看系统概览和统计信息'}
              {activeTab === 'users' && '管理系统用户账户和权限'}
              {activeTab === 'files' && '管理所有用户上传的文件'}
              {activeTab === 'upload' && '上传和管理系统文件'}
            </p>
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
