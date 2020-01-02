## HTTP
HTTP/1.1，HTTP构建在TCP之上，属于应用层协议

### 一次HTTP请求（7）
1. TCP3次握手，启动TCP连接
2. 浏览器发送请求命令
3. 浏览器发送请求头信息，发送一空白行告知服务器，结束头信息发送
4. 服务器响应，应答协议版本号和状态码
5. 服务器响应头信息，发送一空白行，结束头信息发送
6. 服务器响应报文体
7. 关闭TCP连接

### Methods
Options、Get、Head、Post、Put、Delete、Trace、Connect...

### Get请求
GET的最大长度限制是因为 浏览器和web服务器限制了URI的长度，一个英文占用2个字节，一个中文字占用3-4个字节不等
* 用与获取数据
* 有长度限制，最好不超过 2083字节（2K + 35），IE 2083byte，safari，Chrome 8182byte
* 请求可以被缓存
* 请求报文没有报文体

### Post请求
* 用与提交数据
* 请求不能被缓存
* 请求没有长度限制
* 请求报文包含报文体

### 几种常见的Post请求
* Content-Type: application/json
  Request Payload: { key: value }

* Content-Type: application/x-www-form-urlencoded
  Form Data: key=value

* Content-Type: multipart/form-data;boundary=***
  Form Data: file: (binary)
  boundary: 边界字符串，用来区分各个数据