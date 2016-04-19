// This is a new directive that is used for accountNumber....There are other accountNumber validators directives but this 
// one is simplified....It allows empty values and uses the regular expression to validate the string.

directives.directive('partialAccountNumberValidator', function($filter, $log) {
    "use strict";

    // account number can be 3 or more characters and include -
    var pattern = /^[a-zA-Z0-9]{3}(-?[a-zA-Z0-9]{1,6})?$/;

    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired == 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.accountNumber = function(modelValue, viewValue) {
                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired == false) {
                    return true;
                }
                if (pattern.test(value)) {
                    return true;
                }

                var error_msg = "Please enter a valid partial or full Account Number.";

                attrs.$set('uibTooltip', error_msg);
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('accountNumberValidator', function($filter, $log) {

    // account number can be 3 or more characters and include -
    var patternWithoutType = /^[a-zA-Z0-9]{3}(-)?([a-zA-Z0-9]{6})(-?[a-zA-Z0-9]{1})?$/;
    var patternWithType = /^[a-zA-Z0-9]{3}(-?[a-zA-Z0-9]{6})(-?[a-zA-Z0-9]{1})$/;

    var isRequired = false;
    var isAccountTypeRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired == 'true' ? true : false);
            isAccountTypeRequired = (angular.isDefined(attrs.accountNumberValidator) && attrs.accountNumberValidator == 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.accountNumber = function(modelValue, viewValue) {

                attrs.$set('uibTooltip', '');

                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired == false) {
                    return true;
                }

                if (isAccountTypeRequired) {
                    if (patternWithType.test(value)) {
                        return true;
                    }
                } else {
                    if (patternWithoutType.test(value)) {
                        return true;
                    }
                }


                var error_msg = "Please enter a valid Account Number.";

                attrs.$set('uibTooltip', error_msg);
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('fakeAccountNumber', function($filter, $log) {
    var REG_EXP = /^[^><\[\]{}~\^]{1,10}$/;
    //The expression [^(many characters here)] just matches any character that is not listed.
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.fakeAccountNumber) && attrs.fakeAccountNumber === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.fakeAccountNumber = function(modelValue, viewValue) {

                attrs.$set('uibTooltip', '');
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Account Number.");
                return false;
            };

            //attrs.$observe('ngRequired', function () {

            //    isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
            //    ngModelCtrl.$validate();
            //});
        }
    }
});

directives.directive("accountNumber", function() {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13)
                    validate();
            });
            element.bind("blur", function(e) {
                validate();
            });

            function validate() {
                var accNum = $.trim(element.val());
                var minLength = parseInt(attrs.min);
                minLength = (isNaN(minLength) ? 0 : minLength);
                var maxLength = parseInt(attrs.max);
                var regEx = /^[a-z0-9]+$/;
                if (accNum.length !== 0 && !regEx.test(accNum)) {
                    setTimeout(function() {
                        element[0].focus();
                    }, 1);
                    ctrl.$error.msg = "Please enter valid Account Number.";
                    ctrl.$setValidity("accountNumber", false);
                } else if (accNum.length == 0 || accNum.length == maxLength || accNum.length == minLength) {
                    ctrl.$error.msg = "";
                    ctrl.$setValidity("accountNumber", true);
                } else {
                    if (minLength !== 0) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter either branch or full Account Number.";
                        ctrl.$setValidity("accountNumber", false);
                    } else {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Account # must be 9 characters.";
                        ctrl.$setValidity("accountNumber", false);
                    }
                }
            }
        }
    };
});
