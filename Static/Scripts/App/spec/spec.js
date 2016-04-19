describe('BlockSummaryCtrl', function () {
    var scope;
    var controller;
    var q;
    var deferred;
    var tabSvc;
    var testData = {
        'data':
            {

                "allocSelectedTotal": "2,561,696",
                "principalTotal": "2,631,147,437",
                "diffTotal": "10,111,936 C",
                "data": [
                  {
                      "rowID": "1",
                      "accountNumber": "700-000868-1",
                      "shortName": "shortName1",
                      "rep": "999",
                      "symbol": "CVX",
                      "CUSIP": "Cusip1",
                      "action": "Sell",
                      "blockName": "Block1",
                      "activeExecQty": "0",
                      "pendingExecQty": "0",
                      "activeAllocQty": "0",
                      "pendingAllocQty": "0",
                      "activeErrorQty": "0",
                      "pendingErrorQty": "0",
                      "avgPrice": "1.500",
                      "$difference": "0",
                      "tradeDate": "26-Oct-2015",
                      "status": "Balanced"
                  }]
            }
    };

    describe('BlockSummaryCtrl', function () {
        var scope = null;

        beforeEach(angular.mock.module('app'));

        //mock out the resolved values to isolate controller code
        beforeEach(module(function ($provide) {
            $provide.value('result', function () {
                return 'test';
            });
        }));

        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        beforeEach(inject(function ($rootScope, blockSummarySvc, _tabSvc_, $location, $route, sharedDataBlockSumSvc, $compile, sharedDataSvc2) {

            scope = $rootScope.$new();
            compile = $compile;
            tabSvc = _tabSvc_;
            controller = $controller('BlockSummaryCtrl', {
                '$scope': scope,
                'blockSummaryData': {
                    'data':
                        {
                            
                            "allocSelectedTotal" : "2,561,696",
                            "principalTotal" : "2,631,147,437",
                            "diffTotal" : "10,111,936 C",
                            "data": [
                              {
                                  "rowID": "1",
                                  "accountNumber": "700-000868-1",
                                  "shortName": "shortName1",
                                  "rep": "999",
                                  "symbol": "CVX",
                                  "CUSIP": "Cusip1",
                                  "action": "Sell",
                                  "blockName": "Block1",
                                  "activeExecQty": "0",
                                  "pendingExecQty": "0",
                                  "activeAllocQty": "0",
                                  "pendingAllocQty": "0",
                                  "activeErrorQty": "0",
                                  "pendingErrorQty": "0",
                                  "avgPrice": "1.500",
                                  "$difference": "0",
                                  "tradeDate": "26-Oct-2015",
                                  "status": "Balanced"
                              }]
                            }
                        },
                'blockSummarySvc': blockSummarySvc,
                'tabSvc' : _tabSvc_,
                'sharedDataBlockSumSvc': sharedDataBlockSumSvc,
                'sharedDataSvc': sharedDataSvc2,
                '$location': $location,
                '$route': $route
            });

            var tabs = { "ActiveTab": "PTRS", "ActiveSubTab": "BlockAdmin", "Tabs": { "PTRS": { "title": "PTRS - Domestic", "isTabActive": true, "subTabs": { "BlockSummary": { "title": "Block Summary", "isTabActive": false }, "BlockAdmin": { "title": "Block Admin", "isTabActive": true }, "MoneyDifference": { "title": "Money Difference", "isTabActive": false } } }, "PTRS2": { "title": "PTRS - International", "isTabActive": false, "subTabs": { "BlockSummary": { "title": "Block Summary", "isTabActive": true }, "BlockMaintenance": { "title": "Block Maintenance", "isTabActive": false }, "MoneyDifference": { "title": "Money Difference", "isTabActive": false } } } }, "userName": "A586295", "Role": "Manager" }
            tabSvc.setTabs(tabs);

        }));

        //it('call DefaultJ.actions', function () {
        //    var x = $DefaultJSON.actionValues();
        //    expect(x.selected).not.toBeUndefined();
        //    expect(x.options).not.toBeUndefined();
        //});

        //it('call scope.actions', function () {
        //    var x = $DefaultJSON.actionValues();
        //    expect(x.selected).not.toBeUndefined();
        //    expect(x.options).not.toBeUndefined();
        //});


        it('call scope.loadDataFields', function () {
            spyOn(scope, 'loadDataFields').and.callThrough();
            scope.loadDataFields(testData);
            expect(scope.loadDataFields).toHaveBeenCalled();
            expect(scope.data).not.toBeUndefined();
            expect(scope.allocSelectedTotal).not.toBeUndefined();
            expect(scope.principalTotal).not.toBeUndefined();
            expect(scope.diffTotal).not.toBeUndefined();
        });

        it('call scope.displayClick', function () {
           spyOn(scope, 'displayClick').and.callThrough();
           scope.displayClick();
           expect(scope.displayClick).toHaveBeenCalled();
        });

        it('call scope.unSetFilterSave', function () {
            spyOn(scope, 'unSetFilterSave').and.callThrough();
            scope.unSetFilterSave();
            expect(scope.unSetFilterSave).toHaveBeenCalled();
        });

        it('call scope.jumpToPage(bre)', function () {
            scope.selectedRow = 'test';
            spyOn(scope, 'jumpToPage').and.callThrough();
            scope.jumpToPage('bre');
            expect(scope.jumpToPage).toHaveBeenCalled();
        });


        it('call scope.jumpToPage(bra)', function () {
            scope.selectedRow = 'test';
            spyOn(scope, 'jumpToPage').and.callThrough();
            scope.jumpToPage('bra');
            expect(scope.jumpToPage).toHaveBeenCalled();
        });
          
        it('call scope.printClick ', function () {

            var element = angular.element('<grid class="slickgrid-table" id="miscGrid" query="query"/>');
            compile(element)(scope);

            scope.grid, scope.data = [],
            columns = [{
            id: "prod",
            name: "Product",
            field: "prod",
            width: 200,
            resizable: false,
            }],
            options = {
            editable: true,
            enableAddRow: true,
            enableColumnReorder: false
            };

            scope.grid = new Slick.Grid(element, scope.data, columns, options);
            scope.$digest();
            spyOn(scope, 'printClick').and.callThrough();

            scope.printClick();
            expect(scope.printClick).toHaveBeenCalled();
        });

        it('call scope.pdfClick ', function () {
            spyOn(scope, 'pdfClick').and.callThrough();
            scope.pdfClick();
            expect(scope.pdfClick).toHaveBeenCalled();
        });

        it('call scope.resetClick ', function () {
            spyOn(scope, 'resetClick').and.callThrough();
            scope.resetClick();
            expect(scope.resetClick).toHaveBeenCalled();
        });

        it('call scope.exportClick ', function () {
            scope.data=['test'];
            spyOn(scope, 'exportClick').and.callThrough();
            scope.exportClick();
            expect(scope.exportClick).toHaveBeenCalled();
        });

        it('call scope.exportClick ', function () {
            scope.data = [];
            spyOn(scope, 'exportClick').and.callThrough();
            scope.exportClick();
            expect(scope.exportClick).toHaveBeenCalled();
        });

        it('calls scope.showBlockMergeDialog ', function () {
            spyOn(scope, 'showBlockMergeDialog').and.callThrough();
            scope.showBlockMergeDialog();
            expect(scope.showBlockMergeDialog).toHaveBeenCalled();
        });

        it('calls scope.acctNumberWithDropLinkFormatter ', function () {
            spyOn(scope, 'acctNumberWithDropLinkFormatter').and.callThrough();
            scope.acctNumberWithDropLinkFormatter();
            expect(scope.acctNumberWithDropLinkFormatter).toHaveBeenCalled();
        });

        it('calls scope.acctNumberWithDropLinkFormatter ', function () {
            spyOn(scope, 'acctNumberWithDropLinkFormatter').and.callThrough();
            scope.acctNumberWithDropLinkFormatter('1','1','test','test','test');
            expect(scope.acctNumberWithDropLinkFormatter).toHaveBeenCalled();
        });

        it('call scope.onRowClick(AccountNumber) ', function () {

            var element = angular.element('<div id="gridDropMenu"><ul><li>test</li></ul></div>');
            compile(element)(scope);
            angular.element(document.body).append(element);
            scope.$digest();

            spyOn(scope, 'onRowClick').and.callThrough();
            scope.onRowClick({ row: 1, colId:'accountNumber' });
            expect(scope.onRowClick).toHaveBeenCalled();
        });

        it('call scope.onRowClick(NotValidColumn) ', function () {

            var element = angular.element('<div id="gridDropMenu"><ul><li>test</li></ul></div>');
            compile(element)(scope);
            angular.element(document.body).append(element);
            scope.$digest();

            spyOn(scope, 'onRowClick').and.callThrough();
            scope.onRowClick({ row: 1, colId: 'dummy' });
            expect(scope.onRowClick).toHaveBeenCalled();
        });

     
       
    });


  
});