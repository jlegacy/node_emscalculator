﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('Emscalculator.IndexController', controller);

    function controller($scope) {
        var vm = this;
        vm.testValue = 1;

        //scope data starting values//
        vm.step1WinterIndoor = 70;
        vm.step1SummerIndoor = 75;
        vm.step1SummerOutdoor = 100;
        vm.step1WinterOutdoor = 1;

        vm.totalConditionedArea = 1900;
        vm.step1NumberOfOccupants = 4;

        vm.frontOfBuildingFacing = 'East';

        vm.step2OverhangDistanceTop_East = .5;
        vm.step2OverhangDistanceTop_West = .5;
        vm.step2OverhangDistanceTop_South = .05;

        vm.step2OverhangLength_East = 1.5;
        vm.step2OverhangLength_West = 1.5;
        vm.step2OverhangLength_South = 1.5;

        vm.step2LinearFootAcrossTop_East = 10;
        vm.step2LinearFootAcrossTop_West = 12;
        vm.step2LinearFootAcrossTop_South = 10;

        vm.step2SolarGainThroughGlassLat = 40;
        vm.step2SolarGainUValue = .40;
        vm.step2SolarSGHC = .35;

        vm.basementSolarGainThroughGlassLat = 40;
        vm.basementSolarGainUValue = .40;
        vm.basementSolarSGHC = .35;

        vm.step2SolarGain_ShadedArea_North = 34;
        vm.step2SolarGain_ShadedArea_NENW = 40;
        vm.step2SolarGain_ShadedArea_South = 56;
        vm.step2SolarGain_ShadedArea_SESW = 40;
        vm.step2SolarGain_ShadedArea_East = 46;
        vm.step2SolarGain_ShadedArea_West = 68;

        vm.basementSolarGain_ShadedArea_North = 40;
        vm.basementSolarGain_ShadedArea_NENW = 40;
        vm.basementSolarGain_ShadedArea_South = 40;
        vm.basementSolarGain_ShadedArea_SESW = 40;
        vm.basementSolarGain_ShadedArea_East = 40;
        vm.basementSolarGain_ShadedArea_West = 40;


        $scope.calculate = function () {

            vm.step1WinterDiff = vm.step1WinterIndoor - vm.step1WinterOutdoor;
            vm.step1SummerDiff = vm.step1SummerOutdoor - vm.step1SummerIndoor;
            vm.step1TightStructureWinter = vm.step1TightStructure.selected;
            vm.step1TightStructureSummer = vm.step1TightStructure.selected / 2;
            vm.step1CFM = vm.step1Fireplace.selected + vm.step1FireplaceNumber.selected;

            if (vm.specHasCheck) {

                vm.step2SolarGain_ShadedArea_North = 34.25;
                vm.step2SolarGain_ShadedArea_NENW = 135.884;
                vm.step2SolarGain_ShadedArea_South = 136;
                vm.step2SolarGain_ShadedArea_SESW = 188.8;
                vm.step2SolarGain_ShadedArea_East = 212.2;
                vm.step2SolarGain_ShadedArea_West = 212.2;

                vm.step2HTM_North = 15;
                vm.step2HTM_NENW = 60;
                vm.step2HTM_South = 21;
                vm.step2HTM_SESW = 35;
                vm.step2HTM_East = 40;
                vm.step2HTM_West = 40;
            } else {
                vm.step2HTM_North = vm.step2GlassCoefficients_North.selected;
                vm.step2HTM_NENW = vm.step2GlassCoefficients_NENW.selected;
                vm.step2HTM_South = vm.step2GlassCoefficients_South.selected;
                vm.step2HTM_SESW = vm.step2GlassCoefficients_SESW.selected;
                vm.step2HTM_East = vm.step2GlassCoefficients_East.selected;
                vm.step2HTM_West = vm.step2GlassCoefficients_West.selected;
            }

            if (vm.specHasCheckBasement) {

                vm.basementSolarGain_ShadedArea_North = 34.25;
                vm.basementSolarGain_ShadedArea_NENW = 135.884;
                vm.basementSolarGain_ShadedArea_South = 136;
                vm.basementSolarGain_ShadedArea_SESW = 188.8;
                vm.basementSolarGain_ShadedArea_East = 212.2;
                vm.basementSolarGain_ShadedArea_West = 212.2;

                vm.basementHTM_North = 15;
                vm.basementHTM_NENW = 60;
                vm.basementHTM_South = 21;
                vm.basementHTM_SESW = 35;
                vm.basementHTM_East = 40;
                vm.basementHTM_West = 40;
            } else {
                vm.basementHTM_North = vm.basementGlassCoefficients_North.selected;
                vm.basementHTM_NENW = vm.basementGlassCoefficients_NENW.selected;
                vm.basementHTM_South = vm.basementGlassCoefficients_South.selected;
                vm.basementHTM_SESW = vm.basementGlassCoefficients_SESW.selected;
                vm.basementHTM_East = vm.basementGlassCoefficients_East.selected;
                vm.basementHTM_West = vm.basementGlassCoefficients_West.selected;
            }

            vm.step2ReflectiveCoatingValue = vm.step2ReflectiveCoating.selected;
            vm.step2TintTypesValue = vm.step2TintTypes.selected;

            //Step2 Shaded
            vm.step2GlassShaded_NENW = vm.step2SolarGain_ShadedArea_NENW;
            if (vm.step2SolarGain_ShadedArea_South - ((vm.step2OverhangLength_South * 2.6 * vm.step2LinearFootAcrossTop_South) - (vm.step2OverhangDistanceTop_South * vm.step2LinearFootAcrossTop_South)) > 0) {
                vm.step2GlassShaded_South = ((vm.step2OverhangLength_South * 2.6 * vm.step2LinearFootAcrossTop_South) - (vm.step2OverhangDistanceTop_South * vm.step2LinearFootAcrossTop_South));
            } else {
                vm.step2GlassShaded_South = vm.step2SolarGain_ShadedArea_South;
            }

            vm.step2GlassShaded_SESW = (vm.step2OverhangLength_South * 1.25 * vm.step2LinearFootAcrossTop_South) - (vm.step2OverhangDistanceTop_South * vm.step2LinearFootAcrossTop_South);
            vm.step2GlassShaded_East = (vm.step2OverhangLength_East * .81 * vm.step2LinearFootAcrossTop_East) - (vm.step2OverhangDistanceTop_East * vm.step2LinearFootAcrossTop_East);
            vm.step2GlassShaded_West = (vm.step2OverhangLength_West * .81 * vm.step2LinearFootAcrossTop_West) - (vm.step2OverhangDistanceTop_West * vm.step2LinearFootAcrossTop_West);
            vm.step2GlassShaded_North = vm.step2SolarGain_ShadedArea_North + vm.step2GlassShaded_NENW + vm.step2GlassShaded_South + vm.step2GlassShaded_SESW + vm.step2GlassShaded_East + vm.step2GlassShaded_West;

            //Step2 Unshaded
            vm.step2GlassUnShaded_North = vm.step2SolarGain_ShadedArea_North - vm.step2GlassShaded_North;
            vm.step2GlassUnShaded_NENW = vm.step2SolarGain_ShadedArea_NENW - vm.step2GlassShaded_NENW;
            vm.step2GlassUnShaded_South = vm.step2SolarGain_ShadedArea_South - vm.step2GlassShaded_South;
            vm.step2GlassUnShaded_SESW = vm.step2SolarGain_ShadedArea_SESW - vm.step2GlassShaded_SESW;
            vm.step2GlassUnShaded_East = vm.step2SolarGain_ShadedArea_East - vm.step2GlassShaded_East;
            vm.step2GlassUnShaded_West = vm.step2SolarGain_ShadedArea_West - vm.step2GlassShaded_West;

            //Step2 BTUH
            vm.step2GlassBTUH_North = vm.step2HTM_North * vm.step2GlassShaded_North;
            vm.step2GlassBTUH_NENW = vm.step2HTM_NENW * vm.step2GlassUnShaded_NENW;
            vm.step2GlassBTUH_South = vm.step2HTM_South * vm.step2GlassUnShaded_South;
            vm.step2GlassBTUH_SESW = vm.step2HTM_SESW * vm.step2GlassUnShaded_SESW;
            vm.step2GlassBTUH_East = vm.step2HTM_East * vm.step2GlassUnShaded_East;
            vm.step2GlassBTUH_West = vm.step2HTM_West * vm.step2GlassUnShaded_West;

            vm.step2GlassBTUH_Total = (vm.step2GlassBTUH_North + vm.step2GlassBTUH_NENW + vm.step2GlassBTUH_South + vm.step2GlassBTUH_SESW + vm.step2GlassBTUH_East + vm.step2GlassBTUH_West) * vm.step2ReflectiveCoating.selected;
            vm.step2SkyLight_Total = vm.step2SkyLightQty * vm.step2TintTypes.selected;

            vm.step2TotalSolarGain = vm.step2GlassBTUH_Total + vm.step2SkyLight_Total;

            //Step 2 - Intermediate Values for Duct Loss Gain

            vm.step2DuctGainLossConditionedArea_Cool = 0;
            vm.step2DuctGainLossTrunkBranchAttic_Cool = ((((vm.step2AtticTemperature.selected - 95) / 10) * 0.06) + 0.16) + ((vm.step2AreaDuctLocated - 2000) * 0.00006);
            vm.step2DuctGainLossRadialSpiderAttic_Cool = vm.step2DuctGainLossTrunkBranchAttic_Cool * .6;
            vm.step2DuctGainLossUnderOpenFloor_Cool = (0.1 + (0.006 * (vm.step1SummerOutdoor - 85))) + ((vm.step2AreaDuctLocated - 1000) * 0.00006);
            vm.step2DuctGainLossEnclosedCrawl_Cool = vm.step2DuctGainLossUnderOpenFloor_Cool * .45;
            vm.step2DuctGainDuctSystemSlab_Cool = .3;

            vm.step2DuctGainLossConditionedArea_Heat = 0;
            vm.step2DuctGainLossTrunkBranchAttic_Heat = (0.13 + ((vm.step1SummerOutdoor - 1000) * 0.00004)) + (0.002 * (40 - vm.step1WinterOutdoor));
            vm.step2DuctGainLossRadialSpiderAttic_Heat = vm.step2DuctGainLossTrunkBranchAttic_Heat * .6;
            vm.step2DuctGainLossUnderOpenFloor_Heat = (0.21 + ((vm.step1SummerOutdoor - 1000) * 0.000075)) + (0.003 * (40 - vm.step1WinterOutdoor));
            vm.step2DuctGainLossEnclosedCrawl_Heat = vm.step2DuctGainLossUnderOpenFloor_Heat * .4;
            vm.step2DuctGainDuctSystemSlab_Heat = (0.03 + ((vm.step1SummerOutdoor - 1000) * 0.000009)) + (0.001 * (40 - vm.step1WinterOutdoor));

            vm.step2DuctLoss_Heating = vm.step2DuctsPipesHeating.selected * vm.step2DuctsPipesRValues.selected * vm.step2DuctLeakage.selected;

            switch (vm.step2DuctsPipesCooling.selected) {
                case "Conditioned area":
                    vm.coolingFactor = vm.step2DuctGainLossConditionedArea_Cool;
                    break;
                case "Trunk and branches in attic":
                    vm.coolingFactor = vm.step2DuctGainLossTrunkBranchAttic_Cool;
                    break;
                case "Radial or spider in attic":
                    vm.coolingFactor = vm.step2DuctGainLossRadialSpiderAttic_Cool;
                    break;
                case "Under an open floor":
                    vm.coolingFactor = vm.step2DuctGainLossUnderOpenFloor_Cool;
                    break;
                case "Enclosed crawl space or unheated basement":
                    vm.coolingFactor = vm.step2DuctGainLossEnclosedCrawl_Cool;
                    break;
                case "Duct system in slab":
                    vm.coolingFactor = vm.step2DuctGainDuctSystemSlab_Cool;
                    break;
              
            }

            switch (vm.step2DuctsPipesHeating.selected) {
                case "Conditioned area":
                    vm.heatingFactor = vm.step2DuctGainLossConditionedArea_Heat;
                    break;
                case "Trunk and branches in attic":
                    vm.heatingFactor = vm.step2DuctGainLossTrunkBranchAttic_Heat;
                    break;
                case "Radial or spider in attic":
                    vm.heatingFactor = vm.step2DuctGainLossRadialSpiderAttic_Heat;
                    break;
                case "Under an open floor":
                    vm.heatingFactor = vm.step2DuctGainLossUnderOpenFloor_Heat;
                    break;
                case "Enclosed crawl space or unheated basement":
                    vm.heatingFactor = vm.step2DuctGainLossEnclosedCrawl_Heat;
                    break;
                case "Duct system in slab":
                    vm.heatingFactor = vm.step2DuctGainDuctSystemSlab_Heat;
                    break;

            }

            vm.step2DuctLoss_Heating = vm.heatingFactor * vm.step2DuctsPipesRValues.selected * vm.step2DuctLeakage.selected;
            vm.step2DuctGain_Cooling = vm.coolingFactor * vm.step2DuctsPipesRValues.selected * vm.step2DuctLeakage.selected;

            /*Step 3*/

            vm.step3HeatLossBTUH_Glass1 = vm.step1WinterDiff * vm.step3Area_Glass1 * vm.step3SolarGlass1.selected;
            vm.step3HeatLossBTUH_Glass2 = vm.step1WinterDiff * vm.step3Area_Glass2 * vm.step3SolarGlass2.selected;
            vm.step3HeatLossBTUH_SkyLight = vm.step1WinterDiff * vm.step3Area_SolarSkyLight * vm.step3SolarSkyLight.selected;
            vm.step3HeatLossBTUH_Doors = vm.step1WinterDiff * vm.step3Area_SolarDoors * vm.step3SolarDoors.selected;
            vm.step3HeatLossBTUH_NetWall = vm.step1WinterDiff * vm.step3Area_SolarNetWall * vm.step3SolarNetWall.selected;
            vm.step3HeatLossBTUH_Ceiling = vm.step1WinterDiff * vm.step3Area_SolarCeiling * vm.step3SolarCeiling.selected;

            vm.step3HeatLossBTUH_OverCrawl = vm.step1WinterDiff * vm.step3Area_OverCrawl * vm.step3SolarGainFloors_OverCrawl.selected;
            vm.step3HeatLossBTUH_OpenBeach = vm.step1WinterDiff * vm.step3Area_OpenBeach * vm.step3SolarGainFloors_OpenBeach.selected;
            vm.step3HeatLossBTUH_Slab = vm.step1WinterDiff * vm.step3Area_Slab * vm.step3SolarGainFloors_Slab.selected;

            vm.step3HeatGainBTUH_Doors = vm.step1SummerDiff * vm.step3Area_SolarDoors * vm.step3SolarDoors.selected;
            vm.step3HeatGainBTUH_NetWall = vm.step1SummerDiff * vm.step3Area_SolarNetWall * vm.step3SolarNetWall.selected;
            vm.step3HeatGainBTUH_Ceiling = 45 * vm.step3Area_SolarCeiling * vm.step3SolarCeiling.selected;

            vm.step3HeatGainBTUH_OverCrawl = 0;
            vm.step3HeatGainBTUH_OpenBeach = vm.step1SummerDiff * vm.step3Area_OpenBeach * vm.step3SolarGainFloors_OpenBeach.selected;
            vm.step3HeatGainBTUH_Slab = 0;

            vm.step3HeatLossBTUH_Infiltration = (((vm.step3Infiltration * vm.step1TightStructureWinter) / 60) * 1.1 * vm.step1WinterDiff + (vm.step1CFM * 1.1 * vm.step1WinterDiff));
            vm.step3HeatGainBTUH_Infiltration = ((vm.step3Infiltration * vm.step1TightStructureSummer) / 60) * 1.1 * vm.step1SummerDiff;

            vm.step3HeatGainBTUH_People = vm.step1NumberOfOccupants * 230;
            vm.step3HeatGainBTUH_People_Total = vm.step1NumberOfOccupants * 200;

            vm.step3HeatGainBTUH_Appliances = 1200;

            vm.step3HeatLossBTUH_Subtotal =
                vm.step3HeatLossBTUH_Glass1 +
                vm.step3HeatLossBTUH_Glass2 +
                vm.step3HeatLossBTUH_SkyLight +
                vm.step3HeatLossBTUH_Doors +
                vm.step3HeatLossBTUH_NetWall +
                vm.step3HeatLossBTUH_Ceiling +
                vm.step3HeatLossBTUH_OverCrawl +
                vm.step3HeatLossBTUH_OpenBeach +
                vm.step3HeatLossBTUH_Slab +
                vm.step3HeatLossBTUH_Infiltration;

            vm.step3HeatGainBTUH_Subtotal =
                vm.step2TotalSolarGain +
                vm.step3HeatGainBTUH_Doors +
                vm.step3HeatGainBTUH_NetWall +
                vm.step3HeatGainBTUH_Ceiling +
                vm.step3HeatGainBTUH_OverCrawl +
                vm.step3HeatGainBTUH_OpenBeach +
                vm.step3HeatGainBTUH_Slab +
                vm.step3HeatGainBTUH_Infiltration +
                vm.step3HeatGainBTUH_People +
                vm.step3HeatGainBTUH_Appliances;

            vm.step3HeatLossBTUH_DuctGain = vm.step3HeatLossBTUH_Subtotal * vm.step2DuctLoss_Heating;
            vm.step3HeatGainBTUH_DuctGain = vm.step3HeatGainBTUH_Subtotal * vm.step2DuctGain_Cooling;
            vm.step3HeatGainBTUH_DuctGain_Total = ((191 + (110 * ((vm.step1HumidityOptions.selected - 10) / 10)) * 1.65)) * (vm.totalConditionedArea / 2000);

            
            vm.step3HeatLossBTUH_TotalSensibleLoad = vm.step3HeatLossBTUH_Subtotal + vm.step3HeatLossBTUH_DuctGain;
            vm.step3HeatGainBTUH_TotalSensibleLoad = vm.step3HeatGainBTUH_Subtotal + vm.step3HeatGainBTUH_DuctGain;

            vm.step3Total_LatentLoad = (vm.step1TightStructureSummer * vm.step3Infiltration / 60) * 0.68 * vm.step1HumidityOptions.selected;

            vm.step3Total_LatentLoad_Total = vm.step3HeatGainBTUH_DuctGain_Total + (vm.step1NumberOfOccupants * 200) + vm.step3Total_LatentLoad;


            /*Basement*/

            vm.basementGlassBTUH_North = vm.basementSolarGain_ShadedArea_North * vm.basementGlassCoefficients_North.selected;
            vm.basementGlassBTUH_NENW = vm.basementSolarGain_ShadedArea_NENW * vm.basementGlassCoefficients_NENW.selected;
            vm.basementGlassBTUH_South = vm.basementSolarGain_ShadedArea_South * vm.basementGlassCoefficients_South.selected;
            vm.basementGlassBTUH_SESW = vm.basementSolarGain_ShadedArea_SESW * vm.basementGlassCoefficients_SESW.selected;
            vm.basementGlassBTUH_East = vm.basementSolarGain_ShadedArea_East * vm.basementGlassCoefficients_East.selected;
            vm.basementGlassBTUH_West = vm.basementSolarGain_ShadedArea_West * vm.basementGlassCoefficients_West.selected;

            vm.basementGlassBTUH_Total = (vm.basementGlassBTUH_North + vm.basementGlassBTUH_NENW + vm.basementGlassBTUH_South + vm.basementGlassBTUH_SESW + vm.basementGlassBTUH_East + vm.basementGlassBTUH_West) * vm.basementReflectiveCoating.selected;


            vm.basementTotalSolarGain = vm.basementGlassBTUH_Total;


            /*Basement Load*/

            vm.basementHeatLossBTUH_Floor_UValue = .024;

            vm.basementHeatLossBTUH_Glass1 = vm.step1WinterDiff * vm.basementArea_Glass1 * vm.basementSolarGlass1.selected;
            vm.basementHeatLossBTUH_Glass2 = vm.step1WinterDiff * vm.basementArea_Glass2 * vm.basementSolarGlass2.selected;
            vm.basementHeatLossBTUH_SkyLight = vm.step1WinterDiff * vm.basementArea_SolarSkyLight * vm.basementSolarSkyLight.selected;
            vm.basementHeatLossBTUH_Doors = vm.step1WinterDiff * vm.basementArea_SolarDoors * vm.basementSolarDoors.selected;

            vm.basementHeatLossBTUH_NetWall_Above = vm.step1WinterDiff * vm.basementArea_SolarNetWall_Above * vm.basementSolarNetWall_Above.selected;
            vm.basementHeatLossBTUH_NetWall_Below = vm.step1WinterDiff * vm.basementArea_SolarNetWall_Below * vm.basementSolarNetWall_Below.selected;

            vm.basementHeatGainBTUH_NetWall_Above = vm.step1SummerDiff * vm.basementArea_SolarNetWall_Above * vm.basementSolarNetWall_Above.selected;
            vm.basementHeatGainBTUH_NetWall_Below = vm.step1SummerDiff * vm.basementArea_SolarNetWall_Below * vm.basementSolarNetWall_Below.selected;

            vm.basementHeatLossBTUH_Ceiling = vm.step1WinterDiff * vm.basementArea_SolarCeiling * vm.basementSolarCeiling.selected;

            vm.basementHeatLossBTUH_OverCrawl = vm.step1WinterDiff * vm.basementArea_OverCrawl * vm.basementSolarGainFloors_OverCrawl.selected;
            vm.basementHeatLossBTUH_OpenBeach = vm.step1WinterDiff * vm.basementArea_OpenBeach * vm.basementSolarGainFloors_OpenBeach.selected;
            vm.basementHeatLossBTUH_Slab = vm.step1WinterDiff * vm.basementArea_Slab * vm.basementSolarGainFloors_Slab.selected;

            vm.basementHeatGainBTUH_Doors = vm.step1SummerDiff * vm.basementArea_SolarDoors * vm.basementSolarDoors.selected;
            vm.basementHeatGainBTUH_Ceiling = 45 * vm.basementArea_SolarCeiling * vm.basementSolarCeiling.selected;

            vm.basementHeatGainBTUH_OverCrawl = 0;
            vm.basementHeatGainBTUH_OpenBeach = vm.step1SummerDiff * vm.basementArea_OpenBeach * vm.basementSolarGainFloors_OpenBeach.selected;
            vm.basementHeatGainBTUH_Slab = 0;

            vm.basementHeatLossBTUH_Infiltration = ((.25 * vm.basementInfiltration) / 60) * 1.1 * vm.step1WinterDiff;
            vm.basementHeatGainBTUH_Infiltration = ((.25 * vm.basementInfiltration) / 60) * 1.1 * vm.step1SummerDiff;

            vm.basementHeatGainBTUH_People = vm.basementArea_People * 230;
            vm.basementHeatGainBTUH_People_Total = vm.basementArea_People * 200;

            vm.basementHeatLossBTUH_Floor = vm.basementHeatLossBTUH_Floor_UValue * vm.basementArea_FloorSquareFeet * vm.step1WinterDiff;
            vm.basementHeatGainBTUH_Floor = 0;

            vm.basementHeatGainBTUH_Appliances = 1200;

            vm.basementHeatLossBTUH_Subtotal =
                vm.basementHeatLossBTUH_Glass1 +
                vm.basementHeatLossBTUH_Glass2 +
                vm.basementHeatLossBTUH_Doors +
                vm.basementHeatLossBTUH_NetWall_Above +
                vm.basementHeatLossBTUH_NetWall_Below +
                vm.basementHeatLossBTUH_Ceiling +
                vm.basementHeatLossBTUH_Floor +
                vm.basementHeatLossBTUH_Infiltration;

            vm.basementHeatGainBTUH_Subtotal =
                vm.basementTotalSolarGain +
                vm.basementHeatGainBTUH_Doors +
                vm.basementHeatGainBTUH_NetWall_Above +
                vm.basementHeatGainBTUH_NetWall_Below +
                vm.basementHeatGainBTUH_Ceiling +
                vm.basementHeatGainBTUH_Infiltration +
                vm.basementHeatGainBTUH_People +
                vm.basementHeatGainBTUH_Appliances;

            vm.basementHeatLossBTUH_TotalSensibleLoad = vm.basementHeatLossBTUH_Subtotal;
            vm.basementHeatGainBTUH_TotalSensibleLoad = vm.basementHeatGainBTUH_Subtotal;

            vm.basementTotal_LatentLoad = .25 * (vm.basementInfiltration / 60) * 0.68 * vm.step1HumidityOptions.selected;
            vm.basementTotal_LatentLoad_Total = vm.basementTotal_LatentLoad + 300 + vm.basementHeatGainBTUH_People_Total;

        }

        $scope.update = function() {
            vm.step2DuctsPipesCooling.value = vm.step2DuctGainLossConditionedArea_Cool = 0;
        }

        $scope.setManSpecs = function () {

            if (vm.specHasCheck) {
                $scope.calculate();
            }
        }

        $scope.setManSpecsBasement = function () {

            if (vm.specHasCheckBasement) {
                $scope.calculate();
            }
        }




        vm.step1HumidityOptions = [{
            "text": "Arid",
            "value": 0
        }, {
            "text": "Semi-Arid",
            "value": 20
        }, {
            "text": "Average",
            "value": 30
        }, {
            "text": "Moderately Humid",
            "value": 40
        }, {
            "text": "Very Humid",
            "value": 60
        }];

        vm.step1FacingOptions = [{
            "text": "North",
            "value": 0
        }, {
            "text": "South",
            "value": 20
        }, {
            "text": "East",
            "value": 30
        }, {
            "text": "West",
            "value": 40
        }];

        vm.step1TightStructure = [{
            "text": "Not tight-under 1500 Sq. Ft.",
            "value": 2
        }, {
            "text": " Average-under 1500 Sq. Ft.",
            "value": 1
        }, {
            "text": " Very tight-under 1500 Sq. Ft.",
            "value": .35
        }, {
            "text": "Not tight-over 1500 Sq. Ft.",
            "value": 1
        }, {
            "text": " Average-over 1500 Sq. Ft.",
            "value": .7
        }, {
            "text": " Very tight-over 1500 Sq. Ft.",
            "value": .35
        }, {
            "text": "Use blower door ENIR",
            "value": 0
        }];

        vm.step1Fireplace = [{
            "text": "No Fireplace",
            "value": 0
        }, {
            "text": "Tight",
            "value": 0
        }, {
            "text": "Semi-tight",
            "value": 13
        }, {
            "text": "Average",
            "value": 20
        }, {
            "text": "Semi-loose",
            "value": 27
        }, {
            "text": "Loose",
            "value": 33
        }];

        vm.step1FireplaceNumber = [{
            "text": "none",
            "value": 0
        }, {
            "text": "1",
            "value": 1
        }, {
            "text": "2",
            "value": 7
        }, {
            "text": "3+",
            "value": 10
        }];

        vm.step2GlassCoefficients_North = [{
            "text": "Single",
            "value": 32
        }, {
            "text": "Double",
            "value": 24
        }, {
            "text": "Tripl or Low-E",
            "value": 20
        }];

        vm.step2GlassCoefficients_East = [{
            "text": "Single",
            "value": 90
        }, {
            "text": "Double",
            "value": 75
        }, {
            "text": "Tripl or Low-E",
            "value": 65
        }];

        vm.step2GlassCoefficients_South = [{
            "text": "Single",
            "value": 50
        }, {
            "text": "Double",
            "value": 40
        }, {
            "text": "Tripl or Low-E",
            "value": 33
        }];

        vm.step2GlassCoefficients_West = [{
            "text": "Single",
            "value": 90
        }, {
            "text": "Double",
            "value": 75
        }, {
            "text": "Tripl or Low-E",
            "value": 65
        }];

        vm.step2GlassCoefficients_WintU = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Tripl or Low-E",
            "value": .42
        }];

        vm.step2GlassCoefficients_NENW = [{
            "text": "Single",
            "value": 65
        }, {
            "text": "Double",
            "value": 52
        }, {
            "text": "Tripl or Low-E",
            "value": 46
        }];

        vm.step2GlassCoefficients_SESW = [{
            "text": "Single",
            "value": 80
        }, {
            "text": "Double",
            "value": 65
        }, {
            "text": "Tripl or Low-E",
            "value": 56
        }];

        vm.step2ReflectiveCoating = [{
            "text": "No",
            "value": 1
        }, {
            "text": "Yes",
            "value": .6
        }];

        vm.step2TintTypes = [{
            "text": "Clear",
            "value": 150
        }, {
            "text": "Tinted",
            "value": 100
        }, {
            "text": "Reflective",
            "value": 70
        }];

      
        vm.step2DuctsPipesHeating = [{
            "text": "Conditioned area",
            "value": "Conditioned area"
        }, {
            "text": "Trunk and branches in attic",
            "value": "Trunk and branches in attic"
        }, {
            "text": "Radial or spider in attic",
            "value": "Radial or spider in attic"
        },{
            "text": "Under an open floor",
            "value": "Under an open floor"
        },{
            "text": "Enclosed crawl space or unheated basement",
            "value": "Enclosed crawl space or unheated basement"
        },{
            "text": "Duct system in slab",
            "value": "Duct system in slab"
        }];


        vm.step2DuctsPipesCooling = [{
            "text": "Conditioned area",
            "value": "Conditioned area"
        }, {
            "text": "Trunk and branches in attic",
            "value": "Trunk and branches in attic"
        }, {
            "text": "Radial or spider in attic",
            "value": "Radial or spider in attic"
        }, {
            "text": "Under an open floor",
            "value": "Under an open floor"
        }, {
            "text": "Enclosed crawl space or unheated basement",
            "value": "Enclosed crawl space or unheated basement"
        }, {
            "text": "Duct system in slab",
            "value": "Duct system in slab"
        }];

        vm.step2DuctsPipesRValues = [{
            "text": "R-2",
            "value": 1.85
        }, {
            "text": "R-4",
            "value": 1.24
        }, {
            "text": "R-6",
            "value": 1
        }, {
            "text": "R-8",
            "value": .85
        }];


        vm.step2DuctLeakage = [{
            "text": "sealed",
            "value": 1
        }, {
            "text": "unsealed",
            "value": 1.9
        }];

        vm.step2AtticTemperature = [{
            "text": "95",
            "value": 95
        }, {
            "text": "105",
            "value": 105
        }, {
            "text": "110",
            "value": 110
        }, {
            "text": "120",
            "value": 120
        }, {
            "text": "130",
            "value": 130
        }, {
            "text": "150",
            "value": 150
        }];

       

        vm.step3SolarGlass1 = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.step3SolarGlass2 = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.step3SolarSkyLight = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.step3SolarDoors = [{
            "text": "Single Wood",
            "value": .56
        }, {
            "text": "Insulated or Storm",
            "value": .4
        }];

        vm.step3SolarNetWall = [{
            "text": "No Insulation",
            "value": .27
        }, {
            "text": "R-11",
            "value": .08
        }
      , {
          "text": "R-15",
          "value": .07
      }
      , {
          "text": "R-19",
          "value": .06
      }
      , {
          "text": "R-25",
          "value": .042
      }
      , {
          "text": "R-30",
          "value": .033
      }
      , {
          "text": "R-38",
          "value": .026
      }
      , {
          "text": "R-45",
          "value": .022
      },
      {
          "text": "R-55",
          "value": .018
      }];

        vm.step3SolarCeiling = [{
            "text": "No Insulation",
            "value": .6
        }, {
            "text": "R-11",
            "value": .09
        }, {
            "text": "R-19",
            "value": .05
        },
     {
         "text": "R-30",
         "value": .033
     },
     {
         "text": "R-38",
         "value": .026
     },
     {
         "text": "R-45",
         "value": .022
     },
      {
          "text": "R-55",
          "value": .018
      }];



        vm.step3SolarGainFloors_OverCrawl = [{
            "text": "No Insulation",
            "value": .15
        }, {
            "text": "R-11",
            "value": .08
        }, {
            "text": "R-19",
            "value": .025
        },
        {
            "text": "R-30",
            "value": .02
        },
        {
            "text": "R-38",
            "value": .014
        }];


        vm.step3SolarGainFloors_OpenBeach = [{
            "text": "No Insulation",
            "value": .31
        }, {
            "text": "R-11",
            "value": .08
        }, {
            "text": "R-19",
            "value": .05
        },
     {
         "text": "R-30",
         "value": .04
     },
     {
         "text": "R-38",
         "value": .026
     }];

        vm.step3SolarGainFloors_Slab = [{
            "text": "No Insulation",
            "value": .8
        }, {
            "text": "R-5",
            "value": .5
        }, {
            "text": "R-10",
            "value": .04
        },
    {
        "text": "R-15",
        "value": .35
    }];


        /*Basement*/
        vm.basementGlassCoefficients_North = [{
            "text": "Single",
            "value": 32
        }, {
            "text": "Double",
            "value": 24
        }, {
            "text": "Tripl or Low-E",
            "value": 20
        }];

        vm.basementGlassCoefficients_East = [{
            "text": "Single",
            "value": 90
        }, {
            "text": "Double",
            "value": 75
        }, {
            "text": "Tripl or Low-E",
            "value": 65
        }];

        vm.basementGlassCoefficients_South = [{
            "text": "Single",
            "value": 50
        }, {
            "text": "Double",
            "value": 40
        }, {
            "text": "Tripl or Low-E",
            "value": 33
        }];

        vm.basementGlassCoefficients_West = [{
            "text": "Single",
            "value": 90
        }, {
            "text": "Double",
            "value": 75
        }, {
            "text": "Tripl or Low-E",
            "value": 65
        }];

        vm.basementGlassCoefficients_WintU = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Tripl or Low-E",
            "value": .42
        }];

        vm.basementGlassCoefficients_NENW = [{
            "text": "Single",
            "value": 65
        }, {
            "text": "Double",
            "value": 52
        }, {
            "text": "Tripl or Low-E",
            "value": 46
        }];

        vm.basementGlassCoefficients_SESW = [{
            "text": "Single",
            "value": 80
        }, {
            "text": "Double",
            "value": 65
        }, {
            "text": "Tripl or Low-E",
            "value": 56
        }];

        vm.basementReflectiveCoating = [{
            "text": "No",
            "value": 1
        }, {
            "text": "Yes",
            "value": .6
        }];

        vm.basementTintTypes = [{
            "text": "Clear",
            "value": 150
        }, {
            "text": "Tinted",
            "value": 100
        }, {
            "text": "Reflective",
            "value": 70
        }];


        vm.basementDuctsPipesHeating = [{
            "text": "Conditioned area",
            "value": "Conditioned area"
        }, {
            "text": "Trunk and branches in attic",
            "value": "Trunk and branches in attic"
        }, {
            "text": "Radial or spider in attic",
            "value": "Radial or spider in attic"
        }, {
            "text": "Under an open floor",
            "value": "Under an open floor"
        }, {
            "text": "Enclosed crawl space or unheated basement",
            "value": "Enclosed crawl space or unheated basement"
        }, {
            "text": "Duct system in slab",
            "value": "Duct system in slab"
        }];


        vm.basementDuctsPipesCooling = [{
            "text": "Conditioned area",
            "value": "Conditioned area"
        }, {
            "text": "Trunk and branches in attic",
            "value": "Trunk and branches in attic"
        }, {
            "text": "Radial or spider in attic",
            "value": "Radial or spider in attic"
        }, {
            "text": "Under an open floor",
            "value": "Under an open floor"
        }, {
            "text": "Enclosed crawl space or unheated basement",
            "value": "Enclosed crawl space or unheated basement"
        }, {
            "text": "Duct system in slab",
            "value": "Duct system in slab"
        }];

        vm.basementDuctsPipesRValues = [{
            "text": "R-2",
            "value": 1.85
        }, {
            "text": "R-4",
            "value": 1.24
        }, {
            "text": "R-6",
            "value": 1
        }, {
            "text": "R-8",
            "value": .85
        }];


        vm.basementDuctLeakage = [{
            "text": "sealed",
            "value": 1
        }, {
            "text": "unsealed",
            "value": 1.9
        }];

        vm.basementAtticTemperature = [{
            "text": "95",
            "value": 95
        }, {
            "text": "105",
            "value": 105
        }, {
            "text": "110",
            "value": 110
        }, {
            "text": "120",
            "value": 120
        }, {
            "text": "130",
            "value": 130
        }, {
            "text": "150",
            "value": 150
        }];

        vm.basementSolarGlass1 = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.basementSolarGlass2 = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.basementSolarSkyLight = [{
            "text": "Single",
            "value": .98
        }, {
            "text": "Double",
            "value": .56
        }, {
            "text": "Triple/Low-E",
            "value": .42
        }];

        vm.basementSolarDoors = [{
            "text": "Single Wood",
            "value": .56
        }, {
            "text": "Insulated or Storm",
            "value": .4
        }];

        vm.basementSolarNetWall_Above = [{
            "text": "No Insulation",
            "value": .27
        }, {
            "text": "R-11",
            "value": .08
        }
      , {
          "text": "R-15",
          "value": .07
      }
      , {
          "text": "R-19",
          "value": .06
      }
      , {
          "text": "R-25",
          "value": .042
      }
      , {
          "text": "R-30",
          "value": .033
      }
      , {
          "text": "R-38",
          "value": .026
      }
      , {
          "text": "R-45",
          "value": .022
      },
      {
          "text": "R-55",
          "value": .018
      }];

        vm.basementSolarNetWall_Below = [{
            "text": "No Insulation",
            "value": .125
        },{
            "text": "R-5",
            "value": .07
        },

        {
            "text": "R-11",
            "value": .05
        }
    , {
        "text": "R-15",
        "value": .04
    }
    , {
        "text": "R-19",
        "value": .03
    }
    , {
        "text": "R-25",
        "value": .025
    }];

        vm.basementSolarCeiling = [{
            "text": "No Insulation",
            "value": .6
        }, {
            "text": "R-11",
            "value": .09
        }, {
            "text": "R-19",
            "value": .05
        },
     {
         "text": "R-30",
         "value": .033
     },
     {
         "text": "R-38",
         "value": .026
     },
     {
         "text": "R-45",
         "value": .022
     },
      {
          "text": "R-55",
          "value": .018
      }];



        vm.basementSolarGainFloors_OverCrawl = [{
            "text": "No Insulation",
            "value": .15
        }, {
            "text": "R-11",
            "value": .08
        }, {
            "text": "R-19",
            "value": .025
        },
        {
            "text": "R-30",
            "value": .02
        },
        {
            "text": "R-38",
            "value": .014
        }];


        vm.basementSolarGainFloors_OpenBeach = [{
            "text": "No Insulation",
            "value": .31
        }, {
            "text": "R-11",
            "value": .08
        }, {
            "text": "R-19",
            "value": .05
        },
     {
         "text": "R-30",
         "value": .04
     },
     {
         "text": "R-38",
         "value": .026
     }];

        vm.basementSolarGainFloors_Slab = [{
            "text": "No Insulation",
            "value": .8
        }, {
            "text": "R-5",
            "value": .5
        }, {
            "text": "R-10",
            "value": .04
        },
    {
        "text": "R-15",
        "value": .35
    }];


        $scope.calculate();
    }

})();