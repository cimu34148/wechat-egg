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
  const config = exports = {
    wechatDebug: true,
    wechatBaseUrl: 'https://api.weixin.qq.com/cgi-bin/',
    wechatAppId: 'wx81a49c26071369d8',
    wechatAppSecret: 'f3548d8cbf7269dd61bb96a7cf20a61a',
    allowUrl: [
      'https://www.cimu34148.cn',
      'http://www.cimu34148.cn'
    ]
  };

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '106.52.56.220',   // Redis host
      password: '',
      db: 0,
    },
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.mysql = {
    client: {
      host: '106.52.56.220',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'wechat'
    }
  }

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: '84558',
    secret: '752da53affa4a9c26885ac5db5aba6e422a16b2b',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587627894252_1179';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.onerror = {
    json(err, ctx) {
      ctx.body = {
        code: 9999,
        data: '',
        msg: err
      };
      ctx.status = 500;
    },
  }
  
  return {
    ...config,
    ...userConfig,
  };
};
