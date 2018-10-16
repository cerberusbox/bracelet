const Assets = require('./assets');

module.exports = function (grunt) {
    const sass = require('node-sass');
    const Fiber = require('fibers');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            main: {
                files: Assets.map((asset) => {
                    return {
                        src: `./node_modules/${asset}`,
                        dest: `./wwwroot/3rd-party-assets/${asset}`
                    }
                })
            },
        },
        sass: {
            options: {
                implementation: sass,
			    fiber: Fiber,
                sourceMap: true
            },
            dist: {
                files: {
                  './wwwroot/css/Reset.css': './Scss/Reset.scss',
                  './wwwroot/css/Responsive.css': './Scss/Responsive.scss',
                  './wwwroot/css/Style.css': './Scss/Style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
    grunt.registerTask('Sass-build', ['sass']);
};