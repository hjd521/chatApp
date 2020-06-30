# chat-app

> A Vue.js project

## web

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

## node server
```
#进入sever目录并且进行依赖安装
cd server
cnpm install
# 运行mysql（目前使用docker作为mysql容器）
docker run -p 3306:3306 -v $PWD/database/mysql:/var/lib/mysql --name sql -e MYSQL_ROOT_PASSWORD=123456 -d mysql
# 通过pm2进行进程管理和项目启动
pm2 start server.js --watch
```
