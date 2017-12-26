# cssnano-browser

[![Greenkeeper badge](https://badges.greenkeeper.io/RyanZim/cssnano-browser.svg)](https://greenkeeper.io/)

This module allows you to use [cssnano](http://cssnano.co/) in the browser. It
will simply run cssnano with the default preset (except `svgo` is disabled, see
note below), and doesn't read any config files.

**NOTE:** [`postcss-svgo`](https://www.npmjs.com/package/postcss-svgo) is
enabled by default in cssnano; but it's disabled here due to browser
incompatibility. If somebody wants to figure out what's needed to get
`postcss-svgo` running in the browser, they're welcome to contribute!

`cssnano-browser` is a CommonJS module, you'll need to use browserify.

Built for use in https://github.com/RyanZim/postcss-repl

## License

Most of this code was originally written by Ben Briggs, and modified by Ryan
Zimmerman <opensrc@ryanzim.com>.

Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
