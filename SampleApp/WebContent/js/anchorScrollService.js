var myApp = angular.module("myApp", []).controller("myCtrl", function($scope,$location,$anchorScroll) {

	//	country names and city names to display nested order
	
	var countries =[
	                {country:'USA',  cities:[{name:'Texas'},{name:'California'},{name:'NewYark'}] },
	                {country:'INDIA',  cities:[{name:'Hyderabad'},{name:'Banglore'},{name:'Chennai'}] },
	                {country:'UK',  cities:[{name:'London'},{name:'Machestor'},{name:'NewYark'}] }
	                ];
	$scope.countries=countries;
	
	$scope.scrollTo=function(country){
		$location.hash(country);
		$anchorScroll();
	}
	
});
