// [grunt-html-md](https://github.com/neocotic/grunt-html-md)  
// (c) 2013 Alasdair Mercer  
// Freely distributable under the MIT license.  
// <https://github.com/neocotic/grunt-html-md>

module.exports = function(grunt) {

  'use strict';

  // Configure
  // ---------

  grunt.initConfig({

    clean: [ 'tmp' ],

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: { jshintrc: '.jshintrc' }
    },

    md: {
      convertAll: {
        src: [ 'test/fixtures' ],
        options: { output: 'tmp/all' }
      },
      convertHtml: {
        src: [ 'test/fixtures/*.html' ],
        options: { output: 'tmp/html' }
      },
      convertAbsolute: {
        src: [
          'test/fixtures/html1.html',
          'test/fixtures/shtml.shtml'
        ],
        options: {
          output: 'tmp/absolute',
          absolute: true
        }
      },
      convertBase: {
        src: [
          'test/fixtures/html1.html',
          'test/fixtures/shtml.shtml'
        ],
        options: {
          base: 'http://example.com/sub/',
          output: 'tmp/base',
          absolute: true
        }
      },
      convertInline: {
        src: [ 'test/fixtures/html1.html' ],
        options: {
          inline: true,
          output: 'tmp/inline'
        }
      },
      convertLong: {
        src: [ 'test/fixtures' ],
        options: {
          output: 'tmp/long',
          longExt: true
        }
      }
    },

    nodeunit: {
      tests: [ 'test/*_test.js' ]
    }

  });

  // Tasks
  // -----

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', [ 'clean', 'md', 'nodeunit' ]);
  grunt.registerTask('default', [ 'jshint', 'test' ]);

};
