directives.directive("wrBubbleMsg", function() {
    "use strict";

    // This is a modified version of the original bubbleMsg directive.
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {



            attrs.$observe('errorMsg', function() {
                if (angular.isDefined(attrs.errorMsg) && attrs["errorMsg"] != '') {
                    var message = attrs["errorMsg"];
                    element.popover({
                        content: message,
                        title: '',
                        trigger: 'hover',
                        placement: 'right auto',
                        template: '<div class="popover error-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                    });
                } else {
                    element.popover('destroy');

                }
            });

        }
    };
});

directives.directive("wrBubbleMsg2", function() {
    // This is a modified version of the original bubbleMsg directive.
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {



            attrs.$observe('errorMsg', function() {
                if (angular.isDefined(attrs.errorMsg) && attrs["errorMsg"] != '') {
                    var message = attrs["errorMsg"];
                    element.popover({
                        content: message,
                        title: '',
                        trigger: 'hover',
                        placement: 'right auto',
                        template: '<div class="popover error-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                    });
                } else {
                    element.popover('destroy');

                }
            });

        }
    };
});


directives.directive("bubbleMsg", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            var div = angular.element("#errorBubble");
            var span = angular.element("#bubbleMsg");
            element.bind("mouseenter", function() {
                if (!ctrl.$valid) {
                    setPosition();
                    if (ctrl.$error != undefined && ctrl.$error.msg != undefined) {
                        span.html(ctrl.$error.msg);
                        div.show();
                    }

                }
            });
            element.bind("mouseleave", function() {
                span.html();
                div.hide();
            });

            var setPosition = function() {
                var offset = element.offset();
                div.css({
                    "left": element.width() + offset.left,
                    "top": offset.top - 3
                });
            };
        }
    };
});
