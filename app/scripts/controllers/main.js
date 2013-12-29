'use strict';

angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$http.get('http://api.admin.pipelinecd.com/pipelines').success(function(data) {
        $scope.pipelines = [{name: 'Pipeline 1', status: 'Running'}, {name: 'Pipeline 2', status: 'Failed'}];
    //});
  });
