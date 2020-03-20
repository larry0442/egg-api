'use strict';

const Service = require('egg').Service;

class RoleService extends Service {

  // 通用函数: 通过id查询角色
  async findRoleById(id) {
    return this.ctx.model.Role.findById(id);
  }

  async create(payload) {
    // 数据库创建数据,数据已经在controller内检验过
    const { ctx } = this;
    return ctx.model.Role.create(payload);
  }

  async destory(id) {
    const { ctx, service } = this;
    // 查询id对应collection是否存在
    const role = await service.role.findRoleById(id);
    if (!role) {
      // 抛出错误: 状态码, 报错信息
      throw (404, '没有找到相应角色');
    }

    // 查询并删除,参阅mongoose文档
    return ctx.model.Role.findByIdAndRemove(id);
  }

  async update(id, payload) {
    const { ctx, service } = this;
    // 查询是否存在这个角色
    const role = await service.role.findRoleById(id);
    if (!role) {
      throw (404, '找不到对应角色');
    }
    // 更新
    return ctx.model.Role.findByIdAndUpdate(id, payload);
  }

  // 根据id查找某个角色
  async findOne(id) {
    const { ctx, service } = this;
    const role = await service.role.findRoleById(id);
    if(!role){
      throw(404, '找不到对应角色');
    }
    return ctx.model.Role.findById(id);
  }

  // 查找所有角色
  async findAll(payload) {
    const { pageSize, currentPage } = payload;
    // 默认一页10条数据
    const skip = (Number(currentPage)-1)*(Number(pageSize)||10);
    const {ctx } = this;
    return ctx.model.Role.find({}).skip(skip).limit(Number(pageSize));
  }
}

module.exports = RoleService;
