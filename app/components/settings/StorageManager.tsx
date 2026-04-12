import React, { useState, useEffect } from 'react';
import { useFileStorage } from '../../hooks/useFileStorage';

export default function StorageManager() {
  const { getStorageUsage, cleanupStorageCenterData } = useFileStorage();
  const [storageUsage, setStorageUsage] = useState<{
    total: number;
    used: number;
    storageCenterUsed: number;
    storageCenterKeys: Array<{key: string; size: number}>
  }>({
    total: 5 * 1024 * 1024 * 1024,
    used: 0,
    storageCenterUsed: 0,
    storageCenterKeys: []
  });

  useEffect(() => {
    // 在客户端渲染时获取存储使用情况
    if (typeof window !== 'undefined') {
      setStorageUsage(getStorageUsage());
    }
  }, []);
  const [isCleaning, setIsCleaning] = useState(false);
  
  // 刷新存储使用情况
  const refreshStorageUsage = () => {
    if (typeof window !== 'undefined') {
      setStorageUsage(getStorageUsage());
    }
  };
  
  // 清理存储数据
  const handleCleanup = async () => {
    if (typeof window === 'undefined') return;
    
    if (confirm('确定要清理所有Storage Center数据吗？这将删除所有上传的文件和文件夹。')) {
      setIsCleaning(true);
      try {
        cleanupStorageCenterData();
        refreshStorageUsage();
        alert('存储数据已清理完成！');
      } catch (error) {
        console.error('Error cleaning up storage:', error);
        alert('清理失败，请检查控制台错误信息。');
      } finally {
        setIsCleaning(false);
      }
    }
  };
  
  // 格式化存储大小
  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  // 计算存储使用百分比
  const usagePercentage = (storageUsage.used / storageUsage.total) * 100;
  const storageCenterPercentage = (storageUsage.storageCenterUsed / storageUsage.total) * 100;
  
  // 获取存储状态
  const getStorageStatus = () => {
    if (usagePercentage > 90) return { status: 'critical', message: '存储空间严重不足', color: 'bg-red-500' };
    if (usagePercentage > 70) return { status: 'warning', message: '存储空间不足', color: 'bg-yellow-500' };
    if (usagePercentage > 50) return { status: 'info', message: '存储空间使用中等', color: 'bg-blue-500' };
    return { status: 'good', message: '存储空间充足', color: 'bg-green-500' };
  };
  
  const storageStatus = getStorageStatus();
  
  // 按大小排序存储项目
  const sortedStorageKeys = [...storageUsage.storageCenterKeys].sort((a, b) => b.size - a.size);
  
  // 计算大文件数量
  const largeFiles = sortedStorageKeys.filter(item => item.size > 1024 * 1024); // 大于1MB
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">存储管理</h2>
        <button
          onClick={refreshStorageUsage}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          刷新
        </button>
      </div>
      
      {/* 存储状态 */}
      <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            存储状态
          </span>
          <span className={`text-sm font-medium ${storageStatus.status === 'critical' ? 'text-red-600 dark:text-red-400' : storageStatus.status === 'warning' ? 'text-yellow-600 dark:text-yellow-400' : 'text-green-600 dark:text-green-400'}`}>
            {storageStatus.message}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${storageStatus.color}`}
            style={{ width: `${Math.min(usagePercentage, 100)}%` }}
          ></div>
        </div>
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          使用了 {usagePercentage.toFixed(1)}% 的存储空间 ({formatSize(storageUsage.used)} / {formatSize(storageUsage.total)})
        </div>
      </div>
      
      {/* 存储使用情况 */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Storage Center 使用
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {formatSize(storageUsage.storageCenterUsed)} ({storageCenterPercentage.toFixed(1)}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full bg-blue-500"
              style={{ width: `${Math.min(storageCenterPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {/* 大文件警告 */}
        {largeFiles.length > 0 && (
          <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center">
              <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                发现 {largeFiles.length} 个大文件（&gt; 1MB），可能影响存储性能
              </span>
            </div>
          </div>
        )}
        
        {/* 存储项目列表 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            存储项目 ({sortedStorageKeys.length})
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {sortedStorageKeys.length > 0 ? (
              sortedStorageKeys.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                  <span className="text-gray-600 dark:text-gray-400 truncate max-w-xs">
                    {item.key}
                  </span>
                  <span className={`text-sm font-medium ${item.size > 1024 * 1024 ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-500 dark:text-gray-500'}`}>
                    {formatSize(item.size)}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 py-4">
                没有Storage Center存储项目
              </div>
            )}
          </div>
        </div>
        
        {/* 清理按钮 */}
        <div className="mt-8">
          <button
            onClick={handleCleanup}
            disabled={isCleaning || sortedStorageKeys.length === 0}
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
            <li>• 避免上传超过1MB的大文件</li>
            <li>• 考虑使用外部存储服务存储大文件</li>
            <li>• 浏览器localStorage容量通常为5MB，请合理使用</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
