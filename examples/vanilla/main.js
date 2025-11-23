// 使用 ES Module 的原生 JS 示例
import { createUpdateNotifier } from 'version-update-notifier';

// 基础使用
const notifier = createUpdateNotifier({
  pollingInterval: 60000, // 1 分钟检测一次
  debug: true
});

// 高级使用 - 自定义 UI
const advancedNotifier = createUpdateNotifier({
  pollingInterval: 30000,
  notifyType: 'custom',
  onUpdate: async () => {
    // 创建自定义提示 UI
    const modal = document.createElement('div');
    modal.className = 'update-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>🎉 发现新版本</h3>
        <p>检测到系统有新版本，建议立即更新以获得最佳体验。</p>
        <div class="modal-actions">
          <button id="updateNow">立即更新</button>
          <button id="updateLater">稍后再说</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    return new Promise((resolve) => {
      document.getElementById('updateNow').onclick = () => {
        modal.remove();
        resolve(true);
      };
      document.getElementById('updateLater').onclick = () => {
        modal.remove();
        resolve(false);
      };
    });
  },
  onDetected: () => {
    console.log('检测到新版本');
  }
});

// 手动控制示例
const manualNotifier = createUpdateNotifier({
  immediate: false // 不立即开始
});

// 在某个时机开始检测
setTimeout(() => {
  manualNotifier.start();
}, 5000);

// 导出供外部使用
export { notifier, advancedNotifier, manualNotifier };
