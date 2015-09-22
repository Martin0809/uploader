#uploader

##1.install
在项目目录下执行：
```
npm install
```
##2.运行
在终端进入项目目录，执行：
```
node app.js
```
##3.uploader插件使用
####准备:
由于本插件重度依赖jquery，请在引用本插件前引用jquery.js
```
<script src="jquery.min.js">
<script src="uploader.js">
```
####html:
```
<input type="file" class="uploader">
```
####javascript:
```
$(".uploader").on("change", function() {
  $(this).uploader({
    url: "/uploader",
	success: function (res) {
	  alert("上传成功");
	},
	error: function () {
	  alert("上传失败");
	}
  }
}							
```
具体使用方法请[点击这里](http://martin0809.github.io/uploader)
