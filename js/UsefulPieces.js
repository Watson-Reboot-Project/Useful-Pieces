define(['angular', 'ui-bootstrap'], function(angular) {
  var app = angular.module('UsefulPiecesApp', ['ui.bootstrap']);

  app.controller('UsefulPiecesController', function($scope) {

    $scope.selected_button = 'Nothing!';

    $scope.vertical_radio_buttons = [
        'this is a button',
        'and so is this',
        'and this',
        'but definitely not this one'
    ];

    $scope.selected_dropdown = 'Nothing!';

    $scope.dropdown_items = [
      'this is an option',
      'and so is this',
      'and this',
      'but not this (either!)'
    ]

    $scope.dropdown_function = function(item) {
      $scope.selected_dropdown = item;
      console.log(item);
    }

  });

  return;
});

