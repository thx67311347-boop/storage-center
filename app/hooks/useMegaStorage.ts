import { useState, useCallback } from 'react';
import { Storage } from 'megajs';

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

  // 获取MEGA会话密钥
  const getMegaSession = async (): Promise<string | null> => {
    try {
      console.log('🔄 开始获取MEGA会话密钥...');
      const response = await fetch('/api/mega/session');
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ 会话API请求失败:', response.status, errorText);
        throw new Error(`Failed to get session: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('📋 会话API响应:', data);
      
      // 支持两种返回格式：sessionId 或 sid
      const sessionId = data.sessionId || data.sid;
      
      if (sessionId) {
        console.log('✅ 获取MEGA会话密钥成功:', sessionId.substring(0, 10) + '...');
        return sessionId;
      } else {
        console.error('❌ 会话API未返回有效的会话密钥:', data);
        return null;
      }
    } catch (error) {
      console.error('❌ 获取MEGA会话密钥失败:', error);
      setError((error as Error).message);
      return null;
    }
  };

  const connectToMega = async (): Promise<boolean> => {
    try {
      console.log('🔄 开始连接到 MEGA...');
      const sessionId = await getMegaSession();
      
      if (sessionId) {
        console.log('🔑 使用会话密钥连接 MEGA...');
        // @ts-ignore - sessionID is the correct property for megajs storage initialization
        const storage = new Storage({ sessionID: sessionId });
        
        console.log('⏳ 等待 MEGA 连接就绪...');
        await storage.ready;
        
        console.log('✅ MEGA 连接成功！');
        setMegaStorage(storage);
        setIsConnected(true);
        setLastConnectionTime(Date.now());
        console.log('✅ Mega API connected (via client-side)');
        return true;
      } else {
        console.error('❌ 无法获取有效的会话密钥');
        return false;
      }
    } catch (error: any) {
      console.error('❌ Mega连接失败:', error);
      console.error('错误代码:', error.code);
      console.error('错误堆栈:', error.stack);
      setError(error.message || '连接 MEGA 失败');
      return false;
    }
  };

  // 验证连接状态
  const validateConnection = async (): Promise<boolean> => {
    console.log('🔍 验证 MEGA 连接状态...');
    console.log('当前连接状态:', isConnected);
    console.log('当前存储实例:', megaStorage ? '存在' : '不存在');
    
    if (!isConnected || !megaStorage) {
      console.log('⚠️ 连接状态无效，尝试重新连接...');
      return await connectToMega();
    }
    console.log('✅ 连接状态有效');
    return true;
  };

  // 上传文件的内部函数（客户端直传）
  const uploadFileInternal = async (file: File, onProgress?: (progress: number) => void, abortController?: AbortController): Promise<{success: boolean, link: string | null} | null> => {
    // 检查是否已取消
    if (abortController?.signal.aborted) {
      return null;
    }

    var fileName = file.name;
    var fileSize = file.size;

    console.log(`Uploading to Mega: ${fileName} (${fileSize} bytes)`);

    try {
      // 确保已连接
      const connected = await validateConnection();
      if (!connected) {
        throw new Error('Not connected to MEGA');
      }

      // 直接上传到MEGA - 直接传递File对象，让megajs处理流式上传
      console.log('⬆️ 开始客户端直传...');
      const upload = megaStorage.upload({
        name: fileName,
        size: fileSize
      }, file);

      // 监听进度
      if (onProgress) {
        upload.on('progress', (stats: any) => {
          const progress = Math.round((stats.bytesLoaded / fileSize) * 100);
          console.log(`上传进度: ${progress}%`);
          onProgress(progress);
        });
      }

      // 监听错误
      upload.on('error', (error: any) => {
        console.error('上传流错误:', error);
        setError(error.message || '上传流错误');
      });

      // 等待上传完成
      const result = await upload.complete;
      console.log('✅ 上传成功，文件ID:', result.fileId);

      // 生成分享链接
      const link = `https://mega.nz/file/${result.fileId}#${result.key.toString('base64url')}`;
      console.log('分享链接:', link);

      return { success: true, link: link };
    } catch (error: any) {
      console.error('Mega upload failed:', error);
      console.error('错误代码:', error.code);
      console.error('错误堆栈:', error.stack);
      const errorMessage = error.message || '上传失败，请重试';
      setError(errorMessage);
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

  const uploadFile = async (file: File, onProgress?: (progress: number) => void, abortController?: AbortController): Promise<{success: boolean, link: string | null} | null> => {
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
        
        // 包装 onProgress 函数，确保进度值正确
        const wrappedOnProgress = onProgress ? (progress: number) => {
          console.log(`Upload progress callback: ${progress}%`);
          onProgress(progress);
        } : undefined;
        
        var result = await uploadFileInternal(file, wrappedOnProgress, abortController);
        if (result && result.success) {
          var endTime = Date.now();
          var uploadTime = (endTime - startTime) / 1000; // 秒
          var uploadSpeed = (file.size / 1024 / 1024) / uploadTime; // MB/s
          
          console.log(`Upload successful in ${uploadTime.toFixed(2)} seconds`);
          console.log(`Upload speed: ${uploadSpeed.toFixed(2)} MB/s`);
          console.log(`Upload result:`, result);
          
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
        } else {
          console.warn(`Upload attempt ${retries + 1} returned null or unsuccessful result`);
        }
      } catch (err: any) {
        console.error(`Mega upload failed (Attempt ${retries + 1}/${MAX_RETRIES}):`, err.message);
        console.error(`Error code:`, err.code);
        setError(err.message || '上传失败');
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
      
      // 确保已连接
      const connected = await validateConnection();
      if (!connected) {
        throw new Error('Not connected to MEGA');
      }

      // 直接从MEGA下载
      // @ts-ignore - megajs类型定义不完整
      const file = megaStorage.file(fileLink);
      const buffer = await file.downloadBuffer();
      const blob = new Blob([buffer]);
      
      console.log('✅ 下载成功');
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
      
      // 确保已连接
      const connected = await validateConnection();
      if (!connected) {
        throw new Error('Not connected to MEGA');
      }

      // 直接从MEGA删除
      // @ts-ignore - megajs类型定义不完整
      const file = megaStorage.file(fileLink);
      await file.delete();
      
      console.log('✅ 删除成功');
      return true;
    } catch (err) {
      console.error('Mega delete failed:', (err as Error).message);
      setError((err as Error).message);
      return false;
    }
  };

  return {
    megaStorage,
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
