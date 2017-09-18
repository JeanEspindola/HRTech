/**
 * The Tickets Page module.
 *
 **/
(function() {
    'use strict';

    angular
        .module('hrtech.tickets', [
            'ui.router',
            'hrtech.core',
            'hrtech.component.header',
            'hrtech.component.packagesCard'
        ]);
})();