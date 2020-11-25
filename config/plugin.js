'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  bcrypt: {
    enable: true,
    package: 'egg-bcrypt',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },

  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
