'use client';

import React from 'react';

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
    { id: 'documents', name: '文档', icon: 'file-text' },
    { id: 'videos', name: '视频', icon: 'video' },
    { id: 'audio', name: '音频', icon: 'music' },
    { id: 'shared', name: '共享文件', icon: 'share-2' },
    { id: 'trash', name: '回收站', icon: 'trash-2' },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'folder':
        return <span className="text-lg">📁</span>;
      case 'clock':
        return <span className="text-lg">🕒</span>;
      case 'image':
        return <span className="text-lg">📷</span>;
      case 'file-text':
        return <span className="text-lg">📄</span>;
      case 'video':
        return <span className="text-lg">🎬</span>;
      case 'music':
        return <span className="text-lg">🎵</span>;
      case 'share-2':
        return <span className="text-lg">📤</span>;
      case 'trash-2':
        return <span className="text-lg">🗑️</span>;
      default:
        return <span className="text-lg">📁</span>;
    }
  };

  const settings = () => {
    return <span className="text-lg">⚙️</span>;
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  return (
    <aside className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-full flex flex-col md:w-72 w-20">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 md:block hidden text-center">存储中心</h2>
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`w-full flex items-center justify-center md:justify-start gap-3 px-3 py-3 rounded-lg transition-colors ${selectedSection === section.id ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              title={section.name}
            >
              {renderIcon(section.icon)}
              <span className="md:inline hidden">{section.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="space-y-3">
          <div className="md:block hidden">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
              <span>已用存储</span>
              <span>{formatFileSize(usedStorage)} / {formatFileSize(totalStorage)}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${Math.min(storagePercentage, 100)}%` }}
              ></div>
            </div>
          </div>
          <button 
            onClick={onSettingsClick}
            className="w-full flex items-center justify-center md:justify-start gap-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="设置"
          >
            {settings()}
            <span className="md:inline hidden">设置</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
