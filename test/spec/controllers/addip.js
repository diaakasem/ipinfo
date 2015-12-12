'use strict';

describe('Controller: AddipCtrl', function () {

  // load the controller's module
  beforeEach(module('ipinfoApp'));

  var AddipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddipCtrl = $controller('AddipCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddipCtrl.awesomeThings.length).toBe(3);
  });
});
