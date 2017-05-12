'use strict';

const assets = require('../config/assets');
const gulp = require('gulp');
const eslint = require('gulp-eslint');

// ESLint JS linting task
gulp.task('lint', function() {
  return gulp.src(assets.allJS)
    .pipe(eslint())
    .pipe(eslint.format());
});
