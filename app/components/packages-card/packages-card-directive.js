/**
 * Packages Card component
 *
 */
(function(){
    'use strict';

    angular
        .module('hrtech.component.packagesCard')
        .directive('packagesCard', packagesCard);

    packagesCard.$inject = [
        '$rootScope',
        'hrtech.core.packageConstant'
    ];

    function packagesCard($rootScope, packageConstant){

        function packagesCardController($scope){

            var vm = this;
        }

        return {
            restrict: 'E',
            scope: {
                package: '<'
            },
            templateUrl: '/app/components/packages-card/packages-card.html',
            controller: ['$scope', packagesCardController],
            controllerAs: 'vm',
            bindToController: true
        }
    }
})();