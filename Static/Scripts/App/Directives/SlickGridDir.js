directives.directive('slickGrid', ['$window', '$timeout',
    function($window, $timeout) {
        "use strict";

        return {
            restrict: 'EA',
            link: function($scope, $element, attrs) {
                var showTotalsOnGroup = ($scope.gridOptions && $scope.gridOptions.showTotalsOnGroup === true);
                var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider({
                    showTotalsOnGroup: showTotalsOnGroup
                });


                $scope.dataView = new Slick.Data.DataView({
                    groupItemMetadataProvider: groupItemMetadataProvider,
                    displayTotalsRow: !showTotalsOnGroup,
                    inlineFilters: true
                });

                $scope.init = function() {
                    $scope.dataView.onRowCountChanged.subscribe(function(e, args) {
                        $scope.grid.updateRowCount();
                        if (args.current === 0) {
                            alert('row 25');
                            $('.grid-canvas').html(emptyRow());
                            return;
                        }
                        $scope.grid.render();
                    });

                    $scope.dataView.onRowsChanged.subscribe(function(e, args) {
                        $scope.grid.invalidateRows(args.rows);
                        $scope.grid.render();
                    });

                    $scope.grid.onValidationError.subscribe(function(e, args) {

                        console.log(args);
                        console.log(e);

                        $scope.onValidationError(args);
                    });

                    $scope.grid.onClick.subscribe(function(e, args) {
                        e.preventDefault();
                        if ($scope.onRowClick) {
                            var cell = $scope.grid.getCellFromEvent(e);
                            var colId = $scope.grid.getColumns()[cell.cell].id;
                            var params = {
                                row: $scope.dataView.getItem(args.row),
                                colId: colId,
                                pageX: e.pageX,
                                pageY: e.pageY,
                                rowIndex: args.row,
                                cellIndex: args.cell
                            };
                            $scope.onRowClick(params);
                        }
                    });

                    $scope.grid.onContextMenu.subscribe(function(e, args) {
                        e.preventDefault();
                        console.log(e);
                        var selectedCell = angular.element(e.target).addClass("rightClick");
                        var div = angular.element("#rightClickMenu").css({
                            "display": "block",
                            "left": e.pageX,
                            "top": e.pageY
                        });

                        function cellValue() {
                            return angular.element(".rightClick").text();
                        }

                        div.off();
                        div.on("click", function() {
                            console.log(cellValue());
                            $('#spCopy').attr('data-clipboard-text', cellValue());
                            var clipboard = new Clipboard('#spCopy');

                            clipboard.on('success', function(e) {
                                e.clearSelection();
                                clipboard.destroy();
                            });

                            clipboard.on('error', function(e) {
                                alert('error using copy');
                                clipboard.destroy();
                            });

                            selectedCell.removeClass("rightClick");
                            div.css({
                                "display": "none"
                            });

                        });
                    });

                    $scope.grid.onDblClick.subscribe(function(e, args) {
                        if ($scope.onDblClick !== undefined) {
                            var params = $scope.dataView.getItem(args.row);
                            if (params.level !== 0 && !params.initialized)
                                if (params.level !== 1)
                                    $scope.onDblClick({
                                        params: params,
                                        rowIndex: args.row,
                                        cellIndex: args.cell
                                    });
                        }
                    });

                    $scope.grid.onCellChange.subscribe(function(e, args) {
                        if ($scope.onRowCellChange) {
                            var row = $scope.dataView.getItem(args.row);
                            var field = $scope.grid.getColumns()[args.cell].field;
                            $scope.grid.resetActiveCell();
                            $scope.onRowCellChange(row, field);
                        }
                    });

                    $scope.grid.onScroll.subscribe(function(e) {
                        if ($scope.gridDropMenu) {
                            angular.element("#gridDropMenu").hide();
                        }
                    });

                    $scope.grid.onBeforeEditCell.subscribe(function(e, args) {
                        if ($scope.onBeforeEditCell !== undefined) {
                            var params = $scope.dataView.getItem(args.row);
                            return $scope.onBeforeEditCell(params);
                        }
                        return true;
                    });

                    $scope.grid.onSort.subscribe(function(e, args) {
                        var cols = args.sortCols[0].sortCol.field;
                        $scope.dataView.sort(function(a, b) {
                            var cell1 = a[cols];
                            var cell2 = b[cols];
                            switch (cols) {
                                case "currentAmount":
                                case "startDateAmount":
                                case "differenceAmount":
                                case "prevAmount":
                                case "prev1Amount":
                                case "prev2Amount":
                                case "previousYearAmount":
                                case "cushionAmount":
                                case "hairCutRate":
                                    var value1 = parseFloat(cell1 === "--" ? 0 : cell1);
                                    var value2 = parseFloat(cell2 === "--" ? 0 : cell2);
                                    return (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1));
                                case "modifiedDate":
                                case "createdDate":
                                case "cycleDate":
                                case "processDate":
                                    var dateTime1 = new Date(cell1);
                                    var dateTime2 = new Date(cell2);
                                    return (dateTime1 == dateTime2 ? 0 : (dateTime1 > dateTime2 ? 1 : -1));
                                case "cycleDateAndFrequency":
                                    var dateTime1 = new Date(a["cycleDate"]);
                                    var dateTime2 = new Date(b["cycleDate"]);
                                    return (dateTime1 == dateTime2 ? 0 : (dateTime1 > dateTime2 ? 1 : -1));
                                case "rptCode":
                                    if (cell1 === cell2) {
                                        return args.sortCols[0].sortAsc ? (a.rptLine > b.rptLine ? 1 : -1) : 0;
                                    } else
                                        return (cell1 > cell2 ? 1 : -1);
                                default:
                                    return (cell1 == cell2 ? 0 : (cell1 > cell2 ? 1 : -1));
                            }
                        }, args.sortCols[0].sortAsc);
                    });

                };

                $scope.grid = new Slick.Grid($element, $scope.dataView, $scope.columns, $scope.gridOptions);
                $scope.grid.registerPlugin(groupItemMetadataProvider);
                $scope.grid.registerPlugin(new Slick.AutoTooltips());
                $scope.grid.setSelectionModel(new Slick.CellSelectionModel());

                $scope.init();

                $scope.rebuildGrid = function(columns) {
                    $scope.grid = new Slick.Grid($element, $scope.dataView, columns, $scope.gridOptions);
                    $scope.init();
                }

                $scope.$watch("addCopyPaste", function() {
                    if ($scope.addCopyPaste === true) {
                        var pluginOptions = {
                            clipboardCommandHandler: function(editCommand) {
                                $scope.grid.undoRedoBuffer.queueAndExecuteCommand.call($scope.grid.undoRedoBuffer, editCommand);
                            },
                            includeHeaderWhenCopying: false
                        };

                        //if present remove the multiple select checkbox
                        var newColumns = $Shared.removeSelectCheckbox($scope.columns);
                        $scope.grid = new Slick.Grid($element, $scope.dataView, newColumns, $scope.gridOptions);


                        $scope.grid.setOptions({
                            editable: false,
                            autoEdit: false
                        });

                        $scope.grid.setSelectionModel(new Slick.CellSelectionModel());

                        $scope.grid.copyManager = new Slick.CellExternalCopyManager(pluginOptions);

                        $scope.grid.registerPlugin($scope.grid.copyManager);

                        $scope.grid.allowPaste = true;

                        $scope.grid.undoRedoBuffer = {
                            commandQueue: [],
                            commandCtr: 0,

                            queueAndExecuteCommand: function(editCommand) {
                                this.commandQueue[this.commandCtr] = editCommand;
                                this.commandCtr++;
                                editCommand.execute();
                            },

                            undo: function() {
                                if (this.commandCtr == 0)
                                    return;

                                this.commandCtr--;
                                var command = this.commandQueue[this.commandCtr];

                                if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                                    command.undo();
                                }
                            },
                            redo: function() {
                                if (this.commandCtr >= this.commandQueue.length)
                                    return;
                                var command = this.commandQueue[this.commandCtr];
                                this.commandCtr++;
                                if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                                    command.execute();
                                }
                            }
                        }

                        $scope.init();
                        $scope.grid.invalidate();

                    }
                });

                $scope.$watch("addTab", function() {
                    if ($scope.addTab === true) {

                        //if present remove the multiple select checkbox
                        var newColumns = $Shared.removeSelectCheckbox($scope.columns);

                        $scope.grid = new Slick.Grid($element, $scope.dataView, newColumns, $scope.gridOptions);
                        $scope.grid.registerPlugin(groupItemMetadataProvider);
                        $scope.grid.registerPlugin(new Slick.AutoTooltips());
                        $scope.grid.setSelectionModel(new Slick.CellSelectionModel());

                        $scope.grid.setOptions({
                            autoEdit: true,
                            editable: true
                        });

                        $scope.init();
                        $scope.grid.invalidate();
                    }
                });

                $scope.$watch("addMultiSelect", function() {
                    if ($scope.addMultiSelect === true) {

                        $scope.grid = new Slick.Grid($element, $scope.dataView, $scope.columns, $scope.gridOptions);
                        $scope.grid.setSelectionModel(new Slick.RowSelectionModel({
                            selectActiveRow: false
                        }));
                        $scope.grid.registerPlugin($scope.checkboxSelector);

                        $scope.grid.setOptions({
                            autoEdit: true,
                            editable: true
                        });

                        $scope.init();
                        $scope.grid.invalidate();

                        //Once grid finished loading, set checkboxes to non-select.//
                        $timeout(function() {
                            angular.element('.slick-header input').removeAttr('Checked');
                            angular.element('.slick-cell input').removeAttr('Checked');
                        });

                    }
                });

                if ($scope.sortedColumn)
                    $scope.grid.setSortColumn($scope.sortedColumn);
                var emptyRow = function() {
                    var div = $("<div>There are no results to display. Please check your search criteria and try again.</div>")
                        .css({
                            "text-align": "center",
                            "padding-top": "2px",
                            "border-bottom": "1px solid #cccccc",
                            "border-right": "1px solid #cccccc",
                            "line-height": "23px"
                        });
                    return div;
                };

                var groupBy = function() {
                    var setGrouping = [];
                    angular.forEach($scope.groupByColumn, function(item) {
                        setGrouping.push({
                            getter: item,
                            formatter: function(g) {
                                if (item == "rptCode")
                                    return g.rows[0].rptCode + " - " + g.rows[0].rptCodeDesc;
                                else if (item == "rptLine")
                                    return g.rows[0].rptLine + " - " + g.rows[0].rptLineDesc;
                                else if (item == "acctBranchCode")
                                    return g.rows[0].acctBranchCode + " Range";
                                return g.value;
                            },
                            aggregators: $scope.aggColumns,
                            collapsed: $scope.isCollapsed,
                            lazyTotalsCalculation: true
                        });
                    });
                    $scope.dataView.setGrouping(setGrouping);
                };

                $scope.$watch("data", function() {
                    if ($scope.data === undefined)
                        $scope.data = [];
                    if ($scope.data.length === 0) {
                        $scope.dataView.setItems($scope.data, "rowID");
                        //This will happen if you are using a dialog box with a grid
                        //on top of a window that has also has a slick grid.
                        //If this happens, empty the 
                        if ($('.grid-canvas').length > 1) {
                            $(window.top).find(".grid-canvas").html(emptyRow());
                        } else {
                            $('.grid-canvas').html(emptyRow());
                        }
                    } else {
                        $scope.dataView.setItems($scope.data, "rowID");
                    }
                    $scope.recordsCount = Slick.Formatters.Number("", "", ($scope.data !== null ? $scope.data.length : 0), "", "");
                    resize();
                    if ($scope.groupByColumn)
                        groupBy();
                    if ($scope.scrollToView) {
                        $scope.scrollToView = false;
                        $scope.grid.gotoCell($scope.rowIndex, $scope.cellIndex);
                    }
                }, true);

                var getGridWidth = function() {
                    var width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - 30;
                    return width < 996 ? 996 : width;
                };
                var getGridHeight = function() {
                    //var availableHeight = (window.innerHeight || document.documentElement.clientHeight
                    //    || document.body.clientHeight) - 255;
                    //var height = availableHeight > 250 ? availableHeight : 250;
                    //return height;

                    //var newGridHeight = $(document).height() - 300;
                    var height = $window.innerHeight;
                    var newGridHeight = height > 250 ? height - 260 : 250;

                    return newGridHeight;

                };
                var resize = function() {
                    //var grid = angular.element(".gridStyle");
                    var grid = $element;
                    var width = getGridWidth();
                    var height = getGridHeight();
                    //width: width + "px",
                    if (attrs["gridHeight"] == undefined) {
                        grid.css({
                            height: height + "px"
                        });
                    } else {
                        grid.css({
                            height: attrs["gridHeight"]
                        });
                    }
                    if (attrs["gridWidth"] == undefined) {
                        grid.css({
                            width: width + "px"
                        });
                    } else {
                        grid.css({
                            width: attrs["gridWidth"]
                        });
                    }

                    $scope.grid.resizeCanvas();
                    var actionsDiv = angular.element("#divActions");
                    actionsDiv.css({
                        width: width + "px"
                    });
                    var buttonsDiv = angular.element("#divActionButtons");
                    buttonsDiv.css({
                        width: width + "px"
                    });

                };

                $scope.$on("$destroy", function() {
                    angular.element(window).unbind("resize", resize());
                    var handler = new Slick.EventHandler();
                    handler.unsubscribeAll();
                });
                $scope.$watch("resize.slickGrid", function() {
                    resize();
                });

                angular.element(window).bind("resize", function(e) {
                    resize();
                });
            }
        };
    }
]);
