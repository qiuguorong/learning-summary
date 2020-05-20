## 以用户为中心的性能指标
* 导航后，是否成功
* 用户互动内容是否足够
* 用户是否可以交互
* 流畅度是否令人愉悦

## FP（first paint）首次绘制
导航后，不同于导航前屏幕内容不同于之前内容的时间点，如标题？

## FCP（first contentful paint）首次内容绘制
导航后，第一个dom内容的渲染时间。
不过内容应该是文本，图片，canvas，svg这些内容才算，包含在iframe中的内容不算，空白DOM内容不算
如何监测：

如何提升：
* 提升文字的展示时间，font-display

## FMP（first meaningful paint）首次有效绘制

## Speed Index

## First CPU Idle

## TTI（time to interactive）可交互时间

## Max Potential First Input Delay

## 长时间任务

## 输入延迟