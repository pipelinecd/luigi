'use strict';

angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$http.get('http://api.admin.pipelinecd.com/pipelines').success(function(data) {
        $scope.pipelines = [{name: 'Pipeline 1', status: 'RUNNING'}, {name: 'Pipeline 2', status: 'FAILED'}, {name: 'Pipeline 3', status: 'SUCCESS'}, {name: 'Pipeline 3', status: 'NEED_ACTION'}];
    //});

    $scope.getStatusLabelClass= function(someValue){
        if(someValue=="RUNNING")
            return "label label-primary"
        else if(someValue=="FAILED")
            return "label label-danger";
        else if(someValue=="SUCCESS")
            return "label label-success";
        else if(someValue=="NEED_ACTION")
            return "label label-warning";
        else
            return "label label-default";
    }
  });
