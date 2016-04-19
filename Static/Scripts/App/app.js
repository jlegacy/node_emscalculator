$(function() {
    "use strict";

    $(document).ajaxSend(function(event, request, settings) {
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("WebReserveSystem", (window.webReserveSystem == undefined ? '' : window.webReserveSystem));
    });


    angular.element(document.body).on("click", function(e) {
        if (!e.isDefaultPrevented()) {
            var gridDropMenu = angular.element("#gridDropMenu");
            if (gridDropMenu)
                if (gridDropMenu.is(":visible")) {
                    gridDropMenu.hide();
                }

            angular.element("#rightClickMenu").css({
                "display": "none"
            });
        }
    });

});

angular.element(document).ready(function() {
    "use strict";

    angular.bootstrap(document, ['app']);
});

var controllers = angular.module("webReserve.controllers", []);
var directives = angular.module("webReserve.directives", []);
var filters = angular.module("webReserve.filters", []);
var services = angular.module("webReserve.services", []);

var app = angular.module("app", [
    "ngRoute",
    "ngDialog",
    "ngCookies",
    'ui.bootstrap',
    "ui.validate",
    "webReserve.controllers",
    "webReserve.directives",
    "webReserve.filters",
    "webReserve.services"
]);
