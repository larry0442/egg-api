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
  // async create() {

  // }

  // async update() {

  // }
}

module.exports = UserController;
