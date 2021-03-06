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
            .when('/pipelines/:pipelineId', {
                templateUrl: 'views/pipeline-details.html',
                controller: 'PipelineDetails'
            })
            .when('/run/:runId', {
                templateUrl: 'views/run.html',
                controller: 'PipelineRunCtrl'
            })
            .when('/project/:projectId', {
                templateUrl: 'views/project.html',
                controller: 'ProjectRunCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        }
    });
