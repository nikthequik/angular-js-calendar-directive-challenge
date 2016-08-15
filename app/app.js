angular.module('calendarDemoApp', [])

// your controller and directive code go here
.controller('calendarController', ['$scope', function($scope) {
	$scope.yearRange = [];
	var yearInc = 1996;
	while (yearInc < 2037) {
		$scope.yearRange.push(yearInc);
		yearInc++;
	};
	$scope.months = [
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
	];
}])
.directive('calendarDirective', function() {
	return {
		scope: true,
		
	}
});