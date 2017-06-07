'use strict';

/**
 * Module dependencies.
 */

// Load the mongoose models
module.exports.init = function(app) {
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });
};
