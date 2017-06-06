'use strict';

/**
 * Module dependencies.
 */
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const config = require('../config/db');

// Load the mongoose models
module.exports.load = function(app, db) {

  // Globbing model files
  glob('api/routes/*.js', (err, files) => {
    if (err) {
      return console.error(chalk.red(err));
    }
    files.forEach(modelPath => {
      console.error(chalk.green('Loaded: ' + modelPath));
      require(path.resolve(modelPath))(app, db);
    });
  });
};
