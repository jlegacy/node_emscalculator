services.factory("tabSvc", ["$rootScope",
    function($rootScope) {
        "use strict";

        var sharedTabSvc = {};
        sharedTabSvc.Tabs = {};

        sharedTabSvc.showSubTab = function(tabId, subTabId, params) {
            var tab = this.Tabs;
            var tabs = tab.Tabs;
            tabs[tabId].subTabs[subTabId].isVisible = true;
        };

        sharedTabSvc.setSubTab = function(tabId, subTabId, params) {
            var tab = this.Tabs;
            var tabs = tab.Tabs;
            tabs[tabId].subTabs[subTabId].isTabActive = true;
        };

        sharedTabSvc.setTabs = function(tabs) {
            this.Tabs = tabs;
            this.broadcastItem();
            this.broadcastRoute();
        };

        sharedTabSvc.getTabs = function() {
            return this.Tabs;
        };

        sharedTabSvc.getTabRights = function() {
            if (this.Tabs.Tabs[this.Tabs.ActiveTab].subTabs)
                return {
                    tabRights: this.Tabs.Tabs[this.Tabs.ActiveTab].subTabs[this.Tabs.ActiveSubTab],
                    role: this.Tabs.Role,
                    userName: this.Tabs.userName
                };
            else
                return {
                    role: this.Tabs.Role,
                    userName: this.Tabs.userName
                };
        };

        sharedTabSvc.changeRoute = function(strPage) {
            this.broadcastRoute(strPage);
        };

        sharedTabSvc.mainTabChanged = function() {
            return $rootScope.mainTabChanged;
        }
        sharedTabSvc.changeTabs = function(tabId, subTabId, params) {
            var tab = this.Tabs;
            var tabs = tab.Tabs;
            tabs[tabId].isTabActive = true;

            //Set 'Changed To' Tab  to Active//
            $rootScope.mainTabChanged = false;

            if (tabId != tab.ActiveTab) {
                $rootScope.tabMainTabChanged = true;
                tabs[tab.ActiveTab].isTabActive = false;
                tab.ActiveTab = tabId;
                tab.ActiveSubTab = "";
                angular.forEach(tabs[tabId].subTabs,
                    function(obj, key) {
                        if (obj.isTabActive) {
                            tab.ActiveSubTab = key;
                        }
                    });
            }


            //Set 'Changed To' Sub Tab  to Active//
            if (subTabId) {
                tabs[tabId].subTabs[subTabId].isTabActive = true;
                if (subTabId != tab.ActiveSubTab) {

                    if (tabs[tab.ActiveTab].subTabs[tab.ActiveSubTab]) {
                        tabs[tab.ActiveTab].subTabs[tab.ActiveSubTab].isTabActive = false;
                        tab.ActiveSubTab = subTabId;
                    }

                }
            }

            this.broadcastItem(params);
        };

        sharedTabSvc.broadcastItem = function(params) {
            $rootScope.$broadcast("handleTabs", this.Tabs, params);
        };
        sharedTabSvc.broadcastRoute = function(strPage) {
            $rootScope.$broadcast("handleRoute", strPage);
        };
        return sharedTabSvc;
    }
]);
