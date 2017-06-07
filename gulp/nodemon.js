'use strict';

const config = require('../config/env/default');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// Nodemon task
gulp.task('nodemon', function() {
  return nodemon({
    script: 'index.js',
    nodeArgs: ['--debug'],
    ext: 'js',
    verbose: true,
    watch: config.assets.allJS
  });
});
