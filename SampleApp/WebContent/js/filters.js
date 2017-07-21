var myApp = angular.module("myApp", []).controller("myCtrl", function($scope) {

var employees = [ 
	 { name : "Siva",	dob : new Date("08/08/2016"),gender:'Male',salary : 55000.890 },
	 { name : "Krishna",dob : new Date("06/06/2016"),gender:'Male',salary : 34000.199 },
	 { name : "Swathi",	dob : new Date("07/07/2016"),gender:'FeMale',salary : 12000.304 },
	 { name : "Viswanath",	dob : new Date("05/05/2016"),gender:'Male',salary : 66000.009 },
	 { name : "Avinash",	dob : new Date("04/04/2016"),gender:'Male',salary : 65000.876 }
	 ];
	$scope.employees = employees;
	$scope.rowLimit = 3;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	
	$scope.sortData=function(column){
		$scope.reverseSort=($scope.sortColumn == column)?!reverseSort:false;
		$scope.sortColumn = column;
	}
	
	$scope.getClass=function(column){
		if($scope.sortColumn == column){
		return $scope.reverseSort  ?  'arrow-down' :  'arrow-up';
		}
	}
});
