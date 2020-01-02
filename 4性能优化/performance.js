const performance = window.performance || window.msPerformance || window.webkitPerformance

console.log(performance)

// 内存情况
const memoryPerf = performance.memory
// 导航情况
// redirectCount 重定向的数量
// type 0: 用户通过常规导航方式访问页面,1: 用户通过刷新,2: 用户通过后退按钮访问本页面
const navigationPerf = performance.navigation
// https://pic1.zhimg.com/80/v2-a9f7be2c5aaa973e405bd0b8da7e6890_hd.jpg
const timingPerf = performance.timing

// DNS查询耗时
const dnsTiming = timingPerf.domainLookupEnd - timingPerf.domainLookupStart
// TCP链接耗时
const tcpTiming = timingPerf.connectEnd - timingPerf.connectStart
// request请求耗时
const requestTiming = timingPerf.responseStart - timingPerf.requestStart
// response请求耗时
const responseTiming = timingPerf.responseEnd - timingPerf.responseStart
// 解析dom树耗时？
const domParseTiming = timingPerf.domComplete - timingPerf.domLoading
// 首屏时间
const fpTiming = timingPerf.domLoading - timingPerf.fetchStart

const entries = Performance.getEntries()

// IntersectionObserver polyfill
// https://github.com/w3c/IntersectionObserver/tree/master/polyfill
// 实现了IntersectionObserver、IntersectionObserverEntry

// requestIdleCallback polyfill
// 为什么是50
// 其实浏览器的主线程在每一帧处理完用户输入、动画计算、合成帧等操作后，通常会处于空闲状态，直到下一帧开始、或者收到新的用户输入、或者pending的任务满足了执行条件等。
// 每一帧时间16.66ms，包含处理用户交互、js解析执行、帧开始、布局、绘制
const requestIdleCallback =
  requestIdleCallback ||
  function(cb) {
    const start = Date.now();
    return setTimeout(function() {
      cb({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };
