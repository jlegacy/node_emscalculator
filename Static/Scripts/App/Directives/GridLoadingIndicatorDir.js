directives.directive("gridLoadingIndicator", function() {
    "use strict";
    return {
        restrict: "A",
        templateUrl: "/Static/Scripts/App/Templates/Page/LoadingImage.html",
        replace: true,
        link: function($scope, $element) {}
    };
});
