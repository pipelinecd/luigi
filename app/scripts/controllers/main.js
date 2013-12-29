'use strict';

angular.module('luigiApp')
    .controller('MainCtrl', function ($scope, $http) {

        console.log("scope1: " + $scope);

        $http.get('http://api.pipelinecd.com/pipelines').success(function (pipelines) {
            $scope.pipelines = pipelines;

//        for (var project in pipelines){
//            if (project.)
//        }
        });
    });
