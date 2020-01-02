# Babel

## babel 是什么
Babel是一个工具链，主要用于代码转换，如将ES6+语法转化为兼容性的ES5语法。

## babel 怎么使用
推荐使用`babel.config.js`进行配置

## babel env 是什么，怎么使用
是一组plugin的preset <br />
useBuiltIns
- 'usage'，会按需引用使用到的ES6功能
- 'entry', 需要手动在代码顶部import 'polyfill'
- 'false', default, 部分ES6方法不进行转义，需要如下配置
  ```js
  module.exports = {
    entry: ["@babel/polyfill", "./app/js"],
  };
  ```

## babel-core 是什么
提供以编程的方式来使用Babel
```js
const babel = require("babel-core")
// => { code, map, ast }
babel.transform("source code", options);
```

## babel/core-js 是什么
一系列 es6 和 es6+ 对象和方法的集合

## babel/plyfill 是什么
@babel/polyfill 模块包括 core-js 和一个自定义的 regenerator runtime（生成器，async，await） 模块用于模拟完整的 ES2015+ 环境。
polyfill会添加到全局作用域中，通过添加到`global.prototype`实现（会造成原型污染），可以使用env preset提供的`useBuiltIns`配置成`usage`实现`polyfill`的按需引入

## babel/transform-runtime 是什么
- 不会造成全局污染
- 通常babel helpers会添加到每个文件，使用truansform-runtime可以优化babel helpers，使其移动到单一的 runtime 中
- 

## 如何编写babel plugin/preset

## 参考
- [Babel 中文官方](https://www.babeljs.cn)
- [Babel 英文官方](https://babeljs.io)
- [Babel handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)