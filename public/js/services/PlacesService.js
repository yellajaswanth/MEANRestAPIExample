angular.module('PlacesService',[])
.factory('Place', ['$http', function($http){
	return {
		get : function(){
			return $http.get('/api/places');
		},

		create : function(placeData) {
			return $http.post('/api/places', placeData);
		},

		delete : function(id) {
			return $http.delete('/api/places' + id);
		}
	};
}])