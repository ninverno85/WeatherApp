(function () {
    'use strict';

    angular
        .module('app')
        .factory('weatherFinderFactory', weatherFinderFactory)

    weatherFinderFactory.$inject = ['$http', '$q'];

    function weatherFinderFactory($http, $q) {
        var service = {
            searchForWeather: searchForWeather,
            getWeatherById: getWeatherById
        };

        return service;

        function searchForWeather(term) {

            var defer = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&units=imperial&APIKey=86205200acfdce561b90d06a77fe32f4')
                .then(function (response) {
                //Declaring the error warning
               if (typeof response.data === 'object'){
                defer.resolve(response.data);
               }
               else{
                defer.reject(response);
               }
             },function(error) {
                defer.reject(error);
             });
               return defer.promise;
    }

    function getWeatherById(id) {
        return $http.get('http://api.openweathermap.org/data/2.5/weather?id=' + term + '&units=imperial&APIKey=86205200acfdce561b90d06a77fe32f4')
            .then(function (response) {
                return response.data;
            });
    }
}
})();