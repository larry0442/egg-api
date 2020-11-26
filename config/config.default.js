/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584580053634_5114';

  // add your middleware config here
  config.middleware = [ 'auth' ];// 中间件执行顺序则是按照数组中的顺序执行

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  };

  // 文件类型支持
  config.multipart = {
    fileExtensions: [ '.apk', '.pptx', '.docx', '.csv', '.doc', '.ppt', '.pdf', '.pages', '.wav', '.mov' ], // 增加对 .apk 扩展名的支持
  };

  // 加密工具配置
  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  // jwt配置
  config.jwt = {
    secret: 'dsaldkjl;sakjdl;jasfkl;sakl;fl;m',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  // mongodb 配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg_x',
    options: {
      userMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'xinchi',
      // 密码
      password: '123456',
      // 数据库名
      database: 'testpoj',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 不需要验证token的路由
  config.routerWhiteList = [ '/admin/login', '/admin/register' ];

  return {
    ...config,
    ...userConfig,
  };
};
