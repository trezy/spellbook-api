'use strict';

/**
 * Module dependencies.
 */
const should = require('should');
const mongoose = require('mongoose');
const Test = mongoose.model('Test');

/**
 * Globals
 */
let tests = true;

describe('Test Unit Tests:', function() {
  describe('Test Files', function() {
    it('should load and run', function(done) {
      (tests).should.be.true();
      done();
    });
  });
  describe('Test Model', function() {
    let test = new Test();

    it('should be able to save without problems', function(done) {
      this.timeout(0);
      test.save(function(err) {
        should.not.exist(err);
        done();
      });
    });
  });
});
