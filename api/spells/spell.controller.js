'use strict';

const mongoose = require('mongoose');
const Spell = mongoose.model('Spell');

exports.list = async function(ctx, next) {
  let spells = await Spell.find(ctx.query);
  ctx.body = spells;
};

exports.create = async function(ctx, next) {
  let spell = new Spell(ctx.request.body);
  await spell.save();
  ctx.body = spell;
};

exports.read = async function(ctx, next) {
  let spell = await Spell.findById(ctx.params.id);
  ctx.body = spell;
};

exports.update = async function(ctx, next) {
  let spell = Spell.findByIdAndUpdate(ctx.params.id, ctx.request.body);
  ctx.body = spell;
};

exports.delete = async function(ctx, next) {
  let spell = Spell.findByIdAndRemove(ctx.params.id);
  ctx.body = 'Spell deleted!';
};
