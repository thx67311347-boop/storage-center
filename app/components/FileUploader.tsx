'use client';

import React, { useRef, useState } from 'react';
import Icon from './ui/Icon';

interface FileUploaderProps {
  onFilesUploaded: (files: File[]) => void;
}

export default function FileUploader({ onFilesUploaded }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      onFilesUploaded(files);
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      onFilesUploaded(files);
    }
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
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <button
          onClick={handleClick}
          className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 transition-all duration-300 text-sm md:text-base ${
            isDragging
              ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 border-2 border-dashed'
              : 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          } rounded-md`}
        >
          <Icon name="upload" size={16} />
          <span className="md:inline hidden">上传</span>
          <span className="hidden md:inline">上传文件</span>
        </button>
      </div>
    </div>
  );
}
