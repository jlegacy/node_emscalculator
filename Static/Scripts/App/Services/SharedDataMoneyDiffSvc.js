services.service("sharedDataMoneyDiffSvc", function() {
    "use strict";
    var sharedDataMoneyDiffSvc = this;
    sharedDataMoneyDiffSvc.diffAcctFirst = '';
    sharedDataMoneyDiffSvc.diffAcctMid = '';
    sharedDataMoneyDiffSvc.tradeDate = $Shared.getTodaysDateDMY();
    sharedDataMoneyDiffSvc.settleDate = $Shared.getTodaysDateDMY();
    sharedDataMoneyDiffSvc.mastAcctFirst = '';
    sharedDataMoneyDiffSvc.mastAcctMid = '';
    sharedDataMoneyDiffSvc.blockName = '';
    sharedDataMoneyDiffSvc.toJournalDate = '';
    sharedDataMoneyDiffSvc.frmJournalDate = '';
    sharedDataMoneyDiffSvc.actions = ''
    sharedDataMoneyDiffSvc.securityID = '';
});
