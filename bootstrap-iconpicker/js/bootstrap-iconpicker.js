/* ========================================================================
 * Bootstrap: bootstrap-iconpicker.js v2.0.0 by @recktoner
 * https://victor-valencia.github.com/bootstrap-iconpicker
 * ========================================================================
 * Copyright 2013-2014 Victor Valencia Rico.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function ($) { "use strict";

    // ICONPICKER PUBLIC CLASS DEFINITION
    // ==============================
    var Iconpicker = function (element, options) {
      this.$element = $(element);
      this.options  = $.extend({}, Iconpicker.DEFAULTS, this.$element.data());
      this.options  = $.extend({}, this.options, options);
    };
    
    // ICONPICKER ICONSET_EMPTY
    // ==============================
    Iconpicker.ICONSET_EMPTY = {
        iconClass: '',
        iconClassFix: '',
        icons: []
    };

    // ICONPICKER ICONSET
    // ==============================
    Iconpicker.ICONSET = {
        _custom: null,
        elusiveicon: $.iconset_elusiveicon || Iconpicker.ICONSET_EMPTY,
        fontawesome: $.iconset_fontawesome || Iconpicker.ICONSET_EMPTY,
        ionicon: $.iconset_ionicon || Iconpicker.ICONSET_EMPTY,
        glyphicon: $.iconset_glyphicon || Iconpicker.ICONSET_EMPTY,        
        mapicon: $.iconset_mapicon || Iconpicker.ICONSET_EMPTY,
        octicon: $.iconset_octicon || Iconpicker.ICONSET_EMPTY,
        typicon: $.iconset_typicon || Iconpicker.ICONSET_EMPTY,
        weathericon: $.iconset_weathericon || Iconpicker.ICONSET_EMPTY
    };

    // ICONPICKER DEFAULTS
    // ==============================
    Iconpicker.DEFAULTS = {
        arrowClass: 'btn-primary',
        arrowNextIconClass: 'glyphicon glyphicon-arrow-right',
        arrowPrevIconClass: 'glyphicon glyphicon-arrow-left',
        cols: 4,
        icon: '',
        iconset: 'glyphicon',
        labelHeader: '{0} / {1}',
        labelFooter: '{0} - {1} of {2}',
        placement: 'bottom',
        rows: 4,
        search: true,
        searchText: 'Search icon',
        selectedClass: 'btn-warning',
        unselectedClass: 'btn-default'
    };

    // ICONPICKER PRIVATE METHODS
    // ==============================    
    Iconpicker.prototype.bindEvents = function () {
        var op = this.options;
        var el = this;
        op.table.find('.btn-previous, .btn-next').off('click').on('click', function() {
            var inc = parseInt($(this).val());
            el.changeList(op.page + inc);
        });
        op.table.find('.btn-icon').off('click').on('click', function() {
            el.select($(this).val());
            el.$element.popover('destroy');
        });
        op.table.find('.search-control').off('keyup').on('keyup', function() {
            el.changeList(1);
        });
    };
    
    Iconpicker.prototype.changeList = function (page) {
        var op = this.options;
        var search = op.table.find('.search-control').val();
        if (search == "") {
            op.icons = Iconpicker.ICONSET[op.iconset].icons;
        }
        else {
            var result = [];
            $.each(Iconpicker.ICONSET[op.iconset].icons, function(i, v) {
               if (v.indexOf(search) > -1) result.push(v);
            });
            op.icons = result;
        }
        this.updateLabelBar(page);
        var tbody = op.table.find('tbody').empty();
        var offset = (page - 1) * op.rows * op.cols;
        for (var i = 0; i < op.rows; i++) {
            var tr = $('<tr></tr>');
            for (var j = 0; j < op.cols; j++) {
                var pos = offset + (i * op.cols) + j;
                var btn = $('<button class="btn ' + op.unselectedClass + ' btn-icon"></button>').hide();
                if (pos < op.icons.length) {
                    var v = op.iconClassFix + op.icons[pos];
                    btn.val(v).attr('title', v).append('<i class="' + op.iconClass + ' ' + v + '"></i>').show();
                    if (op.icon == v) {
                        btn.addClass(op.selectedClass);
                        btn.addClass('btn-icon-selected');
                    }
                }
                var td = $('<td></td>').append(btn);
                tr.append(td);
            }
            tbody.append(tr);
        }
        op.page = page;
        this.bindEvents();
    };
    
    Iconpicker.prototype.select = function (icon) {
        var op = this.options;
        var el = this.$element;
        op.selected = $.inArray(icon.replace(op.iconClassFix, ''), op.icons);
        if (op.selected == -1) {
            op.selected = 0;
            icon = op.iconClassFix + op.icons[op.selected];
        }
        if (icon != '' && op.selected >= 0) {
            op.icon = icon;
            el.find('input').val(icon);
            el.find('i').attr('class', '').addClass(op.iconClass).addClass(icon);
            el.trigger({ type: "change", icon: icon });
            op.table.find('button.' + op.selectedClass).removeClass(op.selectedClass);
        }
    };

    Iconpicker.prototype.switchPage = function (icon) {
        var op = this.options;
        op.selected = $.inArray(icon.replace(op.iconClassFix, ''), op.icons);
        if (icon != '' && op.selected >= 0) {
            var page = Math.ceil((op.selected + 1) / (op.cols * op.rows));
            this.changeList(page);
        }        
        op.table.find('i.' + icon).parent().addClass(op.selectedClass);
    };
        
    Iconpicker.prototype.updateLabelBar = function (page) {
        var op = this.options;
        var length = op.icons.length;
        var total_pages = Math.ceil( length / (op.cols * op.rows) );
        op.table.find('.page-count').html(op.labelHeader.replace('{0}', (total_pages == 0 ) ? 0 : page).replace('{1}', total_pages));
        var offset = (page - 1) * op.rows * op.cols;
        var total = page * op.rows * op.cols;
        op.table.find('.icons-count').html(op.labelFooter.replace('{0}', offset + 1).replace('{1}', (total < length) ? total: length).replace('{2}', length));
        var btn_prev = op.table.find('.btn-previous');
        var btn_next = op.table.find('.btn-next');
        (page == 1) ? btn_prev.addClass('disabled') : btn_prev.removeClass('disabled');
        (page == total_pages || total_pages == 0) ? btn_next.addClass('disabled') : btn_next.removeClass('disabled');
    };
    
    Iconpicker.prototype.updateNavigationBar = function () {
        var op = this.options;
        if (op.cols < 4) {
            throw 'Iconpicker => The number of columns must be greater than or equal to 4. [option.cols = ' + op.cols + ']';
        }
        else if (op.rows < 1) {
            throw 'Iconpicker => The number of rows must be greater than or equal to 1. [option.rows = ' + op.rows + ']';
        }
        else {
            var tr = $('<tr></tr>');
            for (var i = 0; i < op.cols; i++) {
                var btn = $('<button class="btn btn-arrow ' + op.arrowClass + '"><span></span></button>');
                var td = $('<td class="text-center"></td>');
                if (i == 0 || i == op.cols - 1) {
                    btn.val((i==0) ? -1 : 1);
                    btn.addClass((i==0) ? 'btn-previous' : 'btn-next');
                    btn.find('span').addClass( (i == 0) ? op.arrowPrevIconClass : op.arrowNextIconClass);
                    td.append(btn);
                    tr.append(td);
                }
                else if (tr.find('.page-count').length == 0) {
                    td.attr('colspan', op.cols - 2).append('<span class="page-count"></span>');
                    tr.append(td);
                }
            }            
            op.table.find('thead').empty().append(tr);
            var search = [
                '<tr>',
                '   <td colspan="' + op.cols + '">',
                '       <input type="text" class="form-control search-control" style="width: ' + op.cols * 39 + 'px;" placeholder="' + op.searchText + '">',
                '   </td>',
                '</tr>'
            ];
            search = $(search.join(''));
            (op.search == true) ? search.show() : search.hide();
            op.table.find('thead').append(search);
            var icons_count = [
                '<tr>',
                '   <td colspan="' + op.cols + '" class="text-center">',
                '       <span class="icons-count"></span>',
                '   </td>',
                '</tr>'
            ];
            op.table.find('tfoot').empty().append(icons_count.join(''));
        }
    };
    
    // ICONPICKER PUBLIC METHODS
    // ==============================    
    Iconpicker.prototype.setArrowClass = function (value) {
        var op = this.options;
        op.table.find('.btn-arrow').removeClass(op.arrowClass).addClass(value);
        op.arrowClass = value;
    };
    
    Iconpicker.prototype.setArrowNextIconClass = function (value) {
        var op = this.options;
        op.table.find('.btn-next > span').removeClass(op.arrowNextIconClass).addClass(value);
        op.arrowNextIconClass = value;
    };
    
    Iconpicker.prototype.setArrowPrevIconClass = function (value) {
        var op = this.options;
        op.table.find('.btn-previous > span').removeClass(op.arrowPrevIconClass).addClass(value);
        op.arrowPrevIconClass = value;
    };
    
    Iconpicker.prototype.setCols = function (value) {
        var op = this.options;
        op.cols = value;
        this.updateNavigationBar();
        this.changeList(1);
    };
        
    Iconpicker.prototype.setIcon = function (value) {
        this.select(value);
    };
    
    Iconpicker.prototype.setIconset = function (value) {
        var op = this.options;                
        if ($.isPlainObject(value)) {                    
            Iconpicker.ICONSET['_custom'] = $.extend(Iconpicker.ICONSET_EMPTY, value);
            op.iconset = '_custom';
        }
        else if (!Iconpicker.ICONSET.hasOwnProperty(value)) {
            op.iconset = Iconpicker.DEFAULTS.iconset;
        }
        else {
            op.iconset = value;
        }
        op = $.extend(op, Iconpicker.ICONSET[op.iconset]);
        this.updateNavigationBar();                
        this.changeList(1);
        this.select(op.icon);
    };
    
    Iconpicker.prototype.setLabelHeader = function (value) {
        var op = this.options;
        op.labelHeader = value;
        this.updateLabelBar(op.page);
    };
    
    Iconpicker.prototype.setLabelFooter = function (value) {
        var op = this.options;
        op.labelFooter = value;
        this.updateLabelBar(op.page);
    };
    
    Iconpicker.prototype.setPlacement = function (value) {
        var op = this.options;
        op.placement = value;
    };
    
    Iconpicker.prototype.setRows = function (value) {
        var op = this.options;
        op.rows = value;
        this.updateNavigationBar();
        this.changeList(1);
    };
    
    Iconpicker.prototype.setSearch = function (value) {
        var op = this.options;
        var search = op.table.find('.search-control');
        (value == true) ? search.show() : search.hide();
        search.val('');
        this.changeList(1);
        op.search = value;
    };
    
    Iconpicker.prototype.setSearchText = function (value) {
        var op = this.options;
        op.table.find('.search-control').attr('placeholder', value);
        op.searchText = value;
    };
    
    Iconpicker.prototype.setSelectedClass = function (value) {
        var op = this.options;
        op.table.find('.btn-icon-selected').removeClass(op.selectedClass).addClass(value);
        op.selectedClass = value;
    };
    
    Iconpicker.prototype.setUnselectedClass = function (value) {
        var op = this.options;
        op.table.find('.btn-icon').removeClass(op.unselectedClass).addClass(value);
        op.unselectedClass = value;
    };
    
    // ICONPICKER PLUGIN DEFINITION
    // ========================
    var old = $.fn.iconpicker;
    $.fn.iconpicker = function (option, params) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.iconpicker');
            var options = typeof option == 'object' && option;
            if (!data) $this.data('bs.iconpicker', (data = new Iconpicker(this, options)));
            if (typeof option == 'string') {
                if (typeof data[option] == 'undefined') {
                    throw 'Iconpicker => The "' + option + '" method does not exists.';
                }
                else {
                    data[option](params);
                }                
            }
            else{
                var op = data.options;                
                op = $.extend(op, {
                    page: 1,
                    selected: -1,
                    table: $('<table class="table-icons"><thead></thead><tbody></tbody><tfoot></tfoot></table>')
                });
                var name = (typeof $this.attr('name') != 'undefined') ? 'name="' + $this.attr('name') + '"' : '';
                $this.empty()
                    .append('<i></i>')
                    .append('<input type="hidden" ' + name + '></input>')
                    .append('<span class="caret"></span>');
                $this.addClass('iconpicker');                
                data.setIconset(op.iconset);
                $this.on('click', function(e) {
                    e.preventDefault();
                    $this.popover({
                        animation: false,
                        trigger: 'manual',
                        html: true,
                        content: op.table,
                        container: 'body',
                        placement: op.placement
                    }).on('shown.bs.popover', function () {
                        data.switchPage(op.icon);
                        data.bindEvents();
                    });
                    $this.data('bs.popover').tip().addClass('iconpicker-popover')
                    $this.popover('show');
                });                
            }
        });
    };

    $.fn.iconpicker.Constructor = Iconpicker;

    // ICONPICKER NO CONFLICT
    // ==================
    $.fn.iconpicker.noConflict = function () {
        $.fn.iconpicker = old;
        return this;
    };

    // ICONPICKER DATA-API
    // ===============
    $(document).on('click', 'body', function (e) {
        $('.iconpicker').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('destroy');
            }
        });
    });

    $('button[role="iconpicker"]').iconpicker();

}(window.jQuery);