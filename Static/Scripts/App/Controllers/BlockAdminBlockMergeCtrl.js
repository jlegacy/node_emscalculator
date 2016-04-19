controllers.controller("BlockAdminBlockMergeCtrl", [
    "$scope",
    "blockAdminSvc",
    "tabSvc",
    "$route",
    "$routeParams",
    "ngDialog",
    "sharedDataSvc2",
    "$log",
    "$rootScope",
    function($scope, blockAdminSvc, tabSvc, $route, $routeParams, ngDialog, sharedDataSvc2, $log, $rootScope) {
        "use strict";
        try {
            var getColumns = function() {

                var getExchangeOptions = "NEED,TO,FIX,THIS";
                var columns = [{
                    id: "OA_blockName",
                    field: "OA_blockName",
                    editor: Slick.Editors.Text,
                    name: "<br/>Block Name",
                    width: 100,
                    cssClass: "cell-selection"
                }, {
                    id: "OA_type",
                    field: "OA_type",
                    name: "Order/<br/>Allocation",
                    width: 75
                }, {
                    id: "OA_ref",
                    field: "OA_ref",
                    name: "<br/>References#",
                    width: 100
                }, {
                    id: "OA_blockSeq",
                    field: "OA_blockSeq",
                    name: "Block<br/>Sequence #",
                    width: 100
                }, {
                    id: "OA_qty",
                    field: "OA_qty",
                    name: "<br/>Qty",
                    width: 50
                }, {
                    id: "OA_price",
                    field: "OA_price",
                    name: "<br/>Price",
                    width: 100
                }, {
                    id: "BS_qty",
                    field: "BS_qty",
                    cssClass: "ColumnRightBoldBorder",
                    headerCssClass: "ColumnRightBoldBorder",
                    name: "<br/>Quantity",
                    width: 100
                }, {
                    id: "BS_price",
                    field: "BS_price",
                    name: "<br/>Prices",
                    width: 100,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "BS_diff",
                    field: "BS_diff",
                    name: "<br/>$ Difference",
                    width: 100,
                    formatter: Slick.Formatters.Amount,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "BS_blockType",
                    field: "BS_blockType",
                    name: "<br/>Block Type",
                    width: 100,
                    cssClass: "ColumnLeftAlign",
                    headerCssClass: "ColumnLeftAlign"
                }, {
                    id: "BS_status",
                    field: "BS_status",
                    name: "<br/>Status",
                    width: 70,
                    cssClass: "ColumnRightAlign",
                    headerCssClass: "ColumnRightAlign"
                }, ];
                return columns;
            };


            $scope.columns = getColumns();
            $scope.data = [];

            $scope.showRefresh = false;
            $scope.showPdf = false;
            $scope.showExport = false;


            $scope.sortedColumn = false;
            $scope.gridOptions = {
                topPanelHeight: 25,
                forceFitColumns: false,
                editable: true,
                enableColumnReorder: false,
                enableCellNavigation: true,
                asyncEditorLoading: false,
                multiColumnSort: true,
                displayTotalsRow: false,
                autoEdit: true
            };

            $scope.blockSave = function() {
                sharedDataSvc2.executions = $scope.dataView.getItems();

                blockAdminSvc.createExecutionsData().
                then(function(result) {
                    console.log(result);
                }, function() {
                    alert('failure');
                });
            };

            $scope.blockMassMerge = function() {
                alert('Mass Merge');
            };


            $scope.setTab = function() {
                $scope.radioValue = 'tab';
                $scope.addTab = true;
                $scope.addCopyPaste = false;
            }

            $scope.setCopyPaste = function() {
                $scope.radioValue = 'copy';
                $scope.addCopyPaste = true;
                $scope.addTab = false;
            }

            $scope.undoCopyPaste = function() {
                $scope.grid.undoRedoBuffer.undo();
            }

            var callReloadData = function() {
                blockAdminSvc.getBlockMergeData().
                then(function(result) {
                    $scope.timeStamp = new Date();
                    loadDataFields(result);
                }, function() {});
            };

            var loadDataFields = function(result) {
                $scope.data = result.data.data;
                $scope.totalBlocks = result.data.totalBlocks;
                $scope.totalOrders = result.data.totalOrders;
                $scope.tradeDate = result.data.tradeDate;
                $scope.CUSIP = result.data.CUSIP;
                $scope.buySell = result.data.buySell;
                $scope.masterAccount = result.data.masterAccount;
                $scope.shortName = result.data.shortName;
                $scope.symbol = result.data.symbol;

            }
            callReloadData();

        } catch (e) {
            alert(e);
            $scope.data = [];
            $scope.recordsCount = $scope.data.length;
        }

        //
        setTimeout(function() {
            $scope.addTab = true;
        }, 0);
    }
]);
