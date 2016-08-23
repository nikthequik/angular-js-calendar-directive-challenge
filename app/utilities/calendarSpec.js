describe('calendarDirective', function() {

	var scope,
		element,
		compiled,
		html;

	beforeEach(module("calendarDemoApp"));
	beforeEach(module("calendar.html"));
	beforeEach(inject(function($rootScope, $compile) {

		var html = "<calendar-directive></calendar-directive>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();

	}));

	it('should contain two selects', function() {
		expect(element.find('select').length).toBe(2);
	});

	it('should contain one section', function() {
		expect(element.find('section').length).toBe(1);
	});

});