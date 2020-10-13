## 对于SPA的理解
SPA是一种单页应用，加载完初始的HTML、CSS、JS后，后续通过路由机制驱动页面加载，而不用再重复的加载资源。
有别与MPA，每次页面跳转都要重新初始加载资源，都有白屏阶段。而SPA仅在首次加载时有白屏阶段。
优点：
* 用户体验良好
缺点：
* 初始加载时白屏时间长
* SEO难度大

## v-show与v-if的区别
两则都是Vue的内置指令，Vue通过解析模板对指令进行处理
v-show，总是保留DOM节点，使用style display机制来控制显示隐藏
v-if，真正的条件渲染，只保留虚拟节点的引用，根据布尔值确定是否生成真实的DOM节点，还是使用注释替代，来控制节点的显示隐藏
在DOM节点频繁更新显示/隐藏状态下，使用v-show性能更佳。
在DOM节点初始状态就确定是否显示/隐藏，使用v-if更佳

## computed与watch的区别
computed是计算属性，可以依赖一个或多个值进行计算，有别于方法，计算属性是响应式的，依赖的值发生变化计算属性才会进行变化，并且计算属性能进行缓存。
watch是监听属性变化，每次属性变化会触发watch的处理函数，在处理函数中可以做任何处理，包括一些异步操作或者开销较大的操作

## 父子组件的通讯
Vue使用的单项数据流，父组件通过props向子组件传递值，子组件无法通过props改变父组件的状态，只能通过$emit派发一个事件，父组件监听该事件，从而让父组件执行相应的更改值的操作

## 可以直接给一个数组赋值嘛，数组能响应式嘛
不能给数组直接赋值
* Object.defineProperty 无法重定义length
* Object.defineProperty 可以监听索引，但是每次数组产生变化，都需要重新初始化一遍
  所以，Vue对于数据提供了一些变异方法，通过重写这些变异方法，让数组能产生响应式
  还有提供了set方法，可以主动触发响应式

## Vue的生命周期，每个生命周期都做了什么，在每个生命周期里适合做什么
* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* update
* beforeDestory
* destoryed

## MVVM模式
是一种数据驱动视图变化的模式，通过将数据与视图建立联系，数据一旦变化视图也立即响应变化。
M 模型，V 视图，VM ViewModel

## 高阶知识点
* 响应式原理
  订阅发布模式，Observer（Object.defineProperty），Watcher，Compiler
* nextTick，事件循环与渲染时机
* VNode，虚拟DOM
* diff算法，patch过程
* 工具函数，数据类型校验
* 模板解析，解析、优化、生成...AST
* 组件通讯，单项数据流，on-emit
* 生命周期