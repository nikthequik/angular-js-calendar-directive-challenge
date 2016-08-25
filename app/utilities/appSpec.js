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

	 	it('should test changeDate()', function() {
	 		
	 		scope.selected.month = {
				name: 'December',
				value: 11
			};
			scope.selected.year = 2016;
			scope.changeDate();
	 		expect(scope.month.end).toEqual(new Date('Sat Dec 31 2016'));
	 	});

	 	it('should test getInitialDate()', function() {
	 		var now = new Date();
	 		scope.getInitialDate();
	 		expect(scope.selected.year).toBe(now.getFullYear());
	 		expect(scope.selected.month.value).toBe(now.getMonth());
	 	});

	 	it('should test displayDate', function() {
	 		scope.display = true;
	 		scope.displayDate();
	 		expect(scope.display).toBe(false);
	 	});
	 	
		/*{
			end: new Date('Sat Dec 31 2016 00:00:00 GMT-0700 (Mountain Standard Time)'),
			first: new Date('Sun Nov 27 2016 00:00:00 GMT-0700 (Mountain Standard Time)'),
			last: new Date('Sat Dec 31 2016 00:00:00 GMT-0700 (Mountain Standard Time)'),
			start: new Date('Thu Dec 01 2016 00:00:00 GMT-0700 (Mountain Standard Time)')
		}*/
		
	});


});