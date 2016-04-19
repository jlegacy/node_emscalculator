services.factory("moneyDifferenceSvc", [
    "httpSvc",
    "$log",
    "$rootScope",
    "sharedDataMoneyDiffSvc",
    function(httpSvc, $log, $rootScope, sharedDataMoneyDiffSvc) {
        "use strict";

        var params = {};
        var templateData = {

            getDefaultData: function() {
                return templateData.getMoneyDifferenceData();
            },

            getMoneyDifferenceData: function() {
                var options = {
                    method: "POST",
                    url: "http://demo9936543.mockable.io/BlockAdmin/GetMoneyDifferenceData"
                };
                var prms = {};

                prms = {
                    diffAcctFirst: sharedDataMoneyDiffSvc.diffAcctFirst,
                    diffAcctMid: sharedDataMoneyDiffSvc.diffAcctMid,
                    tradeDate: sharedDataMoneyDiffSvc.tradeDate,
                    settleDate: sharedDataMoneyDiffSvc.settleDate,
                    mastAcctFirst: sharedDataMoneyDiffSvc.mastAcctFirst,
                    mastAcctMid: sharedDataMoneyDiffSvc.mastAcctMid,
                    blockName: sharedDataMoneyDiffSvc.blockName,
                    toJournalDate: sharedDataMoneyDiffSvc.toJournalDate,
                    frmJournalDate: sharedDataMoneyDiffSvc.frmJournalDate,
                    action: sharedDataMoneyDiffSvc.action,
                    securityID: sharedDataMoneyDiffSvc.securityID

                }

                options.data = JSON.stringify(prms);

                //$log.log(prms);
                return httpSvc.HttpPost(options);
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
