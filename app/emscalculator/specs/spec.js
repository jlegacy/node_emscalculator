describe('emscalculator index.controller.js', function() {
    var scope;
    var controller;


    describe('Index Controller', function() {
        var scope = null;

        beforeEach(angular.mock.module('app'));


        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        beforeEach(inject(function($rootScope) {
            scope = $rootScope.$new();

            controller = $controller('Emscalculator.IndexController as vm', {
                '$scope': scope,
            });

        }));


        it('verify summary fields Including Basement', function() {
            //  expect(scope.vm.step3HeatLossBTUH_TotalSensibleLoad + scope.vm.basementHeatLossBTUH_TotalSensibleLoad === 63881.7410317781).toBeTruthy();
            expect(scope.vm.basementHeatLossBTUH_TotalSensibleLoad === 24401.958333333332).toBeTruthy();
        });




    });



});
