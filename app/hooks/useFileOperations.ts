import { FileItem } from '../types';
import { supabase } from '../../lib/supabase';
import { getCurrentUser, saveFilesToStorage } from './useFileStorage';

// 文件操作相关的自定义hook
export const useFileOperations = () => {
  // 处理文件上传
  const handleFilesUploaded = async (uploadedFiles: File[], currentFolder: string | null, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    try {
      const currentUser = getCurrentUser();
      const newFiles: FileItem[] = [];
      let totalSize = 0;
      
      // 验证文件大小限制（100MB）
      const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
      
      for (const file of uploadedFiles) {
        // 检查文件大小
        if (file.size > MAX_FILE_SIZE) {
          alert(`文件 "${file.name}" 超过了100MB的大小限制，无法上传。`);
          continue;
        }
        
        // 创建文件对象URL用于本地预览
        const fileUrl = URL.createObjectURL(file);
        
        const newFile: FileItem = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          url: fileUrl,
          parentId: currentFolder,
          isFolder: false,
          userId: currentUser
        };
        
        newFiles.push(newFile);
        totalSize += file.size;
      }
      
      if (newFiles.length > 0) {
        const updatedFiles = [...files, ...newFiles];
        updateFiles(updatedFiles);
        updateUsedStorage(totalSize);
        saveFilesToStorage(updatedFiles);
        
        // 显示成功提示
        alert(`成功上传 ${newFiles.length} 个文件！`);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('文件上传失败，请重试。');
    }
  };

  // 清理文件URL对象，避免内存泄漏
  const cleanupFileUrls = (files: FileItem[]) => {
    files.forEach(file => {
      if (file.url && file.url.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(file.url);
        } catch (error) {
          console.error('Error revoking object URL:', error);
        }
      }
    });
  };

  // 处理文件删除
  const handleFileDelete = async (fileId: string, isFromTrash: boolean, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    const fileToDelete = files.find(file => file.id === fileId);
    if (fileToDelete && !fileToDelete.isFolder) {
      updateUsedStorage(-fileToDelete.size);
      // 清理文件URL对象，避免内存泄漏
      if (fileToDelete.url && fileToDelete.url.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(fileToDelete.url);
        } catch (error) {
          console.error('Error revoking object URL:', error);
        }
      }
    }
    
    try {
      if (isFromTrash) {
        // 在回收站中，彻底删除文件
        // 从数据库中删除文件
        const { error: dbError } = await supabase
          .from('files')
          .delete()
          .eq('id', fileId);
        
        if (dbError) {
          console.error('Error deleting file from database:', dbError);
        }
      } else {
        // 在主页中，标记为已删除
        const { error: dbError } = await (supabase
          .from('files') as any)
          .update({ isDeleted: true, deletedAt: Date.now() })
          .eq('id', fileId);
        
        if (dbError) {
          console.error('Error updating file status in database:', dbError);
        }
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
    
    let updatedFiles;
    if (isFromTrash) {
      // 在回收站中，从列表中移除
      updatedFiles = files.filter(file => file.id !== fileId);
    } else {
      // 在主页中，标记为已删除
      updatedFiles = files.map(file => {
        if (file.id === fileId) {
          return { ...file, isDeleted: true, deletedAt: Date.now() };
        }
        return file;
      });
    }
    saveFilesToStorage(updatedFiles);
    updateFiles(updatedFiles);
  };

  // 处理多文件删除
  const handleMultiFileDelete = async (fileIds: string[], isFromTrash: boolean, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    // 计算需要释放的存储空间
    let totalSizeToRelease = 0;
    fileIds.forEach(fileId => {
      const fileToDelete = files.find(file => file.id === fileId);
      if (fileToDelete && !fileToDelete.isFolder) {
        totalSizeToRelease += fileToDelete.size;
        // 清理文件URL对象，避免内存泄漏
        if (fileToDelete.url && fileToDelete.url.startsWith('blob:')) {
          try {
            URL.revokeObjectURL(fileToDelete.url);
          } catch (error) {
            console.error('Error revoking object URL:', error);
          }
        }
      }
    });
    
    if (totalSizeToRelease > 0) {
      updateUsedStorage(-totalSizeToRelease);
    }
    
    try {
      if (isFromTrash) {
        // 在回收站中，彻底删除多个文件 - 使用循环逐个删除
        for (const fileId of fileIds) {
          const { error: dbError } = await supabase
            .from('files')
            .delete()
            .eq('id', fileId);
          
          if (dbError) {
            console.error('Error deleting file from database:', fileId, dbError);
          }
        }
      } else {
        // 在主页中，标记多个文件为已删除 - 使用循环逐个更新
        for (const fileId of fileIds) {
          const { error: dbError } = await (supabase
            .from('files') as any)
            .update({ isDeleted: true, deletedAt: Date.now() })
            .eq('id', fileId);
          
          if (dbError) {
            console.error('Error updating file status in database:', fileId, dbError);
          }
        }
      }
    } catch (error) {
      console.error('Error deleting multiple files:', error);
    }
    
    let updatedFiles;
    if (isFromTrash) {
      // 在回收站中，从列表中移除
      updatedFiles = files.filter(file => !fileIds.includes(file.id));
    } else {
      // 在主页中，标记为已删除
      updatedFiles = files.map(file => {
        if (fileIds.includes(file.id)) {
          return { ...file, isDeleted: true, deletedAt: Date.now() };
        }
        return file;
      });
    }
    saveFilesToStorage(updatedFiles);
    updateFiles(updatedFiles);
  };

  // 处理文件重命名
  const handleFileRename = async (fileId: string, newName: string, files: FileItem[], updateFiles: (files: FileItem[]) => void) => {
    try {
      // 更新数据库中的文件名称
      const { error: dbError } = await (supabase
        .from('files') as any)
        .update({ name: newName, lastModified: Date.now() })
        .eq('id', fileId);
      
      if (dbError) {
        console.error('Error renaming file in database:', dbError);
      }
    } catch (error) {
      console.error('Error renaming file:', error);
    }
    
    const updatedFiles = files.map(file => {
      if (file.id === fileId) {
        return { ...file, name: newName, lastModified: Date.now() };
      }
      return file;
    });
    saveFilesToStorage(updatedFiles);
    updateFiles(updatedFiles);
  };

  // 处理文件恢复
  const handleFileRestore = async (fileId: string, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    const fileToRestore = files.find(file => file.id === fileId);
    if (fileToRestore && !fileToRestore.isFolder) {
      updateUsedStorage(fileToRestore.size);
    }
    
    try {
      // 更新数据库中的文件状态，标记为未删除
      const { error: dbError } = await (supabase
        .from('files') as any)
        .update({ isDeleted: false, deletedAt: null })
        .eq('id', fileId);
      
      if (dbError) {
        console.error('Error updating file status in database:', dbError);
      }
    } catch (error) {
      console.error('Error restoring file:', error);
    }
    
    const updatedFiles = files.map(file => {
      if (file.id === fileId) {
        return { ...file, isDeleted: false, deletedAt: null };
      }
      return file;
    });
    saveFilesToStorage(updatedFiles);
    updateFiles(updatedFiles);
  };

  // 处理文件下载
  const handleFileDownload = async (file: FileItem) => {
    if (file.url) {
      try {
        // 强制下载所有文件
        const response = await fetch(file.url);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading file:', error);
        // 回退到原始方法
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        link.click();
      }
    }
  };

  // 处理创建文件夹
  const handleCreateFolder = async (folderName: string, currentFolder: string | null, files: FileItem[], updateFiles: (files: FileItem[]) => void) => {
    try {
      const currentUser = getCurrentUser();
      // 将文件夹信息保存到数据库
      const { data: dbData, error: dbError } = await (supabase
        .from('files')
        .insert({
          name: folderName,
          type: 'folder',
          size: 0,
          lastModified: Date.now(),
          parentId: currentFolder,
          isFolder: true,
          userId: currentUser
        }) as any)
        .select('*')
        .single();
      
      if (dbError) {
        console.error('Error creating folder:', dbError);
        // 使用本地处理作为回退
        const newFolder: FileItem = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: folderName,
          type: 'folder',
          size: 0,
          lastModified: Date.now(),
          isFolder: true,
          parentId: currentFolder,
          userId: currentUser
        };
        const updatedFiles = [...files, newFolder];
        saveFilesToStorage(updatedFiles);
        updateFiles(updatedFiles);
      } else {
        const updatedFiles = [...files, dbData];
        saveFilesToStorage(updatedFiles);
        updateFiles(updatedFiles);
      }
    } catch (error) {
      console.error('Error creating folder:', error);
      // 使用本地处理作为回退
      const currentUser = getCurrentUser();
      const newFolder: FileItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: folderName,
        type: 'folder',
        size: 0,
        lastModified: Date.now(),
        isFolder: true,
        parentId: currentFolder,
        userId: currentUser
      };
      const updatedFiles = [...files, newFolder];
      saveFilesToStorage(updatedFiles);
      updateFiles(updatedFiles);
    }
  };

  return {
    handleFilesUploaded,
    handleFileDelete,
    handleMultiFileDelete,
    handleFileRename,
    handleFileRestore,
    handleFileDownload,
    handleCreateFolder,
    cleanupFileUrls
  };
};
