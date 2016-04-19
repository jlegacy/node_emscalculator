directives.directive('jqDatePicker', ["$log",
    function($log) {
        "use strict";

        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                $(element).datepicker({
                    dateFormat: 'dd-M-yy',
                    showOn: "button",
                    buttonImage: "/Static/Images/calendar2.gif",
                    buttonImageOnly: true,
                    buttonText: "Select date",
                    onSelect: function(date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
                var disabled = attrs["ngDisabled"];

                $log.log(attrs);
                if (disabled == "true") {
                    $(element).datepicker('disable');

                } else {
                    $(element).datepicker('enable');
                }
            }
        };
    }
]);
