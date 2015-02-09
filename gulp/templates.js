var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('templates', function () {
  gulp.src(settings.path.app + 'templates/**/*.html')
  .pipe($.plumber({
    errorHandler: utils.showError
  }))
  .pipe($.minifyHtml({
    empty: true,
    spare: true,
    quotes: true
  }))
  .pipe($.angularTemplatecache({
    module: settings.moduleName
  }))
  .pipe(gulp.dest(settings.path.dist + 'js/'))
  .pipe($.connect.reload())
});

gulp.task('templates:watch', ['templates'], function () {
  $.watch(settings.path.app + 'templates/**/*.html', function () {
    gulp.start('templates');
  });
});
