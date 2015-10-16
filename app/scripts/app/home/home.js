'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/home/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            });
    });
