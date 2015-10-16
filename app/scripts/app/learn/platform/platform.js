'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('platform', {
            parent: 'learn',
            url: '/platform',
            views: {
                '': {
                    templateUrl: 'scripts/app/learn/platform/platform.html',
                    controller: 'PlatformCtrl'
                }
            }
        });
    });
