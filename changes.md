## bootstrap-iconpicker multiple icon sets##

This change set attempts to enable multiple icon sets whilst maintaining backwards compatibility.

**note: Minimal Testing has been done.**

###Major Changes###

####Icon Set Loading####

Specifying the iconsets (through data-attributes or via javascript) can be loaded by any of the following conventions.

`iconset = 'glyphicon|fontawesome'` with each registered name seperated by the `|` character. 
`iconset = ['glyphicon', 'fontawesome']` as a javascript string array.
`iconset = ['glyphicon', { ... custom set declaration }]` as a mixed array of strings or objects.

When using a mixed set or object declaration the custom sets are assigned a custom name using the existing naming + the index of the custom item starting from 1. Such as `_custom1`, `_custom2`.

When the method `setIconset` is called the methods of building the icon sets works differnly. The initial value is concatonated into an array such as

`value = [].contact(value)` which will allow support for both string values and array values. Next each item in array is evaluted to determine if it is a custom iconset (via `$.isPlainObject(...);`). Each set is registered into the `options.iconSet` as a new representation of the original value where the list will look like
    
`this.options.iconset = { 'glyphicon', 'fontawesome', '_custom1', '_custom2' }`

After the icon set is finshed the option set is re-evaluated and all icons are parsed out of the iconsets into a local cache of objects. This was done to improve the search performance over multiple icon sets (less loops). Example of an icon cache is an object:
`{ icon : 'icon-string', iconClass: 'icon class (ie glyphicon)', iconClassFix: 'icon class prefix such as fa-'}`

Finally the cached icons are stored into the options variable as `this.options.cacheset`

####Matching Method####
Now in the current version the matching was easy as it was based on the current loaded icon set. With multiple icon sets a new way of figuring out a match had to be done. 

When only one iconset is present the matching works similar by matching the `icon.iconClassFix + icon.icon` resulting in (fontawesome) `fa-times`. 

If there are multiple iconsets it gets a little tricker as we match on the first matching icon however we give more options. A method such as below was added.

    Iconpicker.prototype.matchEx = function (opIcon, icon) {
        return icon === opIcon.icon ||
               icon === opIcon.iconClassFix + opIcon.icon ||
               icon === opIcon.iconClass + ' ' + opIcon.iconClassFix + opIcon.icon ||
               icon.replace(opIcon.iconClassFix, '') == opIcon.icon;
    };

This method takes two parameters:
1. `opIcon` : This is the icon from the `options.cacheset` (probably a very bad name)
2. `icon` : This is the matching string (probably another bad name)
 
When executed this method should be able to match an icon by its simple name such as `times`, by its class prefixed name such as `fa-times`, the full icon name such as `fa fa-times` and finally the redundant [original] check (as the first statement should match this).

This method has been used in the `select` method and the `switchPage` method to try and locate a suitable icon to select. *Note:* only the first match will be returned.

####Select Method####
To maintain backwards compatiability the search allows for the original term `fa-times`, but also the search terms from the `matchEx` method of.

1. `times` : THe icon name without class prefix
2. `fa-times` : The icon with class prefix
3. `fa fa-times`: The full icon class including vendor code
 
To handle multiple iconsets the `options.icon` string will be set appropriatly. If there is only one iconset then the icon value will be `iconClassPrefix + iconName`, whereas with multiple types is `iconVendorClass + space + iconClassPrefix + iconName`. This name will also be passed to the `change` event handlers.
