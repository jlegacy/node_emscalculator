directives.directive("focusOnEnter", function() {
    "use strict";

    return {
        restrict: "A",
        link: function($scope, elem, attrs) {
            var focusables = $(":focusable");
            elem.bind("keydown", function(e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    var current = focusables.index(this);
                    var next = focusables.eq(current + 1).length ? focusables.eq(current + 1) : focusables.eq(0);
                    next.focus();
                    e.preventDefault();
                }
            });
        }
    }
});
