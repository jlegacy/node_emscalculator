/// <reference path="scripts/angular-mocks-1-5-6.js" />
/// <reference path="app/emscalculator/index.controller.js" />
/// <reference path="scripts/jQuery-1-12-3.min.js" />
/// <reference path="scripts/angular-ui-router-2-15.min.js" />
/// <reference path="scripts/angular-1.4.7.min.js" />
/// <reference path="app/app.js" />
// Karma configuration
// Generated on Sat Apr 23 2016 17:06:58 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
         
        'scripts/jQuery-1-12-3.min.js',
        'scripts/angular-1.4.7.min.js',
        'scripts/angular-mocks-1-5-6.js',
        'scripts/angular-ui-router-2-15.min.js',
        
        'app/app.js',
        'app/emscalculator/**/*.js',
        'scripts/*.js',
        'app/emscalculator/specs/**/*spec.js',

        { pattern: 'app/emscalculator/*.js', included: false, served: false, watched: true }

        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html'],

        htmlReporter: {
            outputFile: 'coverage/units.html',
			
            // Optional 
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description',


            // experimental 
            preserveDescribeNesting: false, // folded suites stay folded  
            foldAll: false, // reports start folded (only with preserveDescribeNesting) 
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'IE', 'Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
}
