'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('kevscript', {
            parent: 'learn',
            url: '/platform',
            views: {
                '': {
                    templateUrl: 'scripts/app/learn/kevscript/kevscript.html'
                }
            }
        });
    });
