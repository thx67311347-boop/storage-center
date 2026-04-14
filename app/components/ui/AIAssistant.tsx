'use client';

import React, { useState } from 'react';
import { FileItem } from '../../types';

interface AIAssistantProps {
  files: FileItem[];
  onFileSearch?: (query: string) => void;
  onFileOrganize?: (files: FileItem[]) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function AIAssistant({ 
  files, 
  onFileSearch, 
  onFileOrganize, 
  isVisible, 
  onClose 
}: AIAssistantProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [organizeLoading, setOrganizeLoading] = useState(false);
  const [organizeResult, setOrganizeResult] = useState<string>('');

  if (!isVisible) {
    return null;
  }

  const handleSearch = () => {
    if (query.trim() && onFileSearch) {
      setLoading(true);
      // 模拟AI搜索处理
      setTimeout(() => {
        onFileSearch(query);
        setLoading(false);
      }, 1000);
    }
  };

  const handleOrganize = () => {
    if (files.length > 0 && onFileOrganize) {
      setOrganizeLoading(true);
      // 模拟AI整理处理
      setTimeout(() => {
        // 这里可以添加实际的文件整理逻辑
        setOrganizeResult(`已整理 ${files.length} 个文件，按照类型和日期排序`);
        onFileOrganize(files);
        setOrganizeLoading(false);
      }, 1500);
    }
  };

  const generateSuggestions = () => {
    const commonQueries = [
      '最近上传的文件',
      '图片文件',
      '文档文件',
      '视频文件',
      '音频文件',
      '大文件',
      '共享文件'
    ];
    setSuggestions(commonQueries);
  };

  React.useEffect(() => {
    generateSuggestions();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] flex flex-col">
        {/* 顶部栏 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI 智能助手</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-auto p-4">
          {/* 搜索辅助 */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">文件搜索</h4>
            <div className="relative">
              <input
                type="text"
                placeholder="输入搜索关键词..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <button
                onClick={handleSearch}
                disabled={loading || !query.trim()}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : '搜索'}
              </button>
            </div>
            <div className="mt-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">推荐搜索：</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 文件整理 */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">文件整理</h4>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                AI 助手可以帮助你整理文件，按照类型、日期或大小进行分类和排序。
              </p>
              <button
                onClick={handleOrganize}
                disabled={organizeLoading || files.length === 0}
                className="w-full py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {organizeLoading ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
                    <path d="M12 12v-6" />
                    <path d="M9 9h6" />
                  </svg>
                )}
                {organizeLoading ? '整理中...' : '智能整理文件'}
              </button>
              {organizeResult && (
                <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm">
                  {organizeResult}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部提示 */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            AI 智能助手可以帮助你更高效地管理文件
          </p>
        </div>
      </div>
    </div>
  );
}
