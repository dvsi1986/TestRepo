//creating a module 
var myApp = angular.module("myApp", ["ngRoute"])
				   .config(function($routeProvider){
					   $routeProvider.caseInsensitiveMatch=true;
					   $routeProvider.when("/home",{
						   templateUrl: "../html/partialtemplates/Home.html",
						   controller:"homeController"
					   })
					   .when("/courses",{
						   templateUrl: "../html/partialtemplates/Courses.html",
						   controller:"coursesController"
						   
					   })
					   .when("/students",{
						   templateUrl: "../html/partialtemplates/Students.html",
						   controller:"studentsController",
					   }).otherwise({
						   redirectTo: "/home"
					   })
					   }).controller("homeController", function($scope) {
					   $scope.message="Home Page here you can write the home related content .. !";
				   }).controller("coursesController", function($scope) {
					   $scope.courses=["Java","Hadoop","Oracle","AWS","Spring"];
				   }).controller("studentsController", function($scope) {
					   var students = [ 
					                  	 { id : 101 , firstname : "Siva",	lastname : "Krishna",	gender : "Male",	address : 'Hyderbad' },
					                  	 { id : 102 , firstname : "Swathi",	lastname : "C",	gender : "FeMale",	address : 'Secendrabad' },
					                  	 { id : 103 ,firstname : "Pk",	lastname : "Krishna",	gender : "Male",	address : 'Hyderbad' },
					                  	 { id : 104 ,firstname : "Kiran",	lastname : "S",	gender : "Male",	address : 'Washington D.C' },
					                  	 { id : 105 ,firstname : "Viswanath",	lastname : "Raj",	gender : "Male",	address : 'Texas' },
					                  	 { id : 106 ,firstname : "Nischala",	lastname : "Nischala",	gender : "FeMale",	address : 'NY' },
					                  	 { id : 107 ,firstname : "Sowmya",	lastname : "Sowmya",	gender : "FeMale",	address : 'Hoston' },
					                  	 { id : 108 ,firstname : "Tejaswi",	lastname : "Tejaswi",	gender : "FeMale",	address : 'Hoston' }
					                  	 ];
					                  	$scope.students=students;
				   });
