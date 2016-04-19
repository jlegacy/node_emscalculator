//// use underscore library to test for isEmpty....angular's model controllers $isEmpty doesn't work with null or undefined correctly

directives.directive('wrRptTypeValidator', function($filter, $log) {
    "use strict";

    var REG_EXP = /^[a-zA-Z0-9]{1,8}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.rptType = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');

                if (_.isEmpty(modelValue) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(modelValue) && angular.isString(modelValue)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Report Type.");
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('wrRptCodeValidator', function($filter, $log) {
    var REG_EXP = /^[a-zA-Z0-9\s-_]{1,8}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {


            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.rptCode = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');

                var errorMessage = "Please enter a valid Report Code.";
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;
                //if modelvalue is empty
                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }


                attrs.$set('uibTooltip', errorMessage);
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('wrRptLineValidator', function($filter, $log) {
    var REG_EXP = /^[a-zA-Z0-9\s]{1,4}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.rptLine = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');


                var errorMessage = "Please enter a valid Report Code.";
                var value = modelValue || viewValue;
                value = _.isEmpty(value) || value == "All" ? "" : value;

                if (_.isEmpty(value) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(value)) {
                    return true;
                }

                attrs.$set('uibTooltip', "Please enter a valid Report Line.");
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });

            //attrs.$observe('rptCode', function () {

            //    if (!_.isEmpty(attrs.rptCode) && attrs.rptCode.length > 0) {

            //        ngModelCtrl.$validate();
            //    }
            //});
        }
    }
});

directives.directive('wrProcessFrequencyCodeValidator', function($filter, $log) {
    var REG_EXP = /^[a-zA-Z0-9]{1,1}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.processFrequencyCode = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');

                if (_.isEmpty(modelValue) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(modelValue) && angular.isString(modelValue)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Frequency Code.");
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});

directives.directive('wrRptTypeDescValidator', function($filter, $log) {
    var REG_EXP = /^[^><\[\]{}~\^]{1,80}$/;
    var isRequired = false;

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {

            isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === 'true' ? true : false);

            element.on("keydown keypress", function(event) {
                if (event.which === 13) {
                    ngModelCtrl.$validate();
                }
            });

            ngModelCtrl.$validators.rptTypeDesc = function(modelValue, viewValue) {

                attrs.$set("uibTooltip", '');

                if (_.isEmpty(modelValue) && isRequired === false) {
                    return true;
                }

                if (REG_EXP.test(modelValue) && angular.isString(modelValue)) {
                    return true;
                }


                attrs.$set('uibTooltip', "Please enter a valid Report Type Description.");
                return false;
            };

            attrs.$observe('ngRequired', function() {

                isRequired = (angular.isDefined(attrs.ngRequired) && attrs.ngRequired === "true") ? true : false;
                ngModelCtrl.$validate();
            });
        }
    }
});
