# 更换网站图标为OneDrive风格

## 项目概述
根据用户反馈，当前网站图标存在辨识度不足的问题。本计划将参考OneDrive的图标设计风格，对网站所有功能按键图标进行系统性更换，提高用户体验和功能识别度。

## 现有图标分析
当前系统使用的图标包括：
- folder, file, image, video, audio, pdf, document, sheet, zip
- clock, share, trash, settings, search, close
- download, upload, edit, restore, bell, user, logout
- plus, filter, sort

## 替换方案
1. **更新Icon.tsx组件**：
   - 保留现有的组件接口和使用方式
   - 替换所有SVG路径为OneDrive风格的图标
   - 确保视觉一致性和现代UI设计规范

2. **图标替换映射**：
   - 文件夹、文件类型图标：使用OneDrive的文件和文件夹图标
   - 功能图标：使用OneDrive的功能按键图标
   - 导航图标：使用OneDrive的导航和操作图标

3. **实现步骤**：
   - 研究OneDrive图标设计风格和SVG路径
   - 更新Icon.tsx中的getIconPath函数
   - 测试所有图标在不同场景下的显示效果
   - 验证功能识别度和视觉吸引力

## 预期效果
- 提高用户对功能的直观理解
- 增强视觉一致性和现代感
- 与OneDrive等主流云存储服务的用户体验保持一致
- 减少用户学习成本，提升整体用户体验

## 测试计划
- 验证所有图标在不同屏幕尺寸下的显示效果
- 测试图标在不同状态下（正常、悬停、点击）的视觉反馈
- 收集用户反馈，评估图标识别度和视觉吸引力的提升效果