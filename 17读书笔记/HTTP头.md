# http 头字段
工具：wireshark

## 通用头
可以用在请求头与响应头中，但是不会影响请求体或响应体
* Date: 报文创建的日期和时间
* [Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control): 通过指定指令来实现缓存机制
* Connection(keep-alive): 决定当前的事务完成后，是否会关闭网络连接。会存在`线头阻塞`
* Pragma: http 1.0实现缓存机制，用于2 1.1向后兼容1.0
* Transfer-Encoding: 
* Via: 经过哪些代理服务器

## 请求头
* Accept 能够接受的类型
* Accept-Charset 能够接受的字符集
* Accept-Encoding 能够接受的编码方式
* Accept-Language 能够接受的自然语言
* Authorization
* If-Match 
* If-None-Match
* If-Modified-Since 
* If-Unmodified-Since
* If-Range
* Range
* Host 域名与端口
* Referer
* User-Agent

## 响应头
* Age
* Server
* Accept-Ranges
* Vary 用来控制缓存

## 实体头
可以影响请求体或响应体
* Allow
* Location
* Content-Base
* Content-Type
* Content-Length 请求或响应体的长度
* Content-Language 
* Content-Encoding 数据使用的编码，如gzip
* Content-Location
* Content-MD5 请求体的内容的二进制 MD5 散列值，以 Base64 编码的结果
* Content-Range
* Etag
* Expires
* Last-Modified

## CORS
* access-control-allow-methods
* access-control-allow-origin
* access-control-max-age

## 如何指示缓存
强缓存
* Expires 客户端绝对时间，一般与Date头进行判断缓存是否过期
* Cache-Control 浏览器相对时间
协商缓存
弱校验器，因为只能精确到1秒
* If-Modified-Since 请求头，请求资源最后修改时间，上次Last-Modified的值
* Last-Modified 响应头，请求资源最后修改时间
强校验器
* If-None-Match 请求头，资源标识符，上次ETag的值
* ETag 响应头，资源标识符

## Cache-Control
* no-store 不缓存
* no-cache 缓存，但需要协商
* public 缓存，可以被任何中间人缓存
* private 缓存，只能被浏览器缓存
* max-age=<seconds> 缓存，能够缓存的秒数
* must-revalidate 缓存，必须协商

## 缓存的种类
只有GET请求才能被缓存
* 浏览器缓存（私有）
* 代理缓存
* 网关缓存
* CDN缓存
* 反向代理缓存
* 负载均衡缓存
* 服务器缓存

## 如何使用缓存
判断新鲜度，缓存空间有限，会定期清理，进行缓存驱逐，通常需要与服务端进行协商
* 去内存中查看
* 去磁盘中查看
* 查看cache-control
* 没有cahce-control，查看expires
* 没有expires，查看Last-Modified
* 判断是否过期，请求发送到服务端协商

## 如何指示内容处理，如压缩
