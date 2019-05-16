## 分享PPT
[xss分析及预防.pptx](xss分析及预防.pptx)

## 文章XSS说明
根据[jQuery跨站脚本漏洞](http://www.cnvd.org.cn/patchInfo/show/136255)进行调研
<div style="color: red;font-weight:bold">调研结果：文章内富文本编辑器的内容存在XSS隐患</div>

### 文章中存在的XSS隐患
以下都是可能被XSS攻击的行为

#### 1. 文章评论
前端代码把`<` `>`转义成`&lt;` `/&gt;`，接口未转义，若前端代码使用.html()方法，会存在XSS隐患

#### 2. 回复评论
前端代码把`<` `>`会被转义成`&lt;` `/&gt;`，接口未转义，若前端代码使用.html()方法，会存在XSS隐患

#### 3. URL上的`hash`和`search`
业务内未使用`$(window.hash)`和`$(window.search)`的方法

#### 4. `.html()`等会引起`<script>`执行或标签渲染的方法
业务内使用.html()方法，html函数的参数是富文本编辑器中的内容，富文本编辑器中若包含`<script></script>`代码，会存在XSS隐患，需要使用工具[js-xss](https://github.com/leizongmin/js-xss)进行文本过滤

### XSS攻击的方式
#### 1. 存储型XSS攻击
恶意脚本来源于网站的数据库
```js
// 接口请求返回的数据库数据
var response = '<script>console.log(document.cookie)</script>'
$(dom).html(response)
```

#### 2. 反射型XSS攻击
恶意脚本来源于受害者请求
```js
// url: http://xxx?keyword=<script>alert('aaa')</script>
$(dom).html(keyword)
```

#### 3. DomXSS攻击
执行js过程中，攻击代码植入到页面，如下：
```js
// url: http://xxx#<img src onerror="alert('123')" />
$(location.hash)
// input value: <img src onerror="alert('123')" />
$($(input).val())
```

## 如何防止XSS漏洞
* 升级jQuery到最新版本，低版本中存在DomXSS漏洞
* 使用工具[js-xss](https://github.com/leizongmin/js-xss)进行文本过滤
* 更多预防措施请看PPT内容