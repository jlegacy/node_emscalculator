directives.directive('amountFormatValidator', function($filter) {
    "use strict";

    // This is a new directive that is used to format and validate amount
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            var replaceRegex = new RegExp(',', 'g');
            var fraction = 2;

            var listener = function() {
                var value = element.val().replace(replaceRegex, '')
                if (isNaN(value)) {
                    value = 0;
                }
                element.val($filter('number')(value, fraction))
            }

            ngModelCtrl.$validators.wrAmount = function(modelValue, viewValue) {
                if (_.isEmpty(modelValue)) {
                    // consider empty models to be valid
                    attrs.$set('errorMsg', '');
                    return true;
                }
                if (!isNaN(modelValue)) {

                    // it is valid
                    attrs.$set('errorMsg', '');
                    return true;
                }
                attrs.$set('errorMsg', 'This item must be a number.');
                return false;
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                var newVal = viewValue.replace(replaceRegex, '');
                var newValAsNumber = newVal * 1;

                // check if new value is numeric, and set control validity
                if (isNaN(newValAsNumber)) {
                    ngModelCtrl.$setViewValue("0");
                    newVal = 0;
                } else {
                    newVal = newValAsNumber.toFixed(fraction);
                }
                return newVal;

            })

            //ngModelCtrl.$formatters.push(function (modelValue) {
            //    return isNaN(parseFloat(modelValue)) ? 0 : parseFloat(modelValue);
            //});

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                element.val($filter('number')(ngModelCtrl.$viewValue, fraction))
            }

            element.on('change', listener);

        }

    }
});




directives.directive("stringValidation", function() {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13)
                    validate();
            });
            element.bind("blur", function() {
                validate();
            });

            function validate() {
                var fieldValue = $.trim(element.val());
                var fieldLabel = $.trim(angular.element(element.parent().prev()[0]).text().replace("*", ""));
                var requiredLength = parseInt(attrs.min);
                var maxLength = parseInt(attrs.max);
                var isRequired = attrs.required;
                var variedLength = attrs.lengthInRange == "true";
                var commonValidation = function() {
                    var regEx = /^[a-z0-9]+$/i;
                    if (!regEx.test(fieldValue)) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter a valid " + fieldLabel;
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length < requiredLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " requires minimum " + requiredLength + " characters";
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length > requiredLength && fieldValue.length < maxLength && !variedLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " should be either " + requiredLength + " or " + maxLength + " characters";
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length > maxLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Maximum number of characters for " + fieldLabel + " should be " + maxLength;
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        ctrl.$setValidity(attrs.name, true);
                    }
                };
                if (isRequired) {
                    if (fieldValue.length === 0) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " is required";
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        commonValidation();
                    }
                } else {
                    if (fieldValue.length === 0) {
                        ctrl.$setValidity(attrs.name, true);
                    } else {
                        commonValidation();
                    }
                }
            }
        }
    };
});
directives.directive("invalidStringValidation", function() {
    return {
        require: "ngModel",
        link: function(scope, element, attrs, ctrl) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13)
                    validate();
            });
            element.bind("blur", function() {
                validate();
            });

            function validate() {
                var fieldValue = $.trim(element.val());
                var fieldLabel = $.trim(angular.element(element.parent().prev()[0]).text().replace("*", ""));
                var requiredLength = parseInt(attrs.min);
                var maxLength = parseInt(attrs.max);

                var isRequired = attrs.isRequired === "true";
                var variedLength = attrs.lengthInRange == "true";
                var commonValidation = function() {
                    var regEx = /[~^{}\[\]<>]/;
                    if (regEx.test(fieldValue)) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter a valid " + fieldLabel;
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length < requiredLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " requires minimum " + requiredLength + " characters";
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length > requiredLength && fieldValue.length < maxLength && !variedLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " should be either " + requiredLength + " or " + maxLength + " characters";
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fieldValue.length > maxLength) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Maximum number of characters for " + fieldLabel + " should be " + maxLength;
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        ctrl.$setValidity(attrs.name, true);
                    }
                };
                if (isRequired) {
                    if (fieldValue.length === 0) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " is required";
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        commonValidation();
                    }
                } else {
                    if (fieldValue.length === 0) {
                        ctrl.$setValidity(attrs.name, true);
                    } else {
                        commonValidation();
                    }
                }
            }
        }
    };
});
directives.directive("amountValidation", function() {
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
                var fieldValue = $.trim(element.val().replace(/,/g, ""));
                var fieldLabel = $.trim(angular.element(element.parent().prev()[0]).text().replace("*", ""));
                var requiredLength = parseInt(attrs.min);
                var maxLength = parseInt(attrs.max);
                var isRequired = attrs.required;

                var fieldValueArr = fieldValue.split('.');
                var intPart = fieldValueArr[0];
                var fractionPart = fieldValueArr[1] === undefined ? "" : fieldValueArr[1];
                var commonValidation = function() {
                    if (isNaN(fieldValue)) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter valid " + fieldLabel;
                        ctrl.$setValidity(attrs.name, false);
                    } else if (Math.abs(parseFloat(fieldValue)) > 10000000000000.00) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter an " + fieldLabel + " which is less than or equal to 10 trillion";
                        ctrl.$setValidity(attrs.name, false);
                    } else if (intPart.length > 14) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter valid " + fieldLabel;
                        ctrl.$setValidity(attrs.name, false);
                    } else if (fractionPart.length > 2) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = "Please enter valid " + fieldLabel;
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        element.val(Slick.Formatters.ExcelAmount(fieldValue));
                        ctrl.$setViewValue(element.val().replace(/,/g, ""));
                        ctrl.$setValidity(attrs.name, true);
                    }
                };
                if (isRequired) {
                    if (fieldValue.length === 0) {
                        setTimeout(function() {
                            element[0].focus();
                        }, 1);
                        ctrl.$error.msg = fieldLabel + " is required";
                        ctrl.$setValidity(attrs.name, false);
                    } else {
                        commonValidation();
                    }
                } else {
                    if (fieldValue.length === 0) {
                        element.val(Slick.Formatters.ExcelAmount(fieldValue));
                        ctrl.$setViewValue(element.val().replace(/,/g, ""));
                        ctrl.$setValidity(attrs.name, true);
                    } else {
                        commonValidation();
                    }
                }
            }
        }
    };
});

directives.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            //if (event.which === 13) {
            //    scope.$apply(function () {
            //        scope.$eval(attrs.ngEnter, { 'event': event });
            //    });

            //    event.preventDefault();
            //}
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter || attrs.ngClick, {
                        $event: event
                    });
                });
                event.preventDefault();
            }
        });
    };
});

directives.directive('wsValidDecimal', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }
                var clean = val.replace(/[^0-9\.]/g, '');
                var decimalCheck = clean.split('.');

                //if (!angular.isUndefined(decimalCheck[0])) {
                //    if (decimalCheck[0].length > 4) {
                //        decimalCheck[0] = decimalCheck[0].slice(0, 4);
                //        clean = decimalCheck[0] + '.' + decimalCheck[1];
                //    }

                //}

                if (!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0, 2);
                    clean = decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if (event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    }
});

directives.directive('notesValidator', function($filter) {
    var NOTES_REGEXP = /[~^{}\[\]<>]/;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            var resetErrorMsg = function() {
                attrs.$set('uibTooltip', '');
            }
            ngModelCtrl.$validators.wrAccountNumber = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", null);

                var aValue = angular.isString(attrs['notesValidator']) ? attrs['notesValidator'] : '';
                var isRequired = (aValue == 'true' ? true : false);

                var currentViewValue = angular.isString(viewValue) ? viewValue : '';

                if (_.isEmpty(modelValue) && isRequired == false) {
                    return true;
                }
                if (!NOTES_REGEXP.test(currentViewValue) && currentViewValue.length <= 80) {
                    return true;
                } else {
                    attrs.$set('uibTooltip', 'Please enter a valid value. It cannot contain ("~^{}\[\]<>")');
                }
                return false;
            };
        }
    }
});

directives.directive('viewDirectReportValidator', function($filter) {

    //The expression [^(many characters here)] just matches any character that is not listed.
    var VALID_STRING_REGEXP = /^[^><\[\]{}~\^]{0,10}$/;
    //var OPTIONAL_VALID_STRING_REGEXP = /^[^><\[\]{}~\^]{1,10}$/;
    var isRequired = false;
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            var resetErrorMsg = function() {
                attrs.$set('uibTooltip', '');
            }
            ngModelCtrl.$validators.ViewDirectReportID = function(modelValue, viewValue) {

                var aValue = angular.isString(attrs['viewDirectReportValidator']) ? attrs['viewDirectReportValidator'] : '';
                //var maxLength = angular.isString(attrs['maxlength']) ? attrs['maxlength'] : 10;

                isRequired = (aValue == 'true' ? true : false);

                if (_.isEmpty(modelValue) && isRequired == false) {
                    resetErrorMsg();
                    return true;
                }

                if (VALID_STRING_REGEXP.test(modelValue)) {
                    resetErrorMsg();
                    return true;
                } else {
                    attrs.$set('uibTooltip', 'Please enter a valid View Direct Report ID.');
                }
                return false;
            };

        }
    }
});
