services.factory("httpSvc", [
    "$http", "tabSvc", "ngDialog",
    function($http, tabSvc, ngDialog) {
        "use strict";

        var sharedSvc = {};
        sharedSvc.HttpPost = function(params) {
            return $http(params)
                .success(function(data, status, headers, config) {
                    return data;
                }).error(function(data, status, headers, config) {
                    tabSvc.changeRoute("Error");
                    ngDialog.closeAll();
                    angular.element("#Tabs").hide();
                });
        };
        sharedSvc.GetPdf = function(params) {
            return $http(params)
                .success(function(data, status, headers, config) {
                    var file = new Blob([data], {
                        type: "application/pdf"
                    });

                    if (navigator.appVersion.toString().indexOf(".NET") > 0)
                        window.navigator.msSaveOrOpenBlob(file, "pdf.pdf");
                    else {
                        var fileUri = URL.createObjectURL(file);
                        window.open(fileUri);
                    }
                }).error(function(data, status, headers, config) {
                    tabSvc.changeRoute("Error");
                    ngDialog.closeAll();
                    angular.element("#Tabs").hide();
                });
        };
        return sharedSvc;
    }
]);
