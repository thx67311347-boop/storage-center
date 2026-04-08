'use client';

import React, { useState, useRef, useCallback } from 'react';

interface UploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

export default function AdminUpload() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 允许的文件类型
  const allowedTypes = [
    'image/*',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
    'text/markdown',
  ];

  // 最大文件大小 (50MB)
  const maxFileSize = 50 * 1024 * 1024;

  // 验证文件
  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return `文件大小超过限制 (最大 ${formatFileSize(maxFileSize)})`;
    }

    const isAllowed = allowedTypes.some((type) => {
      if (type.endsWith('/*')) {
        return file.type.startsWith(type.replace('/*', ''));
      }
      return file.type === type;
    });

    if (!isAllowed) {
      return '不支持的文件类型';
    }

    return null;
  };

  // 格式化文件大小
  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  // 处理文件选择
  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadFile[] = [];

    Array.from(selectedFiles).forEach((file) => {
      const error = validateFile(file);

      newFiles.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: error ? 'error' : 'pending',
        error: error || undefined,
      });
    });

    setFiles((prev) => [...prev, ...newFiles]);

    // 自动开始上传非错误文件
    newFiles.forEach((uploadFile) => {
      if (!uploadFile.error) {
        simulateUpload(uploadFile.id);
      }
    });
  };

  // 模拟上传过程
  const simulateUpload = (fileId: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === fileId ? { ...f, status: 'uploading' } : f))
    );

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        // 上传完成，保存到localStorage
        setFiles((prev) => {
          const updatedFiles = prev.map((f) =>
            f.id === fileId ? { ...f, progress: 100, status: 'completed' as const } : f
          );

          // 保存到adminFiles
          const completedFile = updatedFiles.find((f) => f.id === fileId);
          if (completedFile) {
            const storedFiles = JSON.parse(localStorage.getItem('adminFiles') || '[]');
            storedFiles.push({
              id: fileId,
              name: completedFile.name,
              type: completedFile.type,
              size: completedFile.size,
              uploadedBy: 'admin',
              uploadDate: new Date().toISOString(),
              url: URL.createObjectURL(completedFile.file),
            });
            localStorage.setItem('adminFiles', JSON.stringify(storedFiles));
          }

          return updatedFiles;
        });
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress } : f))
        );
      }
    }, 200);
  };

  // 拖拽处理
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  }, []);

  // 移除文件
  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  // 重新上传
  const retryUpload = (fileId: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId ? { ...f, status: 'pending', progress: 0, error: undefined } : f
      )
    );
    simulateUpload(fileId);
  };

  // 获取文件图标
  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      );
    } else if (type === 'application/pdf') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  };

  // 清空所有文件
  const clearAll = () => {
    if (confirm('确定要清空所有文件吗？')) {
      setFiles([]);
    }
  };

  return (
    <div className="space-y-6">
      {/* 上传区域 */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={allowedTypes.join(',')}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto text-gray-400 mb-4"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          点击或拖拽文件到此处上传
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          支持图片、PDF、Word、Excel等格式，单个文件最大 {formatFileSize(maxFileSize)}
        </p>
      </div>

      {/* 文件列表 */}
      {files.length > 0 && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              上传列表 ({files.length})
            </h3>
            <button
              onClick={clearAll}
              className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
            >
              清空全部
            </button>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {files.map((file) => (
              <div key={file.id} className="px-6 py-4">
                <div className="flex items-center gap-4">
                  {getFileIcon(file.type)}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {file.name}
                      </p>
                      <div className="flex items-center gap-2">
                        {file.status === 'completed' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-500"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                        {file.status === 'error' && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-500"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                        )}
                        <button
                          onClick={() => removeFile(file.id)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>{formatFileSize(file.size)}</span>
                      <span>
                        {file.status === 'uploading' && `${Math.round(file.progress)}%`}
                        {file.status === 'completed' && '上传完成'}
                        {file.status === 'error' && '上传失败'}
                        {file.status === 'pending' && '等待上传'}
                      </span>
                    </div>

                    {file.status === 'uploading' && (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${file.progress}%` }}
                        />
                      </div>
                    )}

                    {file.error && (
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-red-600">{file.error}</p>
                        <button
                          onClick={() => retryUpload(file.id)}
                          className="text-xs text-blue-600 hover:text-blue-800"
                        >
                          重试
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 统计信息 */}
      {files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">总文件数</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{files.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">上传完成</p>
            <p className="text-2xl font-bold text-green-600">
              {files.filter((f) => f.status === 'completed').length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">上传失败</p>
            <p className="text-2xl font-bold text-red-600">
              {files.filter((f) => f.status === 'error').length}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-500 dark:text-gray-400">总大小</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatFileSize(files.reduce((acc, f) => acc + f.size, 0))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
