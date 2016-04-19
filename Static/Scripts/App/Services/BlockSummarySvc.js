    services.factory("blockSummarySvc", [
        "httpSvc",
        "$log",
        "sharedDataBlockSumSvc",
        function(httpSvc, $log, sharedDataBlockSumSvc) {
            "use strict";

            var params = {};
            var templateData = {
                getDefaultData: function() {
                    var options = {
                        method: "POST",
                        url: "http://demo9936543.mockable.io/BlockSummary/GetDefaultData"
                    };
                    var prms = {};

                    prms = {
                        'accountNumber': sharedDataBlockSumSvc.accountNumber,
                        'fromTargetDate': sharedDataBlockSumSvc.fromTargetDate,
                        'toTargetDate': sharedDataBlockSumSvc.toTargetDate,
                        'super': sharedDataBlockSumSvc.super,
                        'securityID': sharedDataBlockSumSvc.securityID,
                        'regRep': sharedDataBlockSumSvc.regRep,
                        'status': sharedDataBlockSumSvc.status,
                        //'toTargetDate': sharedDataBlockSumSvc.toTargetDate,
                        'masterAcctFirst': sharedDataBlockSumSvc.masterAcctFirst,
                        'masterAcctSecond': sharedDataBlockSumSvc.masterAcctSecond,
                        'masterAcctLast': sharedDataBlockSumSvc.masterAcctLast,
                        'blockName': sharedDataBlockSumSvc.blockName,
                        'payToRep': sharedDataBlockSumSvc.payToRep,
                        'moneyDiff': sharedDataBlockSumSvc.moneyDiff,
                        'actions': sharedDataBlockSumSvc.actions,
                        'securityGroup': sharedDataBlockSumSvc.securityGroup,
                        'shortName': sharedDataBlockSumSvc.shortName,
                    }

                    //$log.log(prms);
                    return httpSvc.HttpPost(options);
                },

                getPdfData: function(parameters) {
                    return httpSvc.GetPdf({
                        method: "POST",
                        data: JSON.stringify(parameters),
                        url: "ManagementReport/GetPdf",
                        responseType: "arraybuffer"
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
