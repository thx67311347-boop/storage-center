import { FileItem } from '../types';
import { supabase } from '../../lib/supabase';
import { getCurrentUser, saveFilesToStorage, saveFileData, getStorageUsage, deleteFileData } from './useFileStorage';

// 文件操作相关的自定义hook
export const useFileOperations = () => {
  // 处理文件上传
  const handleFilesUploaded = async (uploadedFiles: File[], currentFolder: string | null, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    try {
      const currentUser = getCurrentUser();
      const validFiles = uploadedFiles;
      
      // 处理所有文件上传
      const filePromises = validFiles.map(async (file) => {
        try {
          // 生成文件ID
          const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
          
          // 使用FileReader将文件转换为base64格式
          const fileData = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              if (e.target?.result) {
                resolve(e.target.result as string);
              } else {
                reject(new Error('文件读取失败'));
              }
            };
            reader.onerror = () => reject(new Error('文件读取失败'));
            reader.readAsDataURL(file);
          });
          
          // 保存文件数据到localStorage
          const saveSuccess = saveFileData(fileId, fileData);
          
          if (!saveSuccess) {
            alert(`文件 "${file.name}" 存储失败，localStorage空间不足。\n\n提示：请清理存储空间或上传更小的文件。`);
            return null;
          }
          
          // 创建文件对象
          const newFile: FileItem = {
            id: fileId,
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            url: `data:${file.type};base64,${fileData.split(',')[1]}`, // 使用base64 URL
            parentId: currentFolder,
            isFolder: false,
            userId: currentUser
          };
          
          return newFile;
        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
          const errorMessage = error instanceof Error ? error.message : '未知错误';
          alert(`文件 "${file.name}" 上传失败: ${errorMessage}`);
          return null;
        }
      });
      
      // 等待所有文件处理完成
      const fileResults = await Promise.all(filePromises);
      const successfulFiles = fileResults.filter((file): file is FileItem => file !== null);
      const totalUploadedSize = successfulFiles.reduce((sum, file) => sum + file.size, 0);
      
      if (successfulFiles.length > 0) {
        const updatedFiles = [...files, ...successfulFiles];
        
        // 保存文件列表
        const saveSuccess = saveFilesToStorage(updatedFiles);
        
        if (saveSuccess) {
          updateFiles(updatedFiles);
          updateUsedStorage(totalUploadedSize);
          // 显示成功提示
          alert(`成功上传 ${successfulFiles.length} 个文件！`);
        } else {
          // 显示存储警告
          alert(`部分文件已上传，但文件列表存储失败，可能会丢失文件信息。建议清理存储空间后重试。`);
        }
      } else {
        alert('没有文件上传成功，请检查存储空间是否足够。');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      alert(`文件上传失败: ${errorMessage}\n请检查存储空间是否足够，或尝试上传较小的文件。`);
    }
  };

  // 清理文件URL对象，避免内存泄漏
  const cleanupFileUrls = (files: FileItem[]) => {
    // 暂时禁用这个功能，避免出现错误
    // try {
    //   files.forEach(file => {
    //     if (file && file.url) {
    //       const urlStr = String(file.url);
    //       // 使用更安全的方式检查，避免使用startsWith方法
    //       if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
    //         try {
    //           URL.revokeObjectURL(urlStr);
    //         } catch (error) {
    //           console.error('Error revoking object URL:', error);
    //         }
    //       }
    //     }
    //   });
    // } catch (error) {
    //   console.error('Error in cleanupFileUrls:', error);
    // }
  };

  // 处理文件删除
  const handleFileDelete = async (fileId: string, isFromTrash: boolean, files: FileItem[], updateFiles: (files: FileItem[]) => void, updateUsedStorage: (storage: number) => void) => {
    const fileToDelete = files.find(file => file.id === fileId);
    if (fileToDelete && !fileToDelete.isFolder) {
      // 确保存储使用量不为负数
      const currentStorage = getStorageUsage();
      const newUsedStorage = Math.max(0, currentStorage.used - fileToDelete.size);
      updateUsedStorage(-fileToDelete.size);
      // 清理文件URL对象，避免内存泄漏
      if (fileToDelete.url) {
        const urlStr = String(fileToDelete.url);
        // 使用更安全的方式检查，避免使用startsWith方法
        if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
          try {
            URL.revokeObjectURL(urlStr);
          } catch (error) {
            console.error('Error revoking object URL:', error);
          }
        }
      }
      // 从localStorage中删除文件数据
      if (isFromTrash) {
        deleteFileData(fileId);
      }
    }
    
    try {
      // 检查fileId是否为标准UUID格式，避免数据库操作错误
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(fileId)) {
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
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      // 数据库错误不影响本地操作，只在控制台记录
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
        if (fileToDelete.url) {
          const urlStr = String(fileToDelete.url);
          // 使用更安全的方式检查，避免使用startsWith方法
          if (urlStr && urlStr.length > 5 && urlStr.substring(0, 5) === 'blob:') {
            try {
              URL.revokeObjectURL(urlStr);
            } catch (error) {
              console.error('Error revoking object URL:', error);
            }
          }
        }
        // 从localStorage中删除文件数据
        if (isFromTrash) {
          deleteFileData(fileId);
        }
      }
    });
    
    if (totalSizeToRelease > 0) {
      updateUsedStorage(-totalSizeToRelease);
    }
    
    try {
      // 检查fileId是否为标准UUID格式，避免数据库操作错误
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (isFromTrash) {
        // 在回收站中，彻底删除多个文件 - 使用循环逐个删除
        for (let fileId of fileIds) {
          if (uuidRegex.test(fileId)) {
            const { error: dbError } = await supabase
              .from('files')
              .delete()
              .eq('id', fileId);
            
            if (dbError) {
              console.error('Error deleting file from database:', fileId, dbError);
            }
          }
        }
      } else {
        // 在主页中，标记多个文件为已删除 - 使用循环逐个更新
        for (const fileId of fileIds) {
          if (uuidRegex.test(fileId)) {
            const { error: dbError } = await (supabase
              .from('files') as any)
              .update({ isDeleted: true, deletedAt: Date.now() })
              .eq('id', fileId);
            
            if (dbError) {
              console.error('Error updating file status in database:', fileId, dbError);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error deleting multiple files:', error);
      // 数据库错误不影响本地操作，只在控制台记录
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
      // 检查fileId是否为标准UUID格式，避免数据库操作错误
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(fileId)) {
        // 更新数据库中的文件名称
        const { error: dbError } = await (supabase
          .from('files') as any)
          .update({ name: newName, lastModified: Date.now() })
          .eq('id', fileId);
        
        if (dbError) {
          console.error('Error renaming file in database:', dbError);
        }
      }
    } catch (error) {
      console.error('Error renaming file:', error);
      // 数据库错误不影响本地操作，只在控制台记录
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
      // 检查fileId是否为标准UUID格式，避免数据库操作错误
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(fileId)) {
        // 更新数据库中的文件状态，标记为未删除
        const { error: dbError } = await (supabase
          .from('files') as any)
          .update({ isDeleted: false, deletedAt: null })
          .eq('id', fileId);
        
        if (dbError) {
          console.error('Error updating file status in database:', dbError);
        }
      }
    } catch (error) {
      console.error('Error restoring file:', error);
      // 数据库错误不影响本地操作，只在控制台记录
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
        const errorMessage = error instanceof Error ? error.message : '未知错误';
        alert(`文件下载失败: ${errorMessage}`);
        // 回退到原始方法
        try {
          const link = document.createElement('a');
          link.href = file.url;
          link.download = file.name;
          link.click();
        } catch (fallbackError) {
          console.error('Error with fallback download:', fallbackError);
        }
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
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      alert(`文件夹创建失败: ${errorMessage}\n正在尝试本地创建...`);
      // 使用本地处理作为回退
      try {
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
        const saveSuccess = saveFilesToStorage(updatedFiles);
        if (saveSuccess) {
          updateFiles(updatedFiles);
          alert('文件夹已在本地创建成功！');
        } else {
          alert('本地创建文件夹失败，可能是存储空间不足。');
        }
      } catch (fallbackError) {
        console.error('Error with fallback folder creation:', fallbackError);
        alert('本地创建文件夹也失败了，请检查存储空间是否足够。');
      }
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
