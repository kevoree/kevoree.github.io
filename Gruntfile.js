var metalsmithConfig = require('./metalsmith.json');

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['src/{,**/}*.*'],
                tasks: ['metalsmith'],
                options: {
                    livereload: true
                }
            },
        },

        metalsmith: {
            options: metalsmithConfig
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-metalsmith');
};
