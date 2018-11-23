### 目的
使用`Express`+`Ejs`+`Less`开发，对所有资源进行`压缩`并`同步`到浏览器端。



### Quickstart

开发模式，具备热更新，边修改浏览器边刷新，`dev` 端口 `7000`，配置项端口为 `3001`
```bash
$ npm run dev
```

构建项目，将文件压缩、打包、编译，输出 `dist` 目录
```bash
$ npm run build
```

生产模式，不具备热更新，运行在 `3000` 端口
```bash
$ npm run start
````

#### 目录结构：

```
├── app.js   # Express Server
├── bin
│   └── www  # 启动Server
├── dist     # 编译压缩目录(部署目录)
│   ├── css
│   ├── img
│   ├── js
│   ├── views
│   └── lib  # 第三方库目录(bower安装)
├── .bowerrc # bower前端安装库
├── gulpfile.js  # Gulp配置文件
├── package.json
├── public       # 开发目录
│   ├── img
│   ├── js
│   └── less
├── routes
│   ├── index.js
│   └── users.js
└── views      # html
    ├── error.ejs
    └── index.ejs
```
