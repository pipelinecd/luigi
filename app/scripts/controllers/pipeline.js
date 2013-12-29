'use strict';

angular.module('luigiApp')
    .controller('PipelineCtrl', ['$scope', '$routeParams', '$http',
        function ($scope, $routeParams, $http) {
            $http.get('http://api.pipelinecd.com/runs/'+$routeParams.runId).success(function (data) {
                $scope.pipeline = data;
            })
        }]);
