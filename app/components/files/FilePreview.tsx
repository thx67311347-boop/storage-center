'use client';

import React from 'react';
import { FileItem } from '../../types';
import Icon from '../ui/Icon';

interface FilePreviewProps {
  file: FileItem;
  onClose: () => void;
  onDownload: () => void;
}

export default function FilePreview({ file, onClose, onDownload }: FilePreviewProps) {
  const getFileIcon = (file: FileItem) => {
    if (file.type === 'folder' || file.isFolder) return 'folder';
    if (file.type?.startsWith('image/')) return 'image';
    if (file.type?.startsWith('video/')) return 'video';
    if (file.type?.startsWith('audio/')) return 'audio';
    if (file.type?.includes('pdf')) return 'pdf';
    if (file.type?.includes('word') || file.type?.includes('document')) return 'document';
    if (file.type?.includes('excel') || file.type?.includes('sheet')) return 'sheet';
    if (file.type?.includes('zip') || file.type?.includes('compressed')) return 'zip';
    return 'file';
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  const formatDate = (date: number): string => {
    const d = new Date(date);
    return d.toLocaleString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* 顶部栏 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Icon name={getFileIcon(file)} size={24} />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">{file.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Icon name="download" size={16} color="white" />
              <span className="ml-1">下载</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Icon name="close" size={20} />
            </button>
          </div>
        </div>

        {/* 预览内容 */}
        <div className="flex-1 overflow-auto p-4">
          {file.type?.startsWith('image/') && file.url ? (
            <div className="flex items-center justify-center">
              <img
                src={file.url}
                alt={file.name}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>
          ) : file.type?.startsWith('video/') && file.url ? (
            <div className="flex items-center justify-center">
              <video
                src={file.url}
                controls
                className="max-w-full max-h-[60vh]"
              />
            </div>
          ) : file.type?.startsWith('audio/') && file.url ? (
            <div className="flex items-center justify-center">
              <audio
                src={file.url}
                controls
                className="w-full"
              />
            </div>
          ) : file.url ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Icon name={getFileIcon(file)} size={64} className="mb-4 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">无法直接预览此文件类型</p>
              <p className="text-gray-400 dark:text-gray-500 mt-2">请下载后查看</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Icon name="file" size={64} className="mb-4 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">文件无内容或URL无效</p>
            </div>
          )}
        </div>

        {/* 文件信息 */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">文件类型</p>
              <p className="text-gray-900 dark:text-white">{file.type || '未知'}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">文件大小</p>
              <p className="text-gray-900 dark:text-white">{formatFileSize(file.size)}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">创建时间</p>
              <p className="text-gray-900 dark:text-white">{formatDate(file.lastModified)}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">修改时间</p>
              <p className="text-gray-900 dark:text-white">{formatDate(file.lastModified)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}