'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('java', {
            parent: 'platform',
            url: '/java',
            views: {
                '@learn': {
                    templateUrl: 'scripts/app/learn/platform/java/java.html',
                    controller: 'JavaPlatformCtrl'
                }
            }
        });
    });
