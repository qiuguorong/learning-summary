
## 设计目标

### 功能

提供基础组件、业务组件，供所有业务使用，以提供开发效率，降低通用错误。

### 服务形式

* 以[npm](https://www.npmjs.com/package/bxs-ui-vue)方式`全局引入`，普通的调用方式
  ```js
  import Vue from 'vue'
  import Bxs from 'bxs-ui-vue'
  Vue.use(Bxs)
  ```
* 以[npm](https://www.npmjs.com/package/bxs-ui-vue)方式`按需引入`，使用`Babel`插件`babel-plugin-component`支持
  ```js
  import Vue from 'vue'
  import { Toast, Badge } from 'bxs-ui-vue'
  Vue.use(Toast)
  Vue.use(Badge)
  ```

## 模块现状和优化行动

### 表单组件
表单组件包括Input、Radio、Checkbox、MaillInput等，具体可查看[组件库文档](http://wy-front.git-page.winbaoxian.com/bxs-ui-vue/#/quickstart)。 <br />
目前表单组件都是单独使用，无法实现一些高级功能，如：

* 光标自动定位首错误项
* 内置表单校验规则
* 表单校验统一报错

需要增加新的`Form组件`，以统一控制以上基础的表单组件

### 组件按需引入
组件的引入方式大部分是`按需引入`，但是因为组件库的打包策略问题，不同组件可能包含相同的代码，或者在组件相互依赖情况下，单个组件代码可能被引入多次，造成按需引入的组件文件偏大。 <br />
现需要修改组件库的打包策略，不再默认提供`umd`的格式，提供`esm`、`cjs`、`umd`等多种格式。优先使用`esm`，组件依赖同一个文件的情况下，就不再会重复打包，从而优化了文件体积。

### 组件内使用px单位
组件在一些情况下，不得不在js代码中使用`px`赋值宽高等，但是，由于业务使用组件库的情况大部分都采用`rem`，使得组件出现异常。
现需要提供一些指导方案，供各个组件维护者处理这种情况，如
* js中尽量使用 `.class` 控制元素宽高
* js中可动态计算宽高，取得元素的值
* 提供统一工具在js中进行`px2rem`