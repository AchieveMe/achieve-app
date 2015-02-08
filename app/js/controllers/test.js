angular.module('achieve-me').controller('TestCtrl', function ($scope) {
  var test = this;

  test.foo = function () {
    console.log('bar');
  };
});
