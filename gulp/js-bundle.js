var utils      = require('./utils');
var settings   = require('../settings');
var gulp       = require('gulp');
var $          = require('gulp-load-plugins')();
var glob       = require('glob');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var exorcist   = require('exorcist');
var browserify = require('browserify');
var watchify   = require('watchify');


gulp.task('js-bundle', function () {
  return browserify()
  .transform('browserify-ngannotate')
  .on('bundle', onBundle)
  .bundle()
  .on('error', utils.showError)
  .pipe(source('achieve-me.bundle.js'))
  .pipe($.plumber({
    errorHandler: utils.showError
  }))
  .pipe(buffer())
  .pipe($.uglify())
  .pipe(gulp.dest(settings.path.dist + 'js/'))
});

gulp.task('js-bundle:watch', function () {
  watchify.args.debug = true;
  var browserifyBundler = browserify(watchify.args).on('bundle', onBundle);
  var watchBundler = watchify(browserifyBundler);

  watchBundler.on('update', watchifyRebundle);

  $.watch(settings.path.app + 'js/**/*.js', function (file) {
    if(file.event === 'add' || file.event === 'unlink') {
      console.log(file.event.toUpperCase() + ': ' + file.path);
      watchBundler.reset();
      watchifyRebundle();
    }
  });

  return watchifyRebundle();

  function watchifyRebundle() {
    return watchBundler
    .bundle()
    .on('error', utils.showError)
    .pipe(exorcist(settings.path.dist + 'js/achieve-me.bundle.js.map'))
    .pipe(source('achieve-me.bundle.js'))
    .pipe($.plumber({
      errorHandler: utils.showError
    }))
    .pipe(gulp.dest(settings.path.dist + 'js/'))
    .pipe($.connect.reload())
  }
});

function onBundle() {
  var bundle = this;
  var files = glob.sync(settings.path.app + 'js/**/*.js');
  files.forEach(function (file) {
    bundle.add('./' + file);
  });
}
