'use client';

import React from 'react';
import Icon from '../ui/Icon';

interface SidebarProps {
  selectedSection: string;
  onSectionSelect: (section: string) => void;
  onSettingsClick: () => void;
  usedStorage: number;
  totalStorage: number;
}

export default function Sidebar({ selectedSection, onSectionSelect, onSettingsClick, usedStorage, totalStorage }: SidebarProps) {
  const storagePercentage = (usedStorage / totalStorage) * 100;

  const sections = [
    { id: 'all', name: '主页', icon: 'folder' },
    { id: 'recent', name: '最近文件', icon: 'clock' },
    { id: 'images', name: '图片', icon: 'image' },
    { id: 'documents', name: '文档', icon: 'document' },
    { id: 'videos', name: '视频', icon: 'video' },
    { id: 'audio', name: '音频', icon: 'audio' },
    { id: 'shared', name: '共享文件', icon: 'share' },
    { id: 'trash', name: '回收站', icon: 'trash' },
  ];

  const renderIcon = (icon: string) => {
    return <Icon name={icon} size={20} />;
  };

  const settings = () => {
    return <Icon name="settings" size={20} />;
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  return (
    <aside className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col md:w-72 w-20 shadow-sm">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 md:block hidden text-center">存储中心</h2>
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`w-full flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${selectedSection === section.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium shadow-sm' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900'}`}
              title={section.name}
            >
              <span className="text-xl">{renderIcon(section.icon)}</span>
              <span className="md:inline hidden">{section.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="space-y-4">
          <div className="md:block hidden">
            <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              <span>已用存储</span>
              <span className="text-blue-600 dark:text-blue-400">{formatFileSize(usedStorage)} / {formatFileSize(totalStorage)}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-2.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-lg transition-all duration-500 ease-in-out"
                style={{ width: `${Math.min(storagePercentage, 100)}%` }}
              ></div>
            </div>
            <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
              {Math.round(storagePercentage)}% 已使用
            </div>
          </div>
          <button 
            onClick={onSettingsClick}
            className="w-full flex items-center justify-center md:justify-start gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            title="设置"
          >
            <span className="text-xl">{settings()}</span>
            <span className="md:inline hidden">设置</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
