/***
 * Contains basic SlickGrid formatters.
 * 
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 * 
 * @module Formatters
 * @namespace Slick
 */

(function ($) {
    // register namespace
    $.extend(true, window, {
        "Slick": {
            "Formatters": {
                //"PercentComplete": PercentCompleteFormatter,
                //"PercentCompleteBar": PercentCompleteBarFormatter,
                //"YesNo": YesNoFormatter,
                "Checkmark": checkmarkFormatter,
                "Amount": gridAmountFormatter,
                "ExcelAmount": excelAmountFormatter,
                "Number":numberFormatter,
                "DropLink": dropLinkFormatter,
                "DetailLink": detailFormatter,
                "DeleteLink": deleteFormatter,
                "Title": titleFormatter,
                "LinkTitle": linkTitleFormatter,
                "Link": linkFormatter,
                "Approval": approvalFormatter
            }
        }
    });

    function gridAmountFormatter(row, cell, value, columnDef, dataContext, copier) {
        var delimiter = ',';
        if (value === "--") return value;
        var minus = '';
        if (parseFloat(value) < 0) minus = '-';
        value = new String(value);
        var a = value.split('.', 2);
        var fractional = a[1] !== undefined ? a[1] : "";
        var integral = parseInt(a[0]);
        if (isNaN(integral)) return '';
        integral = Math.abs(integral);
        var n = new String(integral);
        var a = [];
        while (n.length > 3) {
            var nn = n.substr(n.length - 3);
            a.unshift(nn);
            n = n.substr(0, n.length - 3);
        }
        if (n.length > 0) a.unshift(n);
        n = a.join(delimiter);
        switch (fractional.length) {
            case 0:
                value = n + ".00";
                break;
            case 1:
                value = n + "." + fractional + "0";
                break;
            default:
                value = n + '.' + fractional;
                break;
        }
        
        value = minus + value;
        if (copier)
            return value;
        return "<span class='" + (minus === '-' ? "slick-negative-cell" : "") + "'>" + value + "</span>";
    }
    function excelAmountFormatter(value) {
        var delimiter = ',';
        var minus = '';
        if (parseFloat(value) < 0) minus = '-';
        value = new String(value);
        var a = value.split('.', 2);
        var fractional = a[1] !== undefined ? a[1] : "";
        var integral = parseInt(a[0]);
        if (isNaN(integral)) return '';
        integral = Math.abs(integral);
        var n = new String(integral);
        var a = [];
        while (n.length > 3) {
            var nn = n.substr(n.length - 3);
            a.unshift(nn);
            n = n.substr(0, n.length - 3);
        }
        if (n.length > 0) a.unshift(n);
        n = a.join(delimiter);
        switch (fractional.length) {
            case 0:
                value = n + ".00";
                break;
            case 1:
                value = n + "." + fractional + "0";
                break;
            default:
                value = n + '.' + fractional;
                break;
        }

        value = minus + value;
        return value;
    }
    function numberFormatter(row, cell, value, columnDef, dataContext) {
        var delimiter = ',';
        var integral = parseInt(value);
        if (isNaN(integral)) return '';
        var n = new String(integral);
        var a = [];
        while (n.length > 3) {
            var nn = n.substr(n.length - 3);
            a.unshift(nn);
            n = n.substr(0, n.length - 3);
        }
        if (n.length > 0) a.unshift(n);
        n = a.join(delimiter);
        return n;
    }
    function dropLinkFormatter(row, cell, value, columnDef, dataContext,copier) {
        if (dataContext.dbcrInd !== "DB or CR") {
            if (copier)
                return value;
            return "<div class='gridDropMenu' style='cursor:pointer;'><a>" + value +
                "<img src='static/images/MenuCarat.png' width='9' height='6' border='0' style='padding-bottom:2px' alt='Menu'>" +
                "</a></div>";
        } else
            return value;
    }
    function deleteFormatter(row, cell, value, columnDef, dataContext) {
        if (value !== undefined)
            return "<img src='static/images/icon-trashcan.png' style='cursor:pointer;margin-top:5px;margin-left:10px;' />";
        else
            return "";
    }
    function detailFormatter(row, cell, value, columnDef, dataContext) {
        return "<img src='static/images/icon-document.png' style='cursor:pointer;margin-top:2px;margin-left:10px;' />";
    }
    function titleFormatter(row, cell, value, columnDef, dataContext) {
        return "<span title='" + dataContext[columnDef.title] + "'>" + value + "</span>";
    }
    function approvalFormatter(row, cell, value, columnDef, dataContext) {
        var appStatus = dataContext[columnDef.approvalStatus];
        if (appStatus === "A" || appStatus === "R")
            return "<span style='color:#0F57C2;' title='" + (appStatus === "A" ? "Approved By " : "Rejected By ") +
                dataContext[columnDef.approvedBy] + " on " +
                dataContext[columnDef.approvedDate] + "'>" + value + "</span>";
        else if (appStatus == "P")
            return "<span style='color:#0F57C2;cursor:pointer;text-decoration:underline;'>" + value + "</span>";
        else
            return value;
    }
    function checkmarkFormatter(row, cell, value, columnDef, dataContext) {
        var isChecked = value === 'Y';
        return isChecked ?
            "<img title='Checked by " + dataContext.checkedBy + " on " + dataContext.checkedDate +
            "' style='margin-left:19px;' src='static/images/icon-checkmark-green.png'><span style='font-size:0px;'>Y</span>"
            : "";

    }
    function linkTitleFormatter(row, cell, value, columnDef, dataContext) {
        return "<span style='color:#0F57C2;' title='" + dataContext[columnDef.title] + "'>" + value + "</span>";
    }
    function linkFormatter(row, cell, value, columnDef, dataContext) {
        return "<span style='color:#0F57C2;cursor:pointer;text-decoration:underline;' title='" + columnDef.title + "'>" + columnDef.title + "</span>";
    }
})(jQuery);
