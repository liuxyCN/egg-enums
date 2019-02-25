'use strict';

const path = require('path');

module.exports = app => {
  const directory = path.join(app.config.baseDir, 'app/enums');
  app.loader.loadToApp(directory, 'enums', {
    inject: app,
    ignore: '_*',
    caseStyle: 'upper',
  });
};
