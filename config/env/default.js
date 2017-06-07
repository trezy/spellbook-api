'use strict';

module.exports = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/spellbook-api',
    options: {
      user: process.env.MONGODB_USER || '',
      pass: process.env.MONGODB_PASS || ''
    },
    promise: global.Promise,

    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  assets: {
    allJS: ['index.js', 'config/*.js', 'api/**/*.js'],
    gulp: ['gulpfile.js', 'gulp/*.js'],
    tests: ['tests/*.js']
  }
};
