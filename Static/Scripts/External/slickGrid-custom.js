(function () {

    var $SlickGridCustom = function () { };

    //apply row mask if checked

    $SlickGridCustom.applyMultiSelect = function (gridName) {
        $(gridName).on('click', 'input[type=checkbox]', function (event) {
            if ($(this).attr('Checked')) {
                $(this).closest('.slick-row').removeClass('active');
                $(this).closest('.slick-row').addClass('multi');
            }
            else {
                $(this).closest('.slick-row').removeClass('multi');
            }
            //multirow shift select logic//
            if (event.shiftKey || event.ctrlKey) {
                var start = false;
                var count = 0;
                var numberofMultis = $(gridName + ' .multi').length;
                var domRows = $(gridName + ' .slick-row');
                if (numberofMultis > 1) {

                    //loop through dom looking for multis
                    $(domRows).each(function () {
                        if ($(this).hasClass('multi')) {
                            count += 1;
                            start = true;
                        }

                        // set anything selected between multis to multi select
                        if (start && count < numberofMultis) {
                            $(this).removeClass('active');
                            $(this).addClass('multi');
                            $(this).find('input[type="checkbox"]').attr('Checked', 'Checked');
                        }

                    });

                }
            }
        });

    };

    $SlickGridCustom.applyToggleAll = function (gridName, titleCheckBox) {
        var toggle = true;
        //apply row mask to all or not
        $("div[title='" + titleCheckBox + "']").on('click', function () {
            if (toggle) {
                $('input[type="checkbox"]').attr('Checked', 'Checked');
                toggle = false;
                $(gridName + ' .slick-row').removeClass('active');
                $(gridName + ' .slick-row').find('.slick-cell').removeClass('selected');
                $(gridName + ' .slick-row').addClass('multi');
            }
            else {
                $('input[type="checkbox"]').removeAttr('checked');
                toggle = true;
                $(gridName + ' .slick-row').removeClass('multi');
            }

        });
    }

    $SlickGridCustom.addRow = function (gridName, titleCheckBox) {


        var count = 0;
        var scrubbedData = [];
        var data = grid.getData();

        $(data).each(function (indx, value) {

            if (getKeys(value).length == 0) {
                data.splice(indx, 1);
            }
        });

        data.push({});

        grid.setData(data, false);

        grid.render();

    };


    $SlickGridCustom.setExcelMode = function () {

       // $DemoGrid.copyManager = new Slick.CellExternalCopyManager($DemoGrid.pluginOptions);

      //  grid.registerPlugin($DemoGrid.copyManager);

        $DemoGrid.allowPaste = true;

        grid.setOptions({
            editable: true,
            autoEdit: false
        });

        grid.invalidate();

    };

    $SlickGridCustom.setReadOnly = function () {

        //  grid.unregisterPlugin($DemoGrid.copyManager);

        $DemoGrid.allowPaste = false;

        grid.setOptions({
            editable: false,
            autoEdit: false,
            addRow: false
          });

        grid.invalidate();

    };

  /*  $SlickGridCustom.enableCellCopy = function(gridName)
    {
        $(gridName).keydown(function(evt) {
            if (evt.keyCode == 67 && evt.ctrlKey) {
                alert($(gridName).find('.selected').val());
            };
        });


    } */

    $SlickGridCustom.cleanUpBlankRows = function () {
        /*   var gridData = grid.getData();
           $(gridData).each(function (idx, value) {
               if (value[0] == undefined) {
                   gridData.splice(idx, 1);
               }
           });
   
           grid.setData(gridData, true);
           grid.render(); */
    };

    var getKeys = function (obj) {
        var keys = [];

        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                keys.push(i);
            }
        }

        return keys;
    };


    window.$SlickGridCustom = $SlickGridCustom;
    return (this);
}());
