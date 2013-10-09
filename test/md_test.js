'use strict';

// Module dependencies
// -------------------

var path = require('path');
var grunt = require('grunt');

// Data
// ----

var data = {
  absolute: function(relative) {
    return path.resolve(process.cwd(), '..', relative);
  }
};

// Helpers
// -------

function readFile(file) {
  var contents = grunt.file.read(file);

  if (process.platform === 'win32') {
    contents = contents.replace(/\r\n/g, '\n');
  }

  return contents;
}

function assertFileEquality(test, actualPath, expectedPath, message) {
  var actual = readFile(actualPath);
  var expected = grunt.template.process(readFile(expectedPath), { data: data });

  test.equal(expected, actual, message);
}

function assertFileExists(test, file, message) {
  test.ok(grunt.file.exists(file), message);
}

// Tests
// -----

exports.md = {
  convertAll: function(test) {
    test.expect(4);

    assertFileEquality(
      test,
      'tmp/all/htm.md',
      'test/expected/default/htm.md',
      'Should convert HTM file to Markdown'
    );

    assertFileEquality(
      test,
      'tmp/all/html1.md',
      'test/expected/default/html1.md',
      'Should convert HTML file to Markdown'
    );

    assertFileEquality(
      test,
      'tmp/all/html2.md',
      'test/expected/default/html2.md',
      'Should convert HTML file to Markdown'
    );

    assertFileEquality(
      test,
      'tmp/all/shtml.md',
      'test/expected/default/shtml.md',
      'Should convert SHTML file to Markdown'
    );

    test.done();
  },

  convertHtml: function(test) {
    test.expect(2);

    assertFileEquality(
      test,
      'tmp/html/html1.md',
      'test/expected/default/html1.md',
      'Should convert HTML file to Markdown'
    );

    assertFileEquality(
      test,
      'tmp/html/html2.md',
      'test/expected/default/html2.md',
      'Should convert HTML file to Markdown'
    );

    test.done();
  },

  convertAbsolute: function(test) {
    test.expect(2);

    assertFileEquality(
      test,
      'tmp/absolute/html1.md',
      'test/expected/absolute/html1.md',
      'Should convert HTML file to Markdown with absolute link URLs'
    );

    assertFileEquality(
      test,
      'tmp/absolute/shtml.md',
      'test/expected/absolute/shtml.md',
      'Should convert HTML file to Markdown with absolute images URLs'
    );

    test.done();
  },

  convertBase: function(test) {
    test.expect(2);

    assertFileEquality(
      test,
      'tmp/base/html1.md',
      'test/expected/base/html1.md',
      'Should convert HTML file to Markdown with absolute link URLs relative to base URL'
    );

    assertFileEquality(
      test,
      'tmp/base/shtml.md',
      'test/expected/base/shtml.md',
      'Should convert HTML file to Markdown with absolute images URLs relative to base URL'
    );

    test.done();
  },

  convertInline: function(test) {
    test.expect(1);

    assertFileEquality(
      test,
      'tmp/inline/html1.md',
      'test/expected/inline/html1.md',
      'Should convert HTML file to Markdown with inline link URLs'
    );

    test.done();
  },

  convertLong: function(test) {
    test.expect(4);

    assertFileExists(
      test,
      'tmp/long/htm.markdown',
      'Should convert HTM file to Markdown with long file name'
    );

    assertFileExists(
      test,
      'tmp/long/html1.markdown',
      'Should convert HTML file to Markdown with long file name'
    );

    assertFileExists(
      test,
      'tmp/long/html2.markdown',
      'Should convert HTML file to Markdown with long file name'
    );

    assertFileExists(
      test,
      'tmp/long/shtml.markdown',
      'Should convert SHTML file to Markdown with long file name'
    );

    test.done();
  }
};
