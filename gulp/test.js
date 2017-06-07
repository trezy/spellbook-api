'use strict';

const config = require('../config/env/default');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const mongoose = require('../config/lib/mongoose');
const runSequence = require('run-sequence');

// Local settings
var changedTestFiles = [];

// Mocha tests task
gulp.task('mocha', function(done) {
  // Open mongoose connections
  var testSuites = config.assets.tests;
  var error;

  mongoose.loadModels();

  // Connect mongoose
  mongoose.connect(function() {

    // Run the tests
    gulp.src(testSuites)
      .pipe(mocha({
        reporter: 'spec',
        timeout: 10000
      }))
      .on('error', function(err) {

        // If an error occurs, save it
        error = err;
      })
      .on('end', function() {
        // When the tests are done, disconnect mongoose and pass the error state back to gulp
        mongoose.disconnect(function() {
          done(error);
        });
      });
  });
});

// Run the project tests
gulp.task('test', function(done) {
  runSequence('dropdb', 'lint', 'mocha', done);
});
