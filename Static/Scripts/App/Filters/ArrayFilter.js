filters.filter("ArrayFilter", function() {
    "use strict";

    return function(input) {
        if (!input) {
            return [];
        }
        return Object.keys(input);
    };
});
