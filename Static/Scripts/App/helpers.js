window.totalsFormatter = function(totals, columnDef) {
    var rows = totals.group.rows;
    var val = 0;
    for (var i = 0; i < rows.length; i++) {
        val += parseFloat(rows[i][columnDef.field]);
    }
    return Slick.Formatters.Amount("", "", (parseFloat(val).toFixed(2)), "", "");
};

window.getTitle = function(arr, val) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].value === val)
            return arr[i].title;
    return "";
};
window.getValue = function(arr, val) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].title === val)
            return arr[i].value;
    return "";
};

window.getArrayObject = function(arr, val) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].value === val)
            return arr[i];
    return "";
};

window.onCellChange = function() {
    window.setTimeout(function() {
        if (Slick.GlobalEditorLock.isActive()) {
            Slick.GlobalEditorLock.commitCurrentEdit();
        }
    });
};
Object.keys = Object.keys || function(o, k, r) {
    r = [];
    for (k in o) {
        r.hasOwnProperty.call(o, k) && r.push(k);
    }
    return r;
};
var frequency = {
    selected: "",
    options: [{
        value: "",
        title: "All"
    }, {
        value: "F",
        title: "Future Cycle"
    }, {
        value: "D",
        title: "Daily"
    }, {
        value: "C",
        title: "Off-Cycle"
    }, {
        value: "M",
        title: "Monthly"
    }, {
        value: "Q",
        title: "Quarterly"
    }, {
        value: "W",
        title: "Weekly"
    }]
};

var processStatus = {
    selected: "N",
    options: [{
            value: "",
            title: "All"
        }, {
            value: "N",
            title: "Any Current"
        }, {
            value: "C",
            title: "Closed"
        }, {
            value: "F",
            title: "Future Process"
        }, {
            value: "L",
            title: "Lockdown"
        }, {
            value: "O",
            title: "Open"
        }, {
            value: "Z",
            title: "Frozen"
        }

    ]
};
var balances = {
    selected: "",
    options: [{
        value: "",
        title: "All"
    }, {
        value: "D",
        title: "Debit"
    }, {
        value: "C",
        title: "Credit"
    }, {
        value: "X",
        title: "Calculated"
    }, {
        value: "Z",
        title: "DB or CR"
    }]
};

window.totalDetailLookup = {
    selected: "",
    options: [{
        value: "",
        title: "All"
    }, {
        value: "D",
        title: "Detail"
    }, {
        value: "T",
        title: "Total"
    }]
};
window.pricedUnpricedLookup = {
    selected: "",
    options: [{
        value: "",
        title: "All"
    }, {
        value: "P",
        title: "Priced"
    }, {
        value: "U",
        title: "UnPriced"
    }]
};
window.rvsSignIndicators = {
    selected: "",
    options: [{
        value: "",
        title: "All"
    }, {
        value: " ",
        title: "--"
    }, {
        value: "R",
        title: "Reverse Sign"
    }]
};

window.exportToExcel = function(dataObject) {
    var fileName = dataObject.fileName;
    var link = document.createElement("a");
    if (link.download !== undefined) {
        var blob = new Blob([dataObject.csvData], {
            type: "text/csv;charset=utf-8;"
        });
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style = "visibility:hidden";
    }

    if (navigator.msSaveBlob) {
        link.addEventListener("click", function(event) {
            blob = new Blob([dataObject.csvData], {
                type: "text/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, fileName);
        }, false);
    }

    if (link.attachEvent)
        link.attachEvent("onclick", function() {
            var csv = new ActiveXObject("scripting.FileSystemObject");
            var fLoc = csv.CreateTextFile(fileName);
            fLoc.WriteLine(dataObject.csvData);
            fLoc.close();
        });

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

window.printGrid = function(pageGrid) {
    var printPlugin = new Slick.Plugins.Print();
    pageGrid.registerPlugin(printPlugin);
    var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    printPlugin.printToWindow(window.open('Static/Scripts/App/Templates/Page/printGrid.html', 'print_window', strWindowFeatures));
};

window.defaultStringValidation = function(str) {
    //<>[]{}~^
    var regEx = /[~^{}\[\]<>]/;
    if (regEx.test(str)) {
        return {
            valid: false,
            msg: ""
        };
    }
    return {
        valid: true,
        msg: "Please enter a valid value"
    };
};

window.getEBCDICString = function(inputString) {

    // This is very naive implementation of EBCDIC conversion

    var testString = inputString || '';
    var newString = "";

    for (var i in testString) {

        // check if the character is a number
        var isNotANumber = isNaN(testString[i]);
        var charCode = testString[i].charCodeAt(0);

        // if the character is not a number then get the char code.
        if (isNotANumber) {
            newString += charCode.toString();
        } else {
            // this is a basic conversion....for now adding 100 to "0...9" so they have higher value like in EBCDIC
            newString += (charCode + 100).toString();
        }

    }


    return newString;
}
window.formatters = window.formatters || {};

window.formatters.actionFormatter = function(row, cell, value, columnDef, dataContext) {

    if (value == null || value === "" || value === undefined) {
        return "";
    }

    var v = angular.isString(dataContext["appStatusCode"]) ? dataContext["appStatusCode"] : "";

    if (v === "A") {
        return "Add";
    } else if (v === "U") {
        return "Update";
    } else {
        return v;
    }

};

window.formatters.pricedIndFormatter = function(row, cell, value, columnDef, dataContext) {

    if (value == null || value === "" || value === undefined) {
        return "";
    }

    var v = angular.isString(dataContext["pricedInd"]) ? dataContext["pricedInd"] : "";

    if (v === "P") {
        return "Priced";
    } else if (v === "U") {
        return "UnPriced"
    } else {
        return v;
    }

};

window.formatters.totalDetailIndFormatter = function(row, cell, value, columnDef, dataContext) {

    if (value == null || value === "" || value === undefined) {
        return "";
    }

    var v = angular.isString(dataContext["totalDetailInd"]) ? dataContext["totalDetailInd"] : "";

    if (v === "T") {
        return "Total";
    } else if (v === "D") {
        return "Detail"
    } else {
        return v;
    }

};
window.formatters.rvsSignIndFormatter = function(row, cell, value, columnDef, dataContext) {

    if (value == null || value === "" || value === undefined) {
        return "";
    }

    var v = angular.isString(dataContext["rvsSignInd"]) ? dataContext["rvsSignInd"] : "";

    if (v === "R") {
        return "Rev";
    } else if (v === " ") {
        return "--"
    } else {
        return v;
    }

};
