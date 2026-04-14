'use client';

import React from 'react';
import { formatStorageSize } from '../../lib/storage-utils.js';
import { useStorageStatus } from '../../hooks/useStorageStatus';

export default function StorageInfo() {
  const { storageStatus, loading, error } = useStorageStatus();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
            <div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !storageStatus) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <div className="text-center py-8">
          <p className="text-red-600 dark:text-red-400 mb-2">获取存储信息失败</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{error || '请稍后重试'}</p>
        </div>
      </div>
    );
  }

  const { localStorage, cloudStorage } = storageStatus;
  const localUsagePercentage = parseFloat(localStorage.usagePercentage);
  const cloudUsagePercentage = parseFloat(cloudStorage.usagePercentage);

  const getUsageColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-red-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 本地存储信息 */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">本地存储</h3>
          {localUsagePercentage >= 80 && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-0.5 rounded">
              存储空间不足
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">已用存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(localStorage.used)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">总存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(localStorage.total)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">剩余存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(localStorage.available)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">文件数量</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {localStorage.fileCount}
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              <span>存储空间使用率</span>
              <span>{localStorage.usagePercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-2.5 overflow-hidden">
              <div 
                className={`h-full rounded-lg transition-all duration-500 ease-in-out ${getUsageColor(localUsagePercentage)}`}
                style={{ width: `${Math.min(localUsagePercentage, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* 云存储信息 */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">云存储</h3>
          {cloudUsagePercentage >= 80 && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium px-2.5 py-0.5 rounded">
              存储空间不足
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">已用存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(cloudStorage.used)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">总存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(cloudStorage.total)}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">剩余存储空间</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {formatStorageSize(cloudStorage.available)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              <span>存储空间使用率</span>
              <span>{cloudStorage.usagePercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg h-2.5 overflow-hidden">
              <div 
                className={`h-full rounded-lg transition-all duration-500 ease-in-out ${getUsageColor(cloudUsagePercentage)}`}
                style={{ width: `${Math.min(cloudUsagePercentage, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
