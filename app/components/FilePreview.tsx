'use client';

import React from 'react';
import Image from 'next/image';
import { FileItem } from '../types';

interface FilePreviewProps {
  file: FileItem;
  onClose: () => void;
}

export default function FilePreview({ file, onClose }: FilePreviewProps) {
  const renderPreview = () => {
    if (file.type.startsWith('image/')) {
      return (
        <div className="flex justify-center items-center relative w-full h-[70vh]">
          <Image
            src={file.url || ''}
            alt={file.name}
            fill
            className="object-contain"
            priority
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
    } else {
      return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-6xl mb-4">
            {file.type === 'folder' ? '📁' :
             file.type.includes('pdf') ? '📄' : 
             file.type.includes('word') ? '📝' : 
             file.type.includes('excel') ? '📊' : 
             file.type.includes('zip') ? '📦' : '📄'}
          </div>
          <h3 className="text-xl font-medium mb-2">{file.name}</h3>
          <p className="text-gray-500">{file.type}</p>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium">文件预览</h2>
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
