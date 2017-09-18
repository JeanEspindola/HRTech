/**
 * Header info directive
 *
 */
(function(){
    'use strict';

    angular
        .module('hrtech.component.header')
        .directive('headerInfo', headerInfo);

    headerInfo.$inject = [
        '$rootScope',
        'hrtech.core.ticketsType'
    ];

    function headerInfo($rootScope, ticketsType){

        function headerInfoController($scope){
        }

        return {
            restrict: 'E',
            scope: {
            },
            templateUrl: '/app/components/header-info/views/header-info.html',
            controller: ['$scope', headerInfoController],
            controllerAs: 'vm',
            bindToController: true
        }

    }
})();