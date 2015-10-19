'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('platform', {
            parent: 'learn',
            url: '/kevscript',
            views: {
                '': {
                    templateUrl: 'scripts/app/learn/platform/platform.html'
                }
            }
        });
    });
