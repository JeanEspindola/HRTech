/**
 * Main module for the application
 *
 **/
(function() {
    'use strict';

    angular
        .module('hrtech', [
            'ui.router',
            'hrtech.core',
            'hrtech.tickets'
        ]);
})();