'use strict';

angular.module('app', [
    'ui.router',
    'highlight',
    'ncy-angular-breadcrumb'
]).config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', { abstract: true });

}).run(function($rootScope, $state) {
    $rootScope.$state = $state;
    hljs.initHighlightingOnLoad();
});
