(function () {
    'use strict';

    angular
        .module('app')
        .controller('Emscalculator.IndexController', Controller);

    function Controller($scope) {
        var vm = this;
        vm.testValue = 1;

        //scope data starting values//
        vm.step1WinterIndoor = 70;
        vm.step1SummerIndoor = 75;
        vm.step1SummerOutdoor = 95;
        vm.step1WinterOutdoor = 20;

        vm.totalConditionedArea = 1900;
        vm.step1NumberOfOccupants = 4;

        vm.frontOfBuildingFacing = 'East';

        vm.step2OverhangDistanceTop_East = .5;
        vm.step2OverhangDistanceTop_West = .5;
        vm.step2OverhangDistanceTop_South = 0;

        vm.step2OverhangLength_East = 1.5;
        vm.step2OverhangLength_West = 1.5;
        vm.step2OverhangLength_South = 0;

        vm.step2LinearFootAcrossTop_East = 5;
        vm.step2LinearFootAcrossTop_West = 12;
        vm.step2LinearFootAcrossTop_South = 0;

        vm.step2SolarGainThroughGlassLat = 40;
        vm.step2SolarGainUValue = .40;
        vm.step2SolarSGHC = .35;

        vm.step2SolarGain_NorthShadedArea = 34;
        vm.step2SolarGain_NENW = 34;
        vm.step2SolarGain_South = 56;
        vm.step2SolarGain_SESW = 34;
        vm.step2SolarGain_East = 46;
        vm.step2SolarGain_West = 68;


        $scope.calculate = function () {

            vm.step1WinterDiff = vm.step1WinterIndoor - vm.step1WinterOutdoor;
            vm.step1SummerDiff = vm.step1SummerOutdoor - vm.step1SummerIndoor;
            vm.step1TightStructureWinter = vm.step1TightStructure.selected;
            vm.step1TightStructureSummer = vm.step1TightStructure.selected / 2;
            vm.step1CFM = vm.step1Fireplace.selected + vm.step1FireplaceNumber.selected;
            vm.step2HTM_North = vm.step2GlassCoefficients_North.selected;
            vm.step2HTM_NENW = vm.step2GlassCoefficients_NENW.selected;
            vm.step2HTM_South = vm.step2GlassCoefficients_South.selected;
            vm.step2HTM_SESW = vm.step2GlassCoefficients_SESW.selected;
            vm.step2HTM_East = vm.step2GlassCoefficients_East.selected;
            vm.step2HTM_West = vm.step2GlassCoefficients_West.selected;
        }

        vm.step1HumidityOptions = [
            { "text": "Arid", "value": 0 },
            { "text": "Semi-Arid", "value": 20 },
            { "text": "Average", "value": 30 },
            { "text": "Moderately Humid", "value": 40 },
            { "text": "Very Humid", "value": 60 }
        ];

        vm.step1FacingOptions = [
         { "text": "North", "value": 0 },
         { "text": "South", "value": 20 },
         { "text": "East", "value": 30 },
         { "text": "West", "value": 40 }
        ];

        vm.step1TightStructure = [
       { "text": "Not tight-under 1500 Sq. Ft.", "value": 2 },
       { "text": " Average-under 1500 Sq. Ft.", "value": 1 },
       { "text": " Very tight-under 1500 Sq. Ft.", "value": .35 },
       { "text": "Not tight-over 1500 Sq. Ft.", "value": 1 },
       { "text": " Average-over 1500 Sq. Ft.", "value": .7 },
       { "text": " Very tight-over 1500 Sq. Ft.", "value": .35 },
       { "text": "Use blower door ENIR", "value": 0 }
        ];

        vm.step1Fireplace = [
     { "text": "No Fireplace", "value": 0 },
     { "text": "Tight", "value": 0 },
     { "text": "Semi-tight", "value": 13 },
     { "text": "Average", "value": 20 },
     { "text": "Semi-loose", "value": 27 },
     { "text": "Loose", "value": 33 }
        ];

        vm.step1FireplaceNumber = [
    { "text": "none", "value": 10 },
    { "text": "1", "value": 0 },
    { "text": "2", "value": 7 },
    { "text": "3+", "value": 10 }
        ];

        vm.step2GlassCoefficients_North = [
        { "text": "Single", "value": 32 },
        { "text": "Double", "value": 24 },
        { "text": "Tripl or Low-E", "value": 20 }
        ];

        vm.step2GlassCoefficients_East = [
       { "text": "Single", "value": 90 },
       { "text": "Double", "value": 75 },
       { "text": "Tripl or Low-E", "value": 65 }
        ];

        vm.step2GlassCoefficients_South = [
     { "text": "Single", "value": 50 },
     { "text": "Double", "value": 40 },
     { "text": "Tripl or Low-E", "value": 33 }
        ];

        vm.step2GlassCoefficients_West = [
    { "text": "Single", "value": 90 },
    { "text": "Double", "value": 75 },
    { "text": "Tripl or Low-E", "value": 65 }
        ];

        vm.step2GlassCoefficients_WintU = [
 { "text": "Single", "value": .98 },
 { "text": "Double", "value": .56 },
 { "text": "Tripl or Low-E", "value": .42 }
        ];

        vm.step2GlassCoefficients_NENW = [
{ "text": "Single", "value": 65 },
{ "text": "Double", "value": 52 },
{ "text": "Tripl or Low-E", "value": 46 }
        ];

        vm.step2GlassCoefficients_SESW = [
{ "text": "Single", "value": 80 },
{ "text": "Double", "value": 65 },
{ "text": "Tripl or Low-E", "value": 56 }
        ];


        $scope.calculate();
    }

})();