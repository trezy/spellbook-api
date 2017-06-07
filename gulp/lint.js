'use strict';

const _ = require('lodash');
const config = require('../config/env/default');
const gulp = require('gulp');
const eslint = require('gulp-eslint');

// ESLint JS linting task
gulp.task('lint', function() {
  var assets = _.union(
    config.assets.allJS,
    config.assets.gulp,
    config.assets.tests
  );

  return gulp.src(assets)
    .pipe(eslint())
    .pipe(eslint.format());
});
