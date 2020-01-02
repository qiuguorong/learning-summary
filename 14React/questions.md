# 问题收集

## 什么是react
react是一个构建UI界面的javascript库，可以声明式渲染，可以通过组件化按需的构建应用，
state 代表了随时间会产生变化的数据，应当仅在实现交互时使用

## 什么是jsx
优点：
* 具有javascript的全部功能
* 显示更多有用的错误和警告信息
为什么：
* React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合
* React 采用标记语言和逻辑存放在组件中

在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。

## 为什么设计为单向数据流

## 无状态组件、有状态组件？
元素是构成 React 应用的最小砖块。组件中包含state

## 渲染组件、组合组件

## 表单（受控组件、非受控组件）


## 纯函数
该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

## 事件与合成事件
React中调用事件必须的.bind(this)

## React 哲学
* 将设计好的 UI 划分为组件层级
* 用 React 创建一个静态版本
* 确定 UI state 的最小（且完整）表示
* 确定 state 放置的位置
* 添加反向数据流

## HOC和Mixins
* Mixin 引入了隐式依赖，是的组件维护变得很困难
* Mixin 导致命名冲突
* Mixin 导致复杂的滚雪球

## diff
* 普通diff算法
* keys
* shouldComponentUpdate
