var utils    = require('./utils');
var settings = require('../settings');
var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();
var del      = require('del');


gulp.task('default', ['clean:dist'], function (cb) {
  global.BUILD = true;
  gulp.start(['fonts:md-icons', 'html', 'templates', 'less']);
});

gulp.task('app:watch', ['clean:dist'], function (cb) {
  gulp.start(['fonts:md-icons', 'html:watch', 'templates:watch', 'less:watch', 'server']);
});

gulp.task('clean:dist', function (callback) {
  del([settings.path.dist], callback);
});
