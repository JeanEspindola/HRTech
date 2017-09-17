'use strict';

var config = require('../grunt-config');

module.exports = function (grunt) {
    grunt.config('uglify', {

        appScripts: {
            files: [
                {
                    src: config.build.distScriptsFile,
                    dest: config.build.distScriptsFile
                }
            ]
        },
        vendor: {
            options: {
                compress: {
                    'drop_console': true
                }
            },
            files: [
                {
                    src: config.build.vendorScriptsFile,
                    dest: config.build.vendorScriptsFile
                }
            ]
        }
    });
};