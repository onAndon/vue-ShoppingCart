# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

一.项目结构
1.了解清楚需求，项目干嘛的，功能点有哪些


2.项目框架


3.每一个页面大致有什么功能点




项目目录
main.js ----------------  项目入口文件

App.vue ----------------  项目的根组件

common -----------------  放置公共组件的目录

components -------------   放置所有组件的目录

pages ------------------  放置每一个页面的目录

router ----------------- 放置路由的目录

services ---------------  放置数据请求和处理的文件目录

api ---------------  放置所有项目用到的接口

filter -----------    放置所有的过滤器




https://m.maizuo.com/v4/api/billboard/home?__t=1531376299343

https://m.maizuo.com/v4/api/film/now-playing?__t=1531376299351&page=1&count=5

https://m.maizuo.com/v4/api/film/coming-soon?__t=1531376299354&page=1&count=3



二.项目中可能遇到的问题：
1.解决一像素问题
.list .item {
  display: flex;
  padding: 0.33333rem 0.29333rem 0.29333rem 0.26667rem;
  position: relative;
}

/* solve 1px question */
.list .item:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #000;
  background: transparent;
  position: absolute;
  left: 0;
  bottom: -1px;
  transform: scaleY(0.5);
}


2.server.js用中间件解决跨域问题
在76行后写：'/v4'拦截的请求，目标服务器
 app.use('/v4',httpProxyMiddleware({
    target:'https://m.maizuo.com',
    changeOrigin:true
  }))






