## webpack loader 作用
转换

## webpack loader 能做到哪个程度
把任何文件都当成模块 => 转成文件或可执行的js

## 编写一个 webpack loader
* 设定好loader的需求范围，功能尽可能的单一，只处理一种需求
* 取一个合适的loader名字
* 编写一个loader函数，入参可以是字符串也可以是buffer（设置raw）
* 使用loader-utils获取调用loader时的选项入参
* 使用schema-utils验证选项入参
* 编写loader逻辑
* 确定同步还是异步，导出转化后的字符串
* 导出后的字符串我们通常需要加上module.exports，将原始内容转化为js可执行的内容

```js
/**
* content 内容
* map 可选
* meta 可选
*/
function xxx-loader (content, map, meta) {}
```

## webpack loader api
* 官方文档
* loader-utils
* schema-utils

## webpack 如何运行loader
loader runner
loaders: [a, b, c, d]
* a.patch -> b.patch -> c.patch -> d.patch
* d -> c -> b -> a