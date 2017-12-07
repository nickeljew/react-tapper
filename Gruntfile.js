"use strict";

var webpack_cfg = require('./webpack.config')

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            react: 'examples/react/16.x',
            modules: 'node_modules',
        },
        tag: {
            banner: '/*!\n'
            + ' * <%= pkg.name %>\n'
            + ' * @version <%= pkg.version %>\n'
            + ' */\n',
        },
        concat: {
            react: {
                options: {
                    separator: '\n'
                },
                files: {
                    '<%= project.react %>/react.min.js': [
                        '<%= project.modules %>/react/umd/react.production.min.js',
                    ],
                    '<%= project.react %>/react-dom.min.js': [
                        '<%= project.modules %>/react-dom/umd/react-dom.production.min.js',
                    ],
                    '<%= project.react %>/prop-types.min.js': [
                        '<%= project.modules %>/prop-types/prop-types.min.js',
                    ],
                },
            },
        },
        babel: {
            options: {
                //sourceMap: true,
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: './src',
                        src: [ '**/*.jsx', '**/*.es6' ],
                        dest: './lib',
                        ext: '.js',
                    },
                ],
            },
        },
        webpack: {
            demo: webpack_cfg,
        },
    })

    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-webpack')
    grunt.loadNpmTasks('grunt-contrib-concat')


    grunt.registerTask('default', ['babel'])
    grunt.registerTask('dev', ['webpack:demo', 'babel'])

}