my-angularMvc
=====
###angular + require 
- node server.js 8882 /front
localhost:8882/app/front/index.html  生产环境 加载打包文件

- node server.js 8882 
 localhost:8882/app/index.html   开发环境 加载为合并的文件

####Build 打包
使用 r.js  打包，将css  js  template  合并成一个appMin.js  文件
```javascript
 node ../r.js  -o built.js
```

####有问题反馈

* 邮件(break_happy@163.com)
* site: [http://www.cnblogs.com/breakdown/](http://www.cnblogs.com/breakdown/)


####关于作者

```javascript
  var ihubo = {
    nickName  : "breakhappy",
    email:"break_happy@163.com"
    site : "http://www.cnblogs.com/breakdown/"
  }
```
