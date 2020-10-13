## 创建实例方式变更，修改为工厂模式
```js
Vue.createApp(/* options */).mount('#app')
```

## 生命周期函数变更
* beforeDestroy -> beforeUnmount
* destroyed -> unmounted

## 组件全局注册
* Vue.component => Vue.createApp().component()

## 增加Teleport内置组件
可将组件随意挂载在任意位置

## 异步组件注册方式
```js
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```
```js
const app = Vue.createApp({})
const AsyncComp = Vue.defineAsyncComponent(() => import('./my-async-component'))
app.component('async-example', AsyncComp)
```

## 增加Suspensen内置组件

## 移除过滤器？

## Mixin -> Composition API
vue2 < -- > vue3
* 代码组织
  vue2 通过选项组织代码
  vue3 通过逻辑组织代码
* 逻辑复用
  vue2 Vue.component hoc/Vue.mixin/Render props
  vue3 composition api，函数式hooks
* 类型推导
  vue2 设计之初，大部分属性、方法都在this对象上，没有照顾到TS
  后来官方推出了vue-class-component支持TS
  vue3 使用函数式，天然都TS友好
* tree shaking


## 自定义指令钩子函数变更
命名与Vue 生命周期更加统一

## 响应式原理做了更改
* Proxy 做数据代理
* 响应式系统包单独分离
  3.0 -> Vue.reactive
  2.0 -> Vue.observable
* Vue.ref/Vue.toRefs

## computed
```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})
```

## 吃透Proxy与Reflect，是理解Vue3响应式的基础