controllers.controller("BlockAdminAddExecutionsCtrl", [
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
            $scope.radioGroup = 'addExecutions';

            var getColumns = function() {

                var getExchangeOptions = "NEED,TO,FIX,THIS";
                var columns = [

                    {
                        id: "quantity",
                        field: "quantity",
                        editor: Slick.Editors.Integer,
                        formatter: Slick.Formatters.Number,
                        sortable: true,
                        name: "<br/>Quantity",
                        width: 100,
                        cssClass: "cell-selection"
                    }, {
                        id: "price",
                        field: "price",
                        editor: Slick.Editors.Float,
                        formatter: Slick.Formatters.Amount,
                        name: "<br/>Price",
                        width: 120
                    }, {
                        id: "MIEB",
                        field: "MIEB",
                        name: "<br/>MIEB",
                        width: 50,
                        editor: Slick.Editors.Text
                    }, {
                        id: "MICB",
                        field: "MICB",
                        name: "<br/>MICB",
                        width: 50,
                        editor: Slick.Editors.Integer
                    }, {
                        id: "MAEB",
                        field: "MAEB",
                        name: "<br/>MAEB",
                        width: 50,
                        editor: Slick.Editors.Text
                    }, {
                        id: "time",
                        field: "time",
                        name: "<br/>Time",
                        maxLength: 4,
                        width: 50,
                        editor: Slick.Editors.Text,
                        formatter: Slick.CustomFormatters.TimeHoursMinutes
                    }, {
                        id: "principle",
                        field: "principle",
                        name: "<br/>Principle",
                        width: 100,
                        editor: Slick.Editors.Float,
                        formatter: Slick.Formatters.Amount,
                        cssClass: "ColumnLeftAlign",
                        headerCssClass: "ColumnLeftAlign"
                    }, {
                        id: "offset",
                        field: "offset",
                        name: "<br/>Offset",
                        width: 75,
                        editor: Slick.Editors.Integer,
                        formatter: Slick.Formatters.Amount,
                        cssClass: "ColumnLeftAlign",
                        headerCssClass: "ColumnLeftAlign"
                    }, {
                        id: "acc#",
                        field: "acct#",
                        name: "<br/>Acct#",
                        width: 140,
                        editor: Slick.Editors.Integer,
                        cssClass: "ColumnLeftAlign",
                        headerCssClass: "ColumnLeftAlign"
                    }, {
                        id: "exchange",
                        field: "exchange",
                        name: "<br/>Exchange",
                        width: 140,
                        options: getExchangeOptions,
                        editor: $Shared.selectCellEditor,
                        formatter: Slick.Formatters.Amount,
                        cssClass: "ColumnRightAlign",
                        headerCssClass: "ColumnRightAlign"
                    }, {
                        id: "market",
                        field: "market",
                        name: "<br/>Market",
                        editor: Slick.Editors.Text,
                        width: 140,
                        formatter: Slick.Formatters.Amount,
                        cssClass: "ColumnRightAlign",
                        headerCssClass: "ColumnRightAlign"
                    }, {
                        id: "blotter",
                        field: "blotter",
                        name: "<br/> Blotter",
                        editor: Slick.Editors.Text,
                        width: 140,
                        formatter: Slick.Formatters.Amount,
                        cssClass: "ColumnRightAlign",
                        headerCssClass: "ColumnRightAlign"
                    }, {
                        id: "legend1",
                        field: "legend1",
                        editor: Slick.Editors.Text,
                        name: "<br/>Lg1",
                        width: 10
                    }, {
                        id: "legend2",
                        field: "legend2",
                        editor: Slick.Editors.Text,
                        name: "<br/>Lg2",
                        width: 10
                    }, {
                        id: "legend3",
                        field: "legend3",
                        editor: Slick.Editors.Text,
                        name: "<br/>Lg3",
                        width: 10
                    }, {
                        id: "legend4",
                        field: "legend4",
                        editor: Slick.Editors.Text,
                        name: "<br/>Lg4",
                        width: 10
                    }, {
                        id: "legend5",
                        field: "legend5",
                        editor: Slick.Editors.Text,
                        name: "<br/>Lg5",
                        width: 10
                    }, {
                        id: "ati",
                        field: "ati",
                        name: "<br/>ATI",
                        maxLength: 80,
                        title: "comments",
                        width: 90,
                        editor: Slick.Editors.Text,
                        validator: defaultStringValidation
                    }
                ];
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
                    'quantity': 0,
                    'price': 0,
                    'MIEB': 'a',
                    'MICB': 'a',
                    'MAEB': ' ',
                    'time': '0000',
                    'principle': ' ',
                    'offset': ' ',
                    'acc#': ' ',
                    'exchange': ' ',
                    'market': ' ',
                    'blotter': ' ',
                    'legend1': ' ',
                    'legend2': ' ',
                    'legend3': ' ',
                    'legend4': ' ',
                    'legend5': ' ',
                    'ati': ' '
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

            $scope.addRow = function() {
                var newId = $scope.dataView.getLength();
                $scope.data.push({
                    'rowID': newId,
                    'quantity': 0,
                    'price': 0,
                    'MIEB': 'a',
                    'MICB': 'a',
                    'MAEB': ' ',
                    'time': '0000',
                    'principle': ' ',
                    'offset': ' ',
                    'acc#': ' ',
                    'exchange': ' ',
                    'market': ' ',
                    'blotter': ' ',
                    'legend1': ' ',
                    'legend2': ' ',
                    'legend3': ' ',
                    'legend4': ' ',
                    'legend5': ' ',
                    'ati': ' '
                });

            };

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
