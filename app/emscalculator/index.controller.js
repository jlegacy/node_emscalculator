(function () {
    'use strict';

    angular
        .module('app')
        .controller('Emscalculator.IndexController', Controller);

    function Controller() {
        var vm = this;
        vm.testValue = 1;
    }

})();