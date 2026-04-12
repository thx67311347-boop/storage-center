'use client';

import React, { useState, useEffect } from 'react';

interface PrivacySettingsProps {
  // 可以添加props
}

export default function PrivacySettings({}: PrivacySettingsProps) {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'private', // private, public, contacts
    dataCollection: true,
    marketingEmails: false,
    thirdPartyAccess: false,
    activityTracking: true
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    // 模拟从服务器获取隐私设置
  }, []);

  const handleSettingChange = (key: keyof typeof privacySettings, value: any) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // 模拟保存隐私设置
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      // 3秒后隐藏成功提示
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">隐私设置</h2>
        
        {saveSuccess && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-green-800 dark:text-green-300">隐私设置保存成功！</span>
            </div>
          </div>
        )}

        {/* 个人资料可见性 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">个人资料可见性</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  个人资料可见性
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                    <input
                      type="radio"
                      name="profileVisibility"
                      value="private"
                      checked={privacySettings.profileVisibility === 'private'}
                      onChange={() => handleSettingChange('profileVisibility', 'private')}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">仅自己可见</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        只有您可以查看您的个人资料
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                    <input
                      type="radio"
                      name="profileVisibility"
                      value="contacts"
                      checked={privacySettings.profileVisibility === 'contacts'}
                      onChange={() => handleSettingChange('profileVisibility', 'contacts')}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">仅联系人可见</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        只有您的联系人可以查看您的个人资料
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                    <input
                      type="radio"
                      name="profileVisibility"
                      value="public"
                      checked={privacySettings.profileVisibility === 'public'}
                      onChange={() => handleSettingChange('profileVisibility', 'public')}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">公开可见</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        任何人都可以查看您的个人资料
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 数据收集 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">数据收集</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">允许数据收集</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    允许我们收集您的使用数据，以改进服务质量
                  </p>
                </div>
                <button
                  onClick={() => handleSettingChange('dataCollection', !privacySettings.dataCollection)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privacySettings.dataCollection ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privacySettings.dataCollection ? 'translate-x-5' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">接收营销邮件</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    接收关于新产品、功能和优惠的邮件
                  </p>
                </div>
                <button
                  onClick={() => handleSettingChange('marketingEmails', !privacySettings.marketingEmails)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privacySettings.marketingEmails ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privacySettings.marketingEmails ? 'translate-x-5' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">允许第三方访问</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    允许第三方服务访问您的部分数据
                  </p>
                </div>
                <button
                  onClick={() => handleSettingChange('thirdPartyAccess', !privacySettings.thirdPartyAccess)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privacySettings.thirdPartyAccess ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privacySettings.thirdPartyAccess ? 'translate-x-5' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">活动跟踪</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    跟踪您的文件操作和使用习惯，以提供个性化建议
                  </p>
                </div>
                <button
                  onClick={() => handleSettingChange('activityTracking', !privacySettings.activityTracking)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privacySettings.activityTracking ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                  <span 
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privacySettings.activityTracking ? 'translate-x-5' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 数据管理 */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">数据管理</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">导出个人数据</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  导出您的个人数据，包括文件、设置和活动记录
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  导出数据
                </button>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">删除个人数据</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  删除您的所有个人数据，此操作不可撤销
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                  删除数据
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 隐私政策 */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">隐私政策</h3>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                我们重视您的隐私，致力于保护您的个人信息。请阅读我们的隐私政策，了解我们如何收集、使用和保护您的数据。
              </p>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                查看隐私政策
              </button>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                查看服务条款
              </button>
            </div>
          </div>
        </div>

        {/* 保存按钮 */}
        <div className="mt-8">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSaving && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {isSaving ? '保存中...' : '保存设置'}
          </button>
        </div>
      </div>
    </div>
  );
}
