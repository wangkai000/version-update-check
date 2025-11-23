# web-version-checker

[English](./README.md) | 简体中文

一个纯前端实现的版本更新自动提示刷新插件，无需后端配合。

## ✨ 特性

- 🚀 **纯前端实现** - 无需后端配合，通过轮询检测 HTML 中的 script 变化
- 📦 **开箱即用** - 简单配置即可使用
- 🎯 **TypeScript 支持** - 完整的类型定义
- ⚙️ **高度可配置** - 支持自定义轮询间隔、提示方式等
- 🎨 **自定义提示** - 支持自定义更新提示 UI
- 🔄 **智能暂停** - 页面隐藏时自动暂停检测，节省资源
- 📱 **多种引入方式** - 支持 ESM、CJS、UMD 多种模块格式

## 📦 安装

```bash
npm install web-version-checker
```

或使用 yarn:

```bash
yarn add web-version-checker
```

或使用 pnpm:

```bash
pnpm add web-version-checker
```

## 🚀 快速开始

### 基础用法

在你的项目入口文件（如 `main.js` 或 `main.ts`）中引入：

```javascript
import { createUpdateNotifier } from 'web-version-checker';

// 创建检测器实例并自动开始检测
const notifier = createUpdateNotifier();
```

就这么简单！插件会自动每 10 秒检测一次版本更新，发现更新时会弹出确认框询问用户是否刷新。

## 📖 更多文档

详细使用文档请查看 [README.md](./README.md)
