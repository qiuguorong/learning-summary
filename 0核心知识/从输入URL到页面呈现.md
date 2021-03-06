## 从输入URL到页面呈现
* URL解析，检查URL合法性，解析到http协议，则发起一个网络请求
* 根据地址向DNS服务器查询IP
  浏览器DNS缓存 -> 系统缓存 -> 读取hosts文件 -> 路由器缓存 -> ISP缓存 ->向域名服务器发送请求
* 通过IP向Web服务器发起TCP连接
  三次握手（SYN：同步标识、ACK：确认标识、FIN：结束标识）
  ![](https://user-images.githubusercontent.com/18378034/33086507-629bbf82-cead-11e7-93cd-40fd2571ea28.png)
  client 向 server 发起确认，SYN = 1，ACK = 0
  server 向 client 回复确认，SYN = 1，ACK = 1
  client 向 server 回复得到确认 ACK = 1
  作用：为了建立可靠稳定的传输通道

  四次挥手，断开连接
  ![](https://user-images.githubusercontent.com/18378034/33181749-01b3c2f6-d037-11e7-98eb-315678cd9625.png)

  为什么要四次挥手？因为TCP是全双工的，client可以主动向server发送数据，反之也可

* 向Web服务器发起HTTP请求
  请求报文（报文首部、空行、报文主体）
  报文首部（请求行、请求首部字段、通用首部字段、其它）
  报文主体（）
* Web服务器返回请求内容
  响应报文（报文首部、空行、报文主体）
  报文首部（状态行、响应首部字段、通用首部字段、实体首部字段，其它）
  报文主体
  状态码：200、401、404、302、500、502
* 浏览器开始解析渲染页面并显示
  浏览器解析HTML（构建DOM树、下载资源、构建渲染树）
  replaint
  reflow
* 关闭连接

## 浏览器从下载HTML到页面展示
* 下载HTML文档
* 解析HTML节点，启动下载线程？进程？处理异步资源（css,js,font,image...）
* 构建DOM树，遇到CSS构建CSSOM树（不会阻塞DOM树构建，但是会阻塞渲染树构建），遇到JS下载并执行js（阻塞DOM树构建，阻塞渲染树构建）
* 构建渲染树
* paint
关键词：下载 解析 执行 构建DOM树，CSSOM树，Render树

## resource hints
* preload 作用于本页面，提升资源下载优先级
* prefetch 空闲时下载，优先级低，用于未来需要访问的页面

### 参考
* [TCP三次握手](https://github.com/sunyongjian/blog/issues/34)