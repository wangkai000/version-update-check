# Examples

这个目录包含了 `version-update-notifier` 在不同框架中的使用示例。

## 目录结构

- `vue/` - Vue 3 项目示例
- `react/` - React 项目示例
- `vanilla/` - 原生 JavaScript 示例

## Vue 3 示例

查看 `vue/main.js` 了解如何在 Vue 3 项目中使用。

```javascript
import { createUpdateNotifier } from 'version-update-notifier';

if (import.meta.env.PROD) {
  createUpdateNotifier({
    pollingInterval: 60000
  });
}
```

## React 示例

查看 `react/index.jsx` 了解如何在 React 项目中使用。

```javascript
import { createUpdateNotifier } from 'version-update-notifier';

if (process.env.NODE_ENV === 'production') {
  createUpdateNotifier({
    pollingInterval: 30000
  });
}
```

## 原生 JS 示例

- `vanilla/index.html` - 使用 UMD 版本的完整 HTML 示例
- `vanilla/main.js` - 使用 ES Module 的示例

直接打开 `vanilla/index.html` 即可在浏览器中查看效果。
