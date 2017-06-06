'use strict';

const spells = require('./spell.controller');


module.exports = function(router) {
  router.get('/spells', spells.list);
  router.post('/spells/create', spells.create);
  router.get('/spells/:id', spells.read);
  router.put('/spells/:id/update', spells.update);
  router.get('/spells/:id/delete', spells.delete);
};
