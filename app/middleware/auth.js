'use strict';

module.exports = (options, app) => {
  return async function(ctx, next) {
    const whiteList = app.config.routerWhiteList;
    // 当前url
    const url = ctx.url;
    // 判断当前路由是否不需要验证token,在白名单内不需要验证token
    const flag = whiteList.includes(url);
    if (flag) {
      // 不需要验证token 的白名单
      await next();
    } else {
      // 获取 token
      let token = ctx.headers.authorization ? ctx.headers.authorization : '';
      // 把 Bearer 截取掉，解析的时候不需要加上 Bearer
      token = token.substring(7);
      // 解析 token
      try {
        const decode = await app.jwt.verify(token, app.config.jwt.secret);
        ctx.state.userinfo = decode;
        await next();
      } catch (err) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          message: '认证失败，token失效或解析错误',
          data: null,
        };
      }
    }
  };
};
