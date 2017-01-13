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
								  description:'Augmente les chances que d’autres traits prennent effet de X % (10% argent, 15% or). Le calcul ne consiste pas à ajouter ce pourcentage à celui des autres traits, il s\' agit plutôt un coefficient multiplicateur.<br> <b>Exemple:</b> Si vous avez une arme avec 80% de chance d\'interrompre un ennemi et 10% de chance, votre trait interruption passe de 80 à <i>80 + 80*10%</i> soit 88% '
								},
								{
                  title:'Destruction',
                  image: 'images/dmg.jpg',
                  description:'Augmente les dégâts de X % Uniquement dans les cas où vous faites un coup critique: 40% si le trait est argent et 60% si le trait est or'
                },
								{
                  title:'Intercepteur',
                  image: 'images/luck.jpg',
                  description:'Les attaques en vigilance qui ne sont pas des tirs au corps ont X % de chance d\'interrompre l\'ennemi.<br> Attention, au-delà du niveau de votre personnage + 3 (<b>exemple:</b> pour un niveau 20, à partir des ennemis de niveau 24) vous ferez systématiquement des tirs au corps. Chaque étoile rose que gagne votre personnage incrémente de 1 le niveau de tirs au corps (<b>Exemple:</b> Un personnage niveau 20 avec une étoile rose fera systématiquement des tirs au corps sur des ennemis de niveau 25) '
                },
								{
                  title:'Specialiste des armes',
                  image: 'images/dmg.jpg',
                  description:'les armes infligent X %(10% argent, 15% or) de dégâts supplémentaires'
                },
								{
                  title:'Precision',
                  image: 'images/dmg.jpg',
                  description:'Augmente les chances de coup critique de X % (10% argent et 15% or)'
                },
								{
                  title:'Commotion',
                  image: 'images/dmg.jpg',
                  description:'Ce trait n\'est présent que pour des armes de cogneur. Vos attaques étourdissantes ont X %(40% argent, 60% or) de chances d’immobiliser l’ennemi pendant un tour supplémentaire. <br> <b>Attention:</b> Comme le trait <b>intercepteur</b>, au delà du niveau de votre personnage +3, l\'ennemi ne sera pas immobilisé.'
                },
								{
                  title:'Amplitude',
                  image: 'images/dmg.jpg',
                  description:'Ce trait ne s\'applique qu\'aux armes de guerrier. Il augmente l\'amplitude d\'attaque de X°(90° argent et 130° or), vous permettant ainsi d\'atteindre plusieurs cibles en même temps.'
                },
								{
                  title:'Coup rapide',
                  image: 'images/dmg.jpg',
                  description:'Ce trait ne s\'applique qu\'aux armes d\'éclaireur. Il vous confère X %(30% argent, 40% or) de chance en plus d\'avoir une attaque gratuiteaprès avoir tué un ennemi.'
                },
								{
                  title:'Reduction de la menace',
                  image: 'images/dmg.jpg',
                  description:'Ce trait ne s\'applique qu\'aux armes d\'éclaireur. Il donne X %(50% argent, 75% or) de chances, après avoir tué un ennemi, de réduire de un le nombre d\'ennemis qui arriveront à la prochaine vague.'
                },
								{
                  title:'Charge',
                  image: 'images/dmg.jpg',
                  description:'Present uniquement sur des armes de cogneur et éclaireur (chez les corps à corps), ce trait vous donne X %(20% argent, 30% or) de chances, après avoir tué un ennemi, de gagner un point supplémentaire de charge critique.<br> L\'attaque critique en question fait X %(12% argent, 15% or) de dégats supplémentaires.'
                }
              ]
        }])

        .controller('RangedController', ['$scope','loginFactory', function($scope,loginFactory) {
          $scope.rtraits = [
                {
                  title:'Chance',
                  image: 'images/luck.jpg',
                  description:'Augmente les chances que d’autres traits prennent effet de X % (10% argent, 15% or). Le calcul ne consiste pas à ajouter ce pourcentage à celui des autres traits, il s\' agit plutôt un coefficient multiplicateur.<br> <b>Exemple:</b> Si vous avez une arme avec 80% de chance d\'interrompre un ennemi et 10% de chance, votre trait interruption passe de 80 à <i>80 + 80*10%</i> soit 88% '
                },
                {
                  title:'Destruction',
                  image: 'images/dmg.jpg',
                  description:'Augmente les dégâts de X % Uniquement dans les cas où vous faites un coup critique: 40% si le trait est argent et 60% si le trait est or'
                },
                {
                  title:'Intercepteur',
                  image: 'images/luck.jpg',
                  description:'Les attaques en vigilance qui ne sont pas des tirs au corps ont X % de chance d\'interrompre l\'ennemi.<br> Attention, au-delà du niveau de votre personnage + 3 (<b>exemple:</b> pour un niveau 20, à partir des ennemis de niveau 24) vous ferez systématiquement des tirs au corps. Chaque étoile rose que gagne votre personnage incrémente de 1 le niveau de tirs au corps (<b>Exemple:</b> Un personnage niveau 20 avec une étoile rose fera systématiquement des tirs au corps sur des ennemis de niveau 25) '
                },
                {
                  title:'Specialiste des armes',
                  image: 'images/dmg.jpg',
                  description:'les armes infligent X %(10% argent, 15% or) de dégâts supplémentaires'
                },
                {
                  title:'Precision',
                  image: 'images/dmg.jpg',
                  description:'Augmente les chances de coup critique de X % (10% argent et 15% or)'
                },
                {
                  title:'Dispersion',
                  image: 'images/dmg.jpg',
                  description:'Présent uniquement sur des armes de soldats, il augmente le cône d\'attaque de X° (33° argent, 47° or)'
                },
                {
                  title:'Gros calibre',
                  image: 'images/dmg.jpg',
                  description:'Ce trait n\'est présent que sur des armes de chasseurs. Il augmente la zone de tir de X mètres(0.3 argent, 0.5 or), permettant ainsi d\'atteindre des ennemis non disposés sur une même ligne.'
                },
                {
                  title:'surpuissance',
                  image: 'images/dmg.jpg',
                  description:'Uniquement sur des armes de tireurs, ce trait augmente la portée de X cases(2 argent, 3 or). La portée en cas de trait or est supérieure à celle du chasseur, ce qui offre un réel confort.'
                },
                {
                  title:'Silencieux',
                  image: 'images/dmg.jpg',
                  description:'Confère X %(20% argent, 30% or) de chance de ne pas générer de menace. Cela vous évite d’attirer de nouveaux rodeurs pour la prochaine vague'
                },
                {
                  title:'Transperceur',
                  image: 'images/dmg.jpg',
                  description:'Réduit de X % les chances de tir au corps'
                },
                {
                  title:'Charge',
                  image: 'images/dmg.jpg',
                  description:'Present uniquement sur des armes de tireurs (chez les distants), ce trait vous donne X %(20% argent, 30% or) de chances, après avoir tué un ennemi, de gagner un point supplémentaire de charge critique.<br> L\'attaque critique en question fait X %(12% argent, 15% or) de dégats supplémentaires'
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
