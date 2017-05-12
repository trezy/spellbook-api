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
  test: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Test', TestSchema);
