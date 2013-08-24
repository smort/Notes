var appMod = angular.module('mainMod', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when("/nn", {
		templateUrl : 'partials/notes_list.html'
	}).otherwise({
		redirectTo : "/nn"
	});
});

//appMod.controller('AppCtrl', ['$scope', '$route', function($scope, $route){
//	$scope.$route = $route;
//}]);
