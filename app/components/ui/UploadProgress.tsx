'use client';

import React from 'react';

interface UploadProgressProps {
  isUploading: boolean;
  progress: number;
  fileName: string;
  onCancelUpload: () => void;
  remainingTime: string;
  isTimeout: boolean;
  error: string | null;
}

export default function UploadProgress({ 
  isUploading, 
  progress, 
  fileName, 
  onCancelUpload,
  remainingTime,
  isTimeout,
  error
}: UploadProgressProps) {
  if (!isUploading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50 min-w-[400px] max-w-[80vw]">
      <div className="flex flex-col gap-3">
        {/* 标题和操作 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isTimeout ? '上传超时' : error ? '上传失败' : '上传中'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {fileName}
              </p>
            </div>
          </div>
          <button
            onClick={onCancelUpload}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            取消
          </button>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {isTimeout && (
          <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>上传超时，请检查网络连接后重试</span>
          </div>
        )}

        {/* 进度条 */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">进度</span>
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{progress}%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">剩余: {remainingTime}</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ 
                width: `${progress}%`,
                backgroundImage: 'linear-gradient(90deg, #8b5cf6, #a78bfa)'
              }}
            >
              <div className="w-full h-full bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* 状态信息 */}
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <span>正在处理您的文件，请耐心等待</span>
          <span>若上传时间过长，可尝试取消后重新上传</span>
        </div>
      </div>
    </div>
  );
}
