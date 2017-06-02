'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schools = require('../../data/magic-schools');
const classes = require('../../data/classes');

/**
 * Spell Schema
 */
let SpellSchema = new Schema({
  name: {
    type: String,
    required: 'This spell needs a name!'
  },
  description: {
    type: String,
    required: 'This spell needs a description!'
  },
  school: {
    type: String,
    enum: schools
  },
  classes: [{
    type: String,
    enum: classes
  }],
  level: {
    type: Number,
    min: 0,
    max: 9
  },
  castingTime: String,
  ritual: Boolean,
  range: String,
  duration: String,
  concentration: Boolean
});

mongoose.model('Spell', SpellSchema);
