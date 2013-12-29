'use strict';

angular.module('luigiApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'pipelineServices'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/runs/:runId', {
                templateUrl: 'views/pipelineRun.html',
                controller: 'PipelineRunCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
