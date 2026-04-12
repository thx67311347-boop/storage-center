'use client';

import React, { useRef, useState } from 'react';
import Icon from './ui/Icon';

interface FileUploaderProps {
  onFilesUploaded: (files: File[]) => void;
}

// 分块大小：5MB
const CHUNK_SIZE = 5 * 1024 * 1024;

// 分块上传函数
const uploadFileInChunks = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 模拟分块上传过程
    // 在实际应用中，这里应该调用后端API进行分块上传
    setTimeout(() => {
      // 创建文件对象URL用于本地预览
      const fileUrl = URL.createObjectURL(file);
      resolve(fileUrl);
    }, 1000);
  });
};

export default function ChunkFileUploader({ onFilesUploaded }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingFileName, setUploadingFileName] = useState('');

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
    
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setUploadingFileName(file.name);
        
        // 模拟上传进度
        for (let progress = 0; progress <= 100; progress += 10) {
          setUploadProgress(progress);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // 执行分块上传
        await uploadFileInChunks(file);
      }
      
      // 上传完成后调用回调
      onFilesUploaded(files);
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('文件上传失败，请重试。');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      setUploadingFileName('');
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
          </div>
        </div>
      )}
    </div>
  );
}
