var app = angular.module('main', []);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/notes_list.html', controller: 'NotesCtrl'}).otherwise({redirectTo: '/'});
	console.log('config run ');
}]);
