services.factory("popupWindowSvc", ["$location",
    function($location) {
        "use strict";

        return {
            openNewWindow: function(windowUri, windowName) {
                var openedWindows = [];
                var protocol = $location.protocol();
                var host = $location.host();

                this.popUpWindow = function(uri, name, width, height) {
                    var obj = this.findWindow(name);
                    if (obj !== null && obj !== undefined) {
                        obj.close();
                    }

                    if (typeof width === "undefined") width = 1020;
                    if (typeof height === "undefined") height = 750;
                    //var left = Math.round((screen.availWidth - width) / 2);
                    //var top = Math.round((screen.availHeight - height) / 2);

                    var left = Math.round((screen.availWidth - width) / 2);
                    var top = Math.round((screen.availHeight - height) / 2);

                    var newWindow = window.open(uri, name, "width=" + width + ",height=" + height + ",left=" + left +
                        ",top=" + top + ",toolbar=0,menubar=0,resizable=0,location=0,directories=0,scrollbars=0");
                    openedWindows[openedWindows.length] = newWindow;
                };

                this.getWindow = function(windId) {
                    return this.findWindow(windId);
                };

                this.getWindows = function() {
                    return openedWindows;
                };

                this.findWindow = function(windId) {
                    for (var i = 0; i < openedWindows.length; i++) {
                        if (openedWindows[i].closed) {
                            openedWindows.splice(i, 1);
                            i--;
                        } else {
                            if (openedWindows[i].name === windId)
                                return openedWindows[i];
                        }
                    }
                    return null;
                };

                this.popUpWindow(windowUri, windowName);

                window.onunload = function() {
                    for (var i = 0; i < openedWindows.length; i++) {
                        openedWindows[i].close();
                    }
                };
            }
        }

    }
]);
