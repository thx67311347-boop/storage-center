import React, { useState } from 'react';
import { useFileStorage } from '../../hooks/useFileStorage';
import { useStorageStatus } from '../../hooks/useStorageStatus';
import StorageInfo from '../ui/StorageInfo';

export default function StorageManager() {
  const { cleanupStorageCenterData } = useFileStorage();
  const { storageStatus, loading, error, refreshStorageStatus } = useStorageStatus();
  const [isCleaning, setIsCleaning] = useState(false);
  
  // 清理存储数据
  const handleCleanup = async () => {
    if (typeof window === 'undefined') return;
    
    if (confirm('确定要清理所有Storage Center数据吗？这将删除所有上传的文件和文件夹。')) {
      setIsCleaning(true);
      try {
        cleanupStorageCenterData();
        await refreshStorageStatus();
        alert('存储数据已清理完成！');
      } catch (error) {
        console.error('Error cleaning up storage:', error);
        alert('清理失败，请检查控制台错误信息。');
      } finally {
        setIsCleaning(false);
      }
    }
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">存储管理</h2>
        <button
          onClick={refreshStorageStatus}
          disabled={loading}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '刷新中...' : '刷新'}
        </button>
      </div>
      
      {/* 存储信息概览 */}
      <div className="mb-8">
        <StorageInfo />
      </div>
      
      {/* 清理按钮 */}
      <div className="mt-6">
        <button
          onClick={handleCleanup}
          disabled={isCleaning}
          className={`w-full px-4 py-2 font-medium rounded-md transition-colors ${isCleaning ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'}`}
        >
          {isCleaning ? '清理中...' : '清理Storage Center数据'}
        </button>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          此操作将删除所有上传的文件和文件夹，不可恢复。
        </p>
      </div>
      
      {/* 存储建议 */}
      <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
          存储建议
        </h3>
        <ul className="text-xs text-blue-700 dark:text-blue-400 space-y-1">
          <li>• 定期清理不需要的文件以释放存储空间</li>
          <li>• 大文件（&gt; 5MB）会自动存储到本地服务器</li>
          <li>• 小文件（≤ 5MB）会存储到云存储服务</li>
          <li>• 当存储空间使用率超过80%时，系统会显示警告</li>
        </ul>
      </div>
    </div>
  );
}
