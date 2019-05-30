## Postcss

### 开发postcss插件
```js
const postcss = require('postcss');
module.exports = postcss.plugin('plugin-name', opts => {
  opts = opts || {};
  return root => {
    // do something
  }
});

```