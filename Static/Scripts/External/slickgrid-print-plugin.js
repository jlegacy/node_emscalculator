(function ($) {
    'use strict';

    var slickPrint = function () {

        var self = this;
        var grid;

        this.init = function (pageGrid) {
            grid = pageGrid;
        };

        this.printToHtml = function () {
            var numRows = grid.getDataLength();
            var columns = grid.getColumns();
            var numCols = columns.length;
            var r, c;
            var rows = [], cols, headers = [];
            var cellNode;
            var topRow = grid.getRenderedRange().top;

            angular.forEach(columns, function (col) {
                var hAlign = col.cssClass ? (col.cssClass.indexOf("ColumnRightAlign") > -1 ? "right" : "left") : "left";
                headers.push('<th nowrap="nowrap" align="' + hAlign + '">' + col.name + '</th>');
            });

            Slick.GlobalEditorLock.cancelCurrentEdit();

            grid.scrollRowToTop(0);

            for (r = 0; r < numRows; r++) {
                cols = [];
                for (c = 0; c < numCols; c++) {
                    cellNode = grid.getCellNode(r, c);
                    if (!cellNode) {
                        grid.scrollRowToTop(r);
                        cellNode = grid.getCellNode(r, c);
                    }
                    var bAlign = ($(cellNode).css("text-align") === undefined ? "left" : $(cellNode).css("text-align"));
                    cols.push('<td nowrap="nowrap"' + 'align="' + bAlign + '">' +
                        $(cellNode).text()+"</td>");
                }
                rows.push(cols.join(''));
            }

            var table = [
                '<table class="table table-bordered">',
                '<thead>',
                '<tr>',
                    '' + headers.join('') + '',
                '</tr>',
                '</thead>',
                '<tbody>',
                    '<tr>' + rows.join('</tr>\n<tr>') + '</tr>',
                '</tbody>',
                '</table>'
            ].join('\n');

            grid.scrollRowToTop(topRow);

            return table;
        };

        this.printToElement = function ($element) {
            $($element).html(self.printToHtml());
        };
        this.printToWindow = function (w) {
            w.onload = $.browser.msie ? new function () {
                setTimeout(function () {
                    self.printToElement(w.document.body);
                    w.print();
                    w.close();
                });
            } : function () {
                setTimeout(function () {
                    self.printToElement(w.document.body);
                    w.print();
                    w.close();
                });
            };
        };
    };

    // register namespace
    $.extend(true, window, {
        Slick: {
            Plugins: {
                Print: slickPrint
            }
        }
    });
}(jQuery));
