app.controller("HomeController",['$scope','$http','$window','config',
	function ($scope,$http,$window,config) {
	$scope.name = "Welcome to Angular JS Samples";
	$http.get("data/sampleJson.json").success(function(response){
		$scope.candidate=response;
		console.log($scope.candidate);
	});


}]);