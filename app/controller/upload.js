
'use strict';
const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');
const awaitWriteStream = require('await-stream-ready').write;

const Controller = require('egg').Controller;

class UploaderController extends Controller {
// 上传本地， getFileStream只支持上传一个文件
  async upload() {
    const { ctx } = this;
    // 获取文件流
    const stream = await ctx.getFileStream();
    // 定义文件名
    const name = 'egg-multipart-test/' + path.basename(stream.filename);
    // 目标文件
    const target = path.join('app/public/uploads', name);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }
    ctx.body = {
      // 所有表单字段都能通过 `stream.fields` 获取到
      fields: stream.fields,
    };
  }
}

module.exports = UploaderController;
