'use client';

import React, { useState } from 'react';
import { FileItem } from '../../types';
import Icon from '../ui/Icon';

interface MobileFileListProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
  onFileDelete: (fileId: string, isFromTrash: boolean) => void;
  onFileDownload: (file: FileItem) => void;
  onFileRename: (fileId: string, newName: string) => void;
  onFileRestore: (fileId: string) => void;
  onFileShare: (file: FileItem) => void;
  onMultiFileShare: (files: FileItem[]) => void;
  onMultiFileDelete: (fileIds: string[], isFromTrash: boolean) => void;
  selectedFiles: Set<string>;
  onSelectFile: (fileId: string, isCtrlPressed: boolean) => void;
  isTrash: boolean;
  selectedSection: string;
  breadcrumb: {id: string | null, name: string}[];
  onBreadcrumbClick: (index: number) => void;
}

export default function MobileFileList({
  files,
  onFileClick,
  onFileDelete,
  onFileDownload,
  onFileRename,
  onFileRestore,
  onFileShare,
  onMultiFileShare,
  onMultiFileDelete,
  selectedFiles,
  onSelectFile,
  isTrash,
  selectedSection,
  breadcrumb,
  onBreadcrumbClick
}: MobileFileListProps) {
  const [sortBy, setSortBy] = useState('date');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<{ id: string; name: string; isFromTrash: boolean } | null>(null);
  const [showMultiDeleteConfirm, setShowMultiDeleteConfirm] = useState(false);

  const sortedFiles = [...files].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'date':
        comparison = b.lastModified - a.lastModified;
        break;
      default:
        comparison = 0;
    }
    return comparison;
  });

  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  const formatDate = (date: number): string => {
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return '今天';
    } else if (days === 1) {
      return '昨天';
    } else if (days < 7) {
      return `${days}天前`;
    } else {
      return d.toLocaleDateString();
    }
  };

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

  return (
    <div className="w-full" suppressHydrationWarning={true}>
      {/* 排序和选择栏 */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          {isTrash ? '回收站' : selectedSection === 'recent' ? '最近文件' : breadcrumb[breadcrumb.length - 1].name}
        </div>
        {selectedFiles.size > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              已选择 {selectedFiles.size} 个
            </span>
            <button
              onClick={() => {
                const selectedFilesList = files.filter(file => selectedFiles.has(file.id));
                onMultiFileShare(selectedFilesList);
              }}
              className="p-1.5 bg-blue-600 text-white rounded-lg"
            >
              <Icon name="share" size={16} color="white" />
            </button>
            <button
              onClick={() => setShowMultiDeleteConfirm(true)}
              className="p-1.5 bg-red-600 text-white rounded-lg"
            >
              <Icon name="trash" size={16} color="white" />
            </button>
          </div>
        )}
      </div>

      {/* 排序选项 */}
      <div className="flex items-center justify-between mb-4 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">排序方式</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('name')}
            className={`px-3 py-1.5 text-sm rounded-lg ${sortBy === 'name' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
          >
            名称
          </button>
          <button
            onClick={() => setSortBy('date')}
            className={`px-3 py-1.5 text-sm rounded-lg ${sortBy === 'date' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
          >
            时间
          </button>
        </div>
      </div>

      {/* 文件卡片列表 */}
      {sortedFiles.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {sortedFiles.map((file) => (
            <div
              key={file.id}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-md ${selectedFiles.has(file.id) ? 'ring-2 ring-blue-500' : ''}`}
              onClick={(e) => {
                const isCtrlPressed = (e as any).ctrlKey || (e as any).metaKey;
                if (isCtrlPressed) {
                  onSelectFile(file.id, true);
                } else if (selectedFiles.size > 0) {
                  onSelectFile(file.id, false);
                } else {
                  onFileClick(file);
                }
              }}
            >
              <div className="h-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Icon
                  name={getFileIcon(file)}
                  size={48}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate mb-1">
                  {file.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{file.type === 'folder' || file.isFolder ? '文件夹' : formatFileSize(file.size)}</span>
                  <span>{formatDate(file.lastModified)}</span>
                </div>
              </div>
              <div className="p-2 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2">
                {!isTrash && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFileShare(file);
                    }}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon name="share" size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                )}
                {isTrash ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFileRestore(file.id);
                    }}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon name="restore" size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFileDownload(file);
                    }}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Icon name="download" size={16} className="text-gray-600 dark:text-gray-400" />
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFileToDelete({ id: file.id, name: file.name, isFromTrash: isTrash });
                    setShowDeleteConfirm(true);
                  }}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Icon name="trash" size={16} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-900 rounded-lg shadow-sm">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">暂无文件</h3>
          <p className="text-gray-500 dark:text-gray-400">上传文件或创建文件夹开始使用</p>
        </div>
      )}

      {/* 删除确认模态框 */}
      {showDeleteConfirm && fileToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                  <Icon name="trash" size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">确认删除</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {fileToDelete.isFromTrash ? '此操作将永久删除文件，无法恢复' : '此操作将把文件移至回收站'}
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  您确定要{fileToDelete.isFromTrash ? '永久删除' : '删除'}文件
                  <span className="font-medium text-red-600 dark:text-red-400"> {fileToDelete.name}</span>吗？
                </p>
              </div>
              
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setFileToDelete(null);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={() => {
                    if (fileToDelete) {
                      onFileDelete(fileToDelete.id, fileToDelete.isFromTrash);
                      setShowDeleteConfirm(false);
                      setFileToDelete(null);
                    }
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  {fileToDelete.isFromTrash ? '确认永久删除' : '确认删除'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 批量删除确认模态框 */}
      {showMultiDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4 border border-red-200 dark:border-red-900/50">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                  <Icon name="trash" size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">确认批量删除</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {isTrash ? '此操作将永久删除所选文件，无法恢复' : '此操作将把所选文件移至回收站'}
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  您确定要{isTrash ? '永久删除' : '删除'}以下 {selectedFiles.size} 个文件吗？
                </p>
                <div className="max-h-32 overflow-y-auto bg-white dark:bg-gray-800 rounded p-2 border border-gray-200 dark:border-gray-700">
                  {Array.from(selectedFiles).map(fileId => {
                    const file = files.find(f => f.id === fileId);
                    return file ? (
                      <div key={fileId} className="text-sm text-gray-600 dark:text-gray-400 py-1">
                        • {file.name}
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setShowMultiDeleteConfirm(false);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={() => {
                    const fileIds = Array.from(selectedFiles);
                    onMultiFileDelete(fileIds, isTrash);
                    selectedFiles.forEach(fileId => onSelectFile(fileId, true));
                    setShowMultiDeleteConfirm(false);
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  {isTrash ? '确认永久删除' : '确认删除'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
