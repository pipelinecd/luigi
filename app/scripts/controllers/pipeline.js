'use strict';

angular.module('luigiApp')
    .controller('PipelineCtrl', ['$scope', '$routeParams', 'PipelineRun',
        function ($scope, $routeParams, PipelineRun) {
            $scope.pipeline = PipelineRun.query({runId: $routeParams.runId});

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
        }]);
