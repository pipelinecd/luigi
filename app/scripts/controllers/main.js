'use strict';

angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$http.get('http://api.admin.pipelinecd.com/pipelines').success(function(data) {
        $scope.pipelines = [{name: 'Pipeline 1', status: 'running'}, {name: 'Pipeline 2', status: 'failed'}, {name: 'Pipeline 3', status: 'success'}];
    //});

    $scope.whatClassIsIt= function(someValue){
        if(someValue=="running")
            return "label label-primary"
        else if(someValue=="failed")
            return "label label-danger";
        else if(someValue=="success")
            return "label label-success";
        else
            return "label label-default";
    }
  });
