'use strict';

const config = require('../config/db');
const chalk = require('chalk');
const mongoose = require('../config/mongoose');
const seed = require('../config/seed');
const gulp = require('gulp');
const runSequence = require('run-sequence');

// Drops the MongoDB database, used in e2e testing
// TODO: Needs to be setup to seed, currently a placeholder.
gulp.task('seedDB', function(done) {
  // Use mongoose configuration

  mongoose.connect(function(db) {
    db.connection.db.dropDatabase(function(err) {
      if (err) {
        return console.error(chalk.red(err));
      }

      seed.start(function() {
        db.connection.db.close(done);
      });
    });
  });
});

// Drops the MongoDB database, used in e2e testing
gulp.task('dropdb', function(done) {
  mongoose.connect(function(db) {
    db.connection.db.dropDatabase(function(err) {
      if (err) {
        return console.error(chalk.red(err));
      }

      console.log(chalk.green('Successfully dropped db: ', db.connection.db.databaseName));
      db.connection.db.close(done);
    });
  });
});

// Run the project seed for dev
gulp.task('seed', function(done) {
  runSequence('dropdb', 'lint', 'seedDB', done);
});
