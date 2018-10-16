[![Build Status](https://travis-ci.org/victor-valencia/bootstrap-iconpicker.svg?branch=master)](https://travis-ci.org/victor-valencia/bootstrap-iconpicker)
[![Code Climate](https://codeclimate.com/github/victor-valencia/bootstrap-iconpicker/badges/gpa.svg)](https://codeclimate.com/github/victor-valencia/bootstrap-iconpicker)
[![npm](http://img.shields.io/npm/v/bootstrap-iconpicker.svg)](https://npmjs.org/package/bootstrap-iconpicker)
[![Bower](http://img.shields.io/bower/v/bootstrap-iconpicker.svg)](http://bower.io/search/?q=bootstrap-iconpicker)
[![Release](http://img.shields.io/github/release/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/releases)
[![Tag](http://img.shields.io/github/tag/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/tags)
[![Issues](http://img.shields.io/github/issues/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/issues?q=is%3Aopen)
[![Issues](http://img.shields.io/badge/license-MIT-red.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/blob/master/LICENSE)

# [Bootstrap-Iconpicker v1.10.0](http://victor-valencia.github.io/bootstrap-iconpicker)
![Iconpicker](bootstrap-iconpicker_4x.png)

A simple iconpicker for Bootstrap 3.x and 4.x.

Please note that this project is for [Bootstrap 3.x and 4.x](http://getbootstrap.com/), including Glyphicons in Bootstrap 3.x.
Other icon fonts thats supports: [Elusive Icons](http://press.codes/downloads/elusive-icons-webfont/), [Font Awesome](http://fontawesome.io/), [Ionicons](http://ionicons.com/), [Map Icons](http://map-icons.com/), [Material Design Icons](http://zavoloklom.github.io/material-design-iconic-font/), [Octicons](https://octicons.github.com/), [Typicons](http://typicons.com), [Weather Icons](http://erikflowers.github.io/weather-icons/), [Flag Icons](http://flag-icon-css.lip.is/).

## Table of contents
- [Quick start](#quick-start)
- [CDN](#cdn)
- [What's included](#whats-included)
- [Supported iconset](#supported-iconset)
- [Documentation and live examples](#documentation-and-live-examples)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [What's next and changelog](#whats-next-and-changelog)
- [Versioning](#versioning)
- [Author](#author)
- [Contributors](#contributors)
- [License](#license)
- [Used by](#used-by)

## Quick start

Several quick start options are available:

- Download the latest release: [![Tag](http://img.shields.io/github/release/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.10.0.zip).
- Clone the repo: `git clone https://github.com/victor-valencia/bootstrap-iconpicker.git`.
- Install with [Bower](http://bower.io): `bower install bootstrap-iconpicker`.
- Install with [npm](https://www.npmjs.com): `npm install bootstrap-iconpicker`.

## CDN

The [CDN](https://cdnjs.com/libraries/bootstrap-iconpicker) is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN. Check the GitHub page for the latest release.

- [https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/css/bootstrap-iconpicker.min.css](https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/css/bootstrap-iconpicker.min.css)
- [https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker-iconset-all.min.js](https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker-iconset-all.min.js)
- [https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker.bundle.min.js](https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker.bundle.min.js)
- [https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker.min.js](https://cdnjs.cloudflare.com/ajax/libs/bootstrap-iconpicker/1.10.0/js/bootstrap-iconpicker.min.js)

### What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap-iconpicker/
├── css/
│   ├── bootstrap-iconpicker.css
│   ├── bootstrap-iconpicker.min.css
├── js/
│   ├── bootstrap-iconpicker-iconset-all.js
│   ├── bootstrap-iconpicker-iconset-all.min.js
│   ├── bootstrap-iconpicker.bundle.min.js
│   ├── bootstrap-iconpicker.js
│   └── bootstrap-iconpicker.min.js
```

We provide compiled CSS and JS (`bootstrap-iconpicker.*`), as well as compiled and minified CSS and JS (`bootstrap-iconpicker.min.*`).

All iconset includes in previous versions are included in file (`bootstrap-iconpicker-iconset-all.js`) compiled and (`bootstrap-iconpicker-iconset-all.min.js`) minified.

Files (`bootstrap-iconpicker-iconset-all.min.js`) and (`bootstrap-iconpicker.min.js`) are included in bundle version (`bootstrap-iconpicker.bundle.min.js`).

## Supported Iconset
You can see all suported iconset in [this doc](docs/SUPPORTED.md).

## Documentation and live examples
See documentation and live examples here: [http://victor-valencia.github.io/bootstrap-iconpicker](http://victor-valencia.github.io/bootstrap-iconpicker)

## Bugs and feature requests
Have a bug or a feature request? [Please open a new issue](https://github.com/victor-valencia/bootstrap-iconpicker/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).
You may use [this JSFiddle](http://jsfiddle.net/victor_valencia/y1q541ar/) as a template for your bug reports.

## What's next and changelog
You can see what's next and changelog in [this doc](docs/CHANGELOG.md).

## Versioning
For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap-Iconpicker is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

## Author
@[victor-valencia](https://github.com/victor-valencia)

## Contributors
@[victor-valencia](https://github.com/victor-valencia), @[promatik](https://github.com/promatik), @[jwhitfieldseed](https://github.com/jwhitfieldseed), @[crlcu](https://github.com/crlcu), @[michaelbilcot](https://github.com/michaelbilcot), @[joews](https://github.com/joews), @[s-belichenko-sold](https://github.com/s-belichenko-sold), @[mahmoud-asadi](https://github.com/mahmoud-asadi), @[ibrahimyilmaz7](https://github.com/ibrahimyilmaz7)

## License
Licensed under [the MIT license](LICENSE).

## Used by
- [Cake Cup](http://cake-cup.herokuapp.com/)
- [SAPRIGRAT](http://www.saprigrat.mx/)
- [KML App](http://kml-riegotec.herokuapp.com/)
- [Opti Riego](http://optiriego.herokuapp.com/)

Does your organization use bootstrap-iconpicker?
Open an issue, and include a link, and you'll be added to the list.
