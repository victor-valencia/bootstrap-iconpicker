module.exports = {

    get: function(filename) {
        return [
            '/*!========================================================================',
            '* File: ' + filename + ' v<%= pkg.version %> by @victor-valencia',
            '* <%= pkg.homepage %>',
            '* ========================================================================',
            '* Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>.',
            '* Licensed under <%= pkg.license %> license.',
            '* https://github.com/victor-valencia/bootstrap-iconpicker/blob/master/LICENSE',
            '* ========================================================================',
            '*/',
            '',
            ''
        ].join('\n');
    }

};
