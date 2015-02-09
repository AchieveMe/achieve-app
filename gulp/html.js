var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('html', function () {
  gulp.src(settings.path.app + 'index.html')
  .pipe($.plumber({
    errorHandler: utils.showError
  }))
  .pipe(gulp.dest(settings.path.dist))
  .pipe($.connect.reload())
});

gulp.task('html:watch', ['html'], function () {
  $.watch(settings.path.app + 'index.html', function () {
    gulp.start('html');
  });
});
