describe('calendarDemoApp', function() {
	beforeEach(module('calendarDemoApp'));

	describe('calendarController', function() {
	 	var scope, ctrl;

	 	beforeEach(inject(function($controller, $rootScope) {
	 		scope = $rootScope.$new();
	 		ctrl = $controller('calendarController', {$scope: scope});
	 	}));

	 	it('should contain an array of years', function() {
	 		expect(scope.yearRange).toBeDefined();
	 		expect(scope.yearRange.length).toBe(41);
	 	});

	 	it('should contain an array of month objects', function() {
	 		expect(scope.months).toBeDefined();
	 		expect(scope.months[5].name).toBe('June');
	 	});

	 	it('should contain an array of years', function() {
	 		expect(scope.yearRange).toBeDefined();
	 		expect(scope.yearRange.length).toBe(41);
	 	});
	});

});