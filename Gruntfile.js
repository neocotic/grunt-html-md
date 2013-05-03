// [grunt-html-md](https://github.com/neocotic/grunt-html-md)  
// (c) 2013 Alasdair Mercer  
// Freely distributable under the MIT license.  
// <https://github.com/neocotic/grunt-html-md>

module.exports = function(grunt) {

  'use strict';

  // Configure
  // ---------

  grunt.initConfig({

      jshint: {
          all: [
              'Gruntfile.js'
            , 'tasks/*.js'
            , '<%= nodeunit.tests %>'
          ]
        , options: {
            jshintrc: '.jshintrc'
          }
      }

    , md: {
        // TODO: Run configs to be tested later
      }

    , nodeunit: {
        tests: ['test/*_test.js']
      }

  });

  // Tasks
  // -----

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['md', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);

};
