
(function() {
    'use strict';

//The controller
    angular
      .module('app')
      .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
      var vm = this;
      vm.title = 'MainController';

      activate ();

function activate () {
//Click function to calculate the monthly mortgage value
      // vm.calculateMortgage = function() {


      }
    }
  })();
