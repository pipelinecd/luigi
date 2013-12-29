'use strict';

angular.module('luigiApp')
    .controller('PipelineDetails', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
            $http.get('http://api.pipelinecd.com/pipelines/' + $routeParams.pipelineId + '/runs').success(function(runs) {
                $scope.runs = runs;
            });

            $scope.getStatusLabelClass= function(someValue){
                if(someValue=="RUNNING")
                    return "label label-primary";
                else if(someValue=="FAILED")
                    return "label label-danger";
                else if(someValue=="SUCCESS")
                    return "label label-success";
                else if(someValue=="NEED_ACTION")
                    return "label label-warning";
                else
                    return "label label-default";
            }
    }]);
