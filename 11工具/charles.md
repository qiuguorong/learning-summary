## Charles HTTPS配置
1. 在Charles软件Help -> SSL Proxying -> Install Charles Root Certificate中下载证书
2. 将证书设置为受信任
* Mac 钥匙串 -> 双击`Charles Proxy CA`证书 -> 信任选择始终信任
* Windows 开始 -> 运行 -> mmc -> 点击`文件`选择`添加/删除管理单元` -> 选择`证书`并添加 -> 完成并确定 -> 将`Charles Proxy CA`证书从`个人`中复制到`受信任的根证书颁发机构`
3. 手机通过`https://www.charlesproxy.com/getssl/`下载证书
4. 手机证书设置受信任
* IOS 设置 -> 通用 -> 关于手机 -> 证书信任设置 勾选`Charles Proxy CA`证书
* Android ？
5. 在Charles软件Proxy -> SSL Proxying Setting -> SSL Proxying下添加`*:443`
 