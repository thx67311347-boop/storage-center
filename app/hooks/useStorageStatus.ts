'use client';

import { useState, useEffect } from 'react';

interface StorageStatus {
  localStorage: {
    total: number;
    used: number;
    available: number;
    usagePercentage: string;
    fileCount: number;
  };
  cloudStorage: {
    total: number;
    used: number;
    available: number;
    usagePercentage: string;
  };
  files: Array<{name: string; size: number; lastModified: number}>;
}

export const useStorageStatus = () => {
  const [storageStatus, setStorageStatus] = useState<StorageStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取存储状态
  const fetchStorageStatus = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/storage');
      
      if (!response.ok) {
        throw new Error('获取存储信息失败');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setStorageStatus({
          localStorage: data.localStorage,
          cloudStorage: data.cloudStorage,
          files: data.files
        });
      } else {
        throw new Error(data.error || '获取存储信息失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '获取存储信息失败');
      console.error('获取存储状态失败:', err);
    } finally {
      setLoading(false);
    }
  };

  // 初始加载
  useEffect(() => {
    fetchStorageStatus();
  }, []);

  // 每30秒自动刷新
  useEffect(() => {
    const intervalId = setInterval(fetchStorageStatus, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    storageStatus,
    loading,
    error,
    refreshStorageStatus: fetchStorageStatus
  };
};