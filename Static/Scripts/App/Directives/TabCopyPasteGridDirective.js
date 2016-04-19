directives.directive("tabCopyPasteGridDirective", function() {
    "use strict";

    return {
        restrict: 'A',
        scope: {
            setTab: "&",
            setCopyPaste: "&",
            setMultiSelect: "&",
            addRow: "&",
            undoCopyPaste: '&',
            addCopyPaste: '=',
            addRows: '=',
            tabMode: '=',
            copyMode: '=',
            multiMode: '=',
            multiSelectMode: '=',
            radioValue: '=',
            radioGroup: '=',
        },
        link: function(scope, elm, attrs) {
            scope.callAddRow = function() {
                scope.addRow();
            },
            scope.callSetTab = function() {
                scope.setTab();
            },
            scope.callUndoCopyPaste = function() {
                scope.undoCopyPaste();
            },
            scope.callSetCopyPaste = function() {
                scope.setCopyPaste();
            },
            scope.callSetMultiSelect = function() {
                scope.setMultiSelect();
            }
        },

        templateUrl: "static/scripts/app/Templates/page/TabCopyPasteGrid.html"
    }
});
