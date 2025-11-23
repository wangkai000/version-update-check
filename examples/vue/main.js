// Vue 3 项目使用示例
import { createApp } from 'vue';
import App from './App.vue';
import { createUpdateNotifier } from 'version-update-notifier';

const app = createApp(App);
app.mount('#app');

// 仅在生产环境启用版本检测
if (import.meta.env.PROD) {
  createUpdateNotifier({
    pollingInterval: 60000, // 每分钟检测一次
    onDetected: () => {
      console.log('🎉 检测到新版本！');
    },
    onUpdate: () => {
      // 可以使用 Element Plus 等 UI 库的对话框
      // return ElMessageBox.confirm('发现新版本，是否立即更新？', '版本更新', {
      //   confirmButtonText: '立即更新',
      //   cancelButtonText: '稍后再说',
      //   type: 'info'
      // }).then(() => true).catch(() => false);
      
      return confirm('检测到新版本，点击确定将刷新页面并更新');
    }
  });
}
