## vue

### 生命周期

### 如何实现双向绑定

### 什么是VDom，如何实现

### diff算法，如何实现
[解析vue2.0的diff算法](https://github.com/aooy/blog/issues/2)

### HOC
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
        // 透传 scopedSlots
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs
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