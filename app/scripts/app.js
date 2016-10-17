angular.module('frenchsquadApp', ['ui.router', 'ngResource', 'ngMap'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'MenuController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the sniper page
            .state('app.sniper', {
                url:'sniper',
                views: {
                    'content@': {
                        template: 'sniper.html',
                        controller  : 'SniperController'
                   }
                }
            })
                    // route for the soldier page
            .state('app.soldier', {
                url:'soldier',
                views: {
                    'content@': {
                        templateUrl : 'views/soldier.html',
                        controller  : 'SoldierController'
                     }
                }
            })

                    // route for the shooter page
            .state('app.shooter', {
                url:'shooter',
                views: {
                    'content@': {
                        templateUrl : 'views/shooter.html',
                        controller  : 'ShooterController'
                     }
                }
            })

                    // route for the scout page
            .state('app.scout', {
                url:'scout',
                views: {
                    'content@': {
                        template: 'scout.html',
                        controller  : 'ScoutController'
                   }
                }
            })
                    // route for the warrior page
            .state('app.warrior', {
                url:'warrior',
                views: {
                    'content@': {
                        templateUrl : 'views/warrior.html',
                        controller  : 'WarriorController'
                     }
                }
            })

                    // route for the bruiser page
            .state('app.bruiser', {
                url:'bruiser',
                views: {
                    'content@': {
                        templateUrl : 'views/bruiser.html',
                        controller  : 'BruiserController'
                     }
                }
            })

                    // route for the camp page
            .state('app.camp', {
                url:'camp',
                views: {
                    'content@': {
                        templateUrl : 'views/camp.html',
                        controller  : 'CampController'
                     }
                }
            })

                    // route for the noise page
            .state('app.noise', {
                url:'noise',
                views: {
                    'content@': {
                        templateUrl : 'views/noise.html',
                        controller  : 'NoiseController'
                     }
                }
            })

                    // route for the critical page
            .state('app.critical', {
                url:'critical',
                views: {
                    'content@': {
                        templateUrl : 'views/critical.html',
                        controller  : 'CriticalController'
                     }
                }
            })

                    // route for the quest page
            .state('app.quest', {
                url:'quest',
                views: {
                    'content@': {
                        templateUrl : 'views/quest.html',
                        controller  : 'QuestController'
                     }
                }
            })

                    // route for the pvp page
            .state('app.pvp', {
                url:'pvp',
                views: {
                    'content@': {
                        templateUrl : 'views/pvp.html',
                        controller  : 'PvpController'
                     }
                }
            })


                    // route for the gimmick page
            .state('app.gimmick', {
                url:'gimmick',
                views: {
                    'content@': {
                        templateUrl : 'views/gimmick.html',
                        controller  : 'GimmickController'
                     }
                }
            })

            // route for the login page
            .state('app.login', {
                url: 'login',
                views: {
                    'content@': {
                        templateUrl : 'views/login.html',
                        controller  : 'LoginController'
                    }
                }
            })

            // route for the evaluator page
            .state('app.evaluator', {
                url: 'evaluator',
                views: {
                    'content@': {
                        templateUrl : 'views/evaluator.html',
                        controller  : 'EvaluatorController'
                    }
                }
            })

            // route for the contact us page
            .state('app.contactus', {
                url: 'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactusController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })