'use strict';

describe('Controller: MarketCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MarketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarketCtrl = $controller('MarketCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
