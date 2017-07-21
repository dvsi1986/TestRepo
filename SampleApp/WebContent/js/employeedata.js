var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {

var employees = [ 
	 { name : "Siva",	  gender:'Male',  salary : 55000.890 },
	 { name : "Krishna",  gender:'Male',  salary : 34000.199 },
	 { name : "Swathi",	  gender:'FeMale',salary : 12000.304 },
	 { name : "Viswanath",gender:'Male',  salary : 66000.009 },
	 { name : "SomeName",  gender:'Not Disclosed',  salary : 65000.876 }
	 ];
	$scope.employees = employees;
	$scope.employeeView='EmployeeTable.html';
	
});

