'use strict';

const _ = require('lodash');
const path = require('path');
const config = require('../config');
const mongoose = require('../config/mongoose.js');
const chalk = require('chalk');
const glob = require('glob');

// global seed options object
var seedOptions = {};

module.exports.start = function start(done) {
  mongoose.loadModels();

  // Globbing model files
  glob('data/*.seed.js', (err, files) => {
    if (err) {
      return console.error(chalk.red(err));
    }

    if (files.length === 0) {
      console.error(chalk.yellow('No files to seed!'));
      return done();
    }

    let seeded = 0;

    files.forEach(seedPath => {
      require(path.resolve(seedPath)).seed(function() {
        seeded += 1;
        if (seeded === files.length) {
          done();
        }
      });
    });
  });
};
