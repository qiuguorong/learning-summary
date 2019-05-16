## 性能优化

### 性能优化的目的
* 关乎用户体验
* 关乎用户去留
* 关乎用户转化率

### 性能指标
[以用户为中心的性能指标](https://developers.google.cn/web/fundamentals/performance/user-centric-performance-metrics)
![](https://developers.google.cn/web/fundamentals/performance/images/perf-metrics-load-timeline.png)
* 首次绘制与首次内容绘制（是否发生）
* 首次有效绘制和主角元素计时
* 耗时较长的任务（单次任务不超过50ms）
* 可交互时间
其它
* 响应：输入延迟时间（从点按到绘制）小于 100 毫秒，对于需要超过 500 毫秒才能完成的操作，请始终提供反馈
* 动画：每个帧的工作（从 JS 到绘制）完成时间小于 16.66 毫秒（60FPS）
* 空闲：主线程 JS 工作分成不大于 50 毫秒的块。
* 加载：页面可以在 1000 毫秒内就绪，启用渐进式渲染

### 怎么分析性能
* [RAIL性能模型](https://developers.google.cn/web/fundamentals/performance/rail)，包括响应、动画、空闲、加载
* Chrome DevTools
* LightHouse
* [Web Page Test](https://www.webpagetest.org/)
* [浏览器的Performance API](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)

### 如何性能优化
* 减少关键资源大小（HTML、CSS、JS）
* 使用HTTP缓存
* 迁移至HTTP/2，HTTP/2的性能优化与HTTP/1.1不同
* 使用资源提示尽早下载，使用<link rel="preload">
* script标签尽量使用async
* css非关键资源使用media或动态加载，使得不阻塞关键资源
* 拆分资源，利用浏览器可同时并行下载4个（不同浏览器不同）个资源的功能，在HTTP/2下发送多个请求的成本更低
* 优化关键渲染路径，启用渐进式渲染
* 优化动画, 在 10 毫秒内生成一帧
* 优化重排和重绘

### 资源优化
* 混淆压缩HTML、CSS、JS
* 使用GZIP
* 使用Webp，不但能保持高视觉质量，使用的数据比JPEG和PNG少
* 使用视频和非动画GIF，动画GIF占用大量的空间

### 一次页面加载过程
1. Send Request => Receive Response => Receive Data => Finish Loading
2. Parse HTML => DCL(DOMContentLoaded) => Layout => Update Layer Tree => Paint => Composite Layers
3. FCP（First Contentful Paint首屏渲染时间） => FMP（First Meaningful Paint）=> Load => pageshow
4. Minor GC => DOM GC => Run MicroTasks

### 一次渲染行为
JavaScript => Style => Layout => Paint => Composite

### 注意事项
* js是网页最昂贵的资源，需要经过下载、解析、编译、执行

### 术语
* FP：首次绘制，浏览器渲染任何在视觉上不同于导航前屏幕内容之内容的时间点
* FCP：首次内容绘制，浏览器渲染来自 DOM 第一位内容的时间点
* FMP：首次有效绘制
* TTI：可交互时间，用于标记应用已进行视觉渲染并能可靠响应用户输入的时间点

### 浏览器线程
* GUI渲染线程
* Javascript引擎线程
* 定时器出发线程
* 事件触发线程
* HTTP异步请求线程