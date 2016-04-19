(function() {

        var $Shared = function() {};

        $Shared.variables = {};

        $Shared.removeSelectCheckbox = function(columns) {

            if (columns[0].field === 'sel') {
                var newColumns = columns.slice(1);
                return newColumns;
            }

            return columns;
        };

        $Shared.getTodaysDateDMY = function() {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var d = new Date();
            var days = (d.getDate()).toString();
            if (days.length === 1) {
                days = '0' + days;
            }
            return days + '-' + (months[d.getMonth()]) + '-' + +d.getFullYear();
        }

        $Shared.actionOptions = function() {
            return actions = {
                "selected": "All",
                "options": [{
                    "value": "All",
                    "title": "All"
                }, {
                    "value": "Buy",
                    "title": "Buy"
                }, {
                    "value": "Sell",
                    "title": "Sell"
                }]
            }
        };

        $Shared.convertToCommaString = function(jsonObj) {
            var x = "";
            var y = [];
            $.each(jsonObj.options, function(key, value) {
                y.push(value.value);
            });

            return y.join();
        };

        $Shared.selectCellEditor = function(args) {
            var $select;
            var defaultValue;
            var scope = this;
            var opt_values = [];
            var option_str = "";
            var v;

            this.init = function() {

                if (args.column.options) {
                    opt_values = args.column.options.split(',');
                } else {
                    opt_values = "yes,no".split(',');
                }
                option_str = "";
                for (var i in opt_values) {
                    v = opt_values[i];
                    option_str += "<OPTION value='" + v + "'>" + v + "</OPTION>";
                }
                $select = $("<SELECT tabIndex='0' class='editor-select'>" + option_str + "</SELECT>");
                $select.appendTo(args.container);
                $select.focus();
            };

            this.destroy = function() {
                $select.remove();
            };

            this.focus = function() {
                $select.focus();
            };

            this.loadValue = function(item) {
                defaultValue = item[args.column.field];
                $select.val(defaultValue);
            };

            this.serializeValue = function() {
                if (args.column.options) {
                    return $select.val();
                } else {
                    return ($select.val() == "yes");
                }
            };

            this.applyValue = function(item, state) {
                item[args.column.field] = state;
            };

            this.isValueChanged = function() {
                return ($select.val() != defaultValue);
            };

            this.validate = function() {
                return {
                    valid: true,
                    msg: null
                };
            };

            this.init();
        };



        window.$Shared = $Shared;
        return (this);
    }
    ());
