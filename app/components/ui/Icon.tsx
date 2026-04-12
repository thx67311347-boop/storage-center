'use client';

import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, className = '', size = 24, color, onClick }) => {
  const getIconPath = (iconName: string) => {
    switch (iconName) {
      case 'folder':
        return null;
      case 'file':
        return (
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" />
        );
      case 'image':
        return (
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        );
      case 'video':
        return (
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        );
      case 'audio':
        return (
          <path d="M12 3v18M5 12h14" />
        );
      case 'pdf':
        return (
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" />
        );
      case 'document':
        return (
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" />
        );
      case 'sheet':
        return (
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" />
        );
      case 'zip':
        return (
          <path d="M21 15v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-4" />
        );
      case 'clock':
        return (
          <circle cx="12" cy="12" r="10" />
        );
      case 'share':
        return (
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
        );
      case 'trash':
        return (
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        );
      case 'settings':
        return (
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z" />
        );
      case 'search':
        return (
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        );
      case 'close':
        return (
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        );
      case 'download':
        return (
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        );
      case 'upload':
        return (
          <path d="M19 13h-4v6h-2v-6H5l7-7 7 7zM5 11v2h14v-2H5z" />
        );
      case 'edit':
        return (
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        );
      case 'restore':
        return (
          <path d="M12 3v10h8l-4 4-4-4h8V3z" />
        );
      case 'bell':
        return (
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        );
      case 'user':
        return (
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        );
      case 'logout':
        return (
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5z" />
        );
      case 'plus':
        return (
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        );
      case 'filter':
        return (
          <path d="M3 6v2h18V6H3zm3 7h12v-2H6v2zm0 4h12v-2H6v2z" />
        );
      case 'sort':
        return (
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        );
      default:
        return (
          <path d="M20 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h5l2 2h7c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2z" />
        );
    }
  };

  const iconStyles = {
    ...(size ? { width: `${size}px`, height: `${size}px` } : {}),
    ...(color ? { color } : {})
  };

  if (name === 'folder') {
    const folderImagePath = "/folder-icon.png";
    
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
          style={iconStyles}
          aria-label={name}
        >
          <img
            src={folderImagePath}
            alt="folder"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        </button>
      );
    }

    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
        <img
          src={folderImagePath}
          alt="folder"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (name === 'image') {
    const imageImagePath = "/image-icon.png";
    
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
          style={iconStyles}
          aria-label={name}
        >
          <img
            src={imageImagePath}
            alt="image"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        </button>
      );
    }

    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
        <img
          src={imageImagePath}
          alt="image"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (name === 'document') {
    const documentImagePath = "/document-icon.png";
    
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
          style={iconStyles}
          aria-label={name}
        >
          <img
            src={documentImagePath}
            alt="document"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        </button>
      );
    }

    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
        <img
          src={documentImagePath}
          alt="document"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (name === 'video') {
    const videoImagePath = "/video-icon.jpg";
    
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
          style={iconStyles}
          aria-label={name}
        >
          <img
            src={videoImagePath}
            alt="video"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        </button>
      );
    }

    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
        <img
          src={videoImagePath}
          alt="video"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (name === 'audio') {
    const audioImagePath = "/audio-icon.webp";
    
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className={`inline-flex items-center justify-center ${className}`}
          style={iconStyles}
          aria-label={name}
        >
          <img
            src={audioImagePath}
            alt="audio"
            width={size}
            height={size}
            style={{ objectFit: 'contain' }}
          />
        </button>
      );
    }

    return (
      <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
        <img
          src={audioImagePath}
          alt="audio"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center justify-center ${className}`}
        style={iconStyles}
        aria-label={name}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {getIconPath(name)}
        </svg>
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={iconStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {getIconPath(name)}
      </svg>
    </div>
  );
};

export default Icon;
