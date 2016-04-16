(function () {
    'use strict';

    angular
        .module('app')
        .controller('Emscalculator.IndexController', controller);

    function controller($scope) {
        var vm = this;

        $scope.prePopulate = function() {
            vm.testValue = 1;
            vm.step1WinterIndoor = 70;
            vm.step1SummerIndoor = 75;
            vm.step1SummerOutdoor = 100;
            vm.step1WinterOutdoor = 1;
            vm.totalConditionedArea = 1900;
            vm.step1NumberOfOccupants = 4;
            vm.step1TightStructure.selected = .7;
            vm.step1FireplaceNumber.selected = 10;
            vm.step1FacingOptions.selected = 30;
            vm.step1Fireplace.selected = 33;
            vm.step2ReflectiveCoating.selected = 1;
            vm.step2TintTypes.selected = 70;
            vm.frontOfBuildingFacing = "East";
            vm.step2OverhangDistanceTop_East = 0.5;
            vm.step2OverhangDistanceTop_West = 0.5;
            vm.step2OverhangDistanceTop_South = 0.05;
            vm.step2OverhangLength_East = 1.5;
            vm.step2OverhangLength_West = 1.5;
            vm.step2OverhangLength_South = 1.5;
            vm.step2LinearFootAcrossTop_East = 10;
            vm.step2LinearFootAcrossTop_West = 12;
            vm.step2LinearFootAcrossTop_South = 10;
            vm.step2SolarGainThroughGlassLat = 40;
            vm.step2SolarGainUValue = 0.4;
            vm.step2SolarSGHC = 0.35;
            vm.step2DuctsPipesHeating.selected = 'Trunk and branches in attic';
            vm.step2DuctsPipesCooling.selected = 'Trunk and branches in attic';
            vm.step2DuctsPipesRValues.selected = .85;
            vm.step2DuctLeakage.selected = 1;
            vm.step2AtticTemperature.selected = 95;
            vm.basementSolarGainThroughGlassLat = 40;
            vm.basementSolarGainUValue = 0.4;
            vm.basementSolarSGHC = 0.35;
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

            vm.step2GlassCoefficients_North.selected = 24;
            vm.step2GlassCoefficients_NENW.selected = 52;
            vm.step2GlassCoefficients_South.selected = 40;
            vm.step2GlassCoefficients_SESW.selected = 65;
            vm.step2GlassCoefficients_East.selected = 75;
            vm.step2GlassCoefficients_West.selected = 75;

            vm.step1WinterDiff = 69;
            vm.step1SummerDiff = 25;
            vm.step1TightStructureWinter = 0.7;
            vm.step1TightStructureSummer = 0.35;
            vm.step1CFM = 43;
            vm.step2HTM_North = 24;
            vm.step2HTM_NENW = 52;
            vm.step2HTM_South = 40;
            vm.step2HTM_SESW = 65;
            vm.step2HTM_East = 75;
            vm.step2HTM_West = 75;
            vm.basementHTM_North = 24;
            vm.basementHTM_NENW = 52;
            vm.basementHTM_South = 40;
            vm.basementHTM_SESW = 65;
            vm.basementHTM_East = 75;
            vm.basementHTM_West = 75;
            vm.step2ReflectiveCoatingValue = 1;
            vm.step2TintTypesValue = 70;
            vm.step2GlassShaded_NENW = 40;
            vm.step2GlassShaded_South = 38.5;
            vm.step2GlassShaded_SESW = 18.25;
            vm.step2GlassShaded_East = 7.15;
            vm.step2GlassShaded_West = 8.580000000000002;
            vm.step2GlassShaded_North = 146.48000000000002;
            vm.step2GlassUnShaded_North = -112.48000000000002;
            vm.step2GlassUnShaded_NENW = 0;
            vm.step2GlassUnShaded_South = 17.5;
            vm.step2GlassUnShaded_SESW = 21.75;
            vm.step2GlassUnShaded_East = 38.85;
            vm.step2GlassUnShaded_West = 59.42;
            vm.step2GlassBTUH_North = 3515.5200000000004;
            vm.step2GlassBTUH_NENW = 0;
            vm.step2GlassBTUH_South = 700;
            vm.step2GlassBTUH_SESW = 1413.75;
            vm.step2GlassBTUH_East = 2913.75;
            vm.step2GlassBTUH_West = 4456.5;
            vm.step2GlassBTUH_Total = 12999.52;
            vm.step2SkyLight_Total = 700;
            vm.step2TotalSolarGain = 13699.52;
            vm.step2DuctGainLossConditionedArea_Cool = 0;
            vm.step2DuctGainLossTrunkBranchAttic_Cool = 0.148;
            vm.step2DuctGainLossRadialSpiderAttic_Cool = 0.08879999999999999;
            vm.step2DuctGainLossUnderOpenFloor_Cool = 0.238;
            vm.step2DuctGainLossEnclosedCrawl_Cool = 0.1071;
            vm.step2DuctGainDuctSystemSlab_Cool = 0.3;
            vm.step2DuctGainLossConditionedArea_Heat = 0;
            vm.step2DuctGainLossTrunkBranchAttic_Heat = 0.172;
            vm.step2DuctGainLossRadialSpiderAttic_Heat = 0.10319999999999999;
            vm.step2DuctGainLossUnderOpenFloor_Heat = 0.2595;
            vm.step2DuctGainLossEnclosedCrawl_Heat = 0.1038;
            vm.step2DuctGainDuctSystemSlab_Heat = 0.060899999999999996;
            vm.step2DuctLoss_Heating = 0.1462;
            vm.step2DuctGain_Cooling = 0.1258;
            vm.step3HeatLossBTUH_Glass1 = 10973.76;
            vm.step3HeatLossBTUH_Glass2 = 666.54;
            vm.step3HeatLossBTUH_SkyLight = 2299.08;
            vm.step3HeatLossBTUH_Doors = 1622.88;
            vm.step3HeatLossBTUH_NetWall = 3128.71875;
            vm.step3HeatLossBTUH_Ceiling = 3048.837209302329;
            vm.step3HeatLossBTUH_OverCrawl = 10488;
            vm.step3HeatLossBTUH_OpenBeach = 3408.6;
            vm.step3HeatLossBTUH_Slab = 0;
            vm.step3HeatGainBTUH_Doors = 588;
            vm.step3HeatGainBTUH_NetWall = 1133.59375;
            vm.step3HeatGainBTUH_Ceiling = 1988.3720930232582;
            vm.step3HeatGainBTUH_OverCrawl = 0;
            vm.step3HeatGainBTUH_OpenBeach = 1235;
            vm.step3HeatGainBTUH_Slab = 0;
            vm.step3HeatLossBTUH_Infiltration = 18405.75;
            vm.step3HeatGainBTUH_Infiltration = 2743.125;
            vm.step3HeatGainBTUH_People = 920;
            vm.step3HeatGainBTUH_People_Total = 800;
            vm.step3HeatGainBTUH_Appliances = 1200;
            vm.step3HeatLossBTUH_Subtotal = 54042.16595930233;
            vm.step3HeatGainBTUH_Subtotal = 23507.61084302326;
            vm.step3HeatLossBTUH_DuctGain = 7900.96466325;
            vm.step3HeatGainBTUH_DuctGain = 2957.257444052326;
            vm.step3HeatGainBTUH_DuctGain_Total = 698.725;
            vm.step3HeatLossBTUH_TotalSensibleLoad = 61943.13062255233;
            vm.step3HeatGainBTUH_TotalSensibleLoad = 26464.868287075587;
            vm.step3Total_LatentLoad = 2713.2;
            vm.step3Total_LatentLoad_Total = 4211.924999999999;

            vm.step3SolarGlass1.selected = .56;
            vm.step3SolarGlass2.selected = .42;
            vm.step3SolarSkyLight.selected = .98;
            vm.step3SolarDoors.selected = .56;
            vm.step3SolarNetWall.selected = .03125;
            vm.step3SolarCeiling.selected = 0.0232558139534884;

            vm.step3SolarGainFloors_OverCrawl_Drop = .08;
            vm.step3SolarGainFloors_OpenBeach_Drop = .026;
            vm.step3SolarGainFloors_Slab.selected = .8;
            vm.step3SolarGainFloors_OverCrawl.selected = .08;
            vm.step3SolarGainFloors_OpenBeach.selected = .026;

            vm.basementGlassBTUH_North = 960;
            vm.basementGlassBTUH_NENW = 2080;
            vm.basementGlassBTUH_South = 1600;
            vm.basementGlassBTUH_SESW = 2600;
            vm.basementGlassBTUH_East = 3000;
            vm.basementGlassBTUH_West = 3000;
            vm.basementGlassBTUH_Total = 7944;
            vm.basementTotalSolarGain = 7944;
            vm.basementHeatLossBTUH_Floor_UValue = 0.024;
            vm.basementHeatLossBTUH_Glass1 = 7100.099999999999;
            vm.basementHeatLossBTUH_Glass2 = 1738.8000000000002;
            vm.basementHeatLossBTUH_SkyLight = null;
            vm.basementHeatLossBTUH_Doors = 811.44;
            vm.basementHeatLossBTUH_NetWall_Above = 1270.03125;
            vm.basementHeatLossBTUH_NetWall_Below = 3105;
            vm.basementHeatGainBTUH_NetWall_Above = 460.15625;
            vm.basementHeatGainBTUH_NetWall_Below = 1125;
            vm.basementHeatLossBTUH_Ceiling = 12420;
            vm.basementHeatLossBTUH_OverCrawl = null;
            vm.basementHeatLossBTUH_OpenBeach = null;
            vm.basementHeatLossBTUH_Slab = null;
            vm.basementHeatGainBTUH_Doors = 294;
            vm.basementHeatGainBTUH_Ceiling = 8100;
            vm.basementHeatGainBTUH_OverCrawl = 0;
            vm.basementHeatGainBTUH_OpenBeach = null;
            vm.basementHeatGainBTUH_Slab = 0;
        
            vm.basementHeatGainBTUH_People = 690;
            vm.basementHeatGainBTUH_People_Total = 600;
         
            vm.basementHeatGainBTUH_Floor = 0;
            vm.basementHeatGainBTUH_Appliances = 1200;
        
            vm.step2SkyLightQty = 10;
            vm.heatingFactor = 0.172;
            vm.coolingFactor = 0.148;
            vm.step2AreaDuctLocated = 1800;
            vm.step3Area_GrossWall = 1800;
            vm.step3SolarNetWall_Drop = 0;
            vm.step3SolarCeiling_Drop = 0;
            vm.step3Area_Glass1 = 284;
            vm.step3Area_Glass2 = 23;
            vm.step3Area_SolarSkyLight = 34;
            vm.step3Area_SolarDoors = 42;
            vm.step3Area_SolarNetWall = 1451;
            vm.step3Area_SolarCeiling = 1900;
            vm.step1HumidityOptions_Selected = 40;
            vm.step3SolarGainFloors_OverCrawl_Drop = 0.08;
            vm.step3SolarGainFloors_OpenBeach_Drop = 0.026;
            vm.step3SolarGainFloors_Slab_Drop = 0.8;
            vm.step3Area_OverCrawl = 1900;
            vm.step3Area_OpenBeach = 1900;
            vm.step3Infiltration = 17100;
            vm.step3Area_Slab = 0;
            vm.basementArea_GrossWall = 900;
            vm.basementSolarNetWall_Above_Drop = 0;
            vm.basementSolarNetWall_Below_Drop = 0.05;
            vm.basementSolarCeiling_Drop = 0.09;
            vm.basementArea_Glass1 = 245;
            vm.basementArea_Glass2 = 45;
            vm.basementArea_SolarDoors = 21;
            vm.basementArea_SolarNetWall_Above = 589;
            vm.basementArea_SolarNetWall_Below = 900;
            vm.basementArea_SolarCeiling = 2000;
            vm.basementArea_FloorSquareFeet = 1200;
            vm.basementInfiltration = 17000;
            vm.basementArea_People = 3;

            vm.basementGlassCoefficients_North.selected = 24;
            vm.basementGlassCoefficients_NENW.selected = 52;
            vm.basementGlassCoefficients_South.selected = 40;
            vm.basementGlassCoefficients_SESW.selected = 65;
            vm.basementGlassCoefficients_East.selected = 75;
            vm.basementGlassCoefficients_West.selected = 75;

            vm.basementSolarGlass1.selected = .42;
            vm.basementSolarGlass2.selected = .56;
            vm.basementSolarDoors.selected = .56;
            vm.basementSolarNetWall_Above.selected = .03125;
            vm.basementSolarNetWall_Below.selected = .05;
            vm.basementSolarCeiling.selected = 0.09;

            vm.basementReflectiveCoating.selected = .6;

        }


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

                vm.step2HTM_North = 17;
                vm.step2HTM_NENW = 62;
                vm.step2HTM_South = 23;
                vm.step2HTM_SESW = 37;
                vm.step2HTM_East = 42;
                vm.step2HTM_West = 42;
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

                vm.basementHTM_North = 17;
                vm.basementHTM_NENW = 62;
                vm.basementHTM_South = 23;
                vm.basementHTM_SESW = 37;
                vm.basementHTM_East = 42;
                vm.basementHTM_West = 42;
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
            vm.step2GlassShaded_North = parseFloat(vm.step2SolarGain_ShadedArea_North) + parseFloat(vm.step2GlassShaded_NENW) + parseFloat(vm.step2GlassShaded_South) + parseFloat(vm.step2GlassShaded_SESW) + parseFloat(vm.step2GlassShaded_East) + parseFloat(vm.step2GlassShaded_West);

            //Step2 Unshaded
            vm.step2GlassUnShaded_North = 0;
            vm.step2GlassUnShaded_NENW = 0;
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

            vm.step3HeatLossBTUH_Subtotal =
                parseFloat(vm.step3HeatLossBTUH_Glass1) +
                parseFloat(vm.step3HeatLossBTUH_Glass2) +
                parseFloat(vm.step3HeatLossBTUH_SkyLight) +
                parseFloat(vm.step3HeatLossBTUH_Doors) +
                parseFloat(vm.step3HeatLossBTUH_NetWall) +
                parseFloat(vm.step3HeatLossBTUH_Ceiling) +
                parseFloat(vm.step3HeatLossBTUH_OverCrawl) +
                parseFloat(vm.step3HeatLossBTUH_OpenBeach) +
                parseFloat(vm.step3HeatLossBTUH_Slab) +
                parseFloat(vm.step3HeatLossBTUH_Infiltration);

            vm.step3HeatGainBTUH_Subtotal =
                parseFloat(vm.step2TotalSolarGain) +
                parseFloat(vm.step3HeatGainBTUH_Doors) +
                parseFloat(vm.step3HeatGainBTUH_NetWall) +
                parseFloat(vm.step3HeatGainBTUH_Ceiling) +
                parseFloat(vm.step3HeatGainBTUH_OverCrawl) +
                parseFloat(vm.step3HeatGainBTUH_OpenBeach) +
                parseFloat(vm.step3HeatGainBTUH_Slab) +
                parseFloat(vm.step3HeatGainBTUH_Infiltration) +
                parseFloat(vm.step3HeatGainBTUH_People) +
                parseFloat(vm.step3HeatGainBTUH_Appliances);

            vm.step3HeatLossBTUH_DuctGain = vm.step3HeatLossBTUH_Subtotal * vm.step2DuctLoss_Heating;
            vm.step3HeatGainBTUH_DuctGain = vm.step3HeatGainBTUH_Subtotal * vm.step2DuctGain_Cooling;
            vm.step3HeatGainBTUH_DuctGain_Total = ((191 + (110 * ((vm.step1HumidityOptions_Selected - 10) / 10)) * 1.65)) * (vm.totalConditionedArea / 2000);


            vm.step3HeatLossBTUH_TotalSensibleLoad = parseFloat(vm.step3HeatLossBTUH_Subtotal) + parseFloat(vm.step3HeatLossBTUH_DuctGain);
            vm.step3HeatGainBTUH_TotalSensibleLoad = parseFloat(vm.step3HeatGainBTUH_Subtotal) + parseFloat(vm.step3HeatGainBTUH_DuctGain);

            vm.step3Total_LatentLoad = (vm.step1TightStructureSummer * vm.step3Infiltration / 60) * 0.68 * vm.step1HumidityOptions_Selected;

            vm.step3Total_LatentLoad_Total = vm.step3HeatGainBTUH_DuctGain_Total + (vm.step1NumberOfOccupants * 200) + vm.step3Total_LatentLoad;


            /*Basement*/

            vm.basementGlassBTUH_North = vm.basementSolarGain_ShadedArea_North * vm.basementGlassCoefficients_North.selected;
            vm.basementGlassBTUH_NENW = vm.basementSolarGain_ShadedArea_NENW * vm.basementGlassCoefficients_NENW.selected;
            vm.basementGlassBTUH_South = vm.basementSolarGain_ShadedArea_South * vm.basementGlassCoefficients_South.selected;
            vm.basementGlassBTUH_SESW = vm.basementSolarGain_ShadedArea_SESW * vm.basementGlassCoefficients_SESW.selected;
            vm.basementGlassBTUH_East = vm.basementSolarGain_ShadedArea_East * vm.basementGlassCoefficients_East.selected;
            vm.basementGlassBTUH_West = vm.basementSolarGain_ShadedArea_West * vm.basementGlassCoefficients_West.selected;

            vm.basementGlassBTUH_Total = (parseFloat(vm.basementGlassBTUH_North) + parseFloat(vm.basementGlassBTUH_NENW) + parseFloat(vm.basementGlassBTUH_South) + parseFloat(vm.basementGlassBTUH_SESW) + parseFloat(vm.basementGlassBTUH_East) + parseFloat(vm.basementGlassBTUH_West)) * vm.basementReflectiveCoating.selected;


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

         
            vm.basementHeatLossBTUH_Subtotal =
                parseFloat(vm.basementHeatLossBTUH_Glass1) +
                parseFloat(vm.basementHeatLossBTUH_Glass2) +
                parseFloat(vm.basementHeatLossBTUH_Doors) +
                parseFloat(vm.basementHeatLossBTUH_NetWall_Above) +
                parseFloat(vm.basementHeatLossBTUH_NetWall_Below) +
                parseFloat(vm.basementHeatLossBTUH_Ceiling) +
                parseFloat(vm.basementHeatLossBTUH_Floor) +
                parseFloat(vm.basementHeatLossBTUH_Infiltration);

            vm.basementHeatGainBTUH_Subtotal =
                parseFloat(vm.basementTotalSolarGain) +
                parseFloat(vm.basementHeatGainBTUH_Doors) +
                parseFloat(vm.basementHeatGainBTUH_NetWall_Above) +
                parseFloat(vm.basementHeatGainBTUH_NetWall_Below) +
                parseFloat(vm.basementHeatGainBTUH_Ceiling) +
                parseFloat(vm.basementHeatGainBTUH_Infiltration) +
                parseFloat(vm.basementHeatGainBTUH_People) +
                parseFloat(vm.basementHeatGainBTUH_Appliances);

            vm.basementHeatLossBTUH_TotalSensibleLoad = vm.basementHeatLossBTUH_Subtotal;
            vm.basementHeatGainBTUH_TotalSensibleLoad = vm.basementHeatGainBTUH_Subtotal;

            vm.basementTotal_LatentLoad = .25 * (vm.basementInfiltration / 60) * 0.68 * vm.step1HumidityOptions_Selected;
            vm.basementTotal_LatentLoad_Total = parseFloat(vm.basementTotal_LatentLoad) + 300 + parseFloat(vm.basementHeatGainBTUH_People_Total);

        }

        $scope.update = function() {
            vm.step2DuctsPipesCooling.value = vm.step2DuctGainLossConditionedArea_Cool = 0;
        };

        $scope.setManSpecs = function() {

            if (vm.specHasCheck) {
                $scope.calculate();
            }
        };

        $scope.setManSpecsBasement = function() {

            if (vm.specHasCheckBasement) {
                $scope.calculate();
            }
        };

        vm.step3SolarNetWall_SetSelected = function() {
            if (vm.step3SolarNetWall_Drop > 0) {
                vm.step3SolarNetWall.selected = vm.step3SolarNetWall_Drop;
            }

            $scope.calculate();
        };

        vm.step3SolarCeiling_SetSelected = function() {
            if (vm.step3SolarCeiling_Drop > 0) {
                vm.step3SolarCeiling.selected = vm.step3SolarCeiling_Drop;
            }

            $scope.calculate();
        };

        vm.step3SolarGainFloors_OverCrawl_SetSelected = function() {
            if (vm.step3SolarGainFloors_OverCrawl_Drop > 0) {
                vm.step3SolarGainFloors_OverCrawl.selected = vm.step3SolarGainFloors_OverCrawl_Drop;
            }

            $scope.calculate();
        };

        vm.step3SolarGainFloors_OpenBeach_SetSelected = function() {
            if (vm.step3SolarGainFloors_OpenBeach_Drop > 0) {
                vm.step3SolarGainFloors_OpenBeach.selected = vm.step3SolarGainFloors_OpenBeach_Drop;
            }

            $scope.calculate();
        };

        vm.step3SolarGainFloors_Slab_SetSelected = function() {
            if (vm.step3SolarGainFloors_Slab_Drop > 0) {
                vm.step3SolarGainFloors_Slab.selected = vm.step3SolarGainFloors_Slab_Drop;
            }

            $scope.calculate();
        };


        vm.basementSolarNetWall_Above_SetSelected = function() {
            if (vm.basementSolarNetWall_Above_Drop > 0) {
                vm.basementSolarNetWall_Above.selected = vm.basementSolarNetWall_Above_Drop;
            }

            $scope.calculate();
        };

        vm.basementSolarNetWall_Below_SetSelected = function() {
            if (vm.basementSolarNetWall_Below_Drop > 0) {
                vm.basementSolarNetWall_Below.selected = vm.basementSolarNetWall_Below_Drop;
            }

            $scope.calculate();
        };

        vm.basementSolarCeiling_SetSelected = function () {
            if (vm.basementSolarCeiling_Drop > 0) {
                vm.basementSolarCeiling.selected = vm.basementSolarCeiling_Drop;
            }

            $scope.calculate();
        }; 

       

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
        }, {
            "text": "R-15",
            "value": .07
        }, {
            "text": "R-19",
            "value": .06
        }, {
            "text": "R-25",
            "value": .042
        }, {
            "text": "R-30",
            "value": .033
        }, {
            "text": "R-38",
            "value": .026
        }, {
            "text": "R-45",
            "value": .022
        }, {
            "text": "R-55",
            "value": .018
        }, {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-30",
            "value": .033
        }, {
            "text": "R-38",
            "value": .026
        }, {
            "text": "R-45",
            "value": .022
        }, {
            "text": "R-55",
            "value": .018
        },  {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-30",
            "value": .02
        }, {
            "text": "R-38",
            "value": .014
        }, {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-30",
            "value": .04
        }, {
            "text": "R-38",
            "value": .026
        },  {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-15",
            "value": .35
        },  {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-15",
            "value": .07
        }, {
            "text": "R-19",
            "value": .06
        }, {
            "text": "R-25",
            "value": .042
        }, {
            "text": "R-30",
            "value": .033
        }, {
            "text": "R-38",
            "value": .026
        }, {
            "text": "R-45",
            "value": .022
        }, {
            "text": "R-55",
            "value": .018
        },  {
            "text": "Enter R Value",
            "value": 0
        }];

        vm.basementSolarNetWall_Below = [{
            "text": "No Insulation",
            "value": .125
        }, {
            "text": "R-5",
            "value": .07
        },

            {
                "text": "R-11",
                "value": .05
            }, {
                "text": "R-15",
                "value": .04
            }, {
                "text": "R-19",
                "value": .03
            }, {
                "text": "R-25",
                "value": .025
            }, {
                "text": "Enter R Value",
                "value": 0
            }
        ];

        vm.basementSolarCeiling = [{
            "text": "No Insulation",
            "value": .6
        }, {
            "text": "R-11",
            "value": .09
        }, {
            "text": "R-19",
            "value": .05
        }, {
            "text": "R-30",
            "value": .033
        }, {
            "text": "R-38",
            "value": .026
        }, {
            "text": "R-45",
            "value": .022
        }, {
            "text": "R-55",
            "value": .018
        }, {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-30",
            "value": .02
        }, {
            "text": "R-38",
            "value": .014
        }, {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-30",
            "value": .04
        }, {
            "text": "R-38",
            "value": .026
        }, {
            "text": "Enter R Value",
            "value": 0
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
        }, {
            "text": "R-15",
            "value": .35
        }, {
            "text": "Enter R Value",
            "value": 0
        }];

        $scope.prePopulate();
        $scope.calculate();
    }

})();