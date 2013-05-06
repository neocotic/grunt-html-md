# Usage examples

``` javascript
md: {
  convert: {
    src: ['path/to/*.html'],
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
      absolute: true,
      base: 'http://neocotic.com/html.md',
      output: 'path/to/dest'
    }
  }
}
```

If no `output` is specified then the Markdown file will be created in the same directory as the
source file.