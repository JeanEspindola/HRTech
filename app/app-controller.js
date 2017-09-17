/**
 * Main Controller
 *
 * It handles the main page application and controlls the loading and app layer.
 *
 **/
(function() {
    'use strict';
    angular
        .module('hrtech')
        .controller('hrtech.mainController', mainController);

    mainController.$inject = ['$scope', '$state'];

    function mainController($scope, $state){

        var vm = this;

        init();

        function init() {
            vm.isAppLoaded = false;
            vm.isLoading = false;
            vm.isError = false;
        }

        $scope.$on('$stateChangeStart', function() {
            vm.isLoading = true;
            vm.isError = false;
        });

        $scope.$on('$stateChangeSuccess', function() {
            vm.isLoading = false;
            vm.isError = false;
            vm.isAppLoaded = true;
        });

        $scope.$on('$stateChangeError', function() {
            vm.isLoading = false;
            vm.isError = true;
        });

        $state.go('tickets');
    }
})();