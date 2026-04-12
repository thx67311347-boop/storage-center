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

// 获取用户专属的文件数据存储键
export const getFileDataStorageKey = (fileId: string): string => {
  const currentUser = getCurrentUser();
  return `storageCenterFileData_${currentUser}_${fileId}`;
};

// 获取存储使用情况
export const getStorageUsage = (): {
  total: number;
  used: number;
  storageCenterUsed: number;
  storageCenterKeys: Array<{key: string; size: number}>
} => {
  let totalSize = 0;
  let storageCenterSize = 0;
  const storageCenterKeys: Array<{key: string; size: number}> = [];
  
  try {
    // 存储总容量设置为5GB
    const total = 5 * 1024 * 1024 * 1024;
    
    // 计算当前使用情况
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const value = localStorage[key];
        const itemSize = new Blob([value]).size;
        totalSize += itemSize;
        
        if (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_')) {
          storageCenterSize += itemSize;
          storageCenterKeys.push({ key, size: itemSize });
        }
      }
    }
    
    return {
      total,
      used: totalSize,
      storageCenterUsed: storageCenterSize,
      storageCenterKeys
    };
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return {
      total: 5 * 1024 * 1024,
      used: 0,
      storageCenterUsed: 0,
      storageCenterKeys: []
    };
  }
};

// 清理Storage Center数据
export const cleanupStorageCenterData = (): void => {
  try {
    const keysToRemove: string[] = [];
    
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key) && (key.startsWith('storageCenterFiles_') || key.startsWith('storageCenterFileData_'))) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });
    
    console.log(`Cleaned up ${keysToRemove.length} Storage Center keys`);
  } catch (error) {
    console.error('Error cleaning up storage center data:', error);
  }
};

// 保存文件数据到 localStorage（用户隔离）
export const saveFilesToStorage = (files: FileItem[]): boolean => {
  try {
    const storageKey = getUserStorageKey();
    const filesJson = JSON.stringify(files);
    
    // 检查数据大小是否可能超出存储限制（5GB）
    const dataSize = new Blob([filesJson]).size;
    if (dataSize > 5 * 1024 * 1024 * 1024) {
      console.warn('File metadata exceeds storage limit, some data may be lost');
      return false;
    }
    
    // 检查当前存储使用情况
    const storageUsage = getStorageUsage();
    const availableStorage = storageUsage.total - storageUsage.used;
    if (dataSize > availableStorage) {
      console.warn('Not enough storage space available for file metadata');
      return false;
    }
    
    localStorage.setItem(storageKey, filesJson);
    return true;
  } catch (error) {
    console.error('Error saving files to storage:', error);
    return false;
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

// 保存单个文件的数据到 localStorage
export const saveFileData = (fileId: string, fileData: string): boolean => {
  try {
    const storageKey = getFileDataStorageKey(fileId);
    
    // 直接尝试保存，让浏览器自然处理配额限制
    localStorage.setItem(storageKey, fileData);
    return true;
  } catch (error) {
    console.error('Error saving file data to storage:', error);
    // 检查是否是配额超出错误
    if (error instanceof DOMException && (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
      console.warn('localStorage quota exceeded, file may be too large');
    }
    return false;
  }
};

// 从 localStorage 加载单个文件的数据
export const loadFileData = (fileId: string): string | null => {
  try {
    const storageKey = getFileDataStorageKey(fileId);
    return localStorage.getItem(storageKey);
  } catch (error) {
    console.error('Error loading file data from storage:', error);
    return null;
  }
};

// 删除文件数据
export const deleteFileData = (fileId: string): void => {
  try {
    const storageKey = getFileDataStorageKey(fileId);
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error('Error deleting file data from storage:', error);
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
    saveFileData,
    loadFileData,
    deleteFileData,
    getDefaultFiles,
    getStorageUsage,
    cleanupStorageCenterData
  };
};
