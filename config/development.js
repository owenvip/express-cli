'use strict';

module.exports = {
  log4js: { // 日志配置
    appenders: [{
      'type': 'console'
    }],
    'replaceConsole': true
  },
  server: {
    port: 8888 // 项目监听端口
  },
  less: {
    globalVars: {
      imageUrl: '~""' // 图片访问路径,空白表示项目相对地址
    }
  },
  resUrl: '', // 当前项目访问路径,空白表示项目相对地址
  navHost:'credit.xycq.hualongdata.com',// 首页导航IP地址
  proxy: {
    '/credit': { // 要拦截的地址
      target: 'http://localhost:9999', // 要代理的地址
      pathRewrite: { // 拦截到的地址重写为
        '^/credit': '/'
      },
      changeOrigin: true
    }
  }
};