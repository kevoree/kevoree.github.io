'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('js', {
            parent: 'platform',
            url: '/js',
            views: {
                '@learn': {
                    templateUrl: 'scripts/app/learn/platform/js/js.html',
                    controller: 'JsPlatformCtrl'
                }
            }
        });
    });
