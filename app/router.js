'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // role
  router.post('/api/role/', controller.role.create);
  router.delete('/api/role/:id', controller.role.destory);
  router.put('/api/role/:id', controller.role.update);
  router.get('/api/role/:id', controller.role.findOne);
  router.get('/api/role/', controller.role.findAll);

  // user
  router.post('/api/user/', controller.user.create);
  router.put('/api/user/:id', controller.user.update);
  router.delete('/api/user/:id', controller.user.remove);
  router.get('/api/user/:id', controller.user.find);
  router.get('/api/user/', controller.user.findAll);

  // userAccess
  router.post('/api/access/login', controller.userAccess.login);
  router.get('/api/access/current', app.jwt, controller.userAccess.current);
  router.post('/api/access/update-passwd', app.jwt, controller.userAccess.updatePasswd);

  // uploads
  router.post('/api/files/upload', controller.upload.upload); // 需要提供fileName,只支持上传一个文件
};
