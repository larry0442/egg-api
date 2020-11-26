'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async login(payload) {
    const { app } = this;
    const { userName } = payload;
    this;
    const token = await app.jwt.sign({
      username: userName,
    }, app.config.jwt.secret, { expiresIn: '1d' });
    return { token };
  }

}
module.exports = AdminService;
