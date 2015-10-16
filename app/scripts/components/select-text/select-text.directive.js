'use strict';

angular.module('select-text', [])
    .directive('selectText', function() {
        return {
            restrict: 'A',
            link: function(scope, elem) {
                var doc = document,
                    text = doc.getElementById(elem),
                    range, selection;
                if (doc.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(text);
                    range.select();
                } else if (window.getSelection) {
                    selection = window.getSelection();
                    range = document.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        };
    });
