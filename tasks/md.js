// [grunt-html-md](https://github.com/neocotic/grunt-html-md)  
// (c) 2013 Alasdair Mercer  
// Freely distributable under the MIT license.  
// <https://github.com/neocotic/grunt-html-md>

module.exports = function(grunt) {

  'use strict';

  // Module dependencies
  // -------------------

  var md   = require('html-md')
    , path = require('path');

  // Constants
  // ---------

  // Regular expression used to identify HTML files using common extensions.
  var R_HTML_EXT = /\.s?html?$/i;

  // Task
  // ----

  grunt.registerMultiTask('md', 'Convert HTML files into Markdown', function () {

    var options   = this.options({
            absolute: false
          , inline:   false
          , longExt:  false
        })
      , extension = options.longExt ? '.markdown' : '.md'
      , sources   = this.filesSrc;

    grunt.verbose.writeflags(options, 'Options');

    function deriveTarget(file) {
      var dir  = options.output || path.dirname(file)
        , name = path.basename(file, path.extname(file));

      return path.join(dir, name + extension);
    }

    function convert(source) {
      var html   = grunt.file.read(source)
        , target = deriveTarget(source);

      grunt.log.write('Converting ' + path.basename(source) + '...');
      grunt.verbose.writeln('Contents read from file:', html);
      grunt.verbose.writeln('Derived target file: ' + target);

      var markdown = md(html, options);

      if (grunt.file.write(target, markdown || ' ')) {
        grunt.log.ok();
      }
    }

    sources.forEach(function (source) {
      if (grunt.file.isDir(source)) {
        grunt.verbose.writeln('Converting files in directory: ' + source);

        grunt.file.recurse(source, function (file) {
          grunt.verbose.writeln('Checking for HTML-ish extension: ' + file);

          if (R_HTML_EXT.test(path.extname(file))) {
            convert(file);
          }
        });
      } else {
        convert(source);
      }
    });

  });

};
