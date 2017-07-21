var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {
	var angsrc = {
		title : "Angular Js",
		imgpath : "../images/angular.png",
		company : "Google"
	};
	$scope.angsrc=angsrc;
});
