## script link
* 动态添加的 script 标签隐含 async 属性
* 两者都会并行下载，不会影响页面的解析
![script async defer](../assets/images/script-async-defer.png)

### normal
![script normal](../assets/images/script-normal.png)

### async
* 脚本加载完立即执行
* 适合没有任何脚本依赖调用
![script async](../assets/images/script-async.png)
![script async](../assets/images/script-async-01.png)

### defer
* 按照加载顺序执行脚本
* DOMContentLoaded 事件触发之前执行
![script defer](../assets/images/script-defer.png)

### preload
```html
<link rel="preload" href="main.js" as="script">
```

### 预获取prefetch
预获取真正请求并下载了资源，并储存在缓存中
```html
<link rel="prefetch" href="image.png">
```

### DNS预解析 dns-prefetch
```html
<link rel="dns-prefetch" href="//api.winbaoxian.com">
```

### 参考
[defer和async的区别](https://segmentfault.com/q/1010000000640869)
[加快构建 DOM: 使用预解析, async, defer 以及 preload](https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650585412&amp;idx=1&amp;sn=7ec58c14a414b967e77dc84f79cdb8a5&source=41#wechat_redirect)
[你真的了解script标签吗？](https://www.kancloud.cn/xiak/quanduan/278616)

### 内化