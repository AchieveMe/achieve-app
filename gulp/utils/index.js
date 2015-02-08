var $     = require('gulp-load-plugins')();
var utils = {};

utils.showError = function (e) {
  $.util.beep();

  console.log('\n' + $.util.colors.white.bgRed(new Array(10).join('=')) + '\n');

  $.notify.onError({
    message: "<%= error.message %>",
    title: "Errou Rude em: <%=error.plugin %>!",
    onLast: true
  })(e);

  console.log('\n' + $.util.colors.white.bgRed(new Array(10).join('=')) + '\n');
};

module.exports = utils;
