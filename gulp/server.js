var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('server', function () {
  gulp.src(settings.path.dist)
  .pipe($.webserver({
    port: 4242,
    livereload: true
  }))
});
