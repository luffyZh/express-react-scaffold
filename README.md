# express-react-scaffold
后端使用express，前端使用react的精简全家桶脚手架。
### 目录
 ```
   express-react-scaffold
     - public
     - server             //后端
       - db               //数据库目录
       - routes           //后端路由
       - public
       - server.js        // 后端入口文件
     - src //前端
       - common           // 公共组件
       - components       // 展示组件
       - constants        // 系统常量
       - containers       // 状态组件
       - redux            // redux相关
         - actions
         - reducers
         - store
         - middleware
       - App.js
       - index.js         // 前端入口文件 
     - .eslintrc          //eslint配置文件
     - .gitignore
     - config-overrides.js
     - package.json
     - README.md
     - yarn.lock
  ```
### 后端
只提供API接口服务，采用express+MongoDB
### 前端
使用react全家桶，react+react-router+react-redux

### 使用
```
1. git clone https://github.com/luffyZh/express-react-scaffold.git
2. cd express-react-scaffold
3. yarn install // 安装前端依赖
4. cd server && yarn install // 安装后端依赖
5. yarn start // 在express-react-scaffold目录下
```
> 使用之前请安装MongoDB并且在/server/config里面配置好你的数据库连接  

**更多细节，请访问如下链接查看：https://juejin.im/post/5ae3317e6fb9a07ac021fba4**
