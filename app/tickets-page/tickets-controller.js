/**
* Main Controller of tickets page
*
**/
(function() {
    'use strict';
    angular
        .module('hrtech.tickets')
        .controller('hrtech.tickets.ticketsController', ticketsController);

    ticketsController.$inject = [
        '$scope',
        'hrtech.core.packageConstant'
    ];

    function ticketsController($scope, packageConstant){

        //Gets the local scope.
        var vm = this;

        function init(){

            vm.packages = packageConstant;
            vm.selected = 1;
        }

        init();
    }
})();