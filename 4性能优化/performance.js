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
