'use strict';

angular.module('highlight', [])
    .directive('highlight', function () {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                hljs.highlightBlock(elem.get(0));
            }
        };
    });
