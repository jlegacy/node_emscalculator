// use underscore library to test for isEmpty....angular's isEmpty doesn't work with null or undefined correctly

directives.directive('wrCycleDateValidator', function($filter, $log) {
    "use strict";

    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrCycleDateValidator) && attrs.wrCycleDateValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.cycleDate = function(modelValue, viewValue) {
                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (!isNaN(Date.parse(value))) {
                    return true;
                }

                attrs.$set('uibTooltip', "Please enter a valid Cycle Date.");
                return false;
            };

        }
    }
});

directives.directive('wrNettedBroadValidator', function($filter, $log) {
    var REG_EXP = /^[bnBN\s]{1,1}$/;
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrNettedBroadValidator) && attrs.wrNettedBroadValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.nettedBroad = function(modelValue, viewValue) {
                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid NettedBroad Code.");
                return false;
            };

        }
    }
});

directives.directive('wrNcusGrpValidator', function($filter, $log) {
    var REG_EXP = /^[^><\[\]{}~\^]{1,10}$/;
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrNcusGrpValidator) && attrs.wrNcusGrpValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.ncusGrp = function(modelValue, viewValue) {
                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }

                attrs.$set('uibTooltip', "Please enter a valid NCUS Grp.");
                return false;
            };

        }
    }
});

directives.directive('wrAmountTypeCodeValidator', function($filter, $log) {
    var REG_EXP = /^[a-zA-Z0-9\s/-]{1,3}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrAmountTypeCodeValidator) && attrs.wrAmountTypeCodeValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.amtTypeCode = function(modelValue, viewValue) {

                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }

                attrs.$set('uibTooltip', "Please enter a valid Amount Type code.");
                return false;
            };

        }
    }
});

directives.directive('wrPricedIndValidator', function($filter, $log) {
    var REG_EXP = /^[PU]{1,1}$/;
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrPricedIndValidator) && attrs.wrPricedIndValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.pricedInd = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Priced Indicator.");
                return false;
            };


        }
    }
});
directives.directive('wrTotalDetailIndValidator', function($filter, $log) {
    var REG_EXP = /^[TD]{1,1}$/;
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.wrTotalDetailIndValidator) && attrs.wrTotalDetailIndValidator === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.pricedInd = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", null);
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid TotalDetail Indicator.");
                return false;
            };


        }
    }
});

directives.directive('wrSourceCodeDescValidator', function($filter, $log) {
    var REG_EXP = /^[^><\[\]{}~\^]{1,80}$/;
    //The expression [^(many characters here)] just matches any character that is not listed.
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    //$log.log(element.val() + ", " + ngModelCtrl.$modalValue);
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.sourceCodeDesc = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;


                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Source Code Description.");
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('showErrors', function($filter, $log) {
    return {
        restrict: 'A',
        require: ['ngModel', '^form'],
        link: function(scope, element, attrs, ctrls) {
            var inputEl = element[0].querySelector("name");
            var inputNgEl = angular.element(inputEl);

            var inputName = inputNgEl.attr('name');
            $log.log(inputNgEl);
            var formCtrl = ctrls[1];
            var ngModelCtrl = ctrls[0];
            //data-tooltip-placement="right"
            //data-tooltip-class="error"

            scope.$watch(function() {
                return formCtrl.$submitted;
            }, function(newValue) {
                if (newValue == true && ngModelCtrl.$invalid) {
                    attrs.$set('uibTooltip', "Please enter a valid Report Code Description.");
                    attrs.$set('tooltipPlacement', "right");
                    attrs.$set('tooltipClass', "error");
                    attrs.$set('tooltipEnable', true);
                } else {
                    attrs.$set('uibTooltip', "");
                    attrs.$set('tooltipEnable', false);
                }
            });

        }
    }
});
