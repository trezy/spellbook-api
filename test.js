var koa = require('koa'),
  router = require('koa-router')(),
  app = new koa();


router.get('/path1', function(ctx, next) {
  ctx.body = 'Path1 response';
});

router.get('/path2', function*() {
  this.body = 'Path2 response';
});

app.use(router.routes());
app.use(router.allowedMethods());

// catch all middleware, only land here
// if no other routing rules match
// make sure it is added after everything else
app.use(function*() {
  this.body = 'Invalid URL!!!';
  // or redirect etc
  // this.redirect('/someotherspot');
});

app.listen(3000);
