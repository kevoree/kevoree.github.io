'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('demo', {
                parent: 'app',
                url: '/demo',
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/demo/demo.html',
                        controller: 'DemoCtrl'
                    }
                }
            });
    });
