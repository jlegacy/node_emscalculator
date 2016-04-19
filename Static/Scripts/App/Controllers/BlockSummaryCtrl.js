controllers.controller("BlockSummaryCtrl", [
    "$scope",
    "blockSummaryData",
    "blockSummarySvc",
    "tabSvc",
    "$route",
    "$routeParams",
    "ngDialog",
    "sharedDataBlockSumSvc",
    "$log",
    "$rootScope",
    "$location",
    function($scope, blockSummaryData, blockSummarySvc, tabSvc, $route, $routeParams, ngDialog, sharedDataBlockSumSvc, $log, $rootScope, $location) {
        "use strict";
        try {

            $scope.loadDataFields = function (result) {
                $scope.data = result.data.data;
                $scope.allocSelectedTotal = result.data.allocSelectedTotal;
                $scope.principalTotal = result.data.principalTotal;
                $scope.diffTotal = result.data.diffTotal;
            } 

            $scope.system = $rootScope.system;
            $scope.timeStamp = new Date();

            var actions = $DefaultJSON.actionValues();
            $scope.actions = {
                selected: actions.selected,
                options: actions.options
            };

            var status = $DefaultJSON.statusValues();
            $scope.status = {
                selected: status.selected,
                options: status.options
            };

            var lastNumber = $DefaultJSON.lastDigitAccountValues();
            $scope.masterAcctLast = {
                selected: lastNumber.selected,
                options: lastNumber.options
            };

            var moneyDiff = $DefaultJSON.moneyDiffValues();
            $scope.moneyDiff = {
                selected: moneyDiff.selected,
                options: moneyDiff.options
            };

            var securityGroup = $DefaultJSON.securityGroupValues();
            $scope.securityGroup = {
                selected: securityGroup.selected,
                options: securityGroup.options
            };


            $scope.super = sharedDataBlockSumSvc.super;
            $scope.securityID = sharedDataBlockSumSvc.securityID;
            $scope.regRep = sharedDataBlockSumSvc.regRep;
            $scope.masterAcctFirst = sharedDataBlockSumSvc.masterAcctFirst;
            $scope.masterAcctSecond = sharedDataBlockSumSvc.masterAcctSecond;
            $scope.masterAcctLast.selected = sharedDataBlockSumSvc.masterAcctLast;

            $scope.blockName = sharedDataBlockSumSvc.blockName;
            $scope.payToRep = sharedDataBlockSumSvc.payToRep;
            $scope.shortName = sharedDataBlockSumSvc.shortName;

            $scope.moneyDiff.selected = sharedDataBlockSumSvc.moneyDiff;
            $scope.securityGroup.selected = sharedDataBlockSumSvc.securityGroup;
            $scope.status.selected = sharedDataBlockSumSvc.status;
            $scope.actions.selected = sharedDataBlockSumSvc.actions;
            $scope.fromTargetDate = sharedDataBlockSumSvc.fromTargetDate;
            $scope.toTargetDate = sharedDataBlockSumSvc.toTargetDate;

            $scope.newDisplay = function() {
                $scope.setFilterSave();
                callReloadData();
            };

            $scope.setFilterSave = function() {
                sharedDataBlockSumSvc.fromTargetDate = $scope.fromTargetDate;
                sharedDataBlockSumSvc.toTargetDate = $scope.toTargetDate;
                sharedDataBlockSumSvc.super = $scope.super;
                sharedDataBlockSumSvc.securityID = $scope.securityID;
                sharedDataBlockSumSvc.regRep = $scope.regRep;
                sharedDataBlockSumSvc.status = $scope.status.selected;
                sharedDataBlockSumSvc.toTargetDate = $scope.toTargetDate;
                sharedDataBlockSumSvc.masterAcctFirst = $scope.masterAcctFirst;
                sharedDataBlockSumSvc.masterAcctSecond = $scope.masterAcctSecond;
                sharedDataBlockSumSvc.masterAcctLast = $scope.masterAcctLast.selected;
                sharedDataBlockSumSvc.blockName = $scope.blockName;
                sharedDataBlockSumSvc.payToRep = $scope.payToRep;
                sharedDataBlockSumSvc.moneyDiff = $scope.moneyDiff.selected;
                sharedDataBlockSumSvc.actions = $scope.actions.selected;
                sharedDataBlockSumSvc.securityGroup = $scope.securityGroup.selected;
                sharedDataBlockSumSvc.shortName = $scope.shortName;
            };

            $scope.unSetFilterSave = function() {
                sharedDataBlockSumSvc.fromTargetDate = $Shared.getTodaysDateDMY();
                sharedDataBlockSumSvc.toTargetDate = $Shared.getTodaysDateDMY();
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
            };

            var getColumns = function() {

                var columns = [{
                    id: "accountNumber",
                    field: "accountNumber",
                    sortable: true,
                    name: "<br/>Account #",
                    width: 100,
                    formatter: $scope.acctNumberWithDropLinkFormatter,
                    cssClass: "cell-selection"
                }, {
                    id: "shortName",
                    field: "shortName",
                    name: "<br/>Short Name",
                    width: 85
                }, {
                    id: "rep",
                    field: "rep",
                    name: "<br/>Rep",
                    width: 40
                }, {
                    id: "symbol",
                    field: "symbol",
                    name: "<br/>Symbol",
                    width: 50,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "CUSIP",
                    field: "CUSIP",
                    name: "<br/>CUSIP",
                    width: 100,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
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
                    width: 90,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "avgPrice",
                    field: "avgPrice",
                    sortable: true,
                    name: "<br/>Average Price",
                    width: 100,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "activeExecQty",
                    field: "activeExecQty",
                    sortable: true,
                    name: "Active<br/>Executed Quantity",
                    width: 120,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "pendingExecQty",
                    field: "pendingExecQty",
                    sortable: true,
                    name: "Pending<br/> Executed Quantity",
                    width: 120,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "activeAllocQty",
                    field: "activeAllocQty",
                    sortable: true,
                    name: "Active<br/> Allocated Quantity",
                    width: 120,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "pendingAllocQty",
                    field: "pendingAllocQty",
                    sortable: true,
                    name: "Pending<br/> Allocated Quantity",
                    width: 120,
                    title: "comments",
                    formatter: Slick.Formatters.Title,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "activeErrorQty",
                    field: "activeErrorQty",
                    sortable: true,
                    name: "Active<br/> Error Quantity",
                    width: 120,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "pendingErrorQty",
                    field: "pendingErrorQty",
                    sortable: true,
                    name: "Pending<br/> Error Quantity",
                    width: 120,
                    title: "comments",
                    formatter: Slick.Formatters.Title,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign",
                    validator: defaultStringValidation
                }, {
                    id: "$difference",
                    field: "$difference",
                    name: "<br/>$ Difference",
                    width: 90,
                    title: "comments",
                    formatter: Slick.Formatters.Title
                }, {
                    id: "tradeDate",
                    field: "tradeDate",
                    sortable: true,
                    name: "Trade<br/>Date",
                    width: 80,
                    editor: Slick.Editors.Date,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, {
                    id: "status",
                    field: "status",
                    name: "<br/>Status",
                    maxLength: 80,
                    title: "comments",
                    formatter: Slick.Formatters.Title,
                    width: 90
                }];
                return columns;
            };

            $scope.acctNumberWithDropLinkFormatter = function(row, cell, value, columnDef, dataContext) {

                if (value == null || value === "" || value === undefined) {
                    return "";
                }

                var acctBranchCode = isNaN(dataContext["acctBranchCode"]) == false ? dataContext["acctBranchCode"] : "";
                var acctBaseCode = isNaN(dataContext["acctBaseCode"]) == false ? dataContext["acctBaseCode"] : "";

                var formattedAcctNumber = acctBranchCode + "-" + acctBaseCode;
                if (acctBaseCode == "" || acctBranchCode == "") {
                    formattedAcctNumber = value;
                }


                return "<div class='gridDropMenu' style='cursor:pointer;'><a>" + formattedAcctNumber +
                    "<img src='static/images/MenuCarat.png' width='9' height='6' border='0' style='padding-bottom:2px' alt='Menu'>" +
                    "</a></div>";

            }

            $scope.columns = getColumns();

            $scope.loadDataFields(blockSummaryData);

            $scope.gridOptions = {
                enableColumnReorder: true,
                enableCellNavigation: true,
                multiColumnSort: true,
                displayTotalsRow: false
            };

            $scope.sortedColumn = "rptCode";

            $scope.currentPreviousTooltipErrorMessage = "";

            var rowParams = null;
            $scope.onRowClick = function(parameters) {
                $scope.selectedRow = parameters.row;
                $scope.adjParams = {
                    rowIndex: parameters.rowIndex,
                    cellIndex: parameters.cellIndex
                };

                if (!$scope.noDropMenu) {
                    if (parameters.row.level !== 0)
                        rowParams = parameters.row;
                    if (parameters.colId === "accountNumber") {
                        angular.element("#gridDropMenu").hide();
                        gridDropMenu(parameters.pageX, parameters.pageY);
                    } else {
                        angular.element("#gridDropMenu").hide();
                    }
                }
            };



            var callReloadData = function() {
                blockSummarySvc.getDefaultData().
                then(function(result) {
                    $scope.timeStamp = new Date();
                    $scope.loadDataFields(result);
                }, function() {});
            };

            var gridDropMenu = function(xPos, yPos) {
                var menu = document.getElementById("gridDropMenu");
                //$log.log(menu);
                menu.style.top = yPos + "px";
                menu.style.left = xPos + "px";
                menu.style.display = "inline";
            };

            $scope.jumpToPage = function(entry) {

                if ($scope.selectedRow != undefined) {
                    tabSvc.changeTabs("PTRS", "BlockAdmin");
                    switch (entry) {
                        case 'bre':
                            $location.path('PTRS/BlockAdmin/Executions/' + $scope.selectedRow.accountNumber + '/' + 'executions');
                            break;
                        case 'bra':
                            $location.path('PTRS/BlockAdmin/Allocations/' + $scope.selectedRow.accountNumber + '/' + 'allocations');
                            break;
                        default:
                    }
                }
            };

            $scope.displayClick = function() {
                $scope.newDisplay();
            };

            $scope.onRowCellChange = function (row, field) {
                alert(field);
            };

            $scope.exportClick = function () {
                if ($scope.data.length !== 0) {
                    var csvData = "sep=,\r\n";

                    csvData =
                        "accountNumber," +
                        "shortName," +
                        "rep," +
                        "symbol," +
                        "CUSIP," +
                        "action," +
                        "blockName," +
                        "activeExecQty," +
                        "pendingExecQty," +
                        "activeAllocQty," +
                        "pendingAllocQty," +
                        "activeErrorQty," +
                        "pendingErrorQty," +
                        "avgPrice," +
                        "$difference," +
                        "tradeDate," +
                        "status" +
                        "\r\n";

                    angular.forEach($scope.data, function(row) {
                        var line = "\"" + row.accountNumber + "\"," +
                            "\"" + row.shortName + "\"," +
                            "\"" + row.rep + "\"," +
                            "\"" + row.symbol + "\"," +
                            "\"" + row.CUSIP + "\"," +
                            "\"" + row.action + "\"," +
                            "\"" + row.blockName + "\"," +
                            "\"" + row.activeExecQty + "\"," +
                            "\"" + row.pendingExecQty + "\"," +
                            "\"" + row.activeAllocQty + "\"," +
                            "\"" + row.pendingAllocQty + "\"," +
                            "\"" + row.activeErrorQty + "\"," +
                            "\"" + row.pendingErrorQty + "\"," +
                            "\"" + row.avgPrice + "\"," +
                            "\"" + row.$difference + "\"," +
                            "\"" + row.tradeDate + "\"," +
                            "\"" + row.status + "\"\r\n";
                        line.slice(0, line.length - 1);
                        csvData += line;
                    });
                    var dataObject = {
                        csvData: csvData,
                        fileName: "Block Summary.csv"
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
            $scope.printClick = function () {
                printGrid($scope.grid);
            };
            $scope.pdfClick = function() {
                alert('not yet implemented');
                //    blockSummarySvc.getPdfData(parameters);
            };
            $scope.resetClick = function() {
                $scope.unSetFilterSave();
                $route.reload();
            };

            $scope.showBlockMergeDialog = function() {
                ngDialog.open({
                    templateUrl: "static/scripts/App/Templates/BlockMaintenance/BlockAdminBlockMerge.html",
                    controller: "BlockAdminBlockMergeCtrl",
                    className: 'ngdialog-theme-default blockMerge-width',
                    closeByDocument: false,
                });
            };

        } catch (e) {
            alert(e);
            $scope.data = [];
            $scope.recordsCount = $scope.data.length;
        }
    }
]);
