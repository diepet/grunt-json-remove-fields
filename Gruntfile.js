/*
 * grunt-json-remove-fields
 * https://github.com/diepet/grunt-json-remove-fields
 *
 * Copyright (c) 2015 diepet
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    json_remove_fields: {
      package_json: {
          options: {
            fields: ['devDependencies'],
            space: 2
          },

          src: 'test/fixtures/sample.package.json',
          dest: 'tmp/sample.package.json'
      },
      sample_json: {
          options: {
            fields: ['magenta', 'black'],
            space: '\t'
          },

          src: 'test/fixtures/sample.file.json',
          dest: 'tmp/sample.file.json'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'json_remove_fields', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
