/// <reference path="../External/jquery.browser.min.js" />
/// <reference path="C:\Users\a586295\Documents\ap115201-ptrs-portfolio\WebReserve.WebUI\Views/Home/testme.js" />
/// <reference path="C:\Users\a586295\Documents\ap115201-ptrs-portfolio\WebReserve.WebUI\Views/Home/testme.js" />
/// <reference path="C:\Users\a586295\Documents\ap115201-ptrs-portfolio\WebReserve.WebUI\Views/Home/testme.js" />
/// <reference path="C:\Users\a586295\Documents\ap115201-ptrs-portfolio\WebReserve.WebUI\Views/Home/Index.cshtml" />
/// <reference path="Shared/defaultJSONValues.js" />
/// <reference path="Shared/defaultJSONValues.js" />
/// <reference path="Shared/shared.js" />
/// <reference path="Shared/defaultJSONValues.js" />
/// <reference path="Shared/shared.js" />
/// <reference path="Shared/shared.js" />
/// <reference path="Shared/shared.js" />
/// <reference path="Shared/defaultJSONValues.js" />
/// <reference path="Shared/shared.js" />
/// <reference path="C:\Users\a586295\Documents\ap115201-ptrs-portfolio\WebReserve.WebUI\Views/Home/testme.js" />
// Karma configuration
// Generated on Wed Apr 13 2016 09:21:07 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
 

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
		'../External/jQuery.js',
        '../External/jQuery.ui.js',
        '../External/jquery.event.drag-2.2.js',
        '../External/jquery.event.drop-2.2.js',
        '../External/jquery.browser.min.js',
		'../External/angular.js',
		'../External/angular-mocks.js',
        '../External/angular-messages.js',
        '../External/ngDialog.js',
        '../External/angular-route.js',
        '../External/angular-cookies.js',
        '../External/ui-bootstrap-tpls.min.js',
		'../External/validate.js',
		'app.js',
         'Services/TabSvc.js',
        '../External/slick.core.js',
        'slick.formatters.custom.js',
         '../External/slick.grid.js',
        '../External/slick.cellExternalCopyManager.js',
        '../External/slick.cellrangedecorator.js',
        '../External/slick.cellrangeselector.js',
        '../External/slick.cellselectionmodel.js',
        '../External/slick.checkboxselectcolumn.js',
        '../External/slick.columnpicker.js',
        '../External/slick.core.js',
        '../External/slick.dataview.js',
        '../External/slick.editors.js',
        '../External/slick.formatters.custom.js',
        '../External/slick.formatters.js',
         '../External/slickgrid-print-plugin.js',
        '../External/slick.groupitemmetadataprovider.js',
        '../External/slick.remotemodel.js',
        '../External/slick.rowselectionmodel.js',
        '../External/slick_autotooltips.js',
       
        'helpers.js',
        'Controllers/*.js',
        'Services/*.js',
        'Shared/*.js',

		{ pattern: 'spec/*.js', included: true, watched:true },
        { pattern: 'Controllers/*.js', included: true },
        { pattern: 'Shared/*.js', included: true },
        { pattern: 'spec/HtmlPage1.html', watched: true, included: false, served: true }
    ], 


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: { 'Controllers/*.js': ['coverage'], 'Shared/*.js': ['coverage'] },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'html'],


    htmlReporter: {
        outputFile: 'coverage/units.html',
			
        // Optional 
        pageTitle: 'Unit Tests',
        subPageTitle: 'PTRS Results'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


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
  })
}
