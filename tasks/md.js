// [grunt-html-md](https://github.com/neocotic/grunt-html-md)  
// (c) 2013 Alasdair Mercer  
// Freely distributable under the MIT license.  
// <https://github.com/neocotic/grunt-html-md>

module.exports = function(grunt) {

  'use strict';

  // Module dependencies
  // -------------------

  var md   = require('md')
    , path = require('path');

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
      var dir  = outputs.output || path.dirname(file)
        , name = path.basename(file, path.extname(file));

      return path.join(dir, name + extension);
    }

    sources.forEach(function (source) {
      var html   = grunt.file.read(source)
        , target = deriveTarget(source);

      // TODO: Log stuff!

      var markdown = md(html, options);

      grunt.file.write(target, markdown || ' ');
    });

  });

};
