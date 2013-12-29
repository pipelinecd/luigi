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
            .when('/pipeline/:id', {
                templateUrl: 'views/pipeline.html',
                controller: 'PipelineCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
