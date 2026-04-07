import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUploader from './FileUploader';

describe('FileUploader', () => {
  test('renders file upload button', () => {
    const onFilesUploaded = jest.fn();
    render(<FileUploader onFilesUploaded={onFilesUploaded} />);
    expect(screen.getByText('上传文件')).toBeInTheDocument();
  });

  test('calls onFilesUploaded when files are selected', () => {
    const onFilesUploaded = jest.fn();
    render(<FileUploader onFilesUploaded={onFilesUploaded} />);
    
    // Create a mock file
    const file = new File(['test content'], 'test.txt', { type: 'text/plain' });
    const fileInput = screen.getByTestId('file-input');
    
    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [file] } });
    
    // Check if onFilesUploaded was called with the file
    expect(onFilesUploaded).toHaveBeenCalledWith([file]);
  });
});
