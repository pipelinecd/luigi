'use strict';

angular.module('luigiApp')
    .controller('PipelineRunCtrl', ['$scope', '$routeParams', 'PipelineRun',
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
