define(['angular'], function(angular) {
  var app = angular.module('UsefulPiecesApp');

  app.controller('UsefulPiecesController', function($scope) {

    $scope.vertical_radio_buttons = [
        {text: 'this is a button'},
        {text: 'and so is this'},
        {text: 'and this'},
        {text: 'and this'},
        {text: 'but definitely not this one'}
    ];

    console.log($scope.vertical_radio_buttons);

  });

  console.log('asdfasdfasdf');
  return app;
});

console.log('thingy...');
