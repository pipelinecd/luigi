module.exports = function (config) {
  config.set({
    basePath : './',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    autoWatch : true,

    port : 9876,
    runnerPort : 9100,
    colors : true,
    captureTimeout : 5000,
    singleRun : false,
    browsers : ['Chrome'],

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
    }


  })};
