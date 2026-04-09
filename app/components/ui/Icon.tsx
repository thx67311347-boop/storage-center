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
        return (
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16z" />
        );
      case 'file':
        return (
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        );
      case 'image':
        return (
          <path d="M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14z" />
        );
      case 'video':
        return (
          <path d="M21 12a9 9 0 0 1-9 9c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9z" />
        );
      case 'audio':
        return (
          <path d="M9 18V5l12-2v13" />
        );
      case 'pdf':
        return (
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        );
      case 'document':
        return (
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        );
      case 'sheet':
        return (
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        );
      case 'zip':
        return (
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        );
      case 'clock':
        return (
          <circle cx="12" cy="12" r="10" />
        );
      case 'share':
        return (
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        );
      case 'trash':
        return (
          <path d="M3 6h18" />
        );
      case 'settings':
        return (
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        );
      case 'search':
        return (
          <circle cx="11" cy="11" r="8" />
        );
      case 'close':
        return (
          <line x1="18" y1="6" x2="6" y2="18" />
        );
      case 'download':
        return (
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        );
      case 'upload':
        return (
          <path d="M12 21v-6M5 15l7-7 7 7" />
        );
      case 'edit':
        return (
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        );
      case 'restore':
        return (
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        );
      case 'bell':
        return (
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        );
      case 'user':
        return (
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        );
      case 'logout':
        return (
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        );
      case 'plus':
        return (
          <path d="M12 5v14M5 12h14" />
        );
      case 'filter':
        return (
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        );
      case 'sort':
        return (
          <path d="M18 15l-6-6-6 6" />
        );
      default:
        return (
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16z" />
        );
    }
  };

  const iconStyles = {
    ...(size ? { width: `${size}px`, height: `${size}px` } : {}),
    ...(color ? { color } : {})
  };

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
