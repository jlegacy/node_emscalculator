/***
 * Contains basic SlickGrid formatters.
 *
 * NOTE:  These are merely examples.  You will most likely need to implement something more
 *        robust/extensible/localizable/etc. for your use!
 *
 * @module Formatters
 * @namespace Slick
 */

(function($) {
    // register namespace
    $.extend(true, window, {
        "Slick": {
            "CustomFormatters": {
                "TimeHoursMinutes": timeHMFormatter,
            }
        }
    });

    function timeHMFormatter(row, cell, value, columnDef, dataContext) {
        if (value) {
            var stringVal = String(value);
            var strippedHMS = stringVal.replace(/\:/g, '');
            var integral = parseInt(strippedHMS);

            if (isNaN(integral)) return '00:00';
            if ((integral === 0)) return '00:00';

            var hour = strippedHMS.substr(0, 2);
            var min = strippedHMS.substr(2, 2);

            return hour + ':' + min;
        }
        return '00:00';
    }
})(jQuery);
