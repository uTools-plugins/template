# uTools-plugin develop template

> uTolls 插件开发模板
>
> 使用 vite, react, typescript 快速开发 uTools 插件

## 开发

```bash
pnpm install
pnpm run dev
```

## 打包

```bash
pnpm run build
```

## uTools 打开

打包后使用 uTools 打开 `/src-utools/plugin.json`

## 目录结构

```bash
├── config # 前端配置文件
├── src # 前端源码
├── src-utools
│   ├── dist # utools 打包后的文件
│   └── utools.json # utools 插件配置文件
└── package.json
```
