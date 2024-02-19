# NodeJS Module Config Examples

## Reference

- [Article](https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed)
- [Repo](https://github.com/JakobJingleheimer/nodejs-module-config-examples)

## Introduction

这个仓库介绍了以下内容：
- 库的源码是 CommonJS，如何通过 Webpack 配置和封装，让库的使用者可以通过 CommonJS 或 ESM 引入库。
- 库的源码是 ESM，如何通过 Webpack 配置和封装，让库的使用者可以通过 CommonJS 或 ESM 引入库。

## Folder

- `cjs/cjs-distro`: 源码为 CommonJS，打包输出支持通过 CommonJS 引入的代码。
- `cjs/esm-distro`: 源码为 CommonJS，打包输出支持通过 ESM 引入的代码。
- `cjs/dual/*`: 源码为 CommonJS，打包输出支持通过 CommonJS 或 ESM 引入的代码。
- `esm/cjs-distro`: 源码为 ESM，打包输出支持通过 CommonJS 引入的代码。
- `esm/esm-distro`: 源码为 ESM，打包输出支持通过 ESM 引入的代码。
- `esm/dual/*`: 源码为 ESM，打包输出支持通过 CommonJS 或 ESM 引入的代码。

## Start

1. 切换到对应的文件夹
2. 安装包（`npm i`）
3. 构建（`npm run build`）
