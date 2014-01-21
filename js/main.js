require.config({
  baseUrl: 'js/',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap-3',
    jquery:         '../lib/js/jquery',
    'ui-bootstrap': '../lib/js/ui-bootstrap'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap:      {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'UsefulPieces', 'bootstrap'], function(angular, app) {
  angular.element(document).ready(function() {
    angular.resumeBootstrap(['UsefulPiecesApp']);
  });
});
