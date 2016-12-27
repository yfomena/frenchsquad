'use strict';

angular.module('frenchsquadApp')

        .controller('IndexController', ['$scope', 'loginFactory', 'NgMap', function($scope, loginFactory, NgMap) {
            $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqmu21j2u1a4lNVRwT8Kg-n-RumT0WAUI";
            var ctrl = this;
            $scope.$on('$viewContentLoaded', function(event) {
                $('.parallax').parallax();
                NgMap.getMap().then(function(map) {
                  ctrl.map = map;
                });
                ctrl.showDetail = function() {
                  ctrl.map.showInfoWindow('foo-iw', 'foo');
                };
            });
        }])

        .controller('MenuController', ['$scope', 'loginFactory', function($scope, $rootScope, loginFactory) {
            $scope.$on('$viewContentLoaded', function(event) {
              $('.dropdown-button').dropdown();
              $('.button-collapse').sideNav();
            });
        }])

        .controller('ContactusController', ['$scope', function($scope) {

        }])

        .controller('JoinusController', ['$scope', function($scope) {

        }])

        .controller('SniperController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('ShooterController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('SoldierController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('ScoutController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('WarriorController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('BruiserController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('NoiseController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('CriticalController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('CampController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('QuestController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('PvpController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('MeleeController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('RangedController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('LoginController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('PasswordController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('EvaluatorController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('HeroesController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('BeginnerController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('VeteranController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('MeleeclassController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('GamemodeController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

        .controller('RangedclassController', ['$scope','loginFactory', function($scope,loginFactory) {

        }])

;
