Object.keys = Object.keys || function(o, k, r) {
    "use strict";

    r = [];
    for (k in o) {
        r.hasOwnProperty.call(o, k) && r.push(k);
    }
    return r;
};

//window.WebReserve = window.WebReserve || {};
//WebReserve.filter("ArrayFilter", function () {
//    return function (input) {
//        if (!input) {
//            return [];
//        }
//        return Object.keys(input);
//    };
//});
