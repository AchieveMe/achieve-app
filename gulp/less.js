var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();


gulp.task('less', function () {
  gulp.src(settings.path.app + 'less/achieve-me.less')
  .pipe($.if(!global.BUILD, $.sourcemaps.init()))
  .pipe($.plumber({
    errorHandler: utils.showError
  }))
  .pipe($.less())
  .pipe($.autoprefixer('last 5 versions'))
  .pipe($.if(global.BUILD, $.minifyCss({keepSpecialComments: 0})))
  .pipe($.if(!global.BUILD, $.sourcemaps.write('./')))
  .pipe(gulp.dest(settings.path.dist + 'css/'))
  .pipe($.livereload());
});

gulp.task('less:watch', ['less'], function () {
  $.watch(settings.path.app + 'less/**/*.less', function () {
    gulp.start('less');
  });
});
