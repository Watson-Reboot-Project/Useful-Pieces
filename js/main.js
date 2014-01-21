require.config({
  baseUrl: 'js/',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap-3'
  },
  shim: {
    angular: {exports: 'angular'}
  }
});

// window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'UsefulPieces'], function(angular, app) {
  // angular.resumeBootstrap(['UsefulPiecesApp']);
  angular.bootstrap(document, ['UsefulPiecesApp']);
  console.log('does this even happen?');
});

console.log('how about this?');
