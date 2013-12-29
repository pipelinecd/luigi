'use strict';

angular.module('luigiApp')
    .controller('PipelineCtrl', ['$scope', '$routeParams', '$http',
        function ($scope, $routeParams, $http) {
            $http.get('http://api.pipelinecd.com/pipeline/' + $routeParams.id).success(function (data) {
                $scope.pipeline = data;
            })
        }]);
