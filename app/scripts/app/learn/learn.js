'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('learn', {
                parent: 'app',
                url: '/learn',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/learn/learn.html',
                        controller: 'LearnCtrl'
                    },
                    '@learn': {
                        templateUrl: 'scripts/app/learn/learn-intro.html'
                    }
                },
                ncyBreadcrumb: {
                    label: 'Learn'
                }
            });
    });
