# 视频调研及总结

## 基础知识
- 帧率：图形处理器每秒钟能够刷新几次，单位 FPS（每秒多少帧），60fps 表示 1 秒 60 帧
- 码率：编码器每秒编出的数据大小，单位 kbps，800kbps 表示 1 秒 800kb 或者 100KB 的数据
- 分辨率：单位英寸中所包含的像素点数

## 编码格式
[不同编码格式支持情况](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility)<br />
[多媒体编码格式检测](https://mediainfo.js.org)<br />
html 只支持 H.264 的编码格式，视频流视频编码 AVC(H.264)，音频流音视频编码 AAC<br />
web 最佳实践如下：
```html
<video contorls preload="metadata" poster="**.jpg">
  <!-- H.264 and AAC/MP3 in MP4 -->
  <source src="**.mp4" type="video/mp4" />
  <!-- VP8 and Vorbis in WebM -->
  <source src="**.webm" type="video/webm" />
  <!-- 兼容低版本的浏览器，主要是PC -->
  <source src="**.ogg" type="video/ogg" />
  <!-- Flash fallback -->
  ...
</video>
```
为什么会出现浏览器并不全支持相同的codecs呢？<br />
因为不同的codecs有各自的专利，而浏览器想要支持这些格式，就得支付高额的费用...<br />
以下视频皆为MP4（MPEG-4）格式
* 情况1：src配置找不到路径的文件（包括空），error code: 4
* 情况2：src配置视频编码：AVC（H.264），音频编码：AAC [视频地址](http://res.winbaoxian.com/autoUpload/common/h264aac_2f999e5322e6d34.mp4) 正常播放
* 情况3：src配置视频编码：非AVC(H.264)，音频编码：非AAC [视频地址](http://res.winbaoxian.com/autoUpload/common/error_0beee8e8a274d4b.mp4)，error code:4
* 情况4：src配置视频编码：非AVC(H.264)，音频编码：AAC [视频地址](http://res.winbaoxian.com/autoUpload/common/mpeg4divxaac_96aceaba7ad3bf4.mp4)，有声音无画面，未报错
* 情况5：src配置视频编码：AVC(H.264)，音频编码：非AAC 视频地址，无声音有画面，未报错（没找到视频源，未验证）
* 情况6：src配置视频编码：AVC(H.265)，音频编码：AAC [视频地址](http://res.winbaoxian.com/autoUpload/common/h265aac_5c03d9ccfbaa048.mp4)，有声音无画面，未报错

## 自定义video controls
#### 隐藏自带控件
```css
video::-webkit-media-controls {
  display: none !important;
}
// ??? 处理特定的WebKit
.custom-controls { 
  z-index: 2147483647;
}
```
```js
// Hide the default controls
video.controls = false
```
#### 播放/暂停
```js
playBtn.addEventListener('click', function(e) {
  if (video.paused || video.ended) video.play()
  else video.pause()
})
```
#### 结束
```js
stopBtn.addEventListener('click', function(e) {
  video.pause()
  video.currentTime = 0
  progress.value = 0
})
```
#### 静音
```js
muteBtn.addEventListener('click', function(e) {
  video.muted = !video.muted
})
```
#### 音量
```js
volumeBtn.addEventListener('click', function(e) {
  // 具体实现自行控制
  video.volume += 0.1
})
```
#### 进度
```js
video.addEventListener('loadedmetadata', function() {
  // 取得视频时长，但是在部分Android中无法正确获取
  // 部分Android点击播放后，才能正确获取到duration
  // 可在后台上传视频时，即获取正确的视频时长，通过接口返回
  progress.duration = data.duration ? data.duration : video.duration
})
video.addEventListener('timeupdate', function() {
  // 兼容写法
  if (!progress.duration) {
    progress.duration = video.duration
  }
  progress.value = video.currentTime
  progressBar.style.width = Math.floor((progress.value / progress.duration) * 100) + '%';
})
```
#### 全屏
```js
// 全屏功能是否可用
const isFullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen)
// 不支持全屏，则隐藏全屏按钮
if (!isFullScreenEnabled) {
  fullscreen.style.display = 'none'
}
// 判断是否处于全屏状态
const isFullScreen = function () {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
}
// 全屏按钮处理事件
const handleFullscreen = function () {
  if (isFullScreen()) {
    if (document.exitFullscreen) document.exitFullscreen()
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen()
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen()
    else if (document.msExitFullscreen) document.msExitFullscreen()
  } else {
    if (video.requestFullscreen) video.requestFullscreen()
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen()
    else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen()
    else if (video.msRequestFullscreen) video.msRequestFullscreen()
    else if (video.webkitEnterFullScreen) video.webkitEnterFullScreen()
  }
}
fsBtn.addEventListener('click', function(e) {
   handleFullscreen()
})
```
#### 终止视频下载
```js
video.pause()
// 不同浏览器行为不同，removeAttribute操作并不干净，src空字符串也有可能引起不必要的请求
video.src = ''
video.removeAttribute('src')
video.load()
```
#### 错误处理
```js
video.addEventListener('error', function(e) {
  // code 枚举如下
  // MEDIA_ERR_ABORTED: 1
  // MEDIA_ERR_DECODE: 3
  // MEDIA_ERR_NETWORK: 2
  // MEDIA_ERR_SRC_NOT_SUPPORTED: 4
  console.log(e.srcElement.error)
})
```
#### X5内核浏览器
```html
<video id="video"
  style="width: 100%" 
  controls
  preload="metadata"
  poster="https://media.winbaoxian.com//oss/default-dir/tENXEdrF4cMbG6W.png"
  src="https://res.winbaoxian.com/autoUpload/common/190628152749_6fa4d1cc65a4925.mp4"
  playsinline="true"
  webkitPlaysinlin="true"
  x5-playsinline="true"
  x5-video-player-type="h5"
  x5-video-player-fullscreen="true">
</video>
```
看 [X5同层播放器试用报告](https://x5.tencent.com/tbs/guide/web/x5-video.html) <br />
在同层播放器模式下，视频始终会自动全屏

## 常用事件兼容性
以下测试数据来源机型及环境
* PC Chrome v75.0.3770.100
* IOS iPhone 6P v11.4.1
* Android vivo X9Plus v7.1.2
* 微信 v7.0.4
* 保险师APP v5.1.0

#### readyState枚举

| 值 | 常量 | 说明 |
| -- | -- | -- |
| 0 | HAVE_NOTHING | 没有关于音频/视频是否就绪的信息 |
| 1 | HAVE_METADATA | 音频/视频已初始化 |
| 2 | HAVE_CURRENT_DATA | 数据已经可以播放(当前位置已经加载) 但没有数据能播放下一帧的内容 |
| 3 | HAVE_FUTURE_DATA | 当前及至少下一帧的数据是可用的(换句话来说至少有两帧的数据) |
| 4 | HAVE_ENOUGH_DATA | 可用数据足以开始播放-如果网速得到保障 那么视频可以一直播放到底 |

#### PC Chrome浏览器

| event | readyState | currentTime | buffered | duration | videoWidth/videoHeight |
| -- | -- | -- | -- | -- | -- |
| loadstart | 0 | 0 | - | - | 0/0 |
| durationchange | 1 | 0 | 2.5 | 121 | 672/378 |
| loadedmetadata | 1 | 0 | 2.5 | 121 | 672/378 |
| progress | 1 | 0 | 4.0 | 121 | 672/378 |
| suspend | 1 | 0 | 4.0 | 121 | 672/378 |
| loadeddata | 4 | 0 | 5.0 | 121 | 672/378 |
| canplay | 4 | 0 | 5.0 | 121 | 672/378 |
| canplaythrough | 4 | 0 | 5.0 | 121 | 672/378 |
| play | 4 | 0 | 5.0 | 121 | 672/378 |
| playing | 4 | 0 | 5.0 | 121 | 672/378 |
| timeupdate | 4 | 0 | 5.0 | 121 | 672/378 |
| progress | 4 | 0 | 5.0 | 121 | 672/378 |
| canplaythrough | 4 | 0.02 | 5.9 | 121 | 672/378 |
| progress | 4 | 0.11 | 9.0 | 121 | 672/378 |
| timeupdate | 4 | 0.14 | 10.0 | 121 | 672/378 |
| pause | 4 | 2.8 | 54 | 121 | 672/378 |
| seeking | 1 | 30 | 54 | 121 | 672/378 |
| seeked | 3 | 21 | 54 | 121 | 672/378 |

#### IOS 保险师app内

| event | readyState | currentTime | buffered | duration | videoWidth/videoHeight |
| -- | -- | -- | -- | -- | -- |
| loadstart | 0 | 0 | - | - | 0/0 |
| progress | 1 | 0 | -| 121 | 672/378 |
| suspend | 1 | 0 | - | 121 | 672/378 |
| durationchange | 1 | 0 | - | 121 | 672/378 |
| loadedmetadata | 1 | 0 | - | 121 | 672/378 |
| play | 1 | 0 | - | 121 | 672/378 |
| waiting | 1 | 0 | - | 121 | 672/378 |
| loadeddata | 2 | 0 | - | 121 | 672/378 |
| progress | 2 | 0 | -| 121 | 672/378 |
| stalled | 2 | 0 | - | 121 | 672/378 |
| canplay | 3 | 0 | 13 | 121 | 672/378 |
| playing | 3 | 0 | 13 | 121 | 672/378 |
| progress | 3 | 0 | 13 | 121 | 672/378 |
| timeupdate | 3 | 0 | 13 | 121 | 672/378 |
| canplaythrough | 4 | 0 | 38 | 121 | 672/378 |
| progress | 4 | 0.11 | 73 | 121 | 672/378 |
| timeupdate | 4 | 0.14 | 73 | 121 | 672/378 |
| pause | 4 | 2.8 | 121 | 121 | 672/378 |
| seeking | 4 | 30 | 54 | 121 | 672/378 |
| seeked | 4 | 21 | 54 | 121 | 672/378 |

#### IOS 微信内

| event | readyState | currentTime | buffered | duration | videoWidth/videoHeight |
| -- | -- | -- | -- | -- | -- |
| play | 0 | 0 | - | 0 | 0/0 |
| waiting | 0 | 0 | - | 0 | 0/0 |
| loadstart | 0 | 0 | - | - | 0/0 |
| durationchange | 1 | 0 | - | 121 | 672/378 |
| loadedmetadata | 1 | 0 | - | 121 | 672/378 |
| loadeddata | 3 | 0 | 2.2 | 121 | 672/378 |
| canplay | 3 | 0 | 222 | 121 | 672/378 |
| playing | 3 | 0 | 2.2 | 121 | 672/378 |
| progress | 3 | 0 | 2.2 | 121 | 672/378 |
| timeupdate | 3 | 0 | 2.2 | 121 | 672/378 |
| canplaythrough | 4 | 0 | 20 | 121 | 672/378 |
| progress | 4 | 0 | 20 | 121 | 672/378 |
| timeupdate | 4 | 0.08 | 20 | 121 | 672/378 |
| pause | 4 | 2.8 | 121 | 121 | 672/378 |
| progress | 4 | 2.8 | 121 | 121 | 672/378 |
| suspend | 4 | 2.8 | 121 | 121 | 672/378 |
| seeking | 4 | 30 | 121 | 121 | 672/378 |
| seeked | 4 | 30 | 121 | 121 | 672/378 |

#### Android 保险师app内

| event | readyState | currentTime | buffered | duration | videoWidth/videoHeight |
| -- | -- | -- | -- | -- | -- |
| loadstart | 0 | 0 | - | - | 0/0 |
| progress | 0 | 0 | -| 0 | 0/0 |
| suspend | 0 | 0 | - | 0 | 0/0 |
| durationchange | 1 | 0 | 1.5 | 121 | 672/378 |
| loadedmetadata | 1 | 0 | 1.5 | 121 | 672/378 |
| loadeddata | 4 | 0 | 1.5 | 121 | 672/378 |
| canplay | 4 | 0 | 1.5 | 121 | 672/378 |
| canplaythrough | 4 | 0 | 1,5 | 121 | 672/378 |
| play | 4 | 0 | 1.5 | 121 | 672/378 |
| playing | 4 | 0 | 1.5 | 121 | 672/378 |
| progress | 4 | 0 | 1.5 | 121 | 672/378 |
| timeupdate | 4 | 0.7 | 3.6 | 121 | 672/378 |
| progress | 4 | 0.11 | 73 | 121 | 672/378 |
| timeupdate | 4 | 0.14 | 73 | 121 | 672/378 |
| pause | 4 | 3.5 | 52 | 121 | 672/378 |
| seeking | 1/4 | 30 | 77 | 121 | 672/378 |
| seeked | 4 | 30 | 77 | 121 | 672/378 |

#### Android X5内核浏览器

| event | readyState | currentTime | buffered | duration | videoWidth/videoHeight |
| -- | -- | -- | -- | -- | -- |
| loadstart | 0 | 0 | - | 0 | 0/0 |
| durationchange | 4 | 0 | 0 | 0 | 0/0 |
| loadedmetadata | 4 | 0 | 0 | 0 | 0/0 |
| loadeddata | 4 | 0 | 0 | 0 | 0/0 |
| canplay | 4 | 0 | 0 | 0 | 0/0 |
| canplaythrough | 4 | 0 | 0 | 0 | 0/0 |
| play | 4 | 0 | 0 | 0 | 0/0 |
| playing | 4 | 0 | 0 | 0 | 0/0 |
| timeupdate | 4 | 0 | 0 | 0 | 672/378 |
| durationchange | 4 | 0 | 0 | 121 | 672/378 |
| timeupdate | 4 | 0.7 | 0 | 121 | 672/378 |
| timeupdate | 4 | 1.7 | 0 | 121 | 672/378 |
| pause | 4 | 6.4 | 0 | 121 | 672/378 |
| seeking | 4 | 30 | 121 | 121 | 672/378 |
| progress | 4 | 30 | 121 | 121 | 672/378 |
| suspend | 4 | 30 | 121 | 121 | 672/378 |
| seeked | 4 | 30 | 121 | 121 | 672/378 |

#### 事件总结
* [事件规范文档](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events) 并不可靠
* loadedmetadata事件 并不一定能获得时长和视频真实宽高
* durationchange事件 不一定每次都能获取时长和视频真实宽高，但是最后一次必定能获得时长和视频真实宽高（可能在播放后），据说在android 4.1版本以下获取到的时长为 0/1
* timeupdate事件（播放后）不一定每次都能获取时长和视频真实宽高，但是总会有获取到的时刻
* 视频缓冲buffered，不同宿主环境差异较大，可通过setInterval循环获取，注意兼容判断，buffered.end(0) >= duration 时定时器停止
* 部分宿主环境下，点击播放后才能获得时长，建议时长在后台上传时获取并通过接口返回

## 其它常见问题
#### 自动播放
早期版本或者webview未开启自动播放功能 必须要有交互才能自动播放，需要先引导用户进行交互
* IOS Safari无法自动播放，需用户交互
* 保险师APP内 原生开启了webview的自动播放功能，可以支持自动播放
* 微信内通过`WeixinJSBridgeReady`内调用`play`可以自动播放
  ```js
  document.addEventListener("WeixinJSBridgeReady", function (){ 
    video.play()
  }, false)
  ```
* 微信X5内核浏览器设置为H5同层播放时，无法自动播放

检测是否支持自动播放
```js
function autoPlayDetect () {
  var promise = document.querySelector('video').play()
  return new Promise((resolve, reject) => {
    if (promise !== undefined) {
      promise.then(() => {
        resolve()
      }).catch(() => {
        reject()
      })
    } else {
      reject()
    }
  })
}
```

#### 视频取消自动全屏
使用playsinline/webkitPlaysinline/x5-playsinline，在X5内核浏览器下开启同层播放还是会自动全屏

#### IOS 下无法设置音量
在IOS中，音量只受用户通过物理按键去控制，通过javascript去设置volume属性是无效的，读取volume属性会永远返回1

## 参考文章
- [MDN <video>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
- [MDN HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement)
- [MDN 媒体相关事件](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)
- [MDN HTML 的媒体支持:audio 和 video 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats)
- [MDN cross_browser_video_player](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)
- [X5同层播放器试用报告](https://x5.tencent.com/tbs/guide/web/x5-video.html)
- [视频播放--踩坑小计](https://juejin.im/post/5b189712f265da6e235488c1#heading-23)
