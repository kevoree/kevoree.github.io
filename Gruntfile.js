var metalsmithConfig = require('./metalsmith.json');

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['src/{,**/}*.*'],
                tasks: ['metalsmith'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
        },

        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: 'build'
                }
            }
        },

        metalsmith: {
            options: metalsmithConfig
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-metalsmith');

    grunt.registerTask('default', ['metalsmith']);
    grunt.registerTask('serve', ['connect:livereload', 'watch']);
};
