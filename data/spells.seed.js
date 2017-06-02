'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const Spell = mongoose.model('Spell');
const spells = require('./spells');

/**
 * Seed Spells
 */
exports.seed = function(done) {

  var total = spells.length;
  var result = 0;

  function saveAll() {
    var doc = new Spell(spells.pop());

    doc.save(function(err, saved) {
      if (err) {
        throw console.error(err);
      }

      result += 1;

      if (result !== total) {
        return saveAll();
      }
      return done();
    });
  }

  Spell.find({}, function(err, spells) {
    if (spells.length !== total) {
      saveAll();
    }
  });
};
