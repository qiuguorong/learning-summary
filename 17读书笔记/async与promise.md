# async...await...

## await v执行步骤（增加了2个Promise，3个microtick job）
* 给v包装一层Promise（会产生 PromiseResolveThenableJob与PromiseReactionJob）
* 给Promise附加一个处理程序以便稍后恢复执行异步函数
* 中断异步函数并返回隐式的Promise
* Promise resolve后，恢复执行异步函数，隐式的Promise resolve

## 与Promise比较
* 代码简洁，控制流与数据流更容易理解，更好的可读性
* 更好的debug体验与debug信息堆栈追踪
* 更好的执行性能（源于堆栈追踪）

## 堆栈跟踪
```js
// Promise
// a函数执行完后，作用域就消失了，b函数与c函数，需要额外的记录堆栈时间与空间
function a () {
  b().then(() => c())
}
// async/await
// a函数执行时被暂停，作用域还保存着，不需要额外的记录堆栈，类似于同步函数，在b函数或c函数需要输出堆栈信息时，可以用指针快速生成
async function a () {
  awati b()
  c()
}
```

## 注意注意注意注意
在V8 v7.2（Node 12？） 和 Chrome 72 中，--harmony-await-optimization（延迟0个时序） 已经默认开启。
并且 --harmony-await-optimization 规范已经正式合并到ECMAScript规范中。

## 其它新语法
* function *
* yield
* 工具 co
* 迭代器

## 参考
* [更快的异步函数和 Promise](https://v8.js.cn/blog/fast-async/)
* [令人费解的 async/await 执行顺序](https://juejin.im/post/6844903762478235656)
* [[译]Asynchronous stack traces: why await beats .then()](https://blog.fundebug.com/2018/07/18/javascript-engine-await-promise/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)