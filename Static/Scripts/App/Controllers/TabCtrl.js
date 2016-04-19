controllers.controller("TabCtrl", [
    "$scope", "$location", "tabSvc", "$rootScope",
    function($scope, $location, tabSvc, $rootScope) {
        "use strict";

        $scope.appTitle = window.appTitle;
        $scope.appTitleColor = function() {
            return {
                'dailyEstimatesTitleColor': (angular.isDefined(window.webReserveSystem) && window.webReserveSystem !== '')
            }
        }
        //Set the tabs on the service first
        tabSvc.setTabs(window.Tab);
        window.Tab = null;
        $scope.Tab = tabSvc.getTabs();


        //figure out how to get tabs object
        $scope.location = $location;
        $scope.location.path("/" + $scope.Tab.ActiveTab + "/" + $scope.Tab.ActiveSubTab);

        $scope.activateTab = function(tabId, subTabId) {
            tabSvc.changeTabs(tabId, subTabId);
        };

        $scope.$on("handleRoute", function(event, strPage) {
            $scope.location.path("/" + strPage);
            if (!$scope.$$phase)
                $scope.$apply();
        });

        $scope.$on("handleTabs", function(event, tab, params) {
            $scope.Tab = tab;
            $scope.location.path("/" + $scope.Tab.ActiveTab + "/" + $scope.Tab.ActiveSubTab +
                (params !== undefined ? ("/:" + params) : ""));
            // commented this code due console error in firefox
            if (!$scope.$$phase)
                $scope.$apply();

        });


    }
]);
