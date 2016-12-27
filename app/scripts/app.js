angular.module('frenchsquadApp', ['ui.router', 'ngResource', 'ncy-angular-breadcrumb', 'ngMap'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                ncyBreadcrumb: {
                  label: 'Accueil'
                },
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
            .state('app.rangedclass.hunter', {
                url:'hunter',
                ncyBreadcrumb: {
                  label: 'chasseur'
                },
                views: {
                    'content@': {
                        templateUrl: 'views/sniper.html',
                        controller  : 'SniperController'
                   }
                }
            })
                    // route for the soldier page
            .state('app.rangedclass.soldier', {
                url:'soldier',
                ncyBreadcrumb: {
                  label: 'soldat'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/soldier.html',
                        controller  : 'SoldierController'
                     }
                }
            })

                    // route for the shooter page
            .state('app.rangedclass.shooter', {
                url:'shooter',
                ncyBreadcrumb: {
                  label: 'tireur'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/shooter.html',
                        controller  : 'ShooterController'
                     }
                }
            })

                    // route for the scout page
            .state('app.meleeclass.scout', {
                url:'scout',
                ncyBreadcrumb: {
                  label: 'éclaireur'
                },
                views: {
                    'content@': {
                        templateUrl: 'views/scout.html',
                        controller  : 'ScoutController'
                   }
                }
            })
                    // route for the warrior page
            .state('app.meleeclass.warrior', {
                url:'warrior',
                ncyBreadcrumb: {
                  label: 'guerrier'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/warrior.html',
                        controller  : 'WarriorController'
                     }
                }
            })

                    // route for the bruiser page
            .state('app.meleeclass.bruiser', {
                url:'bruiser',
                ncyBreadcrumb: {
                  label: 'cogneur'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/bruiser.html',
                        controller  : 'BruiserController'
                     }
                }
            })

                    // route for the camp page
            .state('app.beginner.camp', {
                url:'camp',
                ncyBreadcrumb: {
                  label: 'le camp'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/camp.html',
                        controller  : 'CampController'
                     }
                }
            })

                    // route for the noise page
            .state('app.beginner.noise', {
                url:'noise',
                ncyBreadcrumb: {
                  label: 'le bruit'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/noise.html',
                        controller  : 'NoiseController'
                     }
                }
            })

                    // route for the critical page
            .state('app.beginner.critical', {
                url:'critical',
                ncyBreadcrumb: {
                  label: 'coups critique'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/critical.html',
                        controller  : 'CriticalController'
                     }
                }
            })

                    // route for the quest page
            .state('app.veteran.quest', {
                url:'quest',
                ncyBreadcrumb: {
                  label: 'les quêtes'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/quest.html',
                        controller  : 'QuestController'
                     }
                }
            })

                    // route for the pvp page
            .state('app.veteran.pvp', {
                url:'pvp',
                ncyBreadcrumb: {
                  label: 'pvp'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/pvp.html',
                        controller  : 'PvpController'
                     }
                }
            })


                    // route for the ranged page
            .state('app.ranged', {
                url:'ranged',
                ncyBreadcrumb: {
                  label: 'longue portée'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/ranged.html',
                        controller  : 'RangedController'
                     }
                }
            })

                    // route for the melee page
            .state('app.melee', {
                url:'melee',
                ncyBreadcrumb: {
                  label: 'corps à corps'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/melee.html',
                        controller  : 'MeleeController'
                     }
                }
            })

            // route for the login page
            .state('app.login', {
                url: 'login',
                ncyBreadcrumb: {
                  label: 'login'
                },
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
                ncyBreadcrumb: {
                  label: 'évaluer vos personnages'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/evaluator.html',
                        controller  : 'EvaluatorController'
                    }
                }
            })

            // route for the subscription page
            .state('app.inscription', {
                url: 'inscription',
                ncyBreadcrumb: {
                  label: 'inscription'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/inscription.html',
                        controller  : 'JoinusController'
                    }
                }
            })

            // route for the new password page
            .state('app.newpassword', {
                url: 'newpassword',
                ncyBreadcrumb: {
                  label: 'nouveau mot de passe'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/newpassword.html',
                        controller  : 'PasswordController'
                    }
                }
            })

            // route for the heroes page
            .state('app.heroes', {
                url: 'heroes',
                ncyBreadcrumb: {
                  label: 'les héros'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/heroes.html',
                        controller  : 'HeroesController'
                    }
                }
            })

            // route for the beginner page
            .state('app.beginner', {
                url: 'beginner',
                ncyBreadcrumb: {
                  label: 'débutants'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/beginner.html',
                        controller  : 'BeginnerController'
                    }
                }
            })

            // route for the veteran page
            .state('app.veteran', {
                url: 'veteran',
                ncyBreadcrumb: {
                  label: 'confirmés'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/veteran.html',
                        controller  : 'VeteranController'
                    }
                }
            })

            // route for the ranged class page
            .state('app.rangedclass', {
                url: 'rangedclass',
                ncyBreadcrumb: {
                  label: 'distants'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/rangedclass.html',
                        controller  : 'RangedclassController'
                    }
                }
            })

            // route for the melee class page
            .state('app.meleeclass', {
                url: 'meleeclass',
                ncyBreadcrumb: {
                  label: 'corps à corps'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/meleeclass.html',
                        controller  : 'MeleeclassController'
                    }
                }
            })

            // route for the game modes page
            .state('app.beginner.gamemode', {
                url: 'gamemode',
                ncyBreadcrumb: {
                  label: 'modes de jeu'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/gamemode.html',
                        controller  : 'GamemodeController'
                    }
                }
            })

            // route for the contact us page
            .state('app.contactus', {
                url: 'contactus',
                ncyBreadcrumb: {
                  label: 'nous contacter'
                },
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactusController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
