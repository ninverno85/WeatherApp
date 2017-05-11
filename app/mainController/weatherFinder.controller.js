(function() {
    'use strict';

//The controller
    angular
      .module('app')
      .controller('weatherFinderController', weatherFinderController);

    weatherFinderController.$inject = ['weatherFinderFactory', 'toastr'];

    /* @ngInject */
    function weatherFinderController(weatherFinderFactory, toastr) {
      var vm = this;
      vm.findWeather = findWeather;
      vm.getWeatherById = getWeatherById;
      vm.nameOfCity = [];
      vm.today= new Date();
//high level overview

//////////////////

//implementation details
    function findWeather(searchTerm){
         weatherFinderFactory.searchForWeather(searchTerm)
                             .then(function(data){
                           vm.results = data;    
                           //This if statement is used to push the recent search results
                           // and keep them from pushing a full array
                           if(vm.nameOfCity.indexOf(vm.results.name) == -1) {
                              vm.nameOfCity.push(vm.results.name);  
                           }      
                           // Success read out
                           if(data.cod == 200){
                             toastr.success("Success! We have the weather!");
                           }
                           
                          },
                          // Error read out
                           function(error){
                             toastr.error("there was a problem: " + error.statusText);
                           });
                   }

     function getWeatherById(id){
         weatherFinderFactory.getWeatherById(id)
                             .then(function(data){
                           vm.selectedWeather = data;
                         });
                    }

      }
    
  })();
