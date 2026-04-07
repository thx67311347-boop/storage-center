'use client';

import React, { useState } from 'react';
import { FileItem } from '../../types';

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
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div className="col-span-6">
            <button
              onClick={() => handleSort('name')}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>名称</span>
              {sortBy === 'name' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {sortOrder === 'asc' ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                </svg>
              )}
            </button>
          </div>
          <div className="col-span-2">
            <button
              onClick={() => handleSort('size')}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>大小</span>
              {sortBy === 'size' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {sortOrder === 'asc' ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                </svg>
              )}
            </button>
          </div>
          <div className="col-span-3">
            <button
              onClick={() => handleSort('date')}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>修改日期</span>
              {sortBy === 'date' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {sortOrder === 'asc' ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                </svg>
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
                className="grid grid-cols-12 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                onClick={() => onFileClick(file)}
              >
                <div className="col-span-6 flex items-center gap-3">
                  <div className="text-2xl">
                    {file && (file.type === 'folder' || file.isFolder) ? '📁' :
                     file && file.type && file.type.startsWith('image/') ? '📷' :
                     file && file.type && file.type.startsWith('video/') ? '🎬' :
                     file && file.type && file.type.startsWith('audio/') ? '🎵' :
                     file && file.type && file.type.includes('pdf') ? '📄' :
                     file && file.type && (file.type.includes('word') || file.type.includes('document')) ? '📝' :
                     file && file.type && (file.type.includes('excel') || file.type.includes('sheet')) ? '📊' :
                     file && file.type && (file.type.includes('zip') || file.type.includes('compressed')) ? '📦' :
                     '📄'}
                  </div>
                  {renamingFileId === file.id ? (
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="text"
                        value={renameInputValue}
                        onChange={(e) => setRenameInputValue(e.target.value)}
                        onKeyDown={(e) => handleRenameKeyDown(e, file.id)}
                        className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        autoFocus
                      />
                      <button
                        onClick={() => handleRenameConfirm(file.id, renameInputValue)}
                        className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        确认
                      </button>
                      <button
                        onClick={handleRenameCancel}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        取消
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-gray-900 dark:text-white flex-1">{file.name}</span>
                      <button
                        onClick={(e) => handleRenameStart(e, file)}
                        className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="重命名"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-600 dark:text-gray-400"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
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
                <div className="col-span-1 flex items-center justify-end gap-2">
                  {isTrash ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (file && file.id) {
                          onFileRestore(file.id);
                        }
                      }}
                      className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="恢复文件"
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
                        className="text-gray-600 dark:text-gray-400"
                      >
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                        />
                        <path d="M21 3v5h-5"
                        />
                        <path d="M12 7v12"
                        />
                        <path d="m9 15 3 3 3-3"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (file) {
                          onFileDownload(file);
                        }
                      }}
                      className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="下载文件"
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
                        className="text-gray-600 dark:text-gray-400"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </button>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (file && file.id) {
                        onFileDelete(file.id, isTrash);
                      }
                    }}
                    className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="删除文件"
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
                      className="text-gray-600 dark:text-gray-400 hover:text-red-500"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            <p>暂无文件</p>
          </div>
        )}
      </div>
    </div>
  );
}
