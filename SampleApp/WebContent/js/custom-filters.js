var myApp = angular.module("myApp", [])
.filter("genderFilter",function(){
	return function(gender){
		
		switch(gender){
		case 1:
			return 'Male';
		case 2:
			return 'FeMale';
		case 3:
			return 'Not Disclosed';
		}
	}
}).controller("myCtrl", function($scope) {

var employees = [ 
	 { name : "Siva",	  gender:1,  salary : 55000.890 },
	 { name : "Krishna",  gender:1,  salary : 34000.199 },
	 { name : "Swathi",	  gender:2,salary : 12000.304 },
	 { name : "Viswanath",gender:1,  salary : 66000.009 },
	 { name : "SomeName",  gender:3,  salary : 65000.876 }
	 ];
	$scope.employees = employees;
	
});

