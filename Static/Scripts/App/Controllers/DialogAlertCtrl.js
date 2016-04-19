controllers.controller("DialogAlertCtrl", [
    "$scope",
    function($scope) {
        "use strict";
        $scope.dialogBorderColor = function(severity) {
            var sev = severity || "";
            var color = "#569C00";
            if (sev == "Error" || sev == "Warning") {
                color = "#cc3333";
            }

            return {
                'border-color': color
            }
        }

    }
]);
