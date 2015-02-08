var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('fonts:md-icons', function () {
  gulp.src(settings.path.app + 'components/material-design-iconic-font/fonts/**/*')
  .pipe(gulp.dest(settings.path.dist + 'fonts/'));
});
