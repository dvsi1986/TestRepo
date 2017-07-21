
//Approch 1
//creating a module 
var myApp=angular.module("myApp",[]);

//creating a controller
var myCtrl=function($scope){
$scope.message="Hello Angular JS";
}


/*attaching/binding the controller with module.*/
myApp.controller("myCtrl",myCtrl);
//***********************************

//Approch 2
//creating a new controller and attaching to module.
myApp.controller("myCtrl1",function($scope){
$scope.greetings="Welcome to Angular World!!";
});

//***********************************

//Approch 3
//method chaining in Angular Js.

/*var myApp=angular.module("myApp",[]).controller("myCtrl2",function($scope){
		$scope.name="Siva";
		$scope.usermessage="Welcome to Angular World!!" + name;
	});*/

myApp.controller("myCtrl2",function($scope){
	$scope.name="Siva Krishna";
	$scope.usermessage="Welcome to Angular World!!" + "  "+name;
});

myApp.controller("myCtrl3",function($scope){
	var student = {
		firstname : "Siva",
		lastname : "Krishna",
		gender : "Male",
		address : 'Hyderbad'
	};
	
	$scope.student=student;
	
});

