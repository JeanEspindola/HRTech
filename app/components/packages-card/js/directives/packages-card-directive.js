/**
 * Packages Card component
 *
 */
(function(){
    'use strict';

    angular
        .module('hrtech.component.packagesCard')
        .directive('packagesCard', packagesCard);

    packagesCard.$inject = [];

    function packagesCard(){

        function packagesCardController(){

        }

        return {
            restrict: 'E',
            scope: {
            },
            templateUrl: '/app/components/packages-card/views/packages-card.html',
            controller: ['$scope', packagesCardController],
            controllerAs: 'vm',
            bindToController: true
        }

    }
})();