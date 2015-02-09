var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('server', function () {
  $.connect.server({
    root: settings.path.dist,
    livereload: true,
    port: 4242
  });
});
