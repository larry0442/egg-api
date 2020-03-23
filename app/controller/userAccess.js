'use strict';

const Controller = require('egg').Controller;

class UserAccessController extends Controller {

  constructor(ctx) {
    super(ctx);

    // egg-validate
    // 手机和密码进行登录,参数校验
    this.UserLoginTransfer = {
      mobile: { type: 'string', required: true, allowEmpty: false },
      password: { type: 'string', required: true, allowEmpty: false },
    };
    this.UserPasswdTransfer = {
      password: { type: 'string', required: true, allowEmpty: false },
      newPassword: { type: 'string', required: true, allowEmpty: false },
    };
  }

  // 手机&密码登录
  // api/access/login
  async login() {
    const { ctx, service } = this;
    ctx.validate(this.UserLoginTransfer);
    const payload = ctx.request.body || {};
    const res = await service.userAccess.login(payload);
    ctx.helper.success({ ctx, res });
  }

  // 登出
  // 获取当前登录用户信息

  async current() {
    const { ctx, service } = this;
    // token 里面拿到id
    const _id = ctx.state.user.data._id;
    const user = await service.user.find(_id);
    if (!user) {
      ctx.throw(404, '获取登录用户信息出错');
    }
    // 返回的数据中请记得过滤密码!~
    const {
      _id: id,
      mobile,
      realName,
      role,
      avatar,
    } = user;
    const res = {
      id,
      mobile,
      realName,
      role,
      avatar,
    };
    ctx.helper.success({ ctx, res });
  }
  // 修改密码
  async updatePasswd() {
    const { ctx, service } = this;
    ctx.validate(this.UserPasswdTransfer);
    const payload = ctx.request.body || {};
    await service.userAccess.updatePasswd(payload);
    ctx.helper.success({ ctx });
  }
}

module.exports = UserAccessController;
