'use strict';

describe('Controller: PipelineRunCtrl', function () {

  // load the controller's module
  beforeEach(module('luigiApp'));

  var PipelineRunCtrl, $httpBackend, scope, routeParamStub, PipelineRun;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {

    $httpBackend = $injector.get('$httpBackend');

// TODO replace string with fixtures
//    var f = jasmine.getFixtures();
//    jasmine.getFixtures().fixturesPath='test/mockdata';
//            getJSONFixture('single_pipeline.json')

    $httpBackend.whenGET('http://api.pipelinecd.com/runs/2').respond("{\"id\": \"2fde8a18-dd2c-4503-9dcb-dd3308d83437\",\"creationTime\": 1387968340000,\"status\": \"RUNNING\",\"currentStage\": \"deploy\",\"stages\": [{\"id\": \"1\",\"name\": \"compile\",\"status\": \"SUCCES\"},{\"id\": \"2\",\"name\": \"build\",\"status\": \"SUCCES\"},{\"id\": \"3\",\"name\": \"deploy\",\"status\": \"BUSY\"},{\"id\": \"4\",\"name\": \"release\",\"status\": \"FUTURE\"}] }");

    scope = $rootScope.$new();

//    PipelineRun = null;

    PipelineRunCtrl = $controller('PipelineRunCtrl', {
      $scope: scope,
      $routeParams: { runId : 2}
    });
  }));


it('*Given* a specific pipeline *When* I select the pipeline *Then* I get a visualization of the pipeline', function () {
    $httpBackend.flush();

    expect(scope.pipeline.id).toBe("2fde8a18-dd2c-4503-9dcb-dd3308d83437");
    expect(scope.pipeline.status).toBe("RUNNING");

    expect(scope.pipeline.stages.length).toBe(4);
  });
});
