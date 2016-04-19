app.config([
    "$routeProvider",
    function($routeProvider) {
        "use strict";

        $routeProvider

        .when("/PTRS/BlockSummary", {
            templateUrl: "static/scripts/App/Templates/BlockSummary/BlockSummaryReport.html",
            controller: "BlockSummaryCtrl",
            resolve: {
                blockSummaryData: function($q, blockSummarySvc) {
                    blockSummarySvc.setParams({});
                    return blockSummarySvc.getDefaultData();
                }
            }
        })

        .when("/PTRS/BlockAdmin", {
            templateUrl: "static/scripts/App/Templates/BlockMaintenance/BlockReportAdd.html",
            controller: "BlockReportAddCtrl",
        })

        .when("/PTRS/BlockAdmin/Executions/:acct/:tabType", {
            templateUrl: "static/scripts/App/Templates/BlockMaintenance/BlockAdmin.html",
            controller: "BlockAdminCtrl",
            resolve: {
                blockAdminData: function($q, blockAdminSvc) {
                    blockAdminSvc.setParams({});
                    return blockAdminSvc.getExecutionData();
                }
            }
        })
            .when("/PTRS/BlockAdmin/Allocations/:acct/:tabType", {
                templateUrl: "static/scripts/App/Templates/BlockMaintenance/BlockAdmin.html",
                controller: "BlockAdminCtrl",
                resolve: {
                    blockAdminData: function($q, blockAdminSvc) {
                        blockAdminSvc.setParams({});
                        return blockAdminSvc.getAllocationData();
                    }
                }
            })

        .when("/PTRS/AddBlock", {
            templateUrl: "static/scripts/App/Templates/BlockMaintenance/BlockReportAdd.html",
            controller: "BlockReportAddCtrl",
        })

        .when("/PTRS/MoneyDifference", {
            templateUrl: "static/scripts/App/Templates/MoneyDifference/MoneyDifference.html",
            controller: "MoneyDifferenceCtrl",
            resolve: {
                moneyDifferenceData: function($q, moneyDifferenceSvc) {
                    moneyDifferenceSvc.setParams({});
                    return moneyDifferenceSvc.getDefaultData();
                }
            }
        })

        .when("/Error", {
            templateUrl: "static/scripts/App/Templates/Page/Auth.html"
        })
            .otherwise({});
        //     .otherwise({ redirectTo: "/webreserve/" + 'xxxx' + "/" + 'xxxx' });
    }
])
    .config([
        "$httpProvider",
        function($httpProvider) {

            //initialize get if not there
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }

            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.defaults.headers.common["WebReserveSystem"] = (window.webReserveSystem == undefined ? '' : window.webReserveSystem);

            $httpProvider.interceptors.push(function($q, $rootScope, $injector) {
                return {
                    "request": function(config) {
                        if (config.loadInd === undefined)
                            $rootScope.$broadcast("loading-started");
                        return config || $q.when(config);

                    },
                    "response": function(response) {
                        $rootScope.$broadcast("loading-complete");
                        response.config.timeStamp = new Date();
                        return response || $q.when(response);
                    }
                };


            });

        }
    ])
    .config(["ngDialogProvider",
        function(ngDialogProvider) {
            ngDialogProvider.setForceBodyReload(true);
        }
    ])
    .run([
        '$rootScope', '$cookies', 'tabSvc', '$location', '$timeout', '$http', '$log', '$route',
        function($rootScope, $cookies, tabSvc, $location, $timeout, $http, $log, $route) {
            $rootScope.system = window.webReserveSystem === undefined ? "" : window.webReserveSystem;

            $rootScope.$on('$routeChangeStart', function(event, next, current) {

                if (next.$$route && next.$$route.resolve) {
                    if (current && current.$$route) {

                        var currentPath = current.$$route.originalPath;
                        var nextPath = next.$$route.originalPath;

                        if (nextPath.indexOf('/ReClass/ReClassAndPairoffs') == 0 && currentPath.indexOf('/ReClass/Accounts') != 0) {
                            event.preventDefault();
                            //$location.path('/ReClass/Accounts');
                            tabSvc.changeTabs("ReClass", "Accounts");
                        }
                    }
                    $rootScope.loadingView = true;
                }
            });
            $rootScope.$on('$routeChangeSuccess', function(event, current, prev) {
                $rootScope.loadingView = false;
            });

            $rootScope.$on('loading-started', function(event) {
                if (!$rootScope.loadingView)
                    $rootScope.loadingIndicator = true;
                return false;
            });
            $rootScope.$on('loading-complete', function(event) {
                //$log.log('http pending requests: ' + $http.pendingRequests.length);
                if ($http.pendingRequests.length < 1) {
                    $rootScope.loadingIndicator = false;
                }
                return false;
            }); 


        }
    ]);
