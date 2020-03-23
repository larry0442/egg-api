'use strict';
const Service = require('egg').Service;

class UserAccessService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    const { mobile, password } = payload;
    // 通过手机校验用户
    // 有-继续校验密码
    // 无- throw
    // 生成token
    const user = await service.user.findByMobile(mobile);
    if (!user) {
      ctx.throw(404, '找不到此用户');
    }
    const varifyPwd = await ctx.compare(password, user.password);
    if (!varifyPwd) {
      ctx.throw(404, '密码不正确~!');
    }
    return {
      token: await service.actionToken.apply(user._id),
    };
  }
  // 更新密码
  async updatePasswd(payload) {
    const { ctx, service } = this;
    const _id = ctx.state.user.data._id;
    const user = await service.user.findById(_id);
    if (!user) {
      ctx.throw(404, 'user is not found');
    }
    const verifyPsw = await ctx.compare(payload.password, user.password);
    if (!verifyPsw) {
      ctx.throw(404, 'user password error');
    } else {
      // 重置密码
      payload.password = await ctx.genHash(payload.password);
      return service.user.findByIdAndUpdate(_id, payload);
    }

  }
}
module.exports = UserAccessService;

