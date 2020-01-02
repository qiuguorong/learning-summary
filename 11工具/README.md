# 搭建库

## 要点
- 代码规范
- 按需加载
- git协作
  * commit规范
  * 保持历史线性
- 文档生成
  * 说明文档
  * 使用文档
  * changelog文档
- 单元测试
  * jest、mocha
- 打包选择
  * 纯node、rollup、wabpack
  * 是否支持umd，esm，cjs
- 发版
  * 版本管理
  * 自动包发布
  * 使用

## 工程架构
- typescript + es6
- eslint + precommit
- stylelint
- babel(polyfill、transform-runtime)
- less/postcss
- webpack/rollup
- hygen（代码模板）
- mocha/jest

## 工具
- conventional-changelog-angular（changelog）
- npmfs（对比packages不用version区别）
- semantic-release（版本管理与自动部署）
- jsdom（nodejs模拟dom）
- puppeteer（headless Chrome node，无UI情况下调用chrome功能）
- jest（单元测试）
- typescript（类型检查）