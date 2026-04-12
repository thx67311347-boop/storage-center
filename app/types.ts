export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: number;
  url?: string;
  isFolder?: boolean;
  parentId?: string | null;
  isDeleted?: boolean;
  deletedAt?: number | null;
  userId?: string;
  isMegaFile?: boolean;
}
