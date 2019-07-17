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
