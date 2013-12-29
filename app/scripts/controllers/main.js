'use strict';

angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://api.pipelinecd.com/pipelines').success(function(pipelines) {
        $scope.pipelines = pipelines;
    });
  });
