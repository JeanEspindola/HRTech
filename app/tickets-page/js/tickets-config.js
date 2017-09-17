/**
 * Tickets Page config.
 *
 * Responsible for configurating the route for the module
 * and resolve all necessary dependencies for this page.
 *
 **/
(function() {
    'use strict';
    angular
        .module('hrtech.tickets')
        .config(ticketsConfig);

    ticketsConfig.$inject = ['$stateProvider'];

    function ticketsConfig($stateProvider) {

        $stateProvider.state('tickets', {
            url: '/tickets',
            templateUrl: '/app/tickets-page/views/tickets.html',
            controller: 'hrtech.tickets.ticketsController',
            controllerAs: 'ticketsCtrl'
        });
    }

})();