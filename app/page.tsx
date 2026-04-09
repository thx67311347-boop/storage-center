'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import FileUploader from './components/FileUploader';
import FileList from './components/files/FileList';
import FilePreview from './components/FilePreview';
import CreateFolderModal from './components/modals/CreateFolderModal';
import ShareModal from './components/files/ShareModal';
import Icon from './components/ui/Icon';
import { FileItem } from './types';
import { supabase } from '../lib/supabase';

export default function Home() {
  const router = useRouter();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [selectedSection, setSelectedSection] = useState('all');
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedFileForShare, setSelectedFileForShare] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [selectedFilesForShare, setSelectedFilesForShare] = useState<FileItem[]>([]);
  const [usedStorage, setUsedStorage] = useState(1024 * 1024 * 100); // 100MB
  const [totalStorage] = useState(5 * 1024 * 1024 * 1024); // 5GB
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState<{id: string | null, name: string}[]>([{id: null, name: '主页'}]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // 保存文件数据到 localStorage
  const saveFilesToStorage = (files: FileItem[]) => {
    try {
      localStorage.setItem('storageCenterFiles', JSON.stringify(files));
    } catch (error) {
      console.error('Error saving files to storage:', error);
    }
  };

  useEffect(() => {
    // 检查登录状态
    const checkLoginStatus = () => {
      // 模拟登录状态检查
      const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!isUserLoggedIn) {
        router.push('/login');
      } else {
        loadFilesFromStorage();
      }
    };

    // 从 localStorage 加载文件数据
    const loadFilesFromStorage = () => {
      try {
        const storedFiles = localStorage.getItem('storageCenterFiles');
        if (storedFiles) {
          setFiles(JSON.parse(storedFiles));
        } else {
          // 使用默认数据作为回退
          const defaultFiles = [
            {
              id: '1',
              name: '文档',
              type: 'folder',
              size: 0,
              lastModified: Date.now(),
              isFolder: true,
              parentId: null
            },
            {
              id: '2',
              name: '图片',
              type: 'folder',
              size: 0,
              lastModified: Date.now() - 86400000,
              isFolder: true,
              parentId: null
            },
            {
              id: '3',
              name: '视频',
              type: 'folder',
              size: 0,
              lastModified: Date.now() - 172800000,
              isFolder: true,
              parentId: null
            },
            {
              id: '4',
              name: 'README.md',
              type: 'text/markdown',
              size: 1024,
              lastModified: Date.now() - 259200000,
              url: '#',
              parentId: null
            }
          ];
          setFiles(defaultFiles);
          saveFilesToStorage(defaultFiles);
        }
      } catch (error) {
        console.error('Error loading files from storage:', error);
        // 使用默认数据作为回退
        const defaultFiles = [
          {
            id: '1',
            name: '文档',
            type: 'folder',
            size: 0,
            lastModified: Date.now(),
            isFolder: true,
            parentId: null
          },
          {
            id: '2',
            name: '图片',
            type: 'folder',
            size: 0,
            lastModified: Date.now() - 86400000,
            isFolder: true,
            parentId: null
          },
          {
            id: '3',
            name: '视频',
            type: 'folder',
            size: 0,
            lastModified: Date.now() - 172800000,
            isFolder: true,
            parentId: null
          },
          {
            id: '4',
            name: 'README.md',
            type: 'text/markdown',
            size: 1024,
            lastModified: Date.now() - 259200000,
            url: '#',
            parentId: null
          }
        ];
        setFiles(defaultFiles);
        saveFilesToStorage(defaultFiles);
      }
    };

    checkLoginStatus();
  }, [router]);

  const handleFilesUploaded = async (uploadedFiles: File[]) => {
    try {
      const newFiles: FileItem[] = [];
      let totalSize = 0;
      
      for (const file of uploadedFiles) {
        // 生成唯一的文件名
        const fileName = `${Date.now()}_${file.name}`;
        
        // 上传文件到 Supabase 存储
        const { error: storageError } = await supabase
          .storage
          .from('files')
          .upload(fileName, file);
        
        if (storageError) {
          console.error('Error uploading file:', storageError);
          continue;
        }
        
        // 获取文件的公共 URL
        const { data: urlData, error: urlError } = await supabase
          .storage
          .from('files')
          .getPublicUrl(fileName) as { data: { publicUrl: string }; error: any };
        
        if (urlError) {
          console.error('Error getting file URL:', urlError);
          continue;
        }
        
        // 将文件信息保存到数据库
        const { data: dbData, error: dbError } = await (supabase
          .from('files')
          .insert({
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            url: urlData.publicUrl,
            parentId: currentFolder,
            isFolder: false
          }) as any)
          .select('*')
          .single();
        
        if (dbError) {
          console.error('Error saving file to database:', dbError);
          continue;
        }
        
        newFiles.push(dbData);
        totalSize += file.size;
      }
      
      setFiles(prevFiles => {
        const updatedFiles = [...prevFiles, ...newFiles];
        saveFilesToStorage(updatedFiles);
        return updatedFiles;
      });
      setUsedStorage(prev => prev + totalSize);
    } catch (error) {
      console.error('Error uploading files:', error);
      // 使用本地处理作为回退
      const newFiles: FileItem[] = uploadedFiles.map(file => ({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        url: URL.createObjectURL(file),
        parentId: currentFolder,
        isFolder: false
      }));
      setFiles(prevFiles => {
        const updatedFiles = [...prevFiles, ...newFiles];
        saveFilesToStorage(updatedFiles);
        return updatedFiles;
      });
      setUsedStorage(prev => prev + uploadedFiles.reduce((acc, file) => acc + file.size, 0));
    }
  };

  const handleFileClick = (file: FileItem) => {
    if (file.isFolder) {
      // 处理文件夹点击，实现文件夹导航
      setCurrentFolder(file.id);
      setBreadcrumb(prev => [...prev, {id: file.id, name: file.name}]);
    } else {
      setSelectedFile(file);
    }
  };

  const handleClosePreview = () => {
    setSelectedFile(null);
  };

  const handleFileDelete = async (fileId: string, isFromTrash: boolean = false) => {
    const fileToDelete = files.find(file => file.id === fileId);
    if (fileToDelete && !fileToDelete.isFolder) {
      setUsedStorage(prev => prev - fileToDelete.size);
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
    
    setFiles(prevFiles => {
      let updatedFiles;
      if (isFromTrash) {
        // 在回收站中，从列表中移除
        updatedFiles = prevFiles.filter(file => file.id !== fileId);
      } else {
        // 在主页中，标记为已删除
        updatedFiles = prevFiles.map(file => {
          if (file.id === fileId) {
            return { ...file, isDeleted: true, deletedAt: Date.now() };
          }
          return file;
        });
      }
      saveFilesToStorage(updatedFiles);
      return updatedFiles;
    });
  };

  const handleFileRename = async (fileId: string, newName: string) => {
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
    
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.map(file => {
        if (file.id === fileId) {
          return { ...file, name: newName, lastModified: Date.now() };
        }
        return file;
      });
      saveFilesToStorage(updatedFiles);
      return updatedFiles;
    });
  };

  const handleFileRestore = async (fileId: string) => {
    const fileToRestore = files.find(file => file.id === fileId);
    if (fileToRestore && !fileToRestore.isFolder) {
      setUsedStorage(prev => prev + fileToRestore.size);
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
    
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.map(file => {
        if (file.id === fileId) {
          return { ...file, isDeleted: false, deletedAt: null };
        }
        return file;
      });
      saveFilesToStorage(updatedFiles);
      return updatedFiles;
    });
  };

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

  const handleCreateFolder = async (folderName: string) => {
    try {
      // 将文件夹信息保存到数据库
      const { data: dbData, error: dbError } = await (supabase
        .from('files')
        .insert({
          name: folderName,
          type: 'folder',
          size: 0,
          lastModified: Date.now(),
          parentId: currentFolder,
          isFolder: true
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
          parentId: currentFolder
        };
        setFiles(prevFiles => {
          const updatedFiles = [...prevFiles, newFolder];
          saveFilesToStorage(updatedFiles);
          return updatedFiles;
        });
      } else {
        setFiles(prevFiles => {
          const updatedFiles = [...prevFiles, dbData];
          saveFilesToStorage(updatedFiles);
          return updatedFiles;
        });
      }
    } catch (error) {
      console.error('Error creating folder:', error);
      // 使用本地处理作为回退
      const newFolder: FileItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: folderName,
        type: 'folder',
        size: 0,
        lastModified: Date.now(),
        isFolder: true,
        parentId: currentFolder
      };
      setFiles(prevFiles => {
        const updatedFiles = [...prevFiles, newFolder];
        saveFilesToStorage(updatedFiles);
        return updatedFiles;
      });
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    const newBreadcrumb = breadcrumb.slice(0, index + 1);
    setBreadcrumb(newBreadcrumb);
    setCurrentFolder(newBreadcrumb[index].id);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
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
    setSelectedFileForShare(file);
    setIsShareModalOpen(true);
  };

  // 处理多文件分享
  const handleMultiFileShare = (files: FileItem[]) => {
    setSelectedFilesForShare(files);
    setIsShareModalOpen(true);
  };

  // 处理文件选择
  const handleSelectFile = (fileId: string, isCtrlPressed: boolean) => {
    // 立即响应，不使用函数式更新
    if (isCtrlPressed) {
      // Ctrl键按下，切换文件选择状态
      const newSelectedFiles = selectedFiles.includes(fileId)
        ? selectedFiles.filter(id => id !== fileId)
        : [...selectedFiles, fileId];
      setSelectedFiles(newSelectedFiles);
    } else {
      // 没有按下Ctrl键，替换选择
      setSelectedFiles([fileId]);
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

  const getSearchResults = () => {
    if (!isSearching || !searchQuery) {
      return [];
    }
    
    const queryLower = searchQuery.toLowerCase();
    return files.filter(file => {
      return (
        file.name.toLowerCase().includes(queryLower) ||
        (file.type && file.type.toLowerCase().includes(queryLower))
      );
    });
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      handleFilesUploaded(files);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex flex-col">
      <Navbar onSearch={handleSearch} onClearSearch={handleClearSearch} searchQuery={searchQuery} onLogout={handleLogout} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          selectedSection={selectedSection} 
          onSectionSelect={setSelectedSection}
          onSettingsClick={handleSettingsClick}
          usedStorage={usedStorage}
          totalStorage={totalStorage}
        />
        <main 
          className="flex-1 overflow-y-auto p-4 md:p-6 relative"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {isDragging && (
            <div className="absolute inset-0 bg-blue-500 bg-opacity-20 border-2 border-dashed border-blue-500 flex items-center justify-center z-10 rounded-xl">
              <div className="text-center bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                <Icon name="upload" size={48} className="text-blue-600 mx-auto mb-4" />
                <p className="text-blue-600 font-medium text-lg">拖拽文件到此处上传</p>
              </div>
            </div>
          )}
          <div className="max-w-7xl mx-auto space-y-6">
            {/* 页面标题和面包屑 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
                {breadcrumb.map((item, index) => (
                  <React.Fragment key={item.id || 'root'}>
                    <button
                      onClick={() => handleBreadcrumbClick(index)}
                      className={`text-sm ${index === breadcrumb.length - 1 ? 'font-semibold text-gray-900 dark:text-white' : 'text-blue-600 dark:text-blue-400 hover:underline'}`}
                    >
                      {item.name}
                    </button>
                    {index < breadcrumb.length - 1 && (
                      <Icon name="sort" size={16} className="text-gray-400 flex-shrink-0 transform rotate-90" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{breadcrumb[breadcrumb.length - 1].name}</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsCreateFolderModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow text-sm md:text-base"
                  >
                    <Icon name="plus" size={18} color="white" />
                    <span className="md:inline hidden">新建</span>
                    <span className="hidden md:inline">新建文件夹</span>
                  </button>
                  <FileUploader onFilesUploaded={handleFilesUploaded} />
                </div>
              </div>
            </div>
            
            {/* 文件列表 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <FileList 
                files={getCurrentFiles()}
                onFileClick={handleFileClick}
                onFileDelete={handleFileDelete}
                onFileDownload={handleFileDownload}
                onFileRename={handleFileRename}
                onFileRestore={handleFileRestore}
                onFileShare={handleFileShare}
                onMultiFileShare={handleMultiFileShare}
                selectedFiles={selectedFiles}
                onSelectFile={handleSelectFile}
                isTrash={selectedSection === 'trash'}
              />
            </div>
          </div>
        </main>
      </div>
      {selectedFile && (
        <FilePreview file={selectedFile} onClose={() => setSelectedFile(null)} />
      )}
      <CreateFolderModal 
        isOpen={isCreateFolderModalOpen} 
        onClose={() => setIsCreateFolderModalOpen(false)} 
        onCreate={handleCreateFolder} 
      />
      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        file={selectedFileForShare} 
        files={selectedFilesForShare} 
      />
    </div>
  );
}
