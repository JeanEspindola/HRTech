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
        '$q',
        '$filter'
    ];

    function ticketsController($scope, $q, $filter){

        //Gets the local scope.
        var vm = this;

        function init(){
        }

        init();
    }
})();