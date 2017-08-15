[![Build Status](https://travis-ci.org/victor-valencia/bootstrap-iconpicker.svg?branch=master)](https://travis-ci.org/victor-valencia/bootstrap-iconpicker)
[![Code Climate](https://codeclimate.com/github/victor-valencia/bootstrap-iconpicker/badges/gpa.svg)](https://codeclimate.com/github/victor-valencia/bootstrap-iconpicker)
[![npm](http://img.shields.io/npm/v/bootstrap-iconpicker.svg)](https://npmjs.org/package/bootstrap-iconpicker)
[![Bower](http://img.shields.io/bower/v/bootstrap-iconpicker.svg)](http://bower.io/search/?q=bootstrap-iconpicker)
[![Release](http://img.shields.io/github/release/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/releases)
[![Tag](http://img.shields.io/github/tag/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/tags)
[![Issues](http://img.shields.io/github/issues/victor-valencia/bootstrap-iconpicker.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/issues?q=is%3Aopen)
[![Issues](http://img.shields.io/badge/license-MIT-red.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/blob/master/LICENSE)

# [Bootstrap-Iconpicker](http://victor-valencia.github.io/bootstrap-iconpicker)

## Table of contents
- [What's next](#whats-next)
- [Changelog](#changelog)

## What´s next
- [ ] Support for multiple versions (v1.3.1, v1.3.2, v2.0.0, v2.0.1, v2.0.2, v2.0.3, v2.0.4, v2.0.5, v2.0.6, v2.0.7, v2.0.8, v2.0.9 and v2.0.10) of [Weather Icons](http://erikflowers.github.io/weather-icons/).

## Changelog
- [![v1.9.0](http://img.shields.io/badge/zip-v1.9.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.9.0.zip). (2017-Jul-27)
    - Includes all iconset files in file `bootstrap-iconpicker-iconset-all.js`.
    - Add option `iconsetVersion`.
    - Support for [Flag Icons v2.8.0](http://flag-icon-css.lip.is/).
    - Support for multiple versions (v2.0.1, v2.0.2, v2.0.3, v2.0.4, v2.0.5, v2.0.7, v2.0.8 and v2.0.9) of [Typicons](http://typicons.com).
    - Support for multiple versions (v2.0.0, v2.0.1, v2.0.2, v2.1.0, v2.1.1, v2.1.2, v2.2.0, v2.2.1, v2.2.2, v2.2.2, v2.3.0, v2.4.0, v2.4.1, v3.0.0, v3.1.0, v3.2.0, v3.3.0, v3.4.0, v3.4.1, v3.5.0, v4.0.0, v4.1.0, v4.1.1, v4.2.0, v4.2.1, v4.3.0 and v4.4.0) of [Octicons](https://octicons.github.com/).
    - Support for multiple versions (v2.0.0, v2.0.1, v2.0.2, v2.1.0, v2.1.1, v2.1.2 and v2.2.0) of [Material Design Icons](http://zavoloklom.github.io/material-design-iconic-font/).
    - Support for multiple versions (v2.0.1 @[ibrahimyilmaz7](https://github.com/ibrahimyilmaz7)) of [Ionicons](http://ionicons.com/).
- [![v1.8.2](http://img.shields.io/badge/zip-v1.8.2-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.8.2.zip). (2017-Jul-19)
    - Fix navigation to invalid pages.
    - Filling search/hidden inputs. @[s-belichenko-sold](https://github.com/s-belichenko-sold)
    - Search and filter case insensitive. @[mahmoud-asadi](https://github.com/mahmoud-asadi)
    - Support for [Bootstrap 3.3.7](http://getbootstrap.com/).
    - Update license to [MIT](https://github.com/victor-valencia/bootstrap-iconpicker/blob/master/LICENSE).
- [![v1.8.1](http://img.shields.io/badge/zip-v1.8.1-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.8.1.zip). (2017-Jul-18)
    - Support for [npm](https://www.npmjs.com) install.
- [![v1.8.0](http://img.shields.io/badge/zip-v1.8.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.8.0.zip). (2017-Jul-18)
    - Fix for case, when there are no icons, and count is displayed, as '1 - 0 of 0 '. @[joews](https://github.com/joews).
    - Support for multiple versions (v4.3.0 @[michaelbilcot](https://github.com/michaelbilcot), v4.4.0, v4.5.0, v4.6.0 and v4.7.0) of [Font Awesome Icons](http://fontawesome.io/).
- [![v1.7.0](http://img.shields.io/badge/zip-v1.7.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.7.0.zip). (2015-Jun-01)
    - Support for button and div tags.
    - All `iconset` includes the empty icon value.
    - Option `rows` accepts the value 0 to indicate all rows.
    - Add options:
        - `align`
        - `header`
        - `footer`
    - Add methods:
        - `setAlign`
        - `setHeader`
        - `setFooter`
    - Support for 1 more icon fonts:
        - [Material Design Icons v1.1.1](http://zavoloklom.github.io/material-design-iconic-font/)
- [![v1.6.0](http://img.shields.io/badge/zip-v1.6.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.6.0.zip). (2014-Nov-01)
    - Restructure `iconset` configuration.
    - Option `iconset` accepts `String` and `Object` (Limit your `iconset` option).
    - Add options:
        - `arrowPrevIconClass`
        - `arrowNextIconClass`
        - `labelHeader`
        - `labelFooter`
    - Add methods:
        - `setArrowClass`
        - `setArrowPrevIconClass`
        - `setArrowNextIconClass`
        - `setCols`
        - `setIconset`
        - `setLabelHeader`
        - `setLabelFooter`
        - `setPlacement`
        - `setRows`
        - `setSearch`
        - `setSearchText`
        - `setSelectedClass`
        - `setUnselectedClass`
    - Support for 6 more icon fonts:
        - [Elusive Icons v2.0.0](http://press.codes/downloads/elusive-icons-webfont/)
        - [Ionicons v1.5.2](http://ionicons.com/)
        - [Map Icons v2.1.0](http://map-icons.com/)
        - [Octicons v2.1.2](https://octicons.github.com/)
        - [Typicons v2.0.6](http://typicons.com)
        - [Weather Icons v1.2.0](http://erikflowers.github.io/weather-icons/)
- [![v1.5.0](http://img.shields.io/badge/zip-v1.5.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.5.0.zip). (2014-Oct-19)
    - Add search field.
- [![v1.4.0](http://img.shields.io/badge/zip-v1.4.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.4.0.zip). (2014-Oct-17)
    - Support for customization of the component.
- [![v1.3.1](http://img.shields.io/badge/zip-v1.3.1-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.3.1.zip). (2014-Oct-16)
    - Bind `body` `click` to solve issues for ajax loaded pages. @[crlcu](https://github.com/crlcu)
- [![v1.3.0](http://img.shields.io/badge/zip-v1.3.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.3.0.zip). (2014-Oct-16)
    - Support for multiple versions (v4.0.0, v4.1.0, v4.2.0) of [Font Awesome Icons](http://fontawesome.io/).
- [![v1.2.1](http://img.shields.io/badge/zip-v1.2.1-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.2.1.zip). (2014-Jun-27)
    - Add `.iconpicker-popover` class. @[jwhitfieldseed](https://github.com/jwhitfieldseed)
- [![v1.2.0](http://img.shields.io/badge/zip-v1.2.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.2.0.zip). (2014-Jan-20)
    - Add the method `setIcon`.
- [![v1.1.0](http://img.shields.io/badge/zip-v1.1.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.1.0.zip). (2013-Dec-16)
    - Dispatch `change` event when an iconpicker is changed. @[promatik](https://github.com/promatik)
- [![v1.0.1](http://img.shields.io/badge/zip-v1.0.1-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/v1.0.1.zip). (2013-Nov-20)
    - Reducing the size of the source file.
- [![v1.0.0](http://img.shields.io/badge/zip-v1.0.0-blue.svg)](https://github.com/victor-valencia/bootstrap-iconpicker/archive/1.0.0.zip). (2013-Nov-19)
    - Version initial.
