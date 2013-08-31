'use strict';

module.exports = function(grunt) {
    //load plugins
    [
        "grunt-contrib-jasmine",
        "grunt-contrib-testem",
        "grunt-contrib-clean",
        "grunt-contrib-coffee",
        "grunt-contrib-handlebars",
        "grunt-contrib-concat",
        "grunt-watch-nospawn"
    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        testem: {
            environment: {
                src: [
                    'vendor/**/*.js',
                    'src/**/*.coffee',
                    'spec/helpers/**/*.js',
                    'spec/**/*_spec.coffee'
                ],
                options: {
                    parallel: 8,
                    launch_in_ci: ['PhantomJS'],
                    launch_in_dev: ['PhantomJS', 'Chrome']
                }
            }
        }
    });

}