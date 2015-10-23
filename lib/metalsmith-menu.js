'use strict';

module.exports = function () {
    return function menu(files, metalsmith, done) {
        for (var file in files) {
            if (typeof files[file].menu !== 'undefined') {
                console.log(file);
                console.log(files[file].menu);
            }
        }
        done();
    };
};
