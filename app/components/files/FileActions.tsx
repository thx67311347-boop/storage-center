import React, { useState } from 'react';
import Icon from '../ui/Icon';
import ChunkFileUploader from '../ChunkFileUploader';

interface FileActionsProps {
  onOpenCreateFolderModal: () => void;
  onFilesUploaded: (files: File[]) => void;
  currentFolderName: string;
}

export default function FileActions({ 
  onOpenCreateFolderModal, 
  onFilesUploaded, 
  currentFolderName 
}: FileActionsProps) {
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);

  const handleCreateFolderClick = () => {
    setIsCreatingFolder(true);
    setTimeout(() => {
      setIsCreatingFolder(false);
      onOpenCreateFolderModal();
    }, 300);
  };

  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{currentFolderName}</h2>
      <div className="flex items-center gap-3">
        <button
          onClick={handleCreateFolderClick}
          disabled={isCreatingFolder}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow text-sm md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isCreatingFolder ? (
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <Icon name="plus" size={18} color="white" />
          )}
          <span className="md:inline hidden">新建</span>
          <span className="hidden md:inline">{isCreatingFolder ? '打开中...' : '新建文件夹'}</span>
        </button>
        <ChunkFileUploader onFilesUploaded={onFilesUploaded} />
      </div>
    </div>
  );
}
