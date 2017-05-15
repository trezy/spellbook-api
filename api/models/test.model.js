'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Client Schema
 */
var TestSchema = new Schema({
  boolean: {
    type: Boolean,
    default: false
  },
  number: Number,
  string: {
    type: String,
    required: 'Must be set!'
  },
  date: {
    type: Date
  },
  array: {
    type: [String]
  }
});

mongoose.model('Test', TestSchema);
