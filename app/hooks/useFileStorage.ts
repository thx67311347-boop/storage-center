import { FileItem } from '../types';

// 获取当前登录用户
export const getCurrentUser = (): string => {
  return localStorage.getItem('currentUser') || 'anonymous';
};

// 获取用户专属的 localStorage 键
export const getUserStorageKey = (): string => {
  const currentUser = getCurrentUser();
  return `storageCenterFiles_${currentUser}`;
};

// 保存文件数据到 localStorage（用户隔离）
export const saveFilesToStorage = (files: FileItem[]): void => {
  try {
    const storageKey = getUserStorageKey();
    localStorage.setItem(storageKey, JSON.stringify(files));
  } catch (error) {
    console.error('Error saving files to storage:', error);
  }
};

// 从 localStorage 加载文件数据（用户隔离）
export const loadFilesFromStorage = (): FileItem[] => {
  try {
    const storageKey = getUserStorageKey();
    const storedFiles = localStorage.getItem(storageKey);
    if (storedFiles) {
      return JSON.parse(storedFiles);
    } else {
      // 使用默认数据作为回退（每个用户独立的默认文件）
      return getDefaultFiles();
    }
  } catch (error) {
    console.error('Error loading files from storage:', error);
    // 使用默认数据作为回退（每个用户独立的默认文件）
    return getDefaultFiles();
  }
};

// 获取默认文件数据
export const getDefaultFiles = (): FileItem[] => {
  const currentUser = getCurrentUser();
  return [
    {
      id: '1',
      name: '文档',
      type: 'folder',
      size: 0,
      lastModified: Date.now(),
      isFolder: true,
      parentId: null,
      userId: currentUser
    },
    {
      id: '2',
      name: '图片',
      type: 'folder',
      size: 0,
      lastModified: Date.now() - 86400000,
      isFolder: true,
      parentId: null,
      userId: currentUser
    },
    {
      id: '3',
      name: '视频',
      type: 'folder',
      size: 0,
      lastModified: Date.now() - 172800000,
      isFolder: true,
      parentId: null,
      userId: currentUser
    },
    {
      id: '4',
      name: `欢迎_${currentUser}.md`,
      type: 'text/markdown',
      size: 1024,
      lastModified: Date.now() - 259200000,
      url: '#',
      parentId: null,
      userId: currentUser
    }
  ];
};

// 自定义hook：文件存储管理
export const useFileStorage = () => {
  return {
    getCurrentUser,
    getUserStorageKey,
    saveFilesToStorage,
    loadFilesFromStorage,
    getDefaultFiles
  };
};
