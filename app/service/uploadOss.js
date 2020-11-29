/*
 * @Author: your name
 * @Date: 2020-11-29 23:43:40
 * @LastEditTime: 2020-11-30 00:34:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \egg-api\app\service\uploadOss.js
 */
'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');
const qiniu = require('qiniu');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const md5 = require('md5');
const bucket = ''; // 要上传的空间名
const imageUrl = ''; // 空间绑定的域名
const accessKey = ''; // Access Key
const secretKey = ''; // Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;// 华南 Z2
class UploadOssService extends Service {
  async uploadOss(payload) {
    const { folder } = payload;
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
    const localFilePath = path.join(__dirname, '../public/uploads', filename);
    const writeStream = fs.createWriteStream(localFilePath);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();
      const imgSrc = await new Promise((resolve, reject) => {
        formUploader.putFile(
          uploadToken,
          `${folder}${filename}`, // filename, 七牛bucket 没有文件夹概念，只能增加前缀app/img ,对象存储的value不能以/ or \开头
          localFilePath,
          putExtra,
          (respErr, respBody, respInfo) => {
            if (respErr) {
              // eslint-disable-next-line
              reject('');
            }
            if (respInfo.statusCode === 200) {
              resolve(imageUrl + '/' + respBody.key);
            } else {
              // eslint-disable-next-line
              reject('');
            }
            // 上传之后删除本地文件
            fs.unlinkSync(localFilePath);
          }
        );
      });
      if (imgSrc !== '') {
        return {
          url: imgSrc,
        };
      }
      return false;

    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      return false;
    }
  }
}
module.exports = UploadOssService;
