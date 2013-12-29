var pipelineServices = angular.module('pipelineServices', ['ngResource']);

pipelineServices.factory('PipelineRun', ['$resource',
    function ($resource) {
        return $resource('http://api.pipelinecd.com/runs/:runId', {}, {
            query: {method: 'GET'}
        });
    }]);