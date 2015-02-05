var utils      = require('./utils');
var gulp       = require('gulp');
var $          = require('gulp-load-plugins')();
var del        = require('del');

var appFolder  = 'app/';
var distFolder = 'mobile/www/';


gulp.task('clean:dist', function (callback) {
  del([distFolder], callback);
});

gulp.task('less', function () {
  gulp.src(appFolder + 'less/achieve-me.less')
  .pipe($.plumber({
    errorHandler: utils.showError
  }))
  .pipe($.less())
  .pipe(gulp.dest(distFolder + 'css/'));
});

gulp.task('fonts:md-icons', function () {
  gulp.src(appFolder + 'components/material-design-iconic-font/fonts/**/*')
  .pipe(gulp.dest(distFolder + 'fonts/'))
});
