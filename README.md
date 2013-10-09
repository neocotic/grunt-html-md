                                 __
                                /\ \__
       __   _ __   __  __    ___\ \ ,_\
     /'_ `\/\`'__\/\ \/\ \ /' _ `\ \ \/
    /\ \L\ \ \ \/ \ \ \_\ \/\ \/\ \ \ \_
    \ \____ \ \_\  \ \____/\ \_\ \_\ \__\
     \/___L\ \/_/   \/___/  \/_/\/_/\/__/
       /\____/
       \_/__/
     __      __               ___                      __
    /\ \    /\ \__           /\_ \                    /\ \
    \ \ \___\ \ ,_\   ___ ___\//\ \        ___ ___    \_\ \
     \ \  _ `\ \ \/ /' __` __`\\ \ \     /' __` __`\  /'_` \
      \ \ \ \ \ \ \_/\ \/\ \/\ \\_\ \_ __/\ \/\ \/\ \/\ \L\ \
       \ \_\ \_\ \__\ \_\ \_\ \_\\____\\_\ \_\ \_\ \_\ \___,_\
        \/_/\/_/\/__/\/_/\/_/\/_//____//_/\/_/\/_/\/_/\/__,_ /

A [Grunt][] plugin for [html.md][] which converts [HTML][] files to valid [Markdown][] files.

[![Build Status](https://secure.travis-ci.org/neocotic/grunt-html-md.png)](http://travis-ci.org/neocotic/grunt-html-md)

## Getting Started

This plugin requires [Grunt][] `~0.4.0`.

If you haven't used [Grunt][] before, be sure to check out the [Getting Started][] guide, as it
explains how to create a [Gruntfile][] as well as install and use [Grunt][] plugins. Once you're
familiar with that process, you may install this plugin with this command:

``` bash
npm install grunt-html-md --save-dev
```

Once the plugin has been installed, it may be enabled inside your [Gruntfile][] with this line of
JavaScript:

``` javascript
grunt.loadNpmTasks('grunt-html-md');
```

## md task

*Run this task with the `grunt md` command.*

Task targets, files and options may be specified according to the grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### absolute

Type: `Boolean` Default: `false`

Parse all links and images with absolute URLS.

#### base

Type: `String` Default: `file://` + current working directory

Resolve all relative links and images from this URL. This option is only applicable when the
`absolute` option is enabled.

#### inline

Type: `Boolean` Default: `false`

Generate links using the inline style. For exampe; `[html.md](http://neocotic.com/html.md)`.

#### longExt

Type: `Boolean` Default: `false`

Create Markdown files with the long file extension (i.e. `.markdown`).

## Usage examples

``` javascript
md: {
  convert: {
    src: [ 'path/to/*.html' ],
    options: {
      output: 'path/to/dest'
    }
  },

  convertBase: {
    src: [
      'path/to/source.html',
      'path/to/more/*.html'
    ],
    options: {
      base: 'http://neocotic.com/html.md',
      output: 'path/to/dest',
      absolute: true
    }
  }
}
```

If no `output` option is specified then the Markdown file will be created in the same directory as
the source file.

## Windows

A lot of care has been put in to ensure [html.md][] runs well on Windows. Unfortunately, one of the
dependencies of the [jsdom][] library, which we depend on to emulate a DOM within the [node.js][]
environment, does not build well on Windows systems since it's built using "native modules" that
are compiled during installation. [Contextify][], the inherited dependency in question, is used to
run `<script>` contents safely in a sandbox environment and is required to properly parse DOM
objects into valid [Markdown][].

Fortunately, the author has documented some techniques to get it building on your Windows system in
a [Windows installation guide][].

## Bugs

If you have any problems with this plugin or would like to see the changes currently in development
you can do so here;

https://github.com/neocotic/grunt-html-md/issues

## Questions?

Take a look at code in `tasks/md.js` to get a better understanding of what is going on.

If that doesn't help, feel free to follow me on Twitter, [@neocotic][].

Also, if you want more information or examples of using the [html.md][] library without [Grunt][],
please visit the main project's homepage;

http://neocotic.com/html.md

[@neocotic]: https://twitter.com/neocotic
[contextify]: https://github.com/brianmcd/contextify
[getting started]: http://gruntjs.com/getting-started
[grunt]: http://gruntjs.com
[gruntfile]: http://gruntjs.com/sample-gruntfile
[html]: http://en.wikipedia.org/wiki/HTML
[html.md]: http://neocotic.com/html.md
[jsdom]: https://github.com/tmpvar/jsdom
[markdown]: http://en.wikipedia.org/wiki/Markdown
[node.js]: http://nodejs.org
[windows installation guide]: https://github.com/brianmcd/contextify/wiki/Windows-Installation-Guide
