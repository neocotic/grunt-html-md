# Options

## absolute

Type: `Boolean` Default: `false`

Parse all links and images with absolute URLS.

## base

Type: `String` Default: `file://` + current working directory

Resolve all relative links and images from this URL. This option is only applicable when the
`absolute` option is enabled.

## inline

Type: `Boolean` Default: `false`

Generate links using the inline style. For exampe; `[html.md](http://neocotic.com/html.md)`.

## longExt

Type: `Boolean` Default: `false`

Create Markdown files with the long file extension (i.e. `.markdown`).