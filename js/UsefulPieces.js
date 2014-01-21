define(['angular', 'ui-bootstrap'], function(angular) {
  var app = angular.module('UsefulPiecesApp', ['ui.bootstrap']);

  app.controller('UsefulPiecesController', function($scope) {

    $scope.selected_button = 'Nothing!';
    $scope.vrb_list = [
        'this is a list item',
        'another list item',
        'and this one too',
        'but definitely not this one'
    ];
    $scope.vrb_group = [
        'this is a button',
        'as is this',
        'totes a button',
        'horseface'
    ]

    $scope.selected_dropdown_first = 'Nothing!';
    $scope.selected_dropdown_second = 'Nothing!';
    $scope.selected_dropdown_third = 'Nothing!';
    $scope.dropdown_items_first = [
      'this is an option',
      'and so is this',
      'and this',
      'but not this (either!)'
    ];
    $scope.dropdown_items_second = [
      'second dropdown list!',
      'click me!',
      'no, click me!',
      'don\'t click me.'
    ];

    $scope.dropdown_function = function(item) {
      $scope.selected_dropdown = item;
      console.log(item);
    }

  });

  return;
});

