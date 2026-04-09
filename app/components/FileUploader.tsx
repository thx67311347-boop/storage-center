'use client';

import React, { useRef } from 'react';
import Icon from './ui/Icon';

interface FileUploaderProps {
  onFilesUploaded: (files: File[]) => void;
}

export default function FileUploader({ onFilesUploaded }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      onFilesUploaded(files);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="inline-block">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileSelect}
        data-testid="file-input"
      />
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm md:text-base"
      >
        <Icon name="upload" size={16} />
        <span className="md:inline hidden">上传</span>
        <span className="hidden md:inline">上传文件</span>
      </button>
    </div>
  );
}
