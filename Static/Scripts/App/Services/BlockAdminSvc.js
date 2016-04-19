    services.factory("blockAdminSvc", [
        "httpSvc",
        "$log",
        "$rootScope",
        "sharedDataSvc2",
        function(httpSvc, $log, $rootScope, sharedDataSvc2) {
            "use strict";

            var params = {};
            var templateData = {

                getDefaultData: function() {
                    return templateData.getExecutionData();
                },

                getExecutionData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockAdmin/GetExecutionData"
                    };
                    var prms = {};

                    prms = {

                        //'tbd': sharedDataBlockSumSvc.tbd,
                    }

                    options.data = JSON.stringify(prms);
                    return httpSvc.HttpPost(options);
                },

                createExecutionsData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockAdmin/CreateExecutionsData"
                    };
                    var prms = {};

                    prms = {
                        "accountNumber": sharedDataSvc2.accountNumber,
                        "executions": sharedDataSvc2.executions
                    }

                    if (!angular.equals({}, prms)) {
                        options.data = JSON.stringify(prms);
                    }

                    return httpSvc.HttpPost(options);
                },

                createAllocationsData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockAdmin/CreateAllocationsData"
                    };
                    var prms = {};

                    prms = {
                        "accountNumber": sharedDataSvc2.accountNumber,
                        "allocations": sharedDataSvc2.allocations
                    }

                    if (!angular.equals({}, prms)) {
                        options.data = JSON.stringify(prms);
                    }

                    return httpSvc.HttpPost(options);
                },

                getAllocationData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockAdmin/GetAllocationData"
                    };
                    var prms = {
                        "accountNumber": sharedDataSvc2.accountNumber
                    };

                    options.data = JSON.stringify(prms);
                    return httpSvc.HttpPost(options);
                },

                getBlockMergeData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockAdmin/GetBlockMergeData"
                    };
                    var prms = {
                        "accountNumber": sharedDataSvc2.accountNumber
                    };

                    options.data = JSON.stringify(prms);
                    return httpSvc.HttpPost(options);
                },

                getDefaultDataWithParams: function(parameters) {
                    return httpSvc.HttpPost({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/GetFullDetail"
                    });
                },
                getSearchData: function(parameters) {
                    return httpSvc.HttpPost({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/GetDetail"
                    });
                },
                getPdfData: function(parameters) {
                    return httpSvc.GetPdf({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/GetPdf",
                        responseType: "arraybuffer"
                    });
                },
                processAction: function(parameters) {
                    return httpSvc.HttpPost({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/ProcessReport"
                    });
                },
                updateComments: function(parameters) {
                    return httpSvc.HttpPost({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/ProcessComments"
                    });
                },
                setParams: function(parameters) {
                    params = parameters;
                },
                getParams: function() {
                    return params;
                }
            };
            return templateData;
        }
    ]);
