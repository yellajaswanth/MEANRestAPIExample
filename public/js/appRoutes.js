angular.module('appRoutes',[])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

	$routeProvider

		.when('/',{
			templateUrl : 'views/home.html',
			controller  : 'MainController'
		})

		.when('/users',{
			templateUrl  : 'views/users.html',
			controller   : 'UserController'
			
		})

		.when('/places',{
			templateUrl : 'views/places.html',
			controller  : 'PlacesController'
		});

		$locationProvider.html5Mode(true);

}]);