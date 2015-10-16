'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider.state('dotnet', {
            parent: 'platform',
            url: '/dotnet',
            views: {
                '@learn': {
                    templateUrl: 'scripts/app/learn/platform/dotnet/dotnet.html',
                    controller: 'DotnetPlatformCtrl'
                }
            }
        });
    });
