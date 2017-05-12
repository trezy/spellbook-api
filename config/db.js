'use strict';

module.exports = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost/spellbook-api',
  options: {
    user: process.env.MONGODB_USER || '',
    pass: process.env.MONGODB_PASS || ''
  },
  promise: global.Promise,

  // Enable mongoose debug mode
  debug: process.env.MONGODB_DEBUG || false
};
