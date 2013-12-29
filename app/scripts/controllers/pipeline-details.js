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

        $scope.loadMore = function (amount) {
            if($scope.runs.length >= $scope.allRuns.length) {
                return;
            }
            for(var i = 0; i < amount; i++) {
                $scope.runs.push($scope.allRuns[$scope.runs.length]);
            }
        };
    }]);
