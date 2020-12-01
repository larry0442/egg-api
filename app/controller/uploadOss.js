/*
 * @Author: your name
 * @Date: 2020-11-29 23:43:11
 * @LastEditTime: 2020-11-30 00:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \egg-api\app\controller\uploadOss.js
 */
'use strict';

const Controller = require('egg').Controller;
class UploadOssController extends Controller {
  async uploadOss() {
    const { ctx } = this;
    const data = await ctx.service.uploadOss.uploadOss({ folder: 'app/img/' });
    if (data) {
      ctx.body = data;
    } else {
      ctx.body = {};
    }

  }
  async getUploadToken() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const res = await service.uploadOss.getUploadToken(payload);
    ctx.helper.success({ ctx, res });
  }
}
module.exports = UploadOssController;
