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

            var vm = this;

            vm.typeSelect = typeSelect;

            vm.ticketsType = ticketsType;

            function typeSelect(type) {
                angular.forEach(vm.ticketsType, function(value, key){
                    if (value.id === type.id) {
                        value.class = 'active';
                    } else {
                        value.class = 'inactive';
                    }
                });

                vm.selected = type.id;
            }

        }

        return {
            restrict: 'E',
            scope: {
                selected: '='
            },
            templateUrl: '/app/components/header-info/header-info.html',
            controller: ['$scope', headerInfoController],
            controllerAs: 'vm',
            bindToController: true
        }

    }
})();