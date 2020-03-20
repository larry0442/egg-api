'use strict';

const Service = require('egg').Service;

class UserService extends Service {

  // 创建用户
  async create(payload) {
    const { ctx, service } = this;
    const role = service.role.findOne(payload.role);
    if (!role) {
      throw (404, '角色不存在~!');
    }
    // 哈希加密
    payload.password = await ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }
  // 修改用户信息
  async update(id, payload) {
    const { ctx } = this;
    const user = await ctx.model.User.findById(id);
    if (!user) {
      throw (404, '找不到对应用户~!');
    }
    return ctx.model.User.findByIdAndUpdate(id, payload);
  }

  // remove by id
  async remove(id) {
    const { ctx } = this;
    const user = await ctx.model.User.findById(id);
    if (!user) {
      throw (404, '找不到对应用户~!');
    }
    return ctx.model.User.findByIdAndRemove(id);
  }
}

module.exports = UserService;
