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
          $scope.mtraits = [
								{
								  title:'Chance',
								  image: 'images/luck.jpg',
								  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
								},
								{
                  title:'Destruction',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Intercepteur',
                  image: 'images/luck.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Specialiste des armes',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Precision',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Commotion',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Amplitude',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Coup rapide',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Reduction de la menace',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
								{
                  title:'Charge',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                }
              ]
        }])

        .controller('RangedController', ['$scope','loginFactory', function($scope,loginFactory) {
          $scope.rtraits = [
                {
                  title:'Chance',
                  image: 'images/luck.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Destruction',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Intercepteur',
                  image: 'images/luck.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Specialiste des armes',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Precision',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Dispersion',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Gros calibre',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'surpuissance',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Silencieux',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Transperceur',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                  title:'Charge',
                  image: 'images/dmg.jpg',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                }
              ]
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
