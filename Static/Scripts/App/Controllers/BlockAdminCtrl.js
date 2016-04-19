controllers.controller("BlockAdminCtrl", [
    "$scope",
    "blockAdminData",
    "blockAdminSvc",
    "tabSvc",
    "$route",
    "$routeParams",
    "ngDialog",
    "sharedDataSvc2",
    "$log",
    "$rootScope",
    "$location",
    "$timeout",
    function($scope, blockAdminData, blockAdminSvc, tabSvc, $route, $routeParams, ngDialog, sharedDataSvc2, $log, $rootScope, $location, timer) {
        "use strict";
        try {

            $scope.tabType = $routeParams.tabType;

            $scope.tabMode = true;
            $scope.multiMode = true;
            $scope.copyMode = true;

            $scope.radioValue = 'tab';
            $scope.radioGroup = 'blockAdmin';

            $scope.noDropMenu = true;
            $scope.tabsChecked = true;

            $scope.execActionSelect = {
                singleSelect: null,
                option1: 'Update',
                option2: 'Delete',
            };

            $scope.allocActionSelect = {
                singleSelect: null,
                option1: 'Update',
                option2: 'Delete',
            };

            var setClose = function() {
                $scope.radioValue = 'tab';
            };

            var setHeaderFields = function() {

                $scope.accountName = blockAdminData.data.accountName;
                $scope.tradeDate = blockAdminData.data.tradeDate;
                $scope.masterAcctFirst = blockAdminData.data.masterAcctFirst;
                $scope.masterAcctSecond = blockAdminData.data.masterAcctSecond;
                $scope.masterAcctLast = {
                    selected: blockAdminData.data.masterAcctLast.selected,
                    options: blockAdminData.data.masterAcctLast.options
                };
                $scope.symbol = blockAdminData.data.symbol;
                $scope.dollarDiff = blockAdminData.data.dollarDiff;
                $scope.dollarDiffType = blockAdminData.data.dollarDiffType;
                $scope.settleDate = blockAdminData.data.settleDate;
                $scope.shortName = blockAdminData.data.shortName;
                $scope.cusip = blockAdminData.data.CUSIP;
                $scope.capacity = blockAdminData.data.capacity;
                $scope.actions = {
                    selected: blockAdminData.data.actions.selected,
                    options: blockAdminData.data.actions.options
                };
                $scope.securityGroup = blockAdminData.data.securityGroup;
                $scope.blockName = blockAdminData.data.blockName;
                $scope.majorExecBkr = blockAdminData.data.majorExecBkr;


            };

            var setExecutionFields = function() {

                $scope.principal = blockAdminData.data.principal;
                $scope.activeQty = blockAdminData.data.activeQty;
                $scope.commCodeFirst = blockAdminData.data.commCodeFirst;
                $scope.commCodeSecond = blockAdminData.data.commCodeSecond;
                $scope.vas = blockAdminData.data.vas;
                $scope.avgPrice = blockAdminData.data.avgPrice;
                $scope.otherQty = blockAdminData.data.otherQty;
                $scope.lg1 = blockAdminData.data.lg1;
                $scope.lg2 = blockAdminData.data.lg2;
                $scope.lg3 = blockAdminData.data.lg3;
                $scope.lg4 = blockAdminData.data.lg4;
                $scope.lg5 = blockAdminData.data.lg5;
                $scope.lg6 = blockAdminData.data.lg6;
                $scope.allocationSummary = blockAdminData.data.allocationSummary;
                $scope.filterStatus = blockAdminData.data.filterStatus;
                $scope.filterEx = blockAdminData.data.filterEx;

            };

            var setAllocationFields = function() {

                $scope.principal = blockAdminData.data.principal;
                $scope.activeQty = blockAdminData.data.activeQty;
                $scope.commCode = blockAdminData.data.commCode;
                $scope.commCodeLast = blockAdminData.data.commCodeLast;
                $scope.regRep = blockAdminData.data.regRep;
                $scope.activeCount = blockAdminData.data.activeCount;
                $scope.allocPrice = blockAdminData.data.allocPrice;
                $scope.otherQty = blockAdminData.data.otherQty;
                $scope.lg1 = blockAdminData.data.lg1;
                $scope.lg2 = blockAdminData.data.lg2;
                $scope.lg3 = blockAdminData.data.lg3;
                $scope.lg4 = blockAdminData.data.lg4;
                $scope.lg5 = blockAdminData.data.lg5;
                $scope.lg6 = blockAdminData.data.lg6;
                $scope.payToRep = blockAdminData.data.payToRep;
                $scope.otherCount = blockAdminData.data.otherCount;
                $scope.markup = blockAdminData.data.markup;
                $scope.pendingAlloc = blockAdminData.data.pendingAlloc;
                $scope.fee = blockAdminData.data.fee;
                $scope.memo = blockAdminData.data.memo;
                $scope.executionSummary = blockAdminData.data.executionSummary;
                $scope.filterStatus = blockAdminData.data.filterStatus;
            };

            var getAllocationColumns = function() {

                var getCommissionOptions = $Shared.convertToCommaString(blockAdminData.data.commCodeLast);
                var columns = [{
                    id: "accountNumber",
                    editor: Slick.Editors.Text,
                    field: "accountNumber",
                    sortable: true,
                    name: "<br/>Account #",
                    width: 100,
                    cssClass: "cell-selection"
                }, {
                    id: "shortName",
                    editor: Slick.Editors.Text,
                    field: "shortName",
                    name: "<br/>Short Name",
                    width: 85
                }, {
                    id: "qty",
                    editor: Slick.Editors.Integer,
                    field: "qty",
                    name: "<br/>Qty",
                    width: 40
                }, {
                    id: "rep",
                    editor: Slick.Editors.Text,
                    field: "rep",
                    name: "<br/>Rep",
                    width: 50,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "comm",
                    editor: Slick.Editors.Float,
                    field: "comm",
                    name: "<br/>Commission",
                    width: 100,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "code",
                    field: "code",
                    name: "<br/>Code",
                    width: 50,
                    options: getCommissionOptions,
                    editor: $Shared.selectCellEditor,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "fee",
                    editor: Slick.Editors.Float,
                    field: "fee",
                    name: "<br/>Fee",
                    width: 90,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "lg1",
                    editor: Slick.Editors.Text,
                    field: "lg1",
                    name: "lg1",
                    width: 20
                }, {
                    id: "lg2",
                    editor: Slick.Editors.Text,
                    field: "lg2",
                    name: "lg2",
                    width: 20
                }, {
                    id: "lg3",
                    editor: Slick.Editors.Text,
                    field: "lg3",
                    name: "lg3",
                    width: 20
                }, {
                    id: "lg4",
                    editor: Slick.Editors.Text,
                    field: "lg4",
                    name: "lg4",
                    width: 20
                }, {
                    id: "lg5",
                    editor: Slick.Editors.Text,
                    field: "lg5",
                    name: "lg5",
                    width: 20
                }, {
                    id: "lg6",
                    editor: Slick.Editors.Text,
                    field: "lg6",
                    name: "lg6",
                    width: 20
                }, {
                    id: "MIEB",
                    editor: Slick.Editors.Text,
                    field: "MIEB",
                    name: "<br/>MIEB",
                    width: 50
                }, {
                    id: "MICB",
                    editor: Slick.Editors.Text,
                    field: "MICB",
                    name: "<br/>MICB",
                    width: 50
                }, {
                    id: "status",
                    editor: Slick.Editors.Text,
                    field: "status",
                    name: "<br/>Status",
                    width: 90
                }, {
                    id: "ptr",
                    editor: Slick.Editors.Integer,
                    field: "ptr",
                    name: "<br/>PTR",
                    width: 90
                }, {
                    id: "vspDate",
                    editor: Slick.Editors.Date,
                    field: "vspDate",
                    name: "<br/>VSP Date",
                    width: 90
                }, {
                    id: "memo",
                    editor: Slick.Editors.Text,
                    field: "memo",
                    name: "<br/>Memo",
                    width: 90
                }];

                $scope.checkboxSelector = new Slick.CheckboxSelectColumn({
                    cssClass: "slick-cell-checkboxsel"
                });

                columns.unshift($scope.checkboxSelector.getColumnDefinition());

                return columns;
            };
            var getExecutionColumns = function() {

                var columns = [{
                    id: "quantity",
                    field: "quantity",
                    sortable: true,
                    name: "<br/>Quantity",
                    width: 100
                }, {
                    id: "price",
                    field: "price",
                    name: "<br/>Price",
                    width: 120
                }, {
                    id: "MIEB",
                    field: "MIEB",
                    name: "<br/>MIEB",
                    width: 50
                }, {
                    id: "MICB",
                    field: "MICB",
                    name: "<br/>MICB",
                    width: 50
                }, {
                    id: "time",
                    field: "time",
                    name: "<br/>Time",
                    width: 65
                }, {
                    id: "principal",
                    field: "principal",
                    name: "<br/>Principal",
                    width: 100
                }, {
                    id: "offset",
                    field: "offset",
                    name: "<br/>Offset",
                    width: 75
                }, {
                    id: "acct#",
                    field: "acct#",
                    name: "<br/>Acct#",
                    width: 140
                }, {
                    id: "exchange",
                    field: "exchange",
                    name: "<br/>Exchange",
                    width: 100
                }, {
                    id: "market",
                    field: "market",
                    name: "<br/>Market",
                    width: 140
                }, {
                    id: "blotter",
                    field: "blotter",
                    name: "<br/>Blotter",
                    width: 140
                }, {
                    id: "lg1",
                    field: "lg1",
                    name: "lg1",
                    width: 20
                }, {
                    id: "lg2",
                    field: "lg2",
                    name: "lg2",
                    width: 20
                }, {
                    id: "lg3",
                    field: "lg3",
                    name: "lg3",
                    width: 20
                }, {
                    id: "lg4",
                    field: "lg4",
                    name: "lg4",
                    width: 20
                }, {
                    id: "lg5",
                    field: "lg5",
                    name: "lg5",
                    width: 20
                }, {
                    id: "lg6",
                    field: "lg6",
                    name: "lg6",
                    width: 20
                }, {
                    id: "ati",
                    field: "ati",
                    name: "<br/>ATI",
                    width: 90
                }, {
                    id: "status",
                    field: "status",
                    name: "<br/>Status",
                    width: 90
                }];

                $scope.checkboxSelector = new Slick.CheckboxSelectColumn({
                    cssClass: "slick-cell-checkboxsel"
                });

                columns.unshift($scope.checkboxSelector.getColumnDefinition());

                return columns;
            };

            $scope.showAddExecutions = function() {

                sharedDataSvc2.accountNumber = $scope.masterAcctFirst + '-' + $scope.masterAcctSecond + '-' + $scope.masterAcctLast.selected;

                ngDialog.open({
                    template: "Static/Scripts/App/Templates/BlockMaintenance/BlockAdminAddExecutions.html",
                    className: 'ngdialog-theme-default addExecutions-width',
                    controller: "BlockAdminAddExecutionsCtrl",
                    closeByDocument: false,
                    preCloseCallback: setClose
                });
            };

            $scope.showAddAllocations = function() {
                ngDialog.open({
                    template: "Static/Scripts/App/Templates/BlockMaintenance/BlockAdminAddAllocations.html",
                    className: 'ngdialog-theme-default addExecutions-width',
                    controller: "BlockAdminAddAllocationsCtrl",
                    closeByDocument: false,
                    preCloseCallback: setClose
                });
            };

            $scope.blockReset = function(type) {
                alert('block reset: ' + type);
            };

            $scope.blockSave = function(type) {
                alert('block save: ' + type);
            };

            $scope.blockSend = function(type) {
                alert('block send: ' + type);
            };

            $scope.blockCancel = function(type) {
                alert('block cancel: ' + type);
            };

            $scope.showHeader = false;

            $scope.blockAdminActiveTab = $routeParams.tabType;

            $scope.system = $rootScope.system;

            $scope.showHeaderSummary = function(showAction) {
                $scope.showHeader = showAction;
                $scope.showAction = $scope.action;
            }

            $scope.isWRMainSystem = function() {
                // check the system....if it's empty string '' then it's WebReserve main system....Return true.
                if (!angular.isUndefined($scope.system) && $scope.system != '') {
                    return true;
                }
                return false;
            };

            //set header Fields//
            setHeaderFields();

            switch ($routeParams.tabType) {
                case 'executions':
                    var getColumns = getExecutionColumns;
                    setExecutionFields();
                    break;
                case 'allocations':
                    var getColumns = getAllocationColumns;
                    setAllocationFields();
                    break;
                default:
            }


            //Allocation Fields//
            $scope.commCode = blockAdminData.data.commCode;
            $scope.commCodeLast = blockAdminData.data.commCodeLast;
            $scope.regRep = blockAdminData.data.regRep;
            $scope.activeCount = blockAdminData.data.activeCount;
            $scope.allocPrice = blockAdminData.data.allocPrice;
            $scope.otherQty = blockAdminData.data.otherQty;
            $scope.paytoRep = blockAdminData.data.payToRep;
            $scope.otherCount = blockAdminData.data.otherCount;
            $scope.markup = blockAdminData.data.markup;
            $scope.pendingAlloc = blockAdminData.data.pendingAlloc;
            $scope.fee = blockAdminData.data.fee;
            $scope.memo = blockAdminData.data.memo;

            var getTabRights = tabSvc.getTabRights();
            if (!getTabRights.tabRights) {
                getTabRights.tabRights = {};
            }

            $scope.accessParams = {
                update: (getTabRights.tabRights.Update),
                lockdown: (getTabRights.tabRights.Lockdown),
                unlock: (getTabRights.tabRights.Unlock),
                freeze: (getTabRights.tabRights.Freeze),
                role: getTabRights.role
            };


            $scope.columns = getColumns();
            $scope.data = blockAdminData.data.data;
            $scope.addCopyPaste = false;
            $scope.addMultiSelect = false;
            $scope.addTab = true;

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

            $scope.sortedColumn = "rptCode";

            var excuteBeforeRequest = function() {
                $scope.processStatus = " ";
                $scope.processStatusDescription = "";
            };

            $scope.newDisplay = function() {
                alert('display selected');
            };


            $scope.currentPreviousTooltipErrorMessage = "";

            var rowParams = null;
            $scope.onRowClick = function(parameters) {
                $scope.selectedRow = parameters.row;
                $scope.adjParams = {
                    rowIndex: parameters.rowIndex,
                    cellIndex: parameters.cellIndex
                };

                if (!$scope.noDropMenu) {
                    if (parameters.row.level !== 0 && !parameters.row.__groupTotals)
                        rowParams = parameters.row;
                    if (parameters.colId === "accountNumber") {
                        angular.element("#gridDropMenu").hide();
                        gridDropMenu(parameters.pageX, parameters.pageY);
                    } else {
                        angular.element("#gridDropMenu").hide();
                    }
                }
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
                    //  console.log($scope.selectedRow);
                    // alert('Selected: ' + entry + ' - ' + $scope.selectedRow.accountNumber);
                }

            };

            $scope.displayClick = function() {
                if ($scope.formblockAdmin.$valid) {

                    $scope.formblockAdmin.$setPristine();
                    $scope.formblockAdmin.$setUntouched();
                    $scope.formblockAdmin.$submitted = false;

                    var currCycle = $scope.currentDate.selected.split('|');
                    var prevCycle = $scope.PreviousDate.selected.split('|');
                    setSearchParams();
                    while ($scope.data.length > 0)
                        $scope.data.pop();
                    excuteBeforeRequest();
                    $scope.grid.setSortColumn($scope.sortedColumn);

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
                    blockAdminSvc.getSearchData(parameters).success(function(data, status, headers, config) {
                        $scope.timeStamp = config.timeStamp;
                        $scope.severity = data.severity;
                        $scope.msg = data.msg;
                        $scope.processStatus = data.processStatus;
                        $scope.processStatusDescription = data.processStatusDescription;
                        $scope.prev1Date = data.prev1Date;
                        $scope.prev2Date = data.prev2Date;
                        $scope.yearEndDate = data.yearEndDate;
                        $scope.grid.setColumns(getColumns());
                        $scope.data = (data.data !== undefined ? data.data : []);
                        $scope.pendingApprovalCount = data.pendingApprovalCount;

                    });
                }
            };
            $scope.onRowCellChange = function(row, field) {
                resetSearchParams();
                switch (field) {
                    case "comments":
                        if (row.rptLine !== "Oth") {
                            blockAdminSvc.updateComments({
                                rptType: row.rptType,
                                rptCode: row.rptCode,
                                rptLine: row.rptLine,
                                comments: row.comments,
                                currentCycleDate: row.currentCycleDate,
                                frequencyCode: row.frequencyCode
                            }).success(function(data) {
                                $scope.severity = data.severity;
                                $scope.msg = data.msg;
                            });
                        } else {
                            var childScope = $scope.$new(true);
                            childScope.alertMsg = "Cannot enter comments on rolled up Report Lines";
                            childScope.alertSeverity = "Error";
                            ngDialog.open({
                                template: "Static/Scripts/App/Templates/Page/DialogAlert.html",
                                scope: childScope,
                                showClose: false,
                                closeByDocument: false,
                                preserveFocus: false
                            });
                        }
                        break;
                }
            };
            $scope.freeze = function() {
                resetSearchParams();
                var childScope = $scope.$new(true);
                childScope.alertMsg = "Please confirm if you want to Freeze/Close the cycle date of " +
                    getTitle($scope.currentDate.options, $scope.currentDate.selected);
                childScope.alertSeverity = "Note";
                ngDialog.openConfirm({
                    template: "Static/Scripts/App/Templates/Page/DialogAlertConfirm.html",
                    scope: childScope,
                    showClose: false,
                    closeByDocument: false
                }).then(function() {
                    $scope.actionClick("FRZ");
                }, function() {});
            };
            $scope.actionClick = function(action) {
                resetSearchParams();
                var currCycle = $scope.currentDate.selected.split('|');
                var parameters = {
                    Action: action,
                    rptType: $scope.reportType.selected,
                    CurrentCycleDate: currCycle[0],
                    FrequencyCode: currCycle[1],
                    processStatus: $scope.processStatus
                };
                blockAdminSvc.processAction(parameters).success(function(data, status, headers, config) {
                    $scope.timeStamp = config.timeStamp;
                    $scope.severity = data.severity;
                    $scope.msg = data.msg;
                    $scope.processStatus = data.processStatus;
                    $scope.processStatusDescription = data.processStatusDescription;
                });
            };

            $scope.onBeforeEditCell = function(parameters) {
                if ($scope.processStatus === "C" || $scope.processStatus === "Z") {
                    return false;
                }
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

            $scope.refreshClick = function() {

            };


            var setExecutionPageFields = function(result) {

                blockAdminData = result;
                $scope.tabType = 'executions';

                $scope.columns = getExecutionColumns();
                var columns = $Shared.removeSelectCheckbox($scope.columns);

                $scope.rebuildGrid(columns)
                $scope.data = result.data.data;

                setExecutionFields();

                $scope.radioValue = 'tab';

                setTimeout(function() {
                    angular.element('#radio1').triggerHandler('click');
                    $scope.grid.invalidate();
                }, 0);


            }

            var setAllocationPageFields = function(result) {
                blockAdminData = result;
                $scope.tabType = 'allocations';

                $scope.columns = getAllocationColumns();
                var columns = $Shared.removeSelectCheckbox($scope.columns);
                $scope.rebuildGrid(columns)

                $scope.data = result.data.data;

                setAllocationFields();

                $scope.setTab();

                setTimeout(function() {
                    angular.element('#radio1').triggerHandler('click');
                    $scope.grid.invalidate();
                }, 0);


            }

            $scope.setTab = function() {
                $scope.radioValue = 'tab';
                $scope.addTab = true;
                $scope.addMultiSelect = false;
                $scope.addCopyPaste = false;

            }

            $scope.setCopyPaste = function() {
                $scope.radioValue = 'copy';
                $scope.addCopyPaste = true;
                $scope.addTab = false;
                $scope.addMultiSelect = false;
            }

            $scope.setMultiSelect = function() {
                $scope.radioValue = 'multi';
                $scope.addMultiSelect = true;
                $scope.addTab = false;
                $scope.addCopyPaste = false;
            }

            $scope.undoCopyPaste = function() {
                $scope.grid.undoRedoBuffer.undo();
            }

            $scope.callExecutionFilterReset = function() {
                alert('Execution Filter Reset');
            }

            $scope.timeStamp = new Date();

            $scope.applyExecutionFilter = function() {
                alert('Execution Filter Reset');
            }

            $scope.callAllocationFilterReset = function() {
                alert('Allocation Filter Reset');
            }

            $scope.applyAllocationFilter = function() {
                alert('Allocation Filter Reset');
            }

            $scope.setActiveTab = function(tabName) {
                $scope.blockAdminActiveTab = tabName;

                switch (tabName) {
                    case 'executions':
                        blockAdminSvc.getExecutionData().
                        then(function(result) {
                            setExecutionPageFields(result);
                        }, function() {});
                        break;
                    case 'allocations':
                        blockAdminSvc.getAllocationData().
                        then(function(result) {
                            setAllocationPageFields(result);
                        }, function() {});
                        break;
                    default:
                }



            };

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
                blockAdminSvc.getPdfData(parameters);
            };
            $scope.resetClick = function() {
                $route.reload();
            };

            $scope.addBlock = function() {
                tabSvc.changeRoute('PTRS/AddBlock');

            };

        } catch (e) {
            alert(e);
            $scope.data = [];
            $scope.recordsCount = $scope.data.length;
        }
    }
]);
