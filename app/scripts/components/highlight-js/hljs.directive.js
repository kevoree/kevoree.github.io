'use strict';

angular.module('hljs', [])
    .directive('hljs', function () {
        return {
            restrict: 'A',
            link: function (scope, elem) {
                hljs.highlightBlock(elem.get(0));
            }
        };
    });
