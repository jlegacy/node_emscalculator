describe('Controller: indexController', function () {

    beforeEach(angular.mock.module('app'));

    var testController;

    beforeEach(inject(function ($controller) {
        scope = {};

        testController = $controller('Emscalculator.IndexController', {});

    }));

    it('test Index Controller', function () {
        (testController).toBeDefined();
       // expect(testController.model).toBeDefined();
       // expect(testController.model.name).toEqual("controllerAs vm test");
    });

   // it('should not have a property called vm', function () {
  //      expect(testController.vm).toBeUndefined();
  //  });
});