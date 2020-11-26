'use strict';

// 注册登录

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const res = await service.admin.login(payload);
    return ctx.helper.success({ ctx, res });
  }
}
module.exports = AdminController;
