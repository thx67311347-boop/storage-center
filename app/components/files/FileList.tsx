'use client';

import React, { useState } from 'react';
import { FileItem } from '../../types';
import Icon from '../ui/Icon';

interface FileListProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
  onFileDelete: (fileId: string, isFromTrash: boolean) => void;
  onFileDownload: (file: FileItem) => void;
  onFileRename: (fileId: string, newName: string) => void;
  onFileRestore: (fileId: string) => void;
  isTrash: boolean;
}

export default function FileList({ files, onFileClick, onFileDelete, onFileDownload, onFileRename, onFileRestore, isTrash }: FileListProps) {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [renamingFileId, setRenamingFileId] = useState<string | null>(null);
  const [renameInputValue, setRenameInputValue] = useState('');

  const sortedFiles = [...files].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'size':
        comparison = a.size - b.size;
        break;
      case 'date':
        comparison = a.lastModified - b.lastModified;
        break;
      default:
        comparison = 0;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleRenameStart = (e: React.MouseEvent, file: FileItem) => {
    e.stopPropagation();
    setRenamingFileId(file.id);
    setRenameInputValue(file.name);
  };

  const handleRenameCancel = () => {
    setRenamingFileId(null);
    setRenameInputValue('');
  };

  const handleRenameConfirm = (fileId: string, newName: string) => {
    if (newName.trim()) {
      onFileRename(fileId, newName.trim());
    }
    setRenamingFileId(null);
    setRenameInputValue('');
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent, fileId: string) => {
    if (e.key === 'Enter') {
      handleRenameConfirm(fileId, renameInputValue);
    } else if (e.key === 'Escape') {
      handleRenameCancel();
    }
  };

  return (
    <div className="w-full" suppressHydrationWarning={true}>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div className="col-span-6">
            <button
              onClick={() => handleSort('name')}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <span>名称</span>
              {sortBy === 'name' && (
                <Icon 
                  name="sort" 
                  size={16} 
                  className={`transition-transform duration-300 ${sortOrder === 'asc' ? 'transform rotate-180' : ''}`}
                />
              )}
            </button>
          </div>
          <div className="col-span-2">
            <button
              onClick={() => handleSort('size')}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <span>大小</span>
              {sortBy === 'size' && (
                <Icon 
                  name="sort" 
                  size={16} 
                  className={`transition-transform duration-300 ${sortOrder === 'asc' ? 'transform rotate-180' : ''}`}
                />
              )}
            </button>
          </div>
          <div className="col-span-3">
            <button
              onClick={() => handleSort('date')}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <span>修改日期</span>
              {sortBy === 'date' && (
                <Icon 
                  name="sort" 
                  size={16} 
                  className={`transition-transform duration-300 ${sortOrder === 'asc' ? 'transform rotate-180' : ''}`}
                />
              )}
            </button>
          </div>
          <div className="col-span-1 text-right">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">操作</span>
          </div>
        </div>
        {sortedFiles.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {sortedFiles.map((file) => (
              <div
                key={file.id}
                className="grid grid-cols-12 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
                onClick={() => onFileClick(file)}
              >
                <div className="col-span-6 flex items-center gap-4">
                  <div className="text-2xl">
                    <Icon 
                      name={
                        file && (file.type === 'folder' || file.isFolder) ? 'folder' :
                        file && file.type && file.type.startsWith('image/') ? 'image' :
                        file && file.type && file.type.startsWith('video/') ? 'video' :
                        file && file.type && file.type.startsWith('audio/') ? 'audio' :
                        file && file.type && file.type.includes('pdf') ? 'pdf' :
                        file && file.type && (file.type.includes('word') || file.type.includes('document')) ? 'document' :
                        file && file.type && (file.type.includes('excel') || file.type.includes('sheet')) ? 'sheet' :
                        file && file.type && (file.type.includes('zip') || file.type.includes('compressed')) ? 'zip' :
                        'file'
                      } 
                      size={24} 
                      className="text-gray-600 dark:text-gray-400"
                    />
                  </div>
                  {renamingFileId === file.id ? (
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="text"
                        value={renameInputValue}
                        onChange={(e) => setRenameInputValue(e.target.value)}
                        onKeyDown={(e) => handleRenameKeyDown(e, file.id)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        autoFocus
                      />
                      <button
                        onClick={() => handleRenameConfirm(file.id, renameInputValue)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm"
                      >
                        确认
                      </button>
                      <button
                        onClick={handleRenameCancel}
                        className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-sm"
                      >
                        取消
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-gray-900 dark:text-white font-medium flex-1">{file.name}</span>
                      <button
                        onClick={(e) => handleRenameStart(e, file)}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                        aria-label="重命名"
                      >
                        <Icon 
                          name="edit" 
                          size={16} 
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        />
                      </button>
                    </div>
                  )}
                </div>
                <div className="col-span-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
                  {file && (file.type === 'folder' || file.isFolder) ? '-' : formatFileSize(file?.size || 0)}
                </div>
                <div className="col-span-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
                  {new Date(file?.lastModified || 0).toLocaleString()}
                </div>
                <div className="col-span-1 flex items-center justify-end gap-3">
                  {isTrash ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (file && file.id) {
                          onFileRestore(file.id);
                        }
                      }}
                      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                      aria-label="恢复文件"
                    >
                      <Icon 
                        name="restore" 
                        size={18} 
                        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      />
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (file) {
                          onFileDownload(file);
                        }
                      }}
                      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                      aria-label="下载文件"
                    >
                      <Icon 
                        name="download" 
                        size={18} 
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      />
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (file && file.id) {
                        onFileDelete(file.id, isTrash);
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                    aria-label="删除文件"
                  >
                    <Icon 
                      name="trash" 
                      size={18} 
                      className="text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">暂无文件</h3>
            <p className="text-gray-500 dark:text-gray-400">上传文件或创建文件夹开始使用</p>
          </div>
        )}
      </div>
    </div>
  );
}
