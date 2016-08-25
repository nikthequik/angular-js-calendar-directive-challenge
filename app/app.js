angular.module('calendarDemoApp')

// your controller and directive code go here
.controller('calendarController', ['$scope', 'CalendarRange', function($scope, CalendarRange) {
	$scope.display = false;
	$scope.yearRange = [];
	var yearInc = 0;
	var yearStart = 1996;
	while (yearInc <= 40) {
		$scope.yearRange.push(yearInc + yearStart);
		yearInc++;
	};
	$scope.months = [
		{
			name: 'January',
			value: 0
		},
		{
			name: 'February',
			value: 1
		}, 
		{
			name: 'March',
			value: 2
		}, 
		{
			name: 'April',
			value: 3
		}, 
		{
			name: 'May',
			value: 4
		}, 
		{
			name: 'June',
			value: 5
		},  
		{
			name: 'July',
			value: 6
		}, 
		{
			name: 'August',
			value: 7
		}, 
		{
			name: 'September',
			value: 8
		}, 
		{
			name: 'October',
			value: 9
		}, 
		{
			name: 'November',
			value: 10
		}, 
		{
			name: 'December',
			value: 11
		}, 
	];

	$scope.selected = {
		month: null,
		year: null,
	};

	

	$scope.changeDate = function () {
		if ($scope.selected.month !== null && $scope.selected.year !== null) {
			console.log($scope.selected.month);
			$scope.month = CalendarRange.getMonthlyRange(new Date($scope.selected.month.value + 1 + '/1/' + $scope.selected.year));
		}
		console.log($scope.month, 'friendly');
	};

	$scope.getInitialDate = function() {
		var now = new Date();
		$scope.month = CalendarRange.getMonthlyRange(now);
		var foundMonth = -1;
		angular.forEach( $scope.months, function(month) {
			if (month.value === now.getMonth()) {
				foundMonth = month;
			}
		});
		
		$scope.selected.month = foundMonth;
		$scope.selected.year = now.getFullYear();
		
	};

	$scope.displayDate = function () {
		console.log($scope.display);
		$scope.display = !$scope.display;
	};
	
}])
.directive('calendarDirective', function() {
	return {
		templateUrl: 'calendar.html',
		scope: true,
	}
});