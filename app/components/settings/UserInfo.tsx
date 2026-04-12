'use client';

import React, { useState, useEffect } from 'react';

interface UserInfoProps {
  // 可以添加props
}

export default function UserInfo({}: UserInfoProps) {
  const [user, setUser] = useState({
    username: 'user@example.com',
    email: 'user@example.com',
    role: 'user',
    createdAt: '2026-04-10',
    avatar: ''
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [avatarPreview, setAvatarPreview] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // 在客户端渲染时获取localStorage中的用户信息
    if (typeof window !== 'undefined') {
      setUser({
        username: localStorage.getItem('currentUser') || 'user@example.com',
        email: localStorage.getItem('currentUser') || 'user@example.com',
        role: localStorage.getItem('userRole') || 'user',
        createdAt: '2026-04-10',
        avatar: ''
      });
    }
  }, []);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // 模拟上传过程
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarPreview(reader.result as string);
          setEditedUser({ ...editedUser, avatar: reader.result as string });
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleAvatarUpload({ target: { files: [file] } } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    // 模拟保存用户信息
    setUser(editedUser);
    setIsEditing(false);
    // 在实际应用中，这里应该调用API保存用户信息
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setAvatarPreview(user.avatar);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">用户信息</h2>
        
        {/* 头像上传区域 */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 mb-4"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {avatarPreview || user.avatar ? (
              <img 
                src={avatarPreview || user.avatar} 
                alt="用户头像" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            )}
            {isUploading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <label className="cursor-pointer">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleAvatarUpload}
            />
            <span className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
              {isEditing ? '更换头像' : '查看头像'}
            </span>
          </label>
          {isEditing && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              点击或拖拽上传头像
            </p>
          )}
        </div>

        {/* 用户基本信息 */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                用户名
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-900 dark:text-white">
                  {user.username}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                邮箱地址
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleEditChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-900 dark:text-white">
                  {user.email}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                角色
              </label>
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-900 dark:text-white">
                {user.role === 'admin' ? '管理员' : '普通用户'}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                账户创建时间
              </label>
              <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-gray-900 dark:text-white">
                {user.createdAt}
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  保存
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                >
                  取消
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                编辑资料
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
