// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : '../',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    port : 9876,
    runnerPort : 9100,
    colors : true,
//    logLevel : LOG_INFO,
    captureTimeout : 5000,
    singleRun : false,
    browsers : ['Chrome'],

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
      //...
    }


  })};
