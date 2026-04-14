'use client';

import React, { useRef, useState } from 'react';
import Icon from './ui/Icon';

interface FileUploaderProps {
  onFilesUploaded: (files: File[]) => void;
}

// 分块大小：3MB（小于Vercel的4MB限制）
const CHUNK_SIZE = 3 * 1024 * 1024;
// 请求超时时间：60秒
const REQUEST_TIMEOUT = 60000;
// 最大重试次数
const MAX_RETRIES = 3;

// 生成唯一文件名
const generateUniqueFileName = (originalName: string): string => {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 10);
  const extIndex = originalName.lastIndexOf('.');
  const ext = extIndex > -1 ? originalName.substring(extIndex) : '';
  const baseName = extIndex > -1 ? originalName.substring(0, extIndex) : originalName;
  return baseName + '_' + timestamp + '_' + randomStr + ext;
};

// 带超时的fetch请求
const fetchWithTimeout = (url: string, options: any, timeout: number): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('请求超时'));
    }, timeout);
    
    fetch(url, options)
    .then((response) => {
      clearTimeout(timeoutId);
      resolve(response);
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      reject(error);
    });
  });
};

// 分块上传函数
const uploadFileInChunks = async (file: File, onProgress: (progress: number) => void): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const fileName = generateUniqueFileName(file.name);
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    var uploadedChunks = 0;
    
    try {
      for (var i = 0; i < totalChunks; i++) {
        var retries = 0;
        var uploaded = false;
        
        while (!uploaded && retries < MAX_RETRIES) {
          try {
            // 计算当前分块的起始位置和大小
            var start = i * CHUNK_SIZE;
            var end = Math.min(start + CHUNK_SIZE, file.size);
            var chunk = file.slice(start, end);
            
            // 创建表单数据
            var formData = new FormData();
            formData.append('file', chunk);
            formData.append('chunkIndex', i.toString());
            formData.append('totalChunks', totalChunks.toString());
            formData.append('fileName', fileName);
            formData.append('fileSize', file.size.toString());
            
            // 发送分块到服务器，带超时
            var response = await fetchWithTimeout('/api/upload', {
              method: 'POST',
              body: formData
            }, REQUEST_TIMEOUT);
            
            if (!response.ok) {
              throw new Error(`分块上传失败: ${await response.text()}`);
            }
            
            var result = await response.json();
            
            uploadedChunks++;
            var progress = Math.round((uploadedChunks / totalChunks) * 100);
            onProgress(progress);
            
            // 如果是最后一个分块，返回完整的文件URL
            if (i === totalChunks - 1) {
              if (result.success && result.link) {
                resolve(result.link);
              } else {
                throw new Error('文件上传完成但未返回文件URL');
              }
            }
            
            uploaded = true;
          } catch (error: any) {
            retries++;
            if (retries >= MAX_RETRIES) {
              throw new Error(`分块 ${i + 1} 上传失败，已重试 ${MAX_RETRIES} 次: ${error.message}`);
            }
            console.warn(`分块 ${i + 1} 上传失败，正在重试 (${retries}/${MAX_RETRIES}):`, error);
            // 等待一段时间后重试
            await new Promise(resolve => setTimeout(resolve, 1000 * retries));
          }
        }
      }
    } catch (error) {
      console.error('分块上传失败:', error);
      reject(error);
    }
  });
};

export default function ChunkFileUploader({ onFilesUploaded }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingFileName, setUploadingFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      await processFiles(files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      await processFiles(files);
    }
  };

  const processFiles = async (files: File[]) => {
    setIsUploading(true);
    setUploadProgress(0);
    setErrorMessage(null);
    
    try {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        setUploadingFileName(file.name);
        setUploadProgress(0);
        
        // 执行分块上传，实时更新进度
        await uploadFileInChunks(file, (progress) => {
          setUploadProgress(progress);
        });
        
        await new Promise(resolve => setTimeout(resolve, 500)); // 显示完成状态
      }
      
      // 上传完成后调用回调
      onFilesUploaded(files);
    } catch (error: any) {
      console.error('Error uploading files:', error);
      setErrorMessage(`上传失败: ${error.message}`);
      alert(`文件上传失败: ${error.message}\n请检查网络连接后重试。`);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setUploadingFileName('');
      // 清除错误信息
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  return (
    <div className="inline-block relative">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileSelect}
        data-testid="file-input"
      />
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <button
          onClick={handleClick}
          disabled={isUploading}
          className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 transition-all duration-300 text-sm md:text-base ${isDragging
            ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 border-2 border-dashed'
            : isUploading
            ? 'bg-gray-200 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            : 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'} 
          rounded-md`}
        >
          <Icon name="upload" size={16} />
          <span className="md:inline hidden">上传</span>
          <span className="hidden md:inline">上传文件</span>
        </button>
      </div>
      
      {/* 上传进度条 */}
      {isUploading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 p-3 rounded-md shadow-lg border border-gray-200 dark:border-gray-800 z-10">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{uploadingFileName}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            {errorMessage && (
              <div className="text-sm text-red-600 dark:text-red-400">{errorMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
