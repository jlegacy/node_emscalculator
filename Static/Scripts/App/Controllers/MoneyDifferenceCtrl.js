controllers.controller("MoneyDifferenceCtrl", [
    "$scope",
    "moneyDifferenceData",
    "moneyDifferenceSvc",
    "tabSvc",
    "$route",
    "$routeParams",
    "ngDialog",
    "sharedDataMoneyDiffSvc",
    "$log",
    "$rootScope",
    "$location",
    "$timeout",
    function($scope, moneyDifferenceData, moneyDifferenceSvc, tabSvc, $route, $routeParams, ngDialog, sharedDataMoneyDiffSvc, $log, $rootScope, $location, timer) {
        "use strict";
        try {

            var callReloadData = function() {
                moneyDifferenceSvc.getDefaultData().
                then(function(result) {
                    loadDataFields(result);
                }, function() {});
            };

            var loadDataFields = function(result) {
                $scope.data = result.data.data;
                $scope.totalDollarDiff = moneyDifferenceData.data.totalDollarDiff;
                $scope.totalMarkup = moneyDifferenceData.data.totalMarkup;
            }

            $scope.newDisplay = function() {
                $scope.setFilterSave();
                callReloadData();
            };

            $scope.resetClick = function() {
                $scope.unSetFilterSave();
                $route.reload();
            };

            var moneyDifferenceColumns = function() {
                var columns = [{
                    id: "masterAccount",
                    field: "masterAccount",
                    sortable: true,
                    name: "<br/>Master Account #",
                    width: 120,
                    cssClass: "cell-selection"
                }, {
                    id: "shortName",
                    field: "shortName",
                    name: "<br/>Short Name",
                    width: 85
                }, {
                    id: "security",
                    field: "security",
                    name: "<br/>Security",
                    width: 80
                }, {
                    id: "action",
                    field: "action",
                    name: "<br/>Action",
                    width: 50,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "blockName",
                    field: "blockName",
                    name: "<br/>Block Name",
                    width: 100,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "moneyDiff",
                    field: "moneyDiff",
                    name: "<br/>$ Difference",
                    width: 100,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "markup",
                    field: "markup",
                    name: "<br/>Markup",
                    width: 90,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "journalSts",
                    field: "journalSts",
                    name: "Journal</br>Status",
                    width: 50
                }, {
                    id: "tradeDate",
                    field: "tradeDate",
                    name: "<br/>Trade Date",
                    width: 100
                }, {
                    id: "settleDate",
                    field: "settleDate",
                    name: "<br/>Settle Date",
                    width: 100
                }, {
                    id: "journalDate",
                    field: "journalDate",
                    name: "<br/>Journal Date",
                    width: 100
                }];
                return columns;
            };

            $scope.system = $rootScope.system;

            $scope.totalDollarDiff = moneyDifferenceData.data.totalDollarDiff;
            $scope.totalMarkup = moneyDifferenceData.data.totalMarkup;

            var actions = $DefaultJSON.actionValues();
            $scope.actions = {
                selected: actions.selected,
                options: actions.options
            };

            $scope.actions.selected = sharedDataMoneyDiffSvc.actions;
            $scope.tradeDate = sharedDataMoneyDiffSvc.tradeDate;
            $scope.settleDate = sharedDataMoneyDiffSvc.settleDate;
            $scope.diffAcctFirst = sharedDataMoneyDiffSvc.diffAcctFirst;
            $scope.diffAcctMid = sharedDataMoneyDiffSvc.diffAcctMid;
            $scope.mastAcctFirst = sharedDataMoneyDiffSvc.mastAcctFirst;
            $scope.mastAcctMid = sharedDataMoneyDiffSvc.mastAcctMid;
            $scope.blockName = sharedDataMoneyDiffSvc.blockName;
            $scope.toJournalDate = sharedDataMoneyDiffSvc.toJournalDate;
            $scope.frmJournalDate = sharedDataMoneyDiffSvc.frmJournalDate;
            $scope.securityID = sharedDataMoneyDiffSvc.securityID;
            $scope.columns = moneyDifferenceColumns();
            $scope.data = moneyDifferenceData.data.data;

            $scope.gridOptions = {
                topPanelHeight: 25,
                forceFitColumns: false,
                editable: true,
                enableColumnReorder: true,
                enableCellNavigation: true,
                asyncEditorLoading: false,
                multiColumnSort: true,
                displayTotalsRow: false,
                autoEdit: true
            };

            var gridDropMenu = function(xPos, yPos) {
                var menu = document.getElementById("gridDropMenu");
                //$log.log(menu);
                menu.style.top = yPos + "px";
                menu.style.left = xPos + "px";
                menu.style.display = "inline";
            };

            $scope.exportClick = function() {
                resetSearchParams();
                if ($scope.data.length !== 0) {
                    var csvData = "sep=,\r\n";
                    csvData += "Description,Report Code,Report Line,Debit-Credit Indicator,Report Class," +
                        $scope.currDate + " Current Amount," + $scope.prevDate + " Previous Amount," + $scope.prev1Date +
                        " Amount," + $scope.prev2Date + " Amount," + $scope.yearEndDate + " Amount,Variance,Comments\r\n";
                    angular.forEach($scope.data, function(row) {
                        var line = "\"" + row.rptLineDesc + "\"," +
                            "\"" + row.rptCode + "\"," +
                            "\"" + row.rptLine + "\"," +
                            "\"" + row.dbcrInd + "\"," +
                            "\"" + row.rptClass + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.currentAmount).toFixed(2)) + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.prevAmount).toFixed(2)) + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.prev1Amount).toFixed(2)) + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.prev2Amount).toFixed(2)) + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.previousYearAmount).toFixed(2)) + "\"," +
                            "\"" + Slick.Formatters.ExcelAmount(parseFloat(row.differenceAmount).toFixed(2)) + "\"," +
                            "\"" + row.comments + "\"\r\n";
                        line.slice(0, line.length - 1);
                        csvData += line;
                    });
                    var dataObject = {
                        csvData: csvData,
                        fileName: "MGT Report.csv"
                    };
                    window.exportToExcel(dataObject);
                } else {
                    var childScope = $scope.$new(true);
                    childScope.alertMsg = "No data to Export";
                    childScope.alertSeverity = "Warning";
                    ngDialog.open({
                        template: "Static/Scripts/App/Templates/Page/DialogAlert.html",
                        scope: childScope,
                        showClose: false,
                        closeByDocument: false,
                        preserveFocus: false
                    });
                }
            };
            $scope.printClick = function() {
                printGrid($scope.grid);
            };

            var setPageFields = function(result) {
                moneyDifferenceData = result;

                $scope.columns = moneyDifferenceColumns();
                var columns = $Shared.removeSelectCheckbox($scope.columns);
                $scope.rebuildGrid(columns)

                $scope.data = result.data.data;
            }


            $scope.callExecutionFilterReset = function() {
                alert('Execution Filter Reset');
            }

            $scope.timeStamp = new Date();

            moneyDifferenceSvc.getMoneyDifferenceData().
            then(function(result) {
                console.log(result);
                setPageFields(result);
            }, function() {});

            $scope.pdfClick = function() {
                resetSearchParams();
                var currCycle = $scope.currentDate.selected.split('|');
                var prevCycle = $scope.PreviousDate.selected.split('|');
                var parameters = {
                    rptType: $scope.reportType.selected,
                    ViewLevel: $scope.viewLevel.selected,
                    CurrentCycleDate: currCycle[0],
                    FrequencyCode: currCycle[1],
                    PreviousCycleDate: prevCycle[0],
                    PrevFrequencyCode: prevCycle[1],
                    dbcrInd: $scope.balances.selected,
                    rptClass: $scope.reportClass.selected,
                    rptCode: $scope.reportCode.selected,
                    rptLine: $scope.reportLine.selected
                };
                moneyDifferenceSvc.getPdfData(parameters);
            };

            $scope.setFilterSave = function() {
                sharedDataMoneyDiffSvc.diffAcctFirst = $scope.diffAcctFirst;
                sharedDataMoneyDiffSvc.diffAcctMid = $scope.diffAcctMid;
                sharedDataMoneyDiffSvc.tradeDate = $scope.tradeDate;
                sharedDataMoneyDiffSvc.settleDate = $scope.settleDate;
                sharedDataMoneyDiffSvc.mastAcctFirst = $scope.mastAcctFirst;
                sharedDataMoneyDiffSvc.mastAcctMid = $scope.mastAcctMid;
                sharedDataMoneyDiffSvc.blockName = $scope.blockName;
                sharedDataMoneyDiffSvc.toJournalDate = $scope.toJournalDate;
                sharedDataMoneyDiffSvc.frmJournalDate = $scope.frmJournalDate;
                sharedDataMoneyDiffSvc.actions = $scope.actions.selected;
                sharedDataMoneyDiffSvc.securityID = $scope.securityID;
            };

            $scope.unSetFilterSave = function() {
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
            };

        } catch (e) {
            alert(e);
            $scope.data = [];
            $scope.recordsCount = $scope.data.length;
        }
    }
]);
