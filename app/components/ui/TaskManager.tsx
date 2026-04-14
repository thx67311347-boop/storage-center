'use client';

import React from 'react';

interface Task {
  id: string;
  fileName: string;
  fileSize: number;
  progress: number;
  status: 'pending' | 'uploading' | 'downloading' | 'success' | 'error' | 'timeout';
  errorMessage: string | null;
  startTime: number;
  endTime: number | null;
  type: 'upload' | 'download';
  isMegaFile?: boolean;
}

interface TaskManagerProps {
  tasks: Task[];
  onRetryTask: (task: Task) => void;
  onCloseTask: (taskId: string) => void;
  isVisible: boolean;
  onToggleVisibility?: () => void;
}

export default function TaskManager({ 
  tasks, 
  onRetryTask, 
  onCloseTask, 
  isVisible, 
  onToggleVisibility 
}: TaskManagerProps) {
  if (!isVisible) {
    return null;
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
      case 'error':
      case 'timeout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
      case 'uploading':
      case 'downloading':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 animate-spin">
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'success': return '完成';
      case 'error': return '失败';
      case 'timeout': return '超时';
      case 'uploading': return '上传中';
      case 'downloading': return '下载中';
      case 'pending': return '等待中';
      default: return '未知状态';
    }
  };

  const getTaskTypeIcon = (type: string) => {
    if (type === 'upload') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">任务管理</h2>
        {onToggleVisibility && (
          <button
            onClick={onToggleVisibility}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="关闭任务管理"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 opacity-30">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <p className="text-lg">暂无任务记录</p>
          <p className="text-sm mt-2">上传或下载文件后，任务将显示在这里</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  {getTaskTypeIcon(task.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{task.fileName}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>{formatFileSize(task.fileSize)}</span>
                      <span>•</span>
                      <span>{formatTime(task.startTime)}</span>
                      {task.isMegaFile && (
                        <span className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">MEGA</span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onCloseTask(task.id)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* 进度条 */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ease-in-out ${task.status === 'success' ? 'bg-green-500' : task.status === 'error' || task.status === 'timeout' ? 'bg-red-500' : 'bg-blue-500'}`}
                  style={{ width: `${task.progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  {getStatusIcon(task.status)}
                  <span className={`font-medium ${task.status === 'success' ? 'text-green-500' : task.status === 'error' || task.status === 'timeout' ? 'text-red-500' : 'text-blue-500'}`}>
                    {task.type === 'upload' ? '上传' : '下载'} - {getStatusText(task.status)}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">{task.progress}%</span>
              </div>

              {task.errorMessage && (
                <div className="mt-2 text-xs text-red-500 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                  {task.errorMessage}
                </div>
              )}

              {/* 操作按钮 */}
              {(task.status === 'error' || task.status === 'timeout') && (
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => onRetryTask(task)}
                    className="px-3 py-1.5 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    重试
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
