'use strict';

angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://api.pipelinecd.com/pipeline').success(function(data) {
        $scope.pipelines = data;
    });

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
