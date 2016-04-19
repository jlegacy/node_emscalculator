/// <reference path="../../External/angular.js" />


services.factory("blockReportSvc", [
    "httpSvc",
    "$log",
    "sharedDataSvc2",
    function(httpSvc, $log, sharedDataSvc2) {
        "use strict";

        var params = {};
        var templateData = {
            getDefaultData: function() {
                var options = {
                    method: "POST",
                    url: " http://demo9936543.mockable.io/BlockSummary/GetDefaultData"
                };
                var prms = {};

                prms = {
                    'accountNumber': sharedDataSvc2.accountNumber,
                    'fromTargetDate': sharedDataSvc2.fromTargetDate,
                    'toTargetDate': sharedDataSvc2.toTargetDate,
                    'super': sharedDataSvc2.super,
                    'securityID': sharedDataSvc2.securityID,
                    'regRep': sharedDataSvc2.regRep,
                    'status': sharedDataSvc2.status,
                    //'toTargetDate': sharedDataSvc2.toTargetDate,
                    'masterAcctFirst': sharedDataSvc2.masterAcctFirst,
                    'masterAcctSecond': sharedDataSvc2.masterAcctSecond,
                    'masterAcctLast': sharedDataSvc2.masterAcctLast,
                    'blockName': sharedDataSvc2.blockName,
                    'payToRep': sharedDataSvc2.payToRep,
                    'moneyDiff': sharedDataSvc2.moneyDiff,
                    'actions': sharedDataSvc2.actions,
                    'securityGroup': sharedDataSvc2.securityGroup,
                    'shortName': sharedDataSvc2.shortName,
                }

                $console.log(prms);
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
