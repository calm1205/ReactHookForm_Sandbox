# React Sandbox with webpack

React x Webpack の砂場環境。<br>
create-react-app を使わないで環境を構築したかった。<br>

[webpack 公式サイト](https://webpack.js.org/)

# 構築手順

```bash
npm init -y

npm install -g typescript
tsc --init

npm install --save-dev webpack webpack-cli
touch webpack.config.js

# tsファイルを直接webpackでbundleするために必要
# 直接bundleするにはlocalにtypescriptのinstallが必要
npm install --save-dev ts-loader typescript

# webpackでのlocal server
npm install --save-dev webpack-dev-server

# install react
npm install react react-dom
npm i --save-dev @types/react @types/react-dom
```
