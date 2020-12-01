'use strict';

const Controller = require('egg').Controller;

class FileManagementController extends Controller {
// 获取列表
  async getFileList() {
    const { ctx, service } = this;
    const payload = { ...ctx.request.query };
    const data = await service.fileManagement.getFileList(payload);
    if (data) {
      ctx.body = data;
    } else {
      ctx.body = { data: null };
    }
  }
  // 获取信息
  async getFileInfo() {
    const { ctx, service } = this;
    const payload = ctx.request.query;
    const res = await service.fileManagement.getFileInfo(payload);
    ctx.helper.success({ ctx, res });
  }
  // 重命名
  async updateFileName() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const res = await service.fileManagement.updateFileName(payload);
    ctx.helper.success({ ctx, res });
  }
  // 删除
  async removeFile() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const res = await service.fileManagement.removeFile(payload);
    ctx.helper.success({ ctx, res });
  }
}
module.exports = FileManagementController;
