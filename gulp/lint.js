'use strict';

const _ = require('lodash');
const assetsConfig = require('../config/assets');
const gulp = require('gulp');
const eslint = require('gulp-eslint');

// ESLint JS linting task
gulp.task('lint', function() {
  var assets = _.union(
    assetsConfig.allJS,
    assetsConfig.gulp,
    assetsConfig.tests
  );

  return gulp.src(assets)
    .pipe(eslint())
    .pipe(eslint.format());
});
