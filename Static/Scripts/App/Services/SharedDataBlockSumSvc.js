services.service("sharedDataBlockSumSvc", function() {
    "use strict";
    var sharedDataBlockSumSvc = this;
    sharedDataBlockSumSvc.accountNumber = '';
    sharedDataBlockSumSvc.executions = [];
    sharedDataBlockSumSvc.fromTargetDate = $Shared.getTodaysDateDMY(),
    sharedDataBlockSumSvc.toTargetDate = $Shared.getTodaysDateDMY(),
    sharedDataBlockSumSvc.super = '';
    sharedDataBlockSumSvc.securityID = '';
    sharedDataBlockSumSvc.regRep = '';
    sharedDataBlockSumSvc.status = '';
    sharedDataBlockSumSvc.masterAcctFirst = '';
    sharedDataBlockSumSvc.masterAcctSecond = '';
    sharedDataBlockSumSvc.masterAcctLast = '';
    sharedDataBlockSumSvc.blockName = '';
    sharedDataBlockSumSvc.payToRep = '';
    sharedDataBlockSumSvc.moneyDiff = '';
    sharedDataBlockSumSvc.actions = '';
    sharedDataBlockSumSvc.securityGroup = '';
    sharedDataBlockSumSvc.shortName = '';
});
