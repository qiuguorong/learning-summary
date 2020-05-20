# Hybrid APP
* 如JS-SDK一样的Bridge
* 如RN一样的，DOM-VDOM-原生DOM
* 如微信小程序，JS逻辑与UI渲染双线程？？

## 实现
基于原生webview的机制和开放API
* API注入，原生访问JS环境上下文，并注入对象或方法
* WebView URL Scheme，URL跳转拦截