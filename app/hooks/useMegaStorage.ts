import { useState, useCallback } from 'react';

export const useMegaStorage = () => {
  const [megaStorage, setMegaStorage] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastConnectionTime, setLastConnectionTime] = useState<number>(0);
  
  // 监控和日志状态
  const [uploadStats, setUploadStats] = useState({
    totalUploads: 0,
    successfulUploads: 0,
    failedUploads: 0,
    averageUploadTime: 0,
    totalUploadSize: 0
  });
  const [memoryUsage, setMemoryUsage] = useState<number | null>(null);

  const connectToMega = async (): Promise<boolean> => {
    // 由于我们现在使用本地API，连接将在服务器端处理
    // 这个函数现在只是返回true，表示API可用
    setIsConnected(true);
    setLastConnectionTime(Date.now());
    console.log('Mega API connected (via local API)');
    return true;
  };

  // 验证连接状态
  const validateConnection = async (): Promise<boolean> => {
    // 由于我们现在使用本地API，验证将在服务器端处理
    // 这个函数现在只是返回true，表示API可用
    return true;
  };

  // 上传文件的内部函数
  const uploadFileInternal = async (file: File, onProgress?: (progress: number) => void, abortController?: AbortController): Promise<string | null> => {
    // 检查是否已取消
    if (abortController?.signal.aborted) {
      return null;
    }

    var fileName = file.name;
    var fileSize = file.size;

    console.log(`Uploading to Mega: ${fileName} (${fileSize} bytes)`);

    try {
      // 创建FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName);
      formData.append('fileSize', fileSize.toString());

      // 发送请求到本地API
      const response = await fetch('/api/mega/upload', {
        method: 'POST',
        body: formData,
        signal: abortController?.signal
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log('File uploaded to Mega successfully');
      return result.link;
    } catch (error) {
      console.error('Mega upload failed:', error);
      setError((error as Error).message);
      return null;
    }
  };

  // 监控内存使用情况
  const monitorMemoryUsage = () => {
    if (typeof window !== 'undefined' && (window as any).performance && (window as any).performance.memory) {
      const memory = (window as any).performance.memory;
      const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // MB
      setMemoryUsage(usedMemory);
      console.log(`Memory usage: ${usedMemory.toFixed(2)} MB`);
    }
  };

  const uploadFile = async (file: File, onProgress?: (progress: number) => void, abortController?: AbortController): Promise<string | null> => {
    var MAX_RETRIES = 3;
    var startTime = Date.now();
    
    // 开始监控内存使用
    monitorMemoryUsage();
    
    setUploadStats(prev => ({
      ...prev,
      totalUploads: prev.totalUploads + 1
    }));
    
    for (var retries = 0; retries < MAX_RETRIES; retries++) {
      try {
        console.log(`Upload attempt ${retries + 1}/${MAX_RETRIES}`);
        console.log(`File: ${file.name}, Size: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        
        var result = await uploadFileInternal(file, onProgress, abortController);
        if (result) {
          var endTime = Date.now();
          var uploadTime = (endTime - startTime) / 1000; // 秒
          var uploadSpeed = (file.size / 1024 / 1024) / uploadTime; // MB/s
          
          console.log(`Upload successful in ${uploadTime.toFixed(2)} seconds`);
          console.log(`Upload speed: ${uploadSpeed.toFixed(2)} MB/s`);
          
          // 更新统计信息
          setUploadStats(prev => {
            var newTotalTime = prev.averageUploadTime * prev.successfulUploads + uploadTime;
            var newSuccessfulUploads = prev.successfulUploads + 1;
            return {
              ...prev,
              successfulUploads: newSuccessfulUploads,
              averageUploadTime: newTotalTime / newSuccessfulUploads,
              totalUploadSize: prev.totalUploadSize + file.size
            };
          });
          
          // 再次监控内存使用
          monitorMemoryUsage();
          
          return result;
        }
      } catch (err) {
        console.error(`Mega upload failed (Attempt ${retries + 1}/${MAX_RETRIES}):`, (err as Error).message);
        setError((err as Error).message);
      }
      
      if (retries < MAX_RETRIES - 1) {
        console.log(`Retrying upload in 2 seconds...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.error('Max retries reached, upload failed');
    
    // 更新失败统计
    setUploadStats(prev => ({
      ...prev,
      failedUploads: prev.failedUploads + 1
    }));
    
    // 再次监控内存使用
    monitorMemoryUsage();
    
    return null;
  };

  const downloadFile = async (fileLink: string): Promise<Blob | null> => {
    try {
      console.log(`Downloading from Mega: ${fileLink}`);
      
      // 发送请求到本地API
      const response = await fetch(`/api/mega/download?link=${encodeURIComponent(fileLink)}`);

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      return blob;
    } catch (err) {
      console.error('Mega download failed:', (err as Error).message);
      setError((err as Error).message);
      return null;
    }
  };

  const deleteFile = async (fileLink: string): Promise<boolean> => {
    try {
      console.log(`Deleting from Mega: ${fileLink}`);
      
      // 发送请求到本地API
      const response = await fetch(`/api/mega/delete?link=${encodeURIComponent(fileLink)}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      console.log('File deleted from Mega successfully');
      return true;
    } catch (err) {
      console.error('Mega delete failed:', (err as Error).message);
      setError((err as Error).message);
      return false;
    }
  };

  return {
    megaStorage: null, // 不再需要，所有操作通过本地API处理
    isConnected,
    error,
    isLoading,
    uploadFile,
    downloadFile,
    deleteFile,
    connectToMega,
    validateConnection,
    // 监控和统计信息
    uploadStats,
    memoryUsage,
    monitorMemoryUsage
  };
};
