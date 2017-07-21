var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {
	

var studentArray = [ 
	 { firstname : "Siva",	lastname : "Krishna",	gender : "Male",	address : 'Hyderbad' },
	 { firstname : "Swathi",	lastname : "C",	gender : "FeMale",	address : 'Secendrabad' },
	 { firstname : "Pk",	lastname : "Krishna",	gender : "Male",	address : 'Hyderbad' },
	 { firstname : "Kiran",	lastname : "S",	gender : "Male",	address : 'Washington D.C' },
	 { firstname : "Viswanath",	lastname : "Raj",	gender : "Male",	address : 'Texas' },
	 { firstname : "Nischala",	lastname : "Nischala",	gender : "FeMale",	address : 'NY' },
	 { firstname : "Sowmya",	lastname : "Sowmya",	gender : "FeMale",	address : 'Hoston' },
	 { firstname : "Tejaswi",	lastname : "Tejaswi",	gender : "FeMale",	address : 'Hoston' }
	 ];
	$scope.studentArray=studentArray;

	//	country names and city names to display nested order
	
	var countries =[
	                {country:'USA',  cities:[{name:'Texas'},{name:'California'},{name:'NewYark'}] },
	                {country:'INDIA',  cities:[{name:'Hyderabad'},{name:'Banglore'},{name:'Chennai'}] },
	                {country:'UK',  cities:[{name:'London'},{name:'Machestor'},{name:'NewYark'}] }
	                ];
	$scope.countries=countries;
	
});
