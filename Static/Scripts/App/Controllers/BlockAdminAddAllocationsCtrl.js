controllers.controller("BlockAdminAddAllocationsCtrl", [
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

            $scope.tabMode = true;
            $scope.multiMode = false;
            $scope.copyMode = true;

            $scope.radioValue = 'tab';
            $scope.radioGroup = 'addAllocations';

            var getColumns = function() {
                var getCommissionOptions = "NEED,TO,FIX,THIS";
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
                    width: 20,
                    cssClass: "ColumnLeftAlign"
                }, {
                    id: "lg2",
                    editor: Slick.Editors.Text,
                    field: "lg2",
                    name: "lg2",
                    width: 20,
                    cssClass: "ColumnLeftAlign"
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
                return columns;
            };

            var checkEditable = function() {
                $scope.editable = true;
            };

            $scope.columns = getColumns();
            $scope.data = [];

            for (var i = 0; i < 50; i++) {
                $scope.data[i] = {
                    'rowID': i,
                    'accountNumber': 0,
                    'shortName': ' ',
                    'qty': 0,
                    'comm': 0,
                    'code': 0.00,
                    'fee': 0.00,
                    'lg1': ' ',
                    'lg2': ' ',
                    'lg3': ' ',
                    'lg4': ' ',
                    'lg5': ' ',
                    'MIEB': ' ',
                    'MICB': ' ',
                    'status': ' ',
                    'ptr': ' ',
                    'vspDate': ' ',
                    'memo': ' '
                };
            }

            $scope.addCopyPaste = false;

            $scope.sortedColumn = false;
            $scope.gridOptions = {
                topPanelHeight: 25,
                forceFitColumns: false,
                editable: true,
                enableColumnReorder: true,
                enableCellNavigation: true,
                asyncEditorLoading: false,
                multiColumnSort: true,
                displayTotalsRow: false,
                autoEdit: false
            };

            $scope.blockSave = function() {
                sharedDataSvc2.allocations = $scope.dataView.getItems();

                blockAdminSvc.createAllocationsData().
                then(function(result) {
                    console.log(result);
                }, function() {
                    alert('failure');
                });
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
