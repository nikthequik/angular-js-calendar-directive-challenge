angular.module('calendarDemoApp')

// your controller and directive code go here
.controller('calendarController', ['$scope', 'CalendarRange', function($scope, CalendarRange) {
	$scope.yearRange = [];
	$scope.week = [];
	var yearInc = 0;
	var yearStart = 1996;
	var weekInc = 0;
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
		console.log($scope.selected.month.value)
		if ($scope.selected.month !== null && $scope.selected.year !== null) {
			$scope.month = CalendarRange.getMonthlyRange(new Date($scope.selected.month.value + 1 + '/1/' + $scope.selected.year));
		}
	}

	while (weekInc) {
		$scope.week.push({
			currentWeek: false
		});
	}
	console.log(new Date());
}])
.directive('calendarDirective', function() {
	return {
		templateUrl: 'calendar.html',
		scope: true,
		link: function (scope, el, attrs) {

		}
	}
});