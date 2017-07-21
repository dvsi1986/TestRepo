 
var myApp=angular.module("myApp",[]).controller("redColorController",function($scope,$rootScope){
	$scope.redColor="I am Red Color";
	$rootScope.rootScopeColor="I am Root Scope Color";
})
.controller("greenColorController",function($scope,$log){
	$scope.greenColor="I am Green Color";
	$log.debug("Some logger has placed here .. ");
})
