var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();
var del      = require('del');


gulp.task('default', ['clean:dist'], function (cb) {
  global.BUILD = true;
  gulp.start(['fonts:md-icons', 'less']);
});

gulp.task('app:watch', ['clean:dist'], function (cb) {
  $.livereload.listen();
  gulp.start(['fonts:md-icons', 'less:watch']);
});

gulp.task('clean:dist', function (callback) {
  del([settings.path.dist], callback);
});
