'use client';

import React, { useState, useEffect } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  file?: any;
  files?: any[];
}

export default function ShareModal({ isOpen, onClose, file, files }: ShareModalProps) {
  const [shareLink, setShareLink] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (files && files.length > 0) {
      // 多文件分享
      const fileNames = files.map(f => f.name).join(', ');
      const link = window.location.origin;
      setShareLink(link);
      setMessage(`我分享了${files.length}个文件: ${fileNames}`);
    } else if (file) {
      // 单个文件分享
      const link = file.url || window.location.origin + '/file/' + file.id;
      setShareLink(link);
      setMessage(`我分享了一个文件: ${file.name}`);
    }
  }, [file, files]);

  const handleShare = (platform: string) => {
    let shareUrl = '';
    const isMultiFile = files && files.length > 0;
    
    switch (platform) {
      case 'wechat':
        // 微信分享需要特殊处理，这里使用二维码或链接
        const title = isMultiFile ? `分享了${files.length}个文件` : (file?.name || '分享文件');
        shareUrl = `https://wx.qq.com/share?url=${encodeURIComponent(shareLink)}&title=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${message} ${shareLink}`)}`;
        break;
      case 'email':
        const emailSubject = isMultiFile ? `分享了${files.length}个文件` : '分享文件';
        shareUrl = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(`${message} ${shareLink}`)}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('链接已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
      alert('复制失败，请手动复制');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">分享文件</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            {files && files.length > 0 ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{files.length}个文件</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {files.map(f => f.name).join(', ')}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">文件列表</h5>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                    {files.map((f, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <span className="text-sm text-gray-900 dark:text-white">{f.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {f.size ? `${(f.size / 1024).toFixed(2)} KB` : '未知大小'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : file ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{file.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{file.size ? `${(file.size / 1024).toFixed(2)} KB` : '未知大小'}</p>
                  </div>
                </div>
              </>
            ) : null}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">分享链接</label>
              <div className="flex">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-l-lg dark:bg-gray-800 dark:text-white"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                >
                  复制
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">分享消息</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleShare('wechat')}
                className="flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">微信</span>
              </button>

              <button
                onClick={() => handleShare('whatsapp')}
                className="flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp</span>
              </button>

              <button
                onClick={() => handleShare('email')}
                className="flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">邮件</span>
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
