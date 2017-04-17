"use strict";

var webpack_cfg = require('./webpack.config')

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , tag: {
            banner: '/*!\n'
            + ' * <%= pkg.name %>\n'
            + ' * @version <%= pkg.version %>\n'
            + ' */\n'
        }
        , babel: {
            options: {
                //sourceMap: true
            }
            , dist: {
                files: [
                    {
                        expand: true
                        , cwd: './src'
                        , src: [ '**/*.jsx', '**/*.es6' ]
                        , dest: './lib'
                        , ext: '.js'
                    }
                ]
            }
        }
        , webpack: {
            demo: webpack_cfg
        }
    })

    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-webpack')


    grunt.registerTask('default', ['babel'])
    grunt.registerTask('dev', ['webpack:demo', 'babel'])

}