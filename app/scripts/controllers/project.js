'use strict';

angular.module('luigiApp')
    .controller('ProjectRunCtrl', ['$scope', '$routeParams', 'PipelineRun', '$http',
        function ($scope, $routeParams, PipelineRun, $http) {
            $http.get('http://api.pipelinecd.com/pipelines/'+$routeParams.projectId).success(function(pipe) {
                  $scope.pipe = pipe;
                  $http.get('http://api.pipelinecd.com/pipelines/'+pipe.id+'/runs').success(function(pipelines) {
                       $scope.pipelines = pipelines;
                  });
              });

            $scope.getStatusLabelClass = function (someValue) {
                if (someValue == "RUNNING")
                    return "label label-primary"
                else if (someValue == "FAILED")
                    return "label label-danger";
                else if (someValue == "SUCCESS")
                    return "label label-success";
                else if (someValue == "NEED_ACTION")
                    return "label label-warning";
                else
                    return "label label-default";
            }

            $scope.getFlowLabelClass = function (someValue) {
                if (someValue == "RUNNING")
                    return "alert alert-info"
                else if (someValue == "FAILED")
                    return "alert alert-danger";
                else if (someValue == "SUCCESS")
                    return "alert alert-success";
                else if (someValue == "NEED_ACTION")
                    return "alert alert-warning";
                else
                    return "alert alert-warning";
            }
        }]);
