'use client';

import React, { useState } from 'react';
import Icon from '../ui/Icon';

interface NavbarProps {
  onSearch: (query: string) => void;
  onClearSearch: () => void;
  searchQuery: string;
  onLogout: () => void;
}

export default function Navbar({ onSearch, onClearSearch, searchQuery, onLogout }: NavbarProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearchQuery);
  };

  const handleClearSearch = () => {
    setLocalSearchQuery('');
    onClearSearch();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-4 md:px-6 shadow-sm">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-2">
              <Icon name="folder" size={24} color="white" />
            </div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Storage Center</h1>
          </div>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="relative flex-1 max-w-md md:max-w-lg">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索文件..."
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="搜索"
                >
                  <Icon name="search" size={18} />
                </button>
                {localSearchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    aria-label="清除搜索"
                  >
                    <Icon name="close" size={18} />
                  </button>
                )}
              </div>
            </form>
          </div>
          <button className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative">
            <Icon name="bell" size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-md">
              U
            </div>
            <button
            onClick={handleLogout}
            className="ml-2 md:ml-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-sm md:text-base shadow-sm transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            登出
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
