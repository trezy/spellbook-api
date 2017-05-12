'use strict';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

const fs = require('fs-extra');
const gulp = require('gulp');
const runSequence = require('run-sequence');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp')
  .filter(function(file) {
    return (/\.(js)$/i).test(file);
  })
  .map(function(file) {
    return require('./gulp/' + file);
  });

// Run the project in development mode
gulp.task('default', function(done) {
  runSequence('lint', 'nodemon', done);
});
