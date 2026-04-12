import React, { useReducer, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MobileLayout from '../layout/MobileLayout';
import VirtualFileList from './VirtualFileList';
import MobileFileList from './MobileFileList';
import FilePreview from './FilePreview';
import CreateFolderModal from '../modals/CreateFolderModal';
import ShareModal from './ShareModal';
import UserManualModal from '../modals/UserManualModal';
import Breadcrumb from '../layout/Breadcrumb';
import FileActions from './FileActions';
import DownloadProgress from '../ui/DownloadProgress';
import UploadProgress from '../ui/UploadProgress';
import UploadTaskList from '../ui/UploadTaskList';
import { FileItem } from '../../types';
import { fileManagerReducer, initialState, FileManagerAction } from './FileManagerReducer';
import { useFileStorage } from '../../hooks/useFileStorage';
import { useFileOperations } from '../../hooks/useFileOperations';
import { useMegaStorage } from '../../hooks/useMegaStorage';

export default function FileManager() {
  const router = useRouter();
  const [state, dispatch] = useReducer(fileManagerReducer, initialState);
  
  // 下载进度状态
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadingFileName, setDownloadingFileName] = useState('');
  
  // 上传任务类型定义
  interface UploadTask {
    id: string;
    fileName: string;
    fileSize: number;
    progress: number;
    status: 'pending' | 'uploading' | 'success' | 'error' | 'timeout';
    errorMessage: string | null;
    startTime: number;
    endTime: number | null;
    isMegaFile: boolean;
  }

  // 上传进度状态
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadingFileName, setUploadingFileName] = useState('');
  const [uploadStartTime, setUploadStartTime] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploadTimeout, setIsUploadTimeout] = useState(false);
  const [uploadAbortController, setUploadAbortController] = useState<AbortController | null>(null);
  
  // 上传任务列表
  const [uploadTasks, setUploadTasks] = useState<UploadTask[]>([]);
  const [currentUploadTask, setCurrentUploadTask] = useState<UploadTask | null>(null);
  const [showUploadTasks, setShowUploadTasks] = useState(false);
  
  // 初始化自定义hooks
  const { loadFilesFromStorage, saveFilesToStorage, getStorageUsage } = useFileStorage();
  const {
    handleFilesUploaded,
    handleFileDelete,
    handleMultiFileDelete,
    handleFileRename,
    handleFileRestore,
    handleFileDownload,
    handleCreateFolder,
    cleanupFileUrls
  } = useFileOperations();
  const { uploadFile, isConnected, isLoading, connectToMega } = useMegaStorage();
  
  const [isUploadingToMega, setIsUploadingToMega] = useState(false);


  // 解构状态
  const {
    files,
    selectedFile,
    selectedSection,
    isCreateFolderModalOpen,
    isShareModalOpen,
    isUserManualModalOpen,
    selectedFileForShare,
    selectedFiles,
    selectedFilesForShare,
    usedStorage,
    totalStorage,
    currentFolder,
    breadcrumb,
    searchQuery,
    isSearching,
    isMobile
  } = state;

  // 组件卸载时清理文件URL对象，避免内存泄漏（暂时禁用）
  // useEffect(() => {
  //   return () => {
  //     cleanupFileUrls(files);
  //   };
  // }, [files, cleanupFileUrls]);

  useEffect(() => {
    const checkMobile = () => {
      dispatch({ type: 'SET_IS_MOBILE', payload: window.innerWidth < 768 });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 初始化存储使用量
  useEffect(() => {
    const updateStorageUsage = () => {
      const storageUsage = getStorageUsage();
      dispatch({ type: 'SET_USED_STORAGE', payload: storageUsage.storageCenterUsed });
    };

    updateStorageUsage();
    // 监听存储变化，以便在其他标签页修改存储时更新
    window.addEventListener('storage', updateStorageUsage);
    return () => window.removeEventListener('storage', updateStorageUsage);
  }, [getStorageUsage]);

  // 获取当前登录用户
  const getCurrentUser = () => {
    return localStorage.getItem('currentUser') || 'anonymous';
  };

  // 获取用户专属的 localStorage 键
  const getUserStorageKey = () => {
    const currentUser = getCurrentUser();
    return `storageCenterFiles_${currentUser}`;
  };



  useEffect(() => {
    // 检查登录状态
    const checkLoginStatus = () => {
      // 模拟登录状态检查
      const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isUserLoggedIn) {
        router.push('/login');
      } else {
        const loadedFiles = loadFilesFromStorage();
        dispatch({ type: 'SET_FILES', payload: loadedFiles });
      }
    };

    checkLoginStatus();
  }, [router]);

  const handleFilesUploadedWrapper = async (uploadedFiles: File[]) => {
    const MEGA_THRESHOLD = 5 * 1024 * 1024; // 5MB阈值
    
    // 分离大文件和小文件
    const megaFiles: File[] = [];
    const localFiles: File[] = [];
    
    for (const file of uploadedFiles) {
      if (file.size > MEGA_THRESHOLD) {
        megaFiles.push(file);
      } else {
        localFiles.push(file);
      }
    }
    
    // 先处理小文件（本地存储）
    if (localFiles.length > 0) {
      await handleFilesUploaded(
        localFiles,
        currentFolder,
        files,
        (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles }),
        (size) => dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + size }),
        uploadAbortController || undefined
      );
    }
    
    // 处理大文件（Mega存储）
    if (megaFiles.length > 0) {
      setIsUploadingToMega(true);
      try {
        // 逐个处理文件
        for (let i = 0; i < megaFiles.length; i++) {
          const file = megaFiles[i];
          await handleMegaFileUpload(file);
        }
      } catch (error) {
        console.error('Mega upload failed:', error);
        setUploadError('上传失败，请重试。');
        setTimeout(() => {
          setUploadError(null);
        }, 3000);
      } finally {
        setIsUploadingToMega(false);
        setIsUploading(false);
        setUploadProgress(0);
        setUploadingFileName('');
        setUploadStartTime(null);
        setUploadAbortController(null);
      }
    }
  };

  const handleFileClick = (file: FileItem) => {
    if (file.isFolder) {
      // 处理文件夹点击，实现文件夹导航
      dispatch({ type: 'SET_CURRENT_FOLDER', payload: file.id });
      dispatch({ type: 'SET_BREADCRUMB', payload: [...breadcrumb, {id: file.id, name: file.name}] });
    } else {
      dispatch({ type: 'SET_SELECTED_FILE', payload: file });
    }
  };

  const handleClosePreview = () => {
    dispatch({ type: 'SET_SELECTED_FILE', payload: null });
  };

  const handleDownloadFile = async () => {
    if (!selectedFile) return;
    
    if (selectedFile.url && selectedFile.url !== '#' && selectedFile.url !== '') {
      try {
        // 设置下载状态
        setIsDownloading(true);
        setDownloadProgress(0);
        setDownloadingFileName(selectedFile.name);
        
        // 使用XMLHttpRequest来监控下载进度
        const xhr = new XMLHttpRequest();
        xhr.open('GET', selectedFile.url, true);
        xhr.responseType = 'blob';
        
        xhr.onprogress = (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            setDownloadProgress(percentComplete);
          }
        };
        
        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = xhr.response;
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = selectedFile.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
          
          // 重置下载状态
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadProgress(0);
            setDownloadingFileName('');
          }, 1000);
        };
        
        xhr.onerror = () => {
          // 重置下载状态
          setIsDownloading(false);
          setDownloadProgress(0);
          setDownloadingFileName('');
          alert('文件下载失败，请重试。');
        };
        
        xhr.send();
      } catch (error) {
        console.error('Error downloading file:', error);
        setIsDownloading(false);
        setDownloadProgress(0);
        setDownloadingFileName('');
        alert('文件下载失败，请重试。');
      }
    } else {
      alert('此文件无法下载，请重新上传文件后再试。');
    }
  };

  const handleFileDeleteWrapper = async (fileId: string, isFromTrash: boolean = false) => {
    await handleFileDelete(
      fileId,
      isFromTrash,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles }),
      (size) => dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + size })
    );
  };

  const handleMultiFileDeleteWrapper = async (fileIds: string[], isFromTrash: boolean = false) => {
    await handleMultiFileDelete(
      fileIds,
      isFromTrash,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles }),
      (size) => dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + size })
    );
  };

  const handleFileRenameWrapper = async (fileId: string, newName: string) => {
    await handleFileRename(
      fileId,
      newName,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles })
    );
  };

  const handleFileRestoreWrapper = async (fileId: string) => {
    await handleFileRestore(
      fileId,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles }),
      (size) => dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + size })
    );
  };



  const handleCreateFolderWrapper = async (folderName: string) => {
    await handleCreateFolder(
      folderName,
      currentFolder,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles })
    );
  };

  const handleBreadcrumbClick = (index: number) => {
    const newBreadcrumb = breadcrumb.slice(0, index + 1);
    dispatch({ type: 'SET_BREADCRUMB', payload: newBreadcrumb });
    dispatch({ type: 'SET_CURRENT_FOLDER', payload: newBreadcrumb[index].id });
  };

  const handleSearch = (query: string) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    dispatch({ type: 'SET_IS_SEARCHING', payload: true });
  };

  const handleClearSearch = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
    dispatch({ type: 'SET_IS_SEARCHING', payload: false });
  };

  const handleLogout = () => {
    // 清除登录状态
    localStorage.removeItem('isLoggedIn');
    // 重定向到登录页面
    router.push('/login');
  };

  // 取消上传
  const handleCancelUpload = () => {
    if (uploadAbortController) {
      uploadAbortController.abort();
      setUploadAbortController(null);
    }
    
    // 更新当前任务状态
    if (currentUploadTask) {
      updateUploadTask(currentUploadTask.id, {
        status: 'error',
        errorMessage: '上传已取消',
        endTime: Date.now()
      });
    }
    
    setIsUploading(false);
    setIsUploadingToMega(false);
    setUploadProgress(0);
    setUploadingFileName('');
    setUploadStartTime(null);
    setUploadError(null);
    setIsUploadTimeout(false);
  };

  // 计算预估剩余时间
  const calculateRemainingTime = () => {
    if (!uploadStartTime || uploadProgress === 0) return '计算中...';
    
    const elapsedTime = (Date.now() - uploadStartTime) / 1000; // 秒
    const progressRatio = uploadProgress / 100;
    
    if (progressRatio === 0) return '计算中...';
    
    const totalTime = elapsedTime / progressRatio;
    const remainingTime = totalTime - elapsedTime;
    
    if (remainingTime < 0) return '完成中...';
    
    if (remainingTime < 60) {
      return `${Math.ceil(remainingTime)}秒`;
    } else if (remainingTime < 3600) {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = Math.floor(remainingTime % 60);
      return `${minutes}分${seconds}秒`;
    } else {
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      return `${hours}小时${minutes}分`;
    }
  };

  // 创建新的上传任务
  const createUploadTask = (file: File, isMegaFile: boolean): UploadTask => {
    return {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      fileName: file.name,
      fileSize: file.size,
      progress: 0,
      status: 'pending',
      errorMessage: null,
      startTime: Date.now(),
      endTime: null,
      isMegaFile
    };
  };

  // 更新上传任务状态
  const updateUploadTask = (taskId: string, updates: Partial<UploadTask>) => {
    setUploadTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  };

  // 处理单个Mega文件上传
  const handleMegaFileUpload = async (file: File) => {
    const task = createUploadTask(file, true);
    setCurrentUploadTask(task);
    setUploadTasks(prev => [task, ...prev]);
    
    setIsUploading(true);
    setUploadingFileName(file.name);
    setUploadProgress(0);
    setUploadStartTime(Date.now());
    setUploadError(null);
    setIsUploadTimeout(false);
    
    // 创建AbortController用于取消上传
    const abortController = new AbortController();
    setUploadAbortController(abortController);
    
    // 添加上传超时检测（30秒无进度更新）
    let lastProgressTime = Date.now();
    const timeoutCheckInterval = setInterval(() => {
      if (Date.now() - lastProgressTime > 30000) { // 30秒
        setIsUploadTimeout(true);
        updateUploadTask(task.id, {
          status: 'timeout',
          errorMessage: '上传超时，请检查网络连接',
          endTime: Date.now()
        });
        handleCancelUpload();
        clearInterval(timeoutCheckInterval);
      }
    }, 5000);
    
    try {
      updateUploadTask(task.id, { status: 'uploading' });
      
      const uploadResult = await uploadFile(file, (progress) => {
        const currentProgress = Math.round(progress * 100);
        setUploadProgress(currentProgress);
        updateUploadTask(task.id, { progress: currentProgress });
        lastProgressTime = Date.now(); // 更新最后进度时间
      }, abortController);
      
      clearInterval(timeoutCheckInterval);
      
      if (uploadResult && uploadResult.success) {
        // 创建Mega文件项
        const newFile: FileItem = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          url: uploadResult.link || '#',
          parentId: currentFolder,
          isFolder: false,
          isDeleted: false,
          lastModified: Date.now(),
          isMegaFile: true
        };
        
        // 更新文件列表
        const updatedFiles = [...files, newFile];
        dispatch({ type: 'SET_FILES', payload: updatedFiles });
        
        // 保存到localStorage
        const storageKey = getUserStorageKey();
        localStorage.setItem(storageKey, JSON.stringify(updatedFiles));
        
        // 更新存储使用量
        dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + file.size });
        
        // 更新任务状态为成功
        updateUploadTask(task.id, {
          status: 'success',
          progress: 100,
          endTime: Date.now()
        });
      }
    } catch (error) {
      console.error('Mega upload failed:', error);
      const errorMessage = error instanceof Error ? error.message : '上传失败，请重试';
      setUploadError(errorMessage);
      updateUploadTask(task.id, {
        status: 'error',
        errorMessage,
        endTime: Date.now()
      });
    } finally {
      clearInterval(timeoutCheckInterval);
    }
  };

  const handleSettingsClick = () => {
    // 处理设置按钮点击，导航到设置页面
    router.push('/settings');
  };

  // 重试上传任务
  const handleRetryUpload = (task: UploadTask) => {
    // 这里需要重新创建File对象，实际应用中可能需要从原始文件源获取
    // 这里简化处理，仅作为示例
    const mockFile = new File([''], task.fileName, { type: task.fileName.split('.').pop() || '' });
    Object.defineProperty(mockFile, 'size', { value: task.fileSize });
    handleMegaFileUpload(mockFile);
  };

  // 关闭上传任务
  const handleCloseTask = (taskId: string) => {
    setUploadTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // 处理文件分享
  const handleFileShare = (file: FileItem) => {
    dispatch({ type: 'SET_SELECTED_FILE_FOR_SHARE', payload: file });
    dispatch({ type: 'SET_SHARE_MODAL', payload: true });
  };

  // 处理多文件分享
  const handleMultiFileShare = (files: FileItem[]) => {
    dispatch({ type: 'SET_SELECTED_FILES_FOR_SHARE', payload: files });
    dispatch({ type: 'SET_SHARE_MODAL', payload: true });
  };

  // 处理文件选择
  const handleSelectFile = (fileId: string, isCtrlPressed: boolean) => {
    if (isCtrlPressed) {
      // Ctrl键按下，切换文件选择状态
      const newSet = new Set(selectedFiles);
      if (newSet.has(fileId)) {
        newSet.delete(fileId);
      } else {
        newSet.add(fileId);
      }
      dispatch({ type: 'SET_SELECTED_FILES', payload: newSet });
    } else {
      // 没有按下Ctrl键，替换选择
      dispatch({ type: 'SET_SELECTED_FILES', payload: new Set([fileId]) });
    }
  };

  useEffect(() => {
    // 快捷键监听
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+S 触发分享功能
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        if (selectedFile) {
          handleFileShare(selectedFile);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFile]);

  const getCurrentFiles = () => {
    let filteredFiles = files;
    
    // 根据 selectedSection 过滤文件
    switch (selectedSection) {
      case 'all':
        // 显示所有未删除的文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && file.parentId === currentFolder);
        break;
      case 'recent':
        // 按修改日期排序，显示最近的文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && file.parentId === currentFolder);
        filteredFiles = filteredFiles.sort((a, b) => b.lastModified - a.lastModified);
        break;
      case 'images':
        // 显示图片文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && !file.isFolder && file.type && file.type.startsWith('image/') && file.parentId === currentFolder);
        break;
      case 'documents':
        // 显示文档文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && !file.isFolder && file.type && (file.type.includes('document') || file.type.includes('text') || file.type.includes('pdf')) && file.parentId === currentFolder);
        break;
      case 'videos':
        // 显示视频文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && !file.isFolder && file.type && file.type.startsWith('video/') && file.parentId === currentFolder);
        break;
      case 'audio':
        // 显示音频文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && !file.isFolder && file.type && file.type.startsWith('audio/') && file.parentId === currentFolder);
        break;
      case 'shared':
        // 显示共享文件（这里只是模拟，实际需要根据共享状态过滤）
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && !file.isFolder && file.parentId === currentFolder);
        break;
      case 'trash':
        // 显示回收站文件
        filteredFiles = filteredFiles.filter(file => file.isDeleted);
        break;
      default:
        // 显示所有未删除的文件
        filteredFiles = filteredFiles.filter(file => !file.isDeleted && file.parentId === currentFolder);
        break;
    }
    
    if (isSearching && searchQuery && selectedSection !== 'trash') {
      const queryLower = searchQuery.toLowerCase();
      filteredFiles = filteredFiles.filter(file => {
        return (
          file.name.toLowerCase().includes(queryLower) ||
          (file.type && file.type.toLowerCase().includes(queryLower))
        );
      });
    }
    
    return filteredFiles;
  };

  return (
    <>
      <MobileLayout
        selectedSection={selectedSection}
        onSectionSelect={(section) => dispatch({ type: 'SET_SELECTED_SECTION', payload: section })}
        onSettingsClick={handleSettingsClick}
        usedStorage={usedStorage}
        totalStorage={totalStorage}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
        searchQuery={searchQuery}
        onLogout={handleLogout}
        onOpenUserManual={() => dispatch({ type: 'SET_USER_MANUAL_MODAL', payload: true })}
        breadcrumb={breadcrumb}
        onBreadcrumbClick={handleBreadcrumbClick}
        isMobile={isMobile}
        onFloatingButtonClick={() => dispatch({ type: 'SET_CREATE_FOLDER_MODAL', payload: true })}
      >
        <div className="space-y-6">
          {!isMobile && (
            <>
              {/* 页面标题和面包屑 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6">
                <Breadcrumb items={breadcrumb} onItemClick={handleBreadcrumbClick} />
                <FileActions 
                  onOpenCreateFolderModal={() => dispatch({ type: 'SET_CREATE_FOLDER_MODAL', payload: true })}
                  onFilesUploaded={handleFilesUploadedWrapper}
                  currentFolderName={breadcrumb[breadcrumb.length - 1].name}
                  isUploadingToMega={isUploadingToMega}
                />
              </div>
            </>
          )}
          
          {/* 文件列表 */}
          {isMobile ? (
            <MobileFileList 
              files={getCurrentFiles()}
              onFileClick={handleFileClick}
              onFileDelete={handleFileDeleteWrapper}
              onFileDownload={handleFileDownload}
              onFileRename={handleFileRenameWrapper}
              onFileRestore={handleFileRestoreWrapper}
              onFileShare={handleFileShare}
              onMultiFileShare={handleMultiFileShare}
              onMultiFileDelete={handleMultiFileDeleteWrapper}
              selectedFiles={selectedFiles}
              onSelectFile={handleSelectFile}
              isTrash={selectedSection === 'trash'}
              selectedSection={selectedSection}
              breadcrumb={breadcrumb}
              onBreadcrumbClick={handleBreadcrumbClick}
            />
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <VirtualFileList 
                files={getCurrentFiles()}
                onFileClick={handleFileClick}
                onFileDelete={handleFileDeleteWrapper}
                onFileDownload={handleFileDownload}
                onFileRename={handleFileRenameWrapper}
                onFileRestore={handleFileRestoreWrapper}
                onFileShare={handleFileShare}
                onMultiFileShare={handleMultiFileShare}
                onMultiFileDelete={handleMultiFileDeleteWrapper}
                selectedFiles={selectedFiles}
                onSelectFile={handleSelectFile}
                isTrash={selectedSection === 'trash'}
              />
            </div>
          )}
        </div>
      </MobileLayout>
      {selectedFile && (
        <FilePreview 
          file={selectedFile} 
          onClose={() => dispatch({ type: 'SET_SELECTED_FILE', payload: null })}
          onDownload={handleDownloadFile}
        />
      )}
      <CreateFolderModal 
        isOpen={isCreateFolderModalOpen} 
        onClose={() => dispatch({ type: 'SET_CREATE_FOLDER_MODAL', payload: false })} 
        onCreate={handleCreateFolderWrapper} 
      />
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => dispatch({ type: 'SET_SHARE_MODAL', payload: false })} 
        file={selectedFileForShare} 
        files={selectedFilesForShare} 
      />
      <UserManualModal 
        isOpen={isUserManualModalOpen} 
        onClose={() => dispatch({ type: 'SET_USER_MANUAL_MODAL', payload: false })} 
      />
      <DownloadProgress 
        isDownloading={isDownloading} 
        progress={downloadProgress} 
        fileName={downloadingFileName} 
      />
      <UploadProgress 
        isUploading={isUploading} 
        progress={uploadProgress} 
        fileName={uploadingFileName} 
        onCancelUpload={handleCancelUpload}
        onRetryUpload={() => currentUploadTask && handleMegaFileUpload(new File([], currentUploadTask.fileName))}
        remainingTime={calculateRemainingTime()}
        isTimeout={isUploadTimeout}
        error={uploadError}
        status={isUploadTimeout ? 'timeout' : uploadError ? 'error' : 'uploading'}
      />
      <UploadTaskList
        tasks={uploadTasks}
        onRetryTask={handleRetryUpload}
        onCloseTask={handleCloseTask}
        onToggleVisibility={() => setShowUploadTasks(!showUploadTasks)}
        isVisible={showUploadTasks}
      />
    </>
  );
}
