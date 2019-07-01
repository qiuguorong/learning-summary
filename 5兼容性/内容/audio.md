## 音频播放器

### 自定义音频播放器
该音频播放器目前仅在移动设备上兼容<br/>

### 如何开发自定义音频播放器

#### 对象核心属性及事件
1. [对象属性](http://www.w3school.com.cn/jsref/dom_obj_audio.asp)
* readyState:返回音频当前的就绪状态。
  ```js
  //0 = HAVE_NOTHING - 没有关于音频/视频是否就绪的信息
  //1 = HAVE_METADATA - 关于音频/视频就绪的元数据
  //2 = HAVE_CURRENT_DATA - 关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒
  //3 = HAVE_FUTURE_DATA - 当前及至少下一帧的数据是可用的
  //4 = HAVE_ENOUGH_DATA - 可用数据足以开始播放
  ```
* buffered:返回表示音频已缓冲部分的 TimeRanges 对象。
* duration:返回音频的长度（以秒计）。
* `currentTime`(最核心):设置或返回音频中的当前播放位置（以秒计）。

2. [事件](http://www.w3school.com.cn/tags/html_ref_eventattributes.asp)
* loadedmetadata:当元数据（比如分辨率和时长）被加载时运行的脚本。
* loadeddata:当媒介数据已加载时运行的脚本
* play:当媒介已就绪可以开始播放时运行的脚本。
* playing:当媒介已开始播放时运行的脚本。
* `timeupdate`(最核心):当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。
* pause:当媒介被用户或程序暂停时运行的脚本。
* ended:当媒介已到达结尾时运行的脚本

#### 开发流程
1. 初始化audio对象,取得audioDOM对象,并取相关属性
2. 初始化音频播放器样式,包含两个进度条(缓冲进度条与播放进度条)与时间(播放时间与总时间)
3. 创建缓冲进度条定时器,不断取buffered更改缓冲进度条样式,缓冲结束关闭缓冲定时器
4. 初始化audio事件
* 点击播放按钮click事件 执行`play()`事件或`pause()`事件
* `loadedmetadata`或`loadeddata`或`playing` 设置音频总时间`duration`
* `timeupdate` 设置当前播放时间`currentTime`与音频总时间`duration`,并更新进度条播放进度和播放位置
* `ended` 移除播放状态

#### 兼容性处理
不同移动设备(IOS、Android)事件的执行顺序和不同事件状态下的对象属性值均不一样<br/>
1. 事件的执行顺序兼容性
  ```js
  //Chrome事件顺序: loadedmetadata(duration开始有值)、loadeddata
  //Chrome点击播放: play、playing、timeupdate
  //chrome点击暂停: pause
  //Chrome结束播放: ended

  //IOS事件顺序: loadedmetadata(duration开始有值)
  //IOS点击播放: play、loadeddata(仅第一次)、playing、timeupdate
  //IOS点击暂停: pause
  //IOS结束播放: ended

  //Android事件顺序:loadedmetadata(部分duration开始有值,Galaxy Note3 Lite 4G 4.3)、loadeddata、timeupdate
  //Android点击播放: play、playing、timeupdate(部分duration开始有值,vivo X5S L 4.4.4)
  //Android点击暂停: pause
  //Android结束播放: ended
  ```
2. `duration`兼容性
`duration`对象属性,大部分设备`loadedmetadata`事件触发时有值,但是有些设备到`timeupdate`才有值,故需要兼容性处理
3. `buffered`兼容性
确认readyState大于等于3状态下所有设备均会有值
4. 拖动进度条兼容性
  ```js
  // 阻止事件冒泡到播放进度条move事件上
  // 如不加会在IOS 8会产生影响,导致无法滑动
  e.preventDefault();
  e.stopPropagation();
  ```

## 设备兼容
| 设备| 版本 | 播放 | 缓冲 | 点击 | 滑动 |
| --- | --- | --- |  --- |  --- |  --- |
| iPhone5C | 8.1.2 | √ | √ | √ | √ |
| iPhone5C | 10.3.1 | √ | √ | √ | √ |
| iPhone5S | 8.3 | √ | √ | √ | √ |
| iPhoneSE | 11.0 | √ | √ | √ | √(不那么流畅) |
| iPhone6 | 10.1.1 | √ | √ | √ | √ |
| iPhone6S | 10.3.2 | √ | √ | √ | √ |
| iPhone7P | 10.3.2 | √ | √ | √ | √ |
| iPad | 10.3.1 | √ | √ | √ | √ |
| 小米2S | 4.1.1 | √ | × | √ | √(声音会跑) |
| 红米Note2 | 5.0.2 | √ | √ | √ | √(不流畅) |
| 红米Note3 | 6.0.1 | √ | √ | √ | √ |
| 华为Mete8 | 7.0 | √ | √ | √ | √ |
| 华为TAG AL00 | 5.1 | √ | √ | √ | √ |
| Galaxy Note3 Lite 4G | 4.3 | √ | × | √ | √ |
| Vivo X5SL | 4.4.4 | √ | √ | √ | √ |
| MEIZU MX5 | 5.0.1 | √ | √ | √ | √ |
| OPPO R9TM | 5.1 | √ | √ | √ | √(不灵敏) |
| OPPO R7S | 4.4.4 | √ | √ | √ | √(不灵敏) |
