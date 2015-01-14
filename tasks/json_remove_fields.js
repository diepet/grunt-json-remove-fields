/*
 * grunt-json-remove-fields
 * https://github.com/diepet/grunt-json-remove-fields
 *
 * Copyright (c) 2015 diepet
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('json_remove_fields', 'A Grunt task to remove specified fields in JSON files.', function() {

      var options = this.options({
        space: null
      });

      this.files.forEach(function (file) {
        file.src.forEach(function (srcPath) {
          // read src file as JSON object
          var srcJSON = grunt.file.readJSON(srcPath);

          // getting destination file, default to srcPath
          var dest = file.dest || srcPath;

          // getting fields to remove
          var fields = options.fields;
          if (!Array.isArray(fields)) {
            // abort execution
            grunt.log.error('No fields array specified');
          }

          // deleting specified fields from JSON object
          fields.forEach(function (field) {
            delete srcJSON[field];
          });

          // serialize JSON to file again
          grunt.file.write(dest, JSON.stringify(srcJSON, null, options.space));
          grunt.log.writeln("Removed fields [" + fields + "] from " + srcPath + " into " + dest);
        });
      });

  });

};
