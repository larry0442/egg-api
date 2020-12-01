'use strict';
const Service = require('egg').Service;
const qiniu = require('qiniu');
const accessKey = 'iT2nv_WnPAuzhm8UI6QQGGkUu7zwBhs9LhmCFU_1'; // Access Key
const secretKey = 'SvuXJbhtdUfmXbs2YAP7CtqMt-jL3jF2_2DnytaC'; // Secret Key
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
// config.useHttpsDomain = true;
config.zone = qiniu.zone.Zone_z2;
const bucketManager = new qiniu.rs.BucketManager(mac, config);
class FileManagementService extends Service {
  async getFileList(payload) {
    const { bucket } = payload;
    // const bucket = 'xinchi-qiniu-img-bucket';
    // const key = 'app/img/1bb87d41d15fe27b500a4bfcde01bb0e.png';
    const options = {
      prefix: '', // 列举的文件前缀
      marker: '', // 上一次列举返回的位置标记，作为本次列举的起点信息
      limit: 100, // 每次返回的最大列举文件数量
      delimiter: '', // 指定目录分隔符
    };
    const res = await new Promise((resolve, reject) => {
      bucketManager.listPrefix(bucket, options, function(err, respBody, respInfo) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            resolve(respBody);
          }
        }
      });
    });
    if (res) {
      return {
        data: res,
      };
    }
    return {
      data: null,
    };

  }
  /**
   * @function
   * @param {object} payload -bucket和文件key
   */
  async getFileInfo(payload) {
    const { bucket, key } = payload;
    const res = await new Promise((resolve, reject) => {
      bucketManager.stat(bucket, key, (err, respBody, respInfo) => {
        if (err) {
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            resolve(respBody);
          }
        }
      });
    });
    if (res) {
      return res;
    }
    return {};
  }
  /**
 * @function
 * @param {object} payload -{旧bucket 旧 key,新bucket, 新key, 强制同名覆盖}
 * **/
  async updateFileName(payload) {
    const { bucket, key, newBucket, newKey, force } = payload;
    const options = {
      force,
    };
    const res = await new Promise((resolve, reject) => {
      bucketManager.move(bucket, key, newBucket, newKey, options, (err, respBody, respInfo) => {
        if (err) {
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            resolve(respBody);
          }
        }
      });
    });
    if (res) {
      return res;
    }
    return {};
  }

  /**
   * @function
   * @param {object} payload -{bucket,key}
   * **/
  async removeFile(payload) {
    const { bucket, key } = payload;
    const res = await new Promise((resolve, reject) => {
      bucketManager.delete(bucket, key, (err, respBody, respInfo) => {
        if (err) {
          reject(err);
        } else {
          if (respInfo.statusCode === 200) {
            resolve(respBody);
          }
        }
      });
    });
    if (res) {
      return res;
    }
    return {};
  }
}
module.exports = FileManagementService;
