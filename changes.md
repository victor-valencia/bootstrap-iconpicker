## bootstrap-iconpicker multiple icon sets##

This change set attempts to enable multiple icon sets whilst maintaining backwards compatibility.

**note: Minimal Testing has been done.**

###Major Changes###

Specifying the iconsets (through data-attributes or via javascript) can be loaded by any of the following conventions.

`iconset = 'glyphicon|fontawesome'` with each registered name seperated by the `|` character. 
`iconset = ['glyphicon', 'fontawesome']` as a javascript string array.
`iconset = ['glyphicon', { ... custom set declaration }]` as a mixed array of strings or objects.

When using a mixed set or object declaration the custom sets are assigned a custom name using the existing naming + the index of the custom item starting from 1. Such as `_custom1`, `_custom2`.

