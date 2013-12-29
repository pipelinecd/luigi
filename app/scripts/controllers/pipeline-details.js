'use strict';

angular.module('luigiApp')
    .controller('PipelineDetails', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {

        $scope.allRuns = [];
        var runs = [];

        $http.get('http://api.pipelinecd.com/pipelines/' + $scope.pipeline.id + '/runs').success(function (runs) {
            $scope.allRuns = runs;
            $scope.runs = $(runs).slice(0, 1);

        });

        $scope.getStatusLabelClass = function (someValue) {
            if (someValue === "RUNNING")
                return "label label-primary";
            else if (someValue === "FAILED")
                return "label label-danger";
            else if (someValue === "SUCCESS")
                return "label label-success";
            else if (someValue === "NEED_ACTION")
                return "label label-warning";
            else
                return "label label-default";
        };

        $scope.getStatusName = function (someValue) {
            if (someValue === "RUNNING")
                return "Running";
            else if (someValue === "FAILED")
                return "Failed";
            else if (someValue === "SUCCESS")
                return "Success";
            else if (someValue === "NEED_ACTION")
                return "Need action";
            else
                return "Unknown";
        };

        $scope.loadMore = function (amount) {
            if($scope.runs.length >= $scope.allRuns.length) {
                return;
            }

            for(var i = 0; i < amount; i++) {
                var toPush = $scope.allRuns[$scope.runs.length];
                if(toPush != null) {
                    $scope.runs.push(toPush);
                }
            }
        };
    }]);
