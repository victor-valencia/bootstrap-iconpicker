var assert = chai.assert;

describe('Bootstrp-IconPicker v1.10.0', function() {

    it('should match current version of plugin', function() {

        assert.equal($.fn.iconpicker.Constructor.VERSION, '1.10.0');

    });

    it('should init with "button" tag and attributes[ role="iconpicker" ]', function() {

        var obj = $('#demo_101');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ role="iconpicker" ]', function() {

        var obj = $('#demo_102');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="ionicon" data-icon="ion-ionic" role="iconpicker" ]', function() {

        var obj = $('#demo_201');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'ion-ionic');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, 'ion-');
        assert.equal(options.icons.length, 734);
        assert.equal(options.iconset, 'ionicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 255);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="fontawesome5" data-icon="fas fa-wifi" role="iconpicker" ]', function() {

        var obj = $('#demo_202');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-wifi');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 1305);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="weathericon" data-icon="wi-day-rain" role="iconpicker" ]', function() {

        var obj = $('#demo_203');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'wi-day-rain');
        assert.equal(options.iconClass, 'wi');
        assert.equal(options.iconClassFix, 'wi-');
        assert.equal(options.icons.length, 222);
        assert.equal(options.iconset, 'weathericon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 20);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="mapicon" data-icon="map-icon-walking" role="iconpicker" ]', function() {

        var obj = $('#demo_204');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'map-icon-walking');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, 'map-icon-');
        assert.equal(options.icons.length, 176);
        assert.equal(options.iconset, 'mapicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 166);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="octicon" data-icon="octicon-bug" role="iconpicker" ]', function() {

        var obj = $('#demo_205');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'octicon-bug');
        assert.equal(options.iconClass, 'octicon');
        assert.equal(options.iconClassFix, 'octicon-');
        assert.equal(options.icons.length, 173);
        assert.equal(options.iconset, 'octicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 18);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="typicon" data-icon="typcn-anchor" role="iconpicker" ]', function() {

        var obj = $('#demo_206');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'typcn-anchor');
        assert.equal(options.iconClass, 'typcn');
        assert.equal(options.iconClassFix, 'typcn-');
        assert.equal(options.icons.length, 337);
        assert.equal(options.iconset, 'typicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 3);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="elusiveicon" data-icon="el-icon-female" role="iconpicker" ]', function() {

        var obj = $('#demo_207');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'el-icon-female');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, 'el-icon-');
        assert.equal(options.icons.length, 300);
        assert.equal(options.iconset, 'elusiveicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 86);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="materialdesign" data-icon="zmdi-card-sd" role="iconpicker" ]', function() {

        var obj = $('#demo_208');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'zmdi-card-sd');
        assert.equal(options.iconClass, 'zmdi');
        assert.equal(options.iconClassFix, 'zmdi-');
        assert.equal(options.icons.length, 819);
        assert.equal(options.iconset, 'materialdesign');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 142);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="flagicon" data-icon="flag-icon-mx" role="iconpicker" ]', function() {

        var obj = $('#demo_209');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'flag-icon-mx');
        assert.equal(options.iconClass, 'flag-icon');
        assert.equal(options.iconClassFix, 'flag-icon-');
        assert.equal(options.icons.length, 252);
        assert.equal(options.iconset, 'flagicon');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 158);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-iconset="weathericon" data-iconset-version="2.0.10" data-icon="wi-day-rain" role="iconpicker" ]', function() {

        var obj = $('#demo_210');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'wi-day-rain');
        assert.equal(options.iconClass, 'wi');
        assert.equal(options.iconClassFix, 'wi-');
        assert.equal(options.icons.length, 222);
        assert.equal(options.iconset, 'weathericon');
        assert.equal(options.iconsetVersion, '2.0.10');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 20);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-search="true" data-search-text="Search..." role="iconpicker" ]', function() {

        var obj = $('#demo_301');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search...');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-search="false" role="iconpicker" ]', function() {

        var obj = $('#demo_302');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, false);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-label-header="{0} - {1} pages" data-label-footer="{0} - {1} of {2} icons" role="iconpicker" ]', function() {

        var obj = $('#demo_401');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2} icons');
        assert.equal(options.labelHeader, '{0} - {1} pages');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-header="false" data-footer="false" role="iconpicker" ]', function() {

        var obj = $('#demo_402');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, false);
        assert.equal(options.header, false);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-rows="3" data-cols="6" role="iconpicker" ]', function() {

        var obj = $('#demo_501');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 6);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 3);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-align="left" role="iconpicker" ]', function() {

        var obj = $('#demo_601');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'left');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-align="center" role="iconpicker" ]', function() {

        var obj = $('#demo_602');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-align="right" role="iconpicker" ]', function() {

        var obj = $('#demo_603');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'right');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-placement="left" data-icon="fas fa-arrow-left" role="iconpicker" ]', function() {

        var obj = $('#demo_701');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-arrow-left');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'left');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 63);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-placement="top" data-icon="fas fa-arrow-up" role="iconpicker" ]', function() {

        var obj = $('#demo_702');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-arrow-up');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'top');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 65);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-placement="bottom" data-icon="fas fa-arrow-down" role="iconpicker" ]', function() {

        var obj = $('#demo_703');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-arrow-down');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 62);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-secondary" data-placement="right" data-icon="fas fa-arrow-right" role="iconpicker" ]', function() {

        var obj = $('#demo_704');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-arrow-right');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'right');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 64);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-arrow-class="btn-success" data-arrow-prev-icon-class="fas fa-angle-left" data-arrow-next-icon-class="fas fa-angle-right" role="iconpicker" ]', function() {

        var obj = $('#demo_801');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-success');
        assert.equal(options.arrowNextIconClass, 'fas fa-angle-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-angle-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag and attributes[ data-selected-class="btn-danger" data-unselected-class="btn-info" role="iconpicker" ]', function() {

        var obj = $('#demo_802');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-danger');
        assert.equal(options.unselectedClass, 'btn-info');

    });

    it('should init with "button" tag and attributes[ class="btn btn-default" role="iconpicker" ]', function() {

        var obj = $('#demo_901');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-primary" role="iconpicker" ]', function() {

        var obj = $('#demo_902');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-success" role="iconpicker" ]', function() {

        var obj = $('#demo_903');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-warning" role="iconpicker" ]', function() {

        var obj = $('#demo_904');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-danger" role="iconpicker" ]', function() {

        var obj = $('#demo_905');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "button" tag and attributes[ class="btn btn-info" role="iconpicker" ]', function() {

        var obj = $('#demo_906');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, false);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag via javascript and "default" options', function() {

        var obj = $('<div></div>')
            .iconpicker()

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-primary');
        assert.equal(options.arrowNextIconClass, 'fas fa-arrow-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-arrow-left');
        assert.equal(options.cols, 4);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'empty');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2}');
        assert.equal(options.labelHeader, '{0} / {1}');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 4);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search icon');
        assert.equal(options.selected, 0);
        assert.equal(options.selectedClass, 'btn-warning');
        assert.equal(options.unselectedClass, 'btn-secondary');

    });

    it('should init with "div" tag via javascript and "custom" options', function() {

        var obj = $('<div></div>')
            .iconpicker({
                align: 'center', // Only in div tag
                arrowClass: 'btn-danger',
                arrowPrevIconClass: 'fas fa-angle-left',
                arrowNextIconClass: 'fas fa-angle-right',
                cols: 10,
                footer: true,
                header: true,
                icon: 'fas fa-bomb',
                iconset: 'fontawesome5',
                labelHeader: '{0} of {1} pages',
                labelFooter: '{0} - {1} of {2} icons',
                placement: 'bottom', // Only in button tag
                rows: 5,
                search: true,
                searchText: 'Search',
                selectedClass: 'btn-success',
                unselectedClass: ''
            });

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-danger');
        assert.equal(options.arrowNextIconClass, 'fas fa-angle-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-angle-left');
        assert.equal(options.cols, 10);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fas fa-bomb');
        assert.equal(options.iconClass, '');
        assert.equal(options.iconClassFix, '');
        assert.equal(options.icons.length, 1342);
        assert.equal(options.iconset, 'fontawesome5');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2} icons');
        assert.equal(options.labelHeader, '{0} of {1} pages');
        assert.equal(options.page, 3);  //VERIFICAR ?
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 5);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Search');
        assert.equal(options.selected, 125);
        assert.equal(options.selectedClass, 'btn-success');
        assert.equal(options.unselectedClass, '');

    });

    it('should init with "div" tag via javascript and "custom" options (another way)', function() {

        var obj = $('<div></div>')
            .iconpicker()
            .iconpicker('setAlign', 'center')
            .iconpicker('setArrowClass', 'btn-success')
            .iconpicker('setArrowPrevIconClass', 'fas fa-angle-left')
            .iconpicker('setArrowNextIconClass', 'fas fa-angle-right')
            .iconpicker('setCols', 9)
            .iconpicker('setFooter', true)
            .iconpicker('setHeader', true)
            .iconpicker('setIconset', {
                iconClass: 'fas',
                iconClassFix: 'fa-',
                icons: [
                    'fast-backward',
                    'step-backward',
                    'backward',
                    'play',
                    'pause',
                    'stop',
                    'forward',
                    'step-forward',
                    'fast-forward',
                ],
            })
            .iconpicker('setIcon', 'fa-pause')
            .iconpicker('setLabelHeader', '{0} of {1} pages')
            .iconpicker('setLabelFooter', '{0} - {1} of {2} icons')
            .iconpicker('setPlacement', 'bottom')
            .iconpicker('setRows', 0)
            .iconpicker('setSearch', true)
            .iconpicker('setSearchText', 'Type text')
            .iconpicker('setSelectedClass', 'btn-danger')
            .iconpicker('setUnselectedClass', 'btn-primary');

        var options = obj.data('bs.iconpicker').options;

        assert.equal(obj.length, 1);
        assert.equal(options.align, 'center');
        assert.equal(options.arrowClass, 'btn-success');
        assert.equal(options.arrowNextIconClass, 'fas fa-angle-right');
        assert.equal(options.arrowPrevIconClass, 'fas fa-angle-left');
        assert.equal(options.cols, 9);
        assert.equal(options.footer, true);
        assert.equal(options.header, true);
        assert.equal(options.icon, 'fa-pause');
        assert.equal(options.iconClass, 'fas');
        assert.equal(options.iconClassFix, 'fa-');
        assert.equal(options.icons.length, 9);
        assert.equal(options.iconset, '_custom');
        assert.equal(options.iconsetVersion, 'lastest');
        assert.equal(options.inline, true);
        assert.equal(options.labelFooter, '{0} - {1} of {2} icons');
        assert.equal(options.labelHeader, '{0} of {1} pages');
        assert.equal(options.page, 1);
        assert.equal(options.placement, 'bottom');
        assert.equal(options.rows, 0);
        assert.equal(options.search, true);
        assert.equal(options.searchText, 'Type text');
        assert.equal(options.selected, 4);
        assert.equal(options.selectedClass, 'btn-danger');
        assert.equal(options.unselectedClass, 'btn-primary');

    });

    it('should init and emit event "change"', function(done) {

        var eventSpy = sinon.spy()

        // var div = $('<div></div>');
        // $("body").prepend(div);

        var obj = $('<div></div>')
            .iconpicker()
            .on('change', eventSpy);

        obj.trigger('change', [{icon: 'test1'}]);

        assert(eventSpy.called, 'Event did not fire');
        assert(eventSpy.calledOnce, 'Event fired more than once');
        done();

    });

});
