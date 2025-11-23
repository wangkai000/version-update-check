// React 项目使用示例
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createUpdateNotifier } from 'version-update-notifier';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 仅在生产环境启用版本检测
if (process.env.NODE_ENV === 'production') {
  createUpdateNotifier({
    pollingInterval: 30000, // 每 30 秒检测一次
    debug: false,
    onDetected: () => {
      console.log('检测到新版本！');
    }
  });
}
