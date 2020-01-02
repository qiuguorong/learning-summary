## NPM

### 本地调试
使用npm link bxs-ui-vue和npm unlink bxs-ui-vue
```bash
## 到bxs-ui工程下执行
npm link

## 到业务工程下执行
npm link bxs-ui-vue

## 取消本地调试执行
npm unlink bxs-ui-vue
```

### 发布npm
```bash
npm version patch
npm version minor
npm version major
git add .
npm publish
```

### .npmrc
engine-strict=true
registry=https://registry.npm.taobao.org/

### npm audit

### [npx](http://www.ruanyifeng.com/blog/2019/02/npx.html)
npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。
* 调用项目内模块
* 避免全局安装模块
