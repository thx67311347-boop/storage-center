'use client';

import React from 'react';

interface DownloadProgressProps {
  isDownloading: boolean;
  progress: number;
  fileName: string;
}

export default function DownloadProgress({ isDownloading, progress, fileName }: DownloadProgressProps) {
  if (!isDownloading) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50 min-w-[300px]">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">下载中: {fileName}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
