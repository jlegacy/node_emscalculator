(function() {

        var $DefaultJSON = function() {};

        $DefaultJSON.actionValues = function() {
            return actions = {
                "selected": "",
                "options": [{
                    "value": "",
                    "title": "All"
                }, {
                    "value": "B",
                    "title": "Buy"
                }, {
                    "value": "S",
                    "title": "Sell"
                }]
            }
        };

        $DefaultJSON.statusValues = function() {
            return actions = {
                "selected": "",
                "options": [{
                    "value": "",
                    "title": "All"
                }, {
                    "value": "P",
                    "title": "Pending"
                }, {
                    "value": "U",
                    "title": "Unbalanced"
                }, {
                    "value": "B",
                    "title": "Balanced"
                }, {
                    "value": "E",
                    "title": "Error"
                }]
            }
        };

        $DefaultJSON.lastDigitAccountValues = function() {
            return actions = {
                "selected": "",
                "options": [{
                    "value": "",
                    "title": ""
                }, {
                    "value": "1",
                    "title": "1"
                }, {
                    "value": "3",
                    "title": "3"
                }, {
                    "value": "8",
                    "title": "8"
                }]
            }
        };

        $DefaultJSON.moneyDiffValues = function() {
            return actions = {
                "selected": "",
                "options": [{
                    "value": "",
                    "title": "All"
                }, {
                    "value": "Y",
                    "title": "Yes"
                }, {
                    "value": "N",
                    "title": "No"
                }, {
                    "value": "M",
                    "title": "M"
                }, {
                    "value": "$",
                    "title": "$"
                }]
            }
        };

        $DefaultJSON.securityGroupValues = function() {
            return actions = {
                "selected": "",
                "options": [{
                    "value": "",
                    "title": "All"
                }, {
                    "value": "G1",
                    "title": "Group1"
                }, {
                    "value": "G2",
                    "title": "Group2"
                }, {
                    "value": "G3",
                    "title": "Group3"
                }]
            }
        };

        window.$DefaultJSON = $DefaultJSON;
        return (this);
    }
    ());
