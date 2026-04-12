import { useState, useCallback } from 'react';

export const useMegaStorage = () => {
  const [megaStorage, setMegaStorage] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAttemptedConnect, setHasAttemptedConnect] = useState(false);

  const connectToMega = useCallback(async (): Promise<boolean> => {
    if (isConnected || isLoading) return isConnected;
    if (hasAttemptedConnect) return false;

    setIsLoading(true);
    setError(null);
    setHasAttemptedConnect(true);

    try {
      console.log('Attempting to connect to Mega (on-demand)...');
      
      const { Storage } = await import('megajs');
      
      const storage = new Storage({
        email: 'thx21092089@gmail.com',
        password: 'aA27745426!'
      });

      await storage.ready;
      setMegaStorage(storage);
      setIsConnected(true);
      console.log('Successfully connected to Mega');
      setIsLoading(false);
      return true;
    } catch (err) {
      console.debug('Mega connection failed (expected in some environments):', (err as Error).message);
      setError(null);
      setIsConnected(false);
      setIsLoading(false);
      return false;
    }
  }, [isConnected, isLoading, hasAttemptedConnect]);

  const uploadFile = async (file: File, onProgress?: (progress: number) => void, abortController?: AbortController): Promise<string | null> => {
    try {
      let connected = isConnected;
      
      if (!connected) {
        connected = await connectToMega();
      }

      if (!connected || !megaStorage) {
        return null;
      }

      // 检查是否已取消
      if (abortController?.signal.aborted) {
        return null;
      }

      const fileName = file.name;
      const fileSize = file.size;

      console.log(`Uploading to Mega: ${fileName} (${fileSize} bytes)`);

      const upload = megaStorage.upload({
        name: fileName,
        size: fileSize
      });

      // 监听取消信号
      if (abortController) {
        abortController.signal.addEventListener('abort', () => {
          console.log('Mega upload cancelled');
          // 尝试取消上传
          upload.abort?.();
        });
      }

      upload.on('progress', (progress: number) => {
        // 检查是否已取消
        if (abortController?.signal.aborted) {
          return;
        }
        console.log(`Mega upload progress: ${Math.round(progress * 100)}%`);
        if (onProgress) {
          onProgress(progress);
        }
      });

      // 检查是否已取消
      if (abortController?.signal.aborted) {
        return null;
      }

      const arrayBuffer = await file.arrayBuffer();
      
      // 检查是否已取消
      if (abortController?.signal.aborted) {
        return null;
      }

      const buffer = Buffer.from(arrayBuffer);
      upload.write(buffer);
      upload.end();

      const uploadedFile = await upload.complete;
      console.log('File uploaded to Mega successfully');
      return uploadedFile.link;
    } catch (err) {
      console.debug('Mega upload failed:', (err as Error).message);
      setError(null);
      return null;
    }
  };

  const downloadFile = async (fileLink: string): Promise<Blob | null> => {
    try {
      if (!isConnected || !megaStorage) {
        return null;
      }

      console.log(`Downloading from Mega: ${fileLink}`);
      const file = megaStorage.file(fileLink);
      const data = await file.downloadBuffer();
      return new Blob([data]);
    } catch (err) {
      console.debug('Mega download failed:', (err as Error).message);
      setError(null);
      return null;
    }
  };

  const deleteFile = async (fileLink: string): Promise<boolean> => {
    try {
      if (!isConnected || !megaStorage) {
        return false;
      }

      console.log(`Deleting from Mega: ${fileLink}`);
      const file = megaStorage.file(fileLink);
      await file.delete();
      console.log('File deleted from Mega successfully');
      return true;
    } catch (err) {
      console.debug('Mega delete failed:', (err as Error).message);
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
    connectToMega
  };
};
