'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'egg-api';
  }

  async mysql() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    ctx.body = await service.home.mysql(payload);
  }
}

module.exports = HomeController;
