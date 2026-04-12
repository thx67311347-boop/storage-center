import { FileItem } from '../../types';

// 状态类型定义
export interface FileManagerState {
  files: FileItem[];
  selectedFile: FileItem | null;
  selectedSection: string;
  isCreateFolderModalOpen: boolean;
  isShareModalOpen: boolean;
  isUserManualModalOpen: boolean;
  selectedFileForShare: any;
  selectedFiles: Set<string>;
  selectedFilesForShare: FileItem[];
  usedStorage: number;
  totalStorage: number;
  currentFolder: string | null;
  breadcrumb: { id: string | null; name: string }[];
  searchQuery: string;
  isSearching: boolean;
  isMobile: boolean;
}

// Action类型定义
export type FileManagerAction =
  | { type: 'SET_FILES'; payload: FileItem[] }
  | { type: 'SET_SELECTED_FILE'; payload: FileItem | null }
  | { type: 'SET_SELECTED_SECTION'; payload: string }
  | { type: 'SET_CREATE_FOLDER_MODAL'; payload: boolean }
  | { type: 'SET_SHARE_MODAL'; payload: boolean }
  | { type: 'SET_USER_MANUAL_MODAL'; payload: boolean }
  | { type: 'SET_SELECTED_FILE_FOR_SHARE'; payload: any }
  | { type: 'SET_SELECTED_FILES'; payload: Set<string> }
  | { type: 'SET_SELECTED_FILES_FOR_SHARE'; payload: FileItem[] }
  | { type: 'SET_USED_STORAGE'; payload: number }
  | { type: 'SET_CURRENT_FOLDER'; payload: string | null }
  | { type: 'SET_BREADCRUMB'; payload: { id: string | null; name: string }[] }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_IS_SEARCHING'; payload: boolean }
  | { type: 'SET_IS_MOBILE'; payload: boolean }
  | { type: 'ADD_FILES'; payload: FileItem[] }
  | { type: 'DELETE_FILE'; payload: string }
  | { type: 'RENAME_FILE'; payload: { id: string; name: string } }
  | { type: 'RESTORE_FILE'; payload: string }
  | { type: 'ADD_FOLDER'; payload: FileItem };

// 初始状态
export const initialState: FileManagerState = {
  files: [],
  selectedFile: null,
  selectedSection: 'all',
  isCreateFolderModalOpen: false,
  isShareModalOpen: false,
  isUserManualModalOpen: false,
  selectedFileForShare: null,
  selectedFiles: new Set(),
  selectedFilesForShare: [],
  usedStorage: 0, // 初始化为0，将从实际存储使用情况获取
  totalStorage: 5 * 1024 * 1024 * 1024, // 5GB 存储限制
  currentFolder: null,
  breadcrumb: [{ id: null, name: '主页' }],
  searchQuery: '',
  isSearching: false,
  isMobile: false,
};

// Reducer函数
export const fileManagerReducer = (state: FileManagerState, action: FileManagerAction): FileManagerState => {
  switch (action.type) {
    case 'SET_FILES':
      return { ...state, files: action.payload };
    
    case 'SET_SELECTED_FILE':
      return { ...state, selectedFile: action.payload };
    
    case 'SET_SELECTED_SECTION':
      return { ...state, selectedSection: action.payload };
    
    case 'SET_CREATE_FOLDER_MODAL':
      return { ...state, isCreateFolderModalOpen: action.payload };
    
    case 'SET_SHARE_MODAL':
      return { ...state, isShareModalOpen: action.payload };
    
    case 'SET_USER_MANUAL_MODAL':
      return { ...state, isUserManualModalOpen: action.payload };
    
    case 'SET_SELECTED_FILE_FOR_SHARE':
      return { ...state, selectedFileForShare: action.payload };
    
    case 'SET_SELECTED_FILES':
      return { ...state, selectedFiles: action.payload };
    
    case 'SET_SELECTED_FILES_FOR_SHARE':
      return { ...state, selectedFilesForShare: action.payload };
    
    case 'SET_USED_STORAGE':
      return { ...state, usedStorage: Math.max(0, action.payload) };
    
    case 'SET_CURRENT_FOLDER':
      return { ...state, currentFolder: action.payload };
    
    case 'SET_BREADCRUMB':
      return { ...state, breadcrumb: action.payload };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_IS_SEARCHING':
      return { ...state, isSearching: action.payload };
    
    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.payload };
    
    case 'ADD_FILES':
      return { ...state, files: [...state.files, ...action.payload] };
    
    case 'DELETE_FILE':
      return {
        ...state,
        files: state.files.map(file =>
          file.id === action.payload
            ? { ...file, isDeleted: true, deletedAt: Date.now() }
            : file
        ),
      };
    
    case 'RENAME_FILE':
      return {
        ...state,
        files: state.files.map(file =>
          file.id === action.payload.id
            ? { ...file, name: action.payload.name, lastModified: Date.now() }
            : file
        ),
      };
    
    case 'RESTORE_FILE':
      return {
        ...state,
        files: state.files.map(file =>
          file.id === action.payload
            ? { ...file, isDeleted: false, deletedAt: null }
            : file
        ),
      };
    
    case 'ADD_FOLDER':
      return { ...state, files: [...state.files, action.payload] };
    
    default:
      return state;
  }
};
