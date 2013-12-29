'use strict';

angular.module('luigiApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/pipelines/:pipelineId', {
                templateUrl: 'views/pipeline-details.html',
                controller: 'PipelineDetails'
            })
            .when('/runs/:runId', {
                templateUrl: 'views/pipeline.html',
                controller: 'PipelineCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
