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
  router.get('/api/role/',controller.role.findAll);
};
