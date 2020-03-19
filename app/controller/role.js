'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.createRule = {
      name: {
        type: 'string',
        required: true,
        allowEmpty: false,
      },
      access: {
        type: 'string',
        required: true,
        allowEmpty: false,
      },
      description: {
        type: 'string',
        required: false,
        allowEmpty: true,
      },
    };
  }

  // 创建角色
  async create() {
    const { ctx, service } = this;
    // 校验
    ctx.validate(this.createRule);
    // 组装参数
    const payload = ctx.request.body || { };
    // 调用service
    const res = await service.role.create(payload);
    // 返回
    ctx.helper.success({ ctx, res });
  }

  // 根据id,删除角色
  // api/role/destory/:id
  async destory() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    const res = await service.role.destory(id);
    ctx.helper.success({ ctx, res });
  }

  // 更新
  // api/role/update/:id
  //
  async update() {
    const { ctx, service } = this;
    // 校验参数
    console.log(ctx.request.body);
    ctx.validate(this.createRule);
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    await service.role.update(id, payload);
    ctx.helper.success({ ctx });
  }
}
module.exports = RoleController;
