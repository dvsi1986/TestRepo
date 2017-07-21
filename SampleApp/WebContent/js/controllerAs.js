 
var myApp=angular.module("myApp",[]).controller("countryController",function($scope){
	$scope.name="INDIA";
})
.controller("stateController",function($scope){
	$scope.name="Telangana";
})
.controller("cityController",function($scope){
	$scope.name="Hyderabad";
}).controller("countryControllerAs",function(){
	this.name="INDIA";
})
.controller("stateControllerAs",function(){
	this.name="Telangana";
})
.controller("cityControllerAs",function(){
	this.name="Hyderabad";
});