## vue

### 生命周期

### 如何实现双向绑定

### 什么是VDom，如何实现

### diff算法，如何实现
[解析vue2.0的diff算法](https://github.com/aooy/blog/issues/2)

### HOC
目前VUE推荐的是使用`mixins`来进行代码复用，但是，`mixins`存在以下问题：
- 带来了隐式依赖
- 容易导致命名冲突
- 具有侵入性，改变`mixins`等同于修改原组件，伴随需求增长`mixins`将变得越来越复杂

所以，引入了`React`中`HOC（高阶组件）`的概念来实现代码复用 <br />
`HOC（高阶组件）`：接受一个组件（函数）作为参数，返回一个新的组件（函数）
```js
function WithConsole (WrappedComponent) {
  return {
    mounted () {
      console.log('I have already mounted')
    },
    props: WrappedComponent.props,
    render (h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      return h(WrappedComponent, {
        on: this.$listeners,
        props: this.$props,
        attrs: this.$attrs,
        // 透传 scopedSlots
        scopedSlots: this.$scopedSlots,
      }, slots)
    }
  }
}
```

### nextTick 原理
Promise -> MutationObserver -> setImmediate -> setTimeout
```js
// eventloop js顺序执行 - 执行完所有microTasks - 渲染 - 执行完所有macroTasks
// Promise
const timerFunc = () => {
  Promise.resolve().then(() => {
    console.log('flushCallbacks')
  })
  if (isIOS) setTimeout(noop)
}
// MutationObserver
let counter = 1
const observer = new MutationObserver(() => {
  console.log('flushCallbacks')
}))
const textNode = document.createTextNode(String(counter))
observer.observe(textNode, {
  characterData: true
})
const timerFunc = () => {
  counter = (counter + 1) % 2
  textNode.data = String(counter)
}
// setImmediate
const timerFunc = () => {
  setImmediate(() => {
    console.log('flushCallbacks')
  })
}
// setTimeout
const timerFunc = () => {
  setTimeout(() => {
    console.log('flushCallbacks')
  }, 0)
}
```

### slot插槽
#### 作用域插槽
子组件
```html
<slot v-bind:user="user"></slot>
```
父组件
```html
<!-- 良好的书写习惯，加上default -->
<custom-components v-slot:default="slotProps">{{slotProps.user}}</custom-components>
<!-- 解构插槽 -->
<custom-components v-slot:default="{ user }">{{user}}</custom-components>
```

### vuex

### vue-router

### vue webpack plugin

### vue webpack loader
