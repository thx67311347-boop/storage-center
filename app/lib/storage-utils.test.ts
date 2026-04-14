import { FIVE_MB, isFileSizeOverThreshold, getStoragePath, formatFileSize, formatStorageSize, calculateStorageUsage, generateUniqueFileName } from './storage-utils';
import { calculateDirectorySize, ensureUploadDirExists } from './storage-utils-server';
import fs from 'fs';
import path from 'path';

// 模拟fs模块
jest.mock('fs');

const mockFs = fs as jest.Mocked<typeof fs>;

describe('storage-utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('FIVE_MB constant', () => {
    test('should be equal to 5MB in bytes', () => {
      expect(FIVE_MB).toBe(5 * 1024 * 1024);
    });
  });

  describe('isFileSizeOverThreshold', () => {
    test('should return false for files smaller than 5MB', () => {
      const fileSize = 4 * 1024 * 1024; // 4MB
      expect(isFileSizeOverThreshold(fileSize)).toBe(false);
    });

    test('should return false for files exactly 5MB', () => {
      const fileSize = 5 * 1024 * 1024; // 5MB
      expect(isFileSizeOverThreshold(fileSize)).toBe(false);
    });

    test('should return false for files slightly over 5MB but within tolerance', () => {
      const fileSize = 5 * 1024 * 1024 + 5 * 1024; // 5MB + 5KB
      expect(isFileSizeOverThreshold(fileSize)).toBe(false);
    });

    test('should return true for files over 5MB plus tolerance', () => {
      const fileSize = 5 * 1024 * 1024 + 11 * 1024; // 5MB + 11KB
      expect(isFileSizeOverThreshold(fileSize)).toBe(true);
    });

    test('should return true for files much larger than 5MB', () => {
      const fileSize = 10 * 1024 * 1024; // 10MB
      expect(isFileSizeOverThreshold(fileSize)).toBe(true);
    });
  });

  describe('getStoragePath', () => {
    test('should return local storage path for large files', () => {
      const fileSize = 6 * 1024 * 1024; // 6MB
      const fileName = 'test-file.txt';
      const result = getStoragePath(fileSize, fileName);
      
      expect(result.storageType).toBe('local');
      expect(result.path).toContain('uploads');
      expect(result.path).toContain(fileName);
    });

    test('should return cloud storage path for small files', () => {
      const fileSize = 4 * 1024 * 1024; // 4MB
      const fileName = 'test-file.txt';
      const result = getStoragePath(fileSize, fileName);
      
      expect(result.storageType).toBe('cloud');
      expect(result.path).toBe(fileName);
    });
  });

  describe('calculateDirectorySize', () => {
    test('should calculate directory size correctly', () => {
      // 模拟fs.readdirSync和fs.statSync
      mockFs.readdirSync.mockReturnValue(['file1.txt', 'file2.txt', 'subdir']);
      mockFs.statSync.mockImplementation((path) => {
        if (path.includes('file1.txt')) {
          return { isFile: () => true, size: 1024, isDirectory: () => false } as fs.Stats;
        } else if (path.includes('file2.txt')) {
          return { isFile: () => true, size: 2048, isDirectory: () => false } as fs.Stats;
        } else if (path.includes('subdir')) {
          return { isFile: () => false, size: 0, isDirectory: () => true } as fs.Stats;
        }
        return { isFile: () => false, size: 0, isDirectory: () => false } as fs.Stats;
      });

      // 模拟子目录的文件
      mockFs.readdirSync.mockImplementation((dir) => {
        if (dir.includes('subdir')) {
          return ['file3.txt'];
        }
        return ['file1.txt', 'file2.txt', 'subdir'];
      });

      const result = calculateDirectorySize('/test/dir');
      expect(result).toBe(1024 + 2048 + 0); // 只计算文件大小，子目录为空
    });

    test('should handle errors gracefully', () => {
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('Permission denied');
      });

      const result = calculateDirectorySize('/test/dir');
      expect(result).toBe(0);
    });
  });

  describe('formatFileSize', () => {
    test('should format bytes correctly', () => {
      expect(formatFileSize(0)).toBe('0 B');
      expect(formatFileSize(1023)).toBe('1023 B');
    });

    test('should format KB correctly', () => {
      expect(formatFileSize(1024)).toBe('1.00 KB');
      expect(formatFileSize(1536)).toBe('1.50 KB');
    });

    test('should format MB correctly', () => {
      expect(formatFileSize(1024 * 1024)).toBe('1.00 MB');
      expect(formatFileSize(1024 * 1024 * 1.5)).toBe('1.50 MB');
    });

    test('should format GB correctly', () => {
      expect(formatFileSize(1024 * 1024 * 1024)).toBe('1.00 GB');
      expect(formatFileSize(1024 * 1024 * 1024 * 2.5)).toBe('2.50 GB');
    });
  });

  describe('formatStorageSize', () => {
    test('should format storage size in GB', () => {
      expect(formatStorageSize(0)).toBe('0.00 GB');
      expect(formatStorageSize(1024 * 1024 * 1024)).toBe('1.00 GB');
      expect(formatStorageSize(1024 * 1024 * 1024 * 5.5)).toBe('5.50 GB');
    });
  });

  describe('calculateStorageUsage', () => {
    test('should calculate usage percentage correctly', () => {
      expect(calculateStorageUsage(5, 10)).toBe(50);
      expect(calculateStorageUsage(7.5, 10)).toBe(75);
      expect(calculateStorageUsage(10, 10)).toBe(100);
      expect(calculateStorageUsage(0, 10)).toBe(0);
    });
  });

  describe('ensureUploadDirExists', () => {
    test('should create directory if it does not exist', () => {
      mockFs.existsSync.mockReturnValue(false);
      ensureUploadDirExists();
      expect(mockFs.mkdirSync).toHaveBeenCalledWith(expect.any(String), { recursive: true });
    });

    test('should not create directory if it already exists', () => {
      mockFs.existsSync.mockReturnValue(true);
      ensureUploadDirExists();
      expect(mockFs.mkdirSync).not.toHaveBeenCalled();
    });
  });

  describe('generateUniqueFileName', () => {
    test('should generate unique file name with timestamp and random string', () => {
      const originalName = 'test-file.txt';
      const result = generateUniqueFileName(originalName);
      
      expect(result).toContain('test-file');
      expect(result).toContain('.txt');
      expect(result.length).toBeGreaterThan(originalName.length);
    });
  });
});