var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {
	var student = {
			firstname : "Siva",
			lastname : "Krishna",
			gender : "Male",
			address : 'Hyderbad'
		};
	$scope.student=student;
});
