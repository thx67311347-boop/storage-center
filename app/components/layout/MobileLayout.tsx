'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Icon from '../ui/Icon';

interface MobileLayoutProps {
  children: React.ReactNode;
  selectedSection: string;
  onSectionSelect: (section: string) => void;
  onSettingsClick: () => void;
  usedStorage: number;
  totalStorage: number;
  onSearch: (query: string) => void;
  onClearSearch: () => void;
  searchQuery: string;
  onLogout: () => void;
  onOpenUserManual?: () => void;
  breadcrumb?: {id: string | null, name: string}[];
  onBreadcrumbClick?: (index: number) => void;
  isMobile: boolean;
}

export default function MobileLayout({
  children,
  selectedSection,
  onSectionSelect,
  onSettingsClick,
  usedStorage,
  totalStorage,
  onSearch,
  onClearSearch,
  searchQuery,
  onLogout,
  onOpenUserManual,
  breadcrumb,
  onBreadcrumbClick,
  isMobile
}: MobileLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const mobileSections = [
    { id: 'all', name: '首页', icon: 'folder' },
    { id: 'recent', name: '最近', icon: 'clock' },
    { id: 'shared', name: '共享', icon: 'share' },
    { id: 'trash', name: '回收站', icon: 'trash' },
  ];

  if (!isMobile) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar
          selectedSection={selectedSection}
          onSectionSelect={onSectionSelect}
          onSettingsClick={onSettingsClick}
          usedStorage={usedStorage}
          totalStorage={totalStorage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar
            onSearch={onSearch}
            onClearSearch={onClearSearch}
            searchQuery={searchQuery}
            onLogout={onLogout}
            onOpenUserManual={onOpenUserManual}
          />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950">
      {/* 顶部导航栏 */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-14 flex items-center px-4 shadow-sm">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-1.5">
              <Icon name="folder" size={20} color="white" />
            </div>
            <h1 className="text-base font-bold text-gray-900 dark:text-white">Storage Center</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Icon name="bell" size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Icon name="help" size={18} className="text-gray-600 dark:text-gray-400" />
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-sm">
              U
            </div>
          </div>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索文件..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <Icon name="search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <Icon name="close" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* 路径导航 */}
      {breadcrumb && onBreadcrumbClick && (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.id || 'root'}>
                <button
                  onClick={() => onBreadcrumbClick(index)}
                  className={`text-sm whitespace-nowrap ${index === breadcrumb.length - 1 ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {item.name}
                </button>
                {index < breadcrumb.length - 1 && (
                  <Icon name="sort" size={14} className="text-gray-400 flex-shrink-0 transform rotate-90" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* 主内容 */}
      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>

      {/* 底部导航栏 */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-2 px-4">
        <div className="flex justify-around items-center">
          {mobileSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 transition-all duration-300 ${selectedSection === section.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <Icon name={section.icon} size={22} />
              <span className="text-xs font-medium">{section.name}</span>
            </button>
          ))}
          <button
            onClick={onSettingsClick}
            className="flex flex-col items-center gap-1 py-2 px-4 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Icon name="settings" size={22} />
            <span className="text-xs font-medium">设置</span>
          </button>
        </div>
      </div>

      {/* 浮动操作按钮 */}
      <button
        onClick={() => document.getElementById('file-upload-input')?.click()}
        className="fixed right-6 bottom-24 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
      >
        <Icon name="plus" size={24} />
      </button>
    </div>
  );
}
