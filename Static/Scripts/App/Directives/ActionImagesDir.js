directives.directive("actionImages", function() {
    "use strict";

    return {
        restrict: "A",
        scope: {
            timeStamp: "=",
            showRefresh: "=",
            showExport: "=",
            showPdf: "=",
            refreshClick: "&",
            printClick: "&",
            exportClick: "&",
            pdfClick: "&"
        },
        templateUrl: "static/scripts/app/Templates/page/ActionImages.html"
    };
});
