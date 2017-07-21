var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {
	

var technologies = [ 
	 { name : "Java",	likes : 0,dislikes : 0 },
	 { name : "C++",	likes : 0,dislikes : 0 },
	 { name : ".NET",	likes : 0,dislikes : 0 },
	 { name : "Informatica",likes : 0,dislikes : 0 }
	 ];
	$scope.technologies=technologies;
	
	
	$scope.likesIncrement=function(technology){
		technology.likes++;
	}
	
	$scope.disLikesIncrement=function(technology){
		technology.dislikes++;
	}
});
