## 以用户为中心的性能指标
* 导航后，是否成功
* 用户互动内容是否足够
* 用户是否可以交互
* 流畅度是否令人愉悦

## FCP（first contentful paint）首次内容绘制
导航后，第一个dom内容的渲染时间。
不过内容应该是文本，图片，非空白canvas，svg这些内容才算，包含在iframe中的内容不算
如何监测：
* PerformanceObserver entryType=paint startTime
* performance.getEntriesByType('paint') startTime
如何提升：


## FMP（first meaningful paint）首次有效绘制
关键内容展示给用户
如何监测：
* 设置主角元素，performance.mark

## Speed Index 渲染速度
页面加载过程内容的渲染速度
如何衡量？根据视觉进度？

## First CPU Idle 首次CPU空闲，lighthouse 6.0已启用

## Total Blocking Time
用户交互被阻塞的总时间

## TTI（time to interactive）可交互时间
如何衡量：
* PerformanceObserver entryType=longtask
* https://www.npmjs.com/package/tti-polyfill
如何监测：
```js
// Frame的间隔时间
function delectLongFrame () {
  const lastFrameTime = Date.now()
  requestAnimationFrame(() => {
    const currentFrameTime = Date.now()
    // 执行超过50ms，即是长时任务
    if (currentFrameTime - lastFrameTime > 50) {
      // long frame 
    }
    delectLongFrame()
  })
}
```

## Max Potential First Input Delay（输入延迟）

如何测量：
* performance.now() - event.timeStamp