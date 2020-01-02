## TCP/IP

### 三次握手
为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误
* 第一次，客户端发送连接请求报文段给服务端，设置`SYN=1，ACK=0，seq=x`，然后客户端进入`SYN_SEND`状态，等待服务器确认
* 第二次，服务器收到报文，需要进行确认，设置`SYN=1，ACK=1，seq=y，ackn=x+1`，并发送给客户端，然后服务端进入`SYN_RECV`状态
* 第三次，客户端收到报文，设置`ACK=1，seq=x+1，ackn=y+1`，并发送给服务端，然后两端都进入`ESTABLISHED`状态
> 注：
seq:"sequance" 序列号；
ack:"acknowledge" 确认号；
SYN:"synchronize" 请求同步标志；
ACK:"acknowledge" 确认标志；
FIN:"Finally" 结束标志。

### 四次挥手
* 第一次，
* 第二次
* 第三次
* 第四次