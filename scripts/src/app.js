var app = angular.module('main', []);

app.config(function($routeProvider) {
	$routeProvider.when("/nn", {template: 'TEST!'}).otherwise({redirectTo:"/nn"});
});
