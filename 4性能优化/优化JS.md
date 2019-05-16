## 优化js
打包（bundle） 下载（download） 解析（parse） 编译（compile） 执行（execute）

### Tree Shaking
* 什么是Tree Shaking
  去掉没用引用的代码
* webpack如何使用Tree Shaking

### Code Splitting
* Vendor拆分，将公共代码分离出来
  这部分代码修改频率极低，可以避免缓存失效带来的性能影响
  1. 第三方库代码
  2. 公共帮助类代码
  3. 可复用的业务代码
* 组件动态加载
  ```js
  // 正常加载
  import view from 'path/compontent.vue'
  // 懒加载，ES6
  const view = () => import('path/compontent.vue')
  // 懒加载
  const view = resolve => require(['path/compontent.vue'], resolve)
  // 懒加载，require.ensure
  const view = resolve => require.ensure([], () => resolve(require('path/compontent.vue')))
  ```

### uglifyJs
减少js文件体积

### 延迟脚本和动态脚本
JavaScript的下载和执行会阻塞用户界面的绘制和其他资源的下载

### 按需加载

### 代码优化
* 优化循环
* 闭包
* 内存泄露
* dom操作

### 垃圾回收