'use strict';

const mongoose = require('mongoose');

module.exports = function(app, db) {
  app.use(ctx => {
    ctx.body = 'Hello World';
  });
};
