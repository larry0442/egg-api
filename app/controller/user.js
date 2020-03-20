'use strict';
/*
  user controller
*/
const Controller = require('egg').Controller;

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.UserCreateTransfer = {
      mobile: { type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/ },
      password: { type: 'password', required: true, allowEmpty: false, min: 6 },
      realName: { type: 'string', required: true, allowEmpty: false, format: /^[\u2E80-\u9FFF]{2,6}$/ },
    };
    // 更新
    this.UserUpdateTransfer = {
      mobile: { type: 'string', required: true, allowEmpty: false, format: /^[0-9]{11}$/ },
      realName: { type: 'string', required: true, allowEmpty: false, format: /^[\u2E80-\u9FFF]{2,6}$/ },
    };

  }
  /*
  create: 新增
  update: 更新
  removes: 移除
  findOne: 查找
  find: 查找所有
*/
  async create() {
    const { ctx, service } = this;
    ctx.validate(this.UserCreateTransfer);
    const payload = ctx.request.body || {};
    const res = await service.user.create(payload);
    ctx.helper.success({ ctx, res });
  }

  // Put - api/user/:id
  async update() {
    const { ctx, service } = this;
    ctx.validate(this.UserUpdateTransfer);
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    const res = await service.user.update(id, payload);
    ctx.helper.success({ ctx, res });
  }

  // remove
  // Delete - api/user/:id
  async remove() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    // 调用service进行具体业务逻辑操作
    let res = await service.user.remove(id);
    // 不返回删除的用户信息
    res = {};
    ctx.helper.success({ ctx, res });
  }

  // 查询用户信息
  //  Get- api/user/:id
  async find() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const res = await service.user.find(id);
    ctx.helper.success({ ctx, res });
  }

  // 查询所有用户信息(简单分页 pageSize, currentPage)
  async findAll() {
    const { ctx, service } = this;
    const payload = ctx.query;
    console.log(payload);
    const res = await service.user.findAll(payload);
    ctx.helper.success({ ctx, res });
  }
}

module.exports = UserController;
