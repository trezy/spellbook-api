'use strict';

const mongoose = require('mongoose');
const Spell = mongoose.model('Spell');

exports.list = function(ctx, next) {
  return Spell.find(ctx.query, function(err, spells) {
    if (err) {
      return console.error(err);
    }
    ctx.body = spells;
  });
};

exports.create = function(ctx, next) {
  return Spell.findById(ctx.params.id, ctx.request.body, function(err, spell) {
    if (err) {
      return console.error(err);
    }
    ctx.body = spell;
  });
};

exports.read = function(ctx, next) {
  return Spell.findById(ctx.params.id, function(err, spell) {
    if (err) {
      return console.error(err);
    }
    ctx.body = spell;
  });
};

exports.update = function(ctx, next) {
  return Spell.findByIdAndUpdate(ctx.params.id, ctx.body, function(err, spell) {
    if (err) {
      return console.error(err);
    }
    ctx.body = spell;
  });
};

exports.delete = function(ctx, next) {
  return Spell.findByIdAndRemove(ctx.params.id, function(err, spell) {
    if (err) {
      return console.error(err);
    }
    ctx.body = 'Spell deleted!';
  });
};
