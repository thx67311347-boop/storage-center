'use client';

import React from 'react';
import { FileItem } from '../types';

interface FilePreviewProps {
  file: FileItem;
  onClose: () => void;
  onDownload?: () => void;
}

export default function FilePreview({ file, onClose, onDownload }: FilePreviewProps) {
  const canPreview = () => {
    if (!file.url && file.url !== '#') {
      return file.type.startsWith('image/') || 
             file.type.startsWith('video/') || 
             file.type.startsWith('audio/') ||
             file.type.includes('pdf');
    }
    return false;
  };

  const renderPreview = () => {
    if (!file.url || file.url === '#' || file.url === '') {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-6xl mb-4">
            {file.type === 'folder' ? '📁' :
             file.type.includes('pdf') ? '📄' : 
             file.type.includes('word') || file.type.includes('document') ? '📝' : 
             file.type.includes('excel') || file.type.includes('spreadsheet') ? '📊' : 
             file.type.includes('zip') || file.type.includes('archive') ? '📦' : '📄'}
          </div>
          <h3 className="text-xl font-medium mb-2">{file.name}</h3>
          <p className="text-gray-500 mb-4">{file.type}</p>
          <p className="text-sm text-gray-400">此文件类型不支持预览</p>
          {onDownload && (
            <button
              onClick={onDownload}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              下载文件
            </button>
          )}
        </div>
      );
    }

    if (file.type.startsWith('image/')) {
      return (
        <div className="flex justify-center items-center w-full h-[70vh]">
          <img
            src={file.url}
            alt={file.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      );
    } else if (file.type.startsWith('video/')) {
      return (
        <div className="flex justify-center items-center">
          <video src={file.url} controls className="max-w-full max-h-[70vh]" />
        </div>
      );
    } else if (file.type.startsWith('audio/')) {
      return (
        <div className="flex justify-center items-center">
          <audio src={file.url} controls className="w-full max-w-md" />
        </div>
      );
    } else if (file.type.includes('pdf')) {
      return (
        <div className="flex justify-center items-center w-full h-[70vh]">
          <iframe
            src={file.url}
            className="w-full h-full"
            title={file.name}
          />
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-6xl mb-4">
            {file.type.includes('pdf') ? '📄' : 
             file.type.includes('word') ? '📝' : 
             file.type.includes('excel') ? '📊' : 
             file.type.includes('zip') ? '📦' : '📄'}
          </div>
          <h3 className="text-xl font-medium mb-2">{file.name}</h3>
          <p className="text-gray-500 mb-4">{file.type}</p>
          <p className="text-sm text-gray-400">此文件类型不支持预览</p>
          {onDownload && (
            <button
              onClick={onDownload}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              下载文件
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-medium">文件预览</h2>
            {onDownload && (
              <button
                onClick={onDownload}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                下载
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        <div className="flex-1 overflow-auto p-4">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}
