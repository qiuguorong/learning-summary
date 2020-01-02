# React中的编程思想
用于构建用户界面的javascript库。
- 声明式取代命令式（声明式渲染）（react取代jquery）
- 状态，某一时刻的数据或用户界面
- 响应式（状态 -> 视图）
- 单向数据流，单向数据绑定，相向数据绑定
- 组件化，组件间通信
- VDOM - DIFF算法
- JSX
- 函数式编程
- HOC (高阶组件)
- SSR（服务端渲染）
- Hook

## 与Vue的对比
- react 灵活性更高，处理大型业务时选择性更多
  vue 封装更完整，处理复杂度低业务时有更大的优势
- react 庞大的生态系统
  vue 生态系统缓慢发展
- react 需要手动实现 shouldComponentUpdate 方法
  vue 自动追踪自动实现 shouldComponentUpdate 方法
- react 使用jsx，偏逻辑
  vue 主要使用templates，偏视图展示，也可以用jsx，但支持没有react好
- react HOC，hook
  vue mixins
- react 组件间通信
  vue 组件间通信
- react 中的React Native，成熟度更高
  vue 中的weex
- react + redux/mobx，redux操作繁琐，mobx与vuex类似
  vue + vuex
- react + taro，更加优秀
  vue + mpvue
- react + 测试，调试
  vue + 测试，调试
- react + 架手架create-react-app，不可配置
  vue + 架手架vue-cli，可配置