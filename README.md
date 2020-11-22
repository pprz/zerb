# zerb

## 项目简介

采用后端分离实现简单的员工管理功能，前端vue实现响应式布局，支持分页，crud操作。后端采用nodejs+koa实现，使用校验器校验路由参数，转发请求至json-server api获取数据，基于第三方库实现全局异常处理，使后台代码更简洁，可读性高。

## 启动项目 

### 方法一

后端zerb_BE 目录下执行：
```
yarn
```

```
yarn start:dev
```

前端zerb_FE目录下执行：

```
yarn 
```

```
yarn start
```

### 方法二

```
docker-compose up -d
```

### 访问地址

前端： http://localhost:8080   
后端： http://localhost:5000   
数据API:  http://localhost:3002
## 测试

前后端均采用jest测试部分功能，测试页面布局，功能方法以及异步数据。

## 部分页面截图

根目录下 screenshot


