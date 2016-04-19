directives.directive("allocationExecutionBlockSave", function() {
    "use strict";

    return {
        restrict: 'A',
        scope: {
            blockReset: "&",
            blockSave: "&",
            blockSend: "&",
            blockCancel: '&',
        },
        link: function(scope, elm, attrs) {
            scope.callBlockReset = function() {
                scope.blockReset();
            },
            scope.callBlockSave = function() {
                scope.blockSave();
            },
            scope.callBlockSend = function() {
                scope.blockSend();
            },
            scope.callBlockCancel = function() {
                scope.blockCancel();
            }
        },

        templateUrl: "static/scripts/app/Templates/page/AllocationExecutionBlockSave.html"
    }
});
