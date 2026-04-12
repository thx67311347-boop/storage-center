import React, { useReducer, useEffect } from 'react';
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
import { FileItem } from '../../types';
import { fileManagerReducer, initialState, FileManagerAction } from './FileManagerReducer';
import { useFileStorage } from '../../hooks/useFileStorage';
import { useFileOperations } from '../../hooks/useFileOperations';

export default function FileManager() {
  const router = useRouter();
  const [state, dispatch] = useReducer(fileManagerReducer, initialState);
  
  // 初始化自定义hooks
  const { loadFilesFromStorage, saveFilesToStorage } = useFileStorage();
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

  // 组件卸载时清理文件URL对象，避免内存泄漏
  useEffect(() => {
    return () => {
      cleanupFileUrls(files);
    };
  }, [files, cleanupFileUrls]);

  useEffect(() => {
    const checkMobile = () => {
      dispatch({ type: 'SET_IS_MOBILE', payload: window.innerWidth < 768 });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    // 检查是否有大文件（超过100MB）
    const largeFiles = uploadedFiles.filter(file => file.size > 100 * 1024 * 1024);
    if (largeFiles.length > 0) {
      alert(`文件 "${largeFiles[0].name}" 超过了100MB的大小限制，无法上传。`);
      // 过滤掉大文件，只上传符合大小限制的文件
      uploadedFiles = uploadedFiles.filter(file => file.size <= 100 * 1024 * 1024);
      if (uploadedFiles.length === 0) {
        return;
      }
    }
    
    await handleFilesUploaded(
      uploadedFiles,
      currentFolder,
      files,
      (updatedFiles) => dispatch({ type: 'SET_FILES', payload: updatedFiles }),
      (size) => dispatch({ type: 'SET_USED_STORAGE', payload: usedStorage + size })
    );
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

  const handleDownloadFile = () => {
    if (!selectedFile) return;
    
    if (selectedFile.url && selectedFile.url !== '#' && selectedFile.url !== '') {
      const link = document.createElement('a');
      link.href = selectedFile.url;
      link.download = selectedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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

  const handleSettingsClick = () => {
    // 处理设置按钮点击
    alert('设置页面功能开发中');
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
    </>
  );
}
