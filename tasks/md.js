// [grunt-html-md](https://github.com/neocotic/grunt-html-md)  
// (c) 2013 Alasdair Mercer  
// Freely distributable under the MIT license.  
// <https://github.com/neocotic/grunt-html-md>

module.exports = function(grunt) {

  'use strict';

  // Module dependencies
  // -------------------

  var md = require('html-md');
  var path = require('path');

  // Constants
  // ---------

  // Regular expression used to identify HTML files using common extensions.
  var R_HTML_EXT = /\.s?html?$/i;

  // Task
  // ----

  // Register the `md` multi-task.
  grunt.registerMultiTask('md', 'Convert HTML files into Markdown', function () {

    // Extract the user-defined `options` while falling back on predefined default values where
    // required.
    var options = this.options({
      inline:   false,
      longExt:  false,
      absolute: false
    });
    var sources = this.filesSrc;
    var extension = options.longExt ? '.markdown' : '.md';

    grunt.verbose.writeflags(options, 'Options');

    // Derive the target file using either the `output` option or parent directory of the `file` as
    // the target directory.  
    // The target file name will always be the base name of the `file` appended with the derived
    // target extension (i.e. `.markdown` if the `longExt` option is enabled; otherwise `.md`).
    function deriveTarget(file) {
      var dir  = options.output || path.dirname(file);
      var name = path.basename(file, path.extname(file));

      return path.join(dir, name + extension);
    }

    // Read the contents of the `source` file as HTML and convert it to Markdown using `md` using
    // the appropriate options.
    function convert(source) {
      var html   = grunt.file.read(source);
      var target = deriveTarget(source);

      grunt.log.write('Converting ' + path.basename(source) + '...');
      grunt.verbose.writeln('Contents read from file:', html);
      grunt.verbose.writeln('Derived target file: ' + target);

      var markdown = md(html, options);

      if (grunt.file.write(target, markdown || ' ')) {
        grunt.log.ok();
      }
    }

    // Ensure all source files are have their HTML contents converted into Markdown using `md`.  
    // If any of the sources resolve to a directory, recursively convert each file within that
    // directory (and any of its sub-directories) with an HTML extension.
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
