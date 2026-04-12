'use client';

import React, { useState, useEffect } from 'react';

interface LoginHistoryItem {
  id: string;
  timestamp: string;
  ip: string;
  location: string;
  device: string;
  browser: string;
  isCurrent: boolean;
}

interface LoginHistoryProps {
  // 可以添加props
}

export default function LoginHistory({}: LoginHistoryProps) {
  const [loginHistory, setLoginHistory] = useState<LoginHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟从服务器获取登录历史记录
    setIsLoading(true);
    setTimeout(() => {
      const mockHistory: LoginHistoryItem[] = [
        {
          id: '1',
          timestamp: '2026-04-13 12:45:30',
          ip: '192.168.1.100',
          location: '北京, 中国',
          device: 'Windows 10',
          browser: 'Chrome 90.0',
          isCurrent: true
        },
        {
          id: '2',
          timestamp: '2026-04-12 18:23:45',
          ip: '192.168.1.101',
          location: '上海, 中国',
          device: 'MacOS',
          browser: 'Safari 14.0',
          isCurrent: false
        },
        {
          id: '3',
          timestamp: '2026-04-11 09:12:15',
          ip: '192.168.1.102',
          location: '广州, 中国',
          device: 'iOS',
          browser: 'Safari Mobile',
          isCurrent: false
        },
        {
          id: '4',
          timestamp: '2026-04-10 15:34:20',
          ip: '192.168.1.103',
          location: '深圳, 中国',
          device: 'Android',
          browser: 'Chrome Mobile',
          isCurrent: false
        },
        {
          id: '5',
          timestamp: '2026-04-09 11:05:55',
          ip: '192.168.1.104',
          location: '杭州, 中国',
          device: 'Windows 10',
          browser: 'Firefox 88.0',
          isCurrent: false
        }
      ];
      setLoginHistory(mockHistory);
      setIsLoading(false);
    }, 1000);
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('zh-CN');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">登录历史</h2>
        
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">安全提示</h3>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                定期查看登录历史，如发现可疑登录，请及时修改密码并联系管理员。
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">加载登录历史...</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    时间
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    地点
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    设备
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    浏览器
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    IP地址
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    状态
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {loginHistory.map((item) => (
                  <tr key={item.id} className={item.isCurrent ? 'bg-blue-50 dark:bg-blue-900/10' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {formatDate(item.timestamp)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.device}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.browser}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {item.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.isCurrent ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          当前登录
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                          历史登录
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            显示最近 5 条登录记录
          </p>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            查看更多
          </button>
        </div>
      </div>
    </div>
  );
}
