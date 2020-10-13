## webpack plugin 的作用
解决loader无法实现的其它事情，可以自定义webpack的构建过程

## webpack plugin 能做到什么程度
可以处理各种各样的任务，包括打包优化，压缩，定义环境变量...

## 编写一个webpack plugin
webpack插件是带有apply方法的javascript对象（class）
```js
class xxxPlugin {
  constructor (options) {
    console.log('插件入参： options')
  }

  apply (compiler) {
    console.log('compiler 可以访问整个webpack生命周期')
  }
}
```

## webpack plugin api
* compiler
* compilation

## webpack 如何运行plugin