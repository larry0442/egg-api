'use strict';
/*
  name: 角色名
  access：权限
*/
module.exports = app => {
  // 引入mongoose
  const mongoose = app.mongoose;
  // 新建scheme
  const RoleSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    access: { type: String, unique: true, required: true, default: 'user' },
    description: { type: String, default: 'no description' },
    extra: { type: mongoose.Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now },
  });
  return mongoose.model('Role', RoleSchema);
}
;
