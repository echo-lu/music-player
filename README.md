# music-player

> 音乐App

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目介绍

### 目录结构
--src
	--api 后端请求代码
	--common 静态资源
	--components 组件
	--router 路由
	--store vue文件
### tab组件
当某一个router被激活时，vue会对该router添加一个router-link-active类，我们可以为他添加一些样式。

### 轮播图
#### 抓取数据
jonp原理：
利用<script>标签没有跨域限制的“漏洞”来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址，形如： 
<script src="http://www.example.net/api?param1=1&param2=2"></script> 
并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。 
第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如： 
callback({"name":"hax","gender":"Male"}) 
这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。 


