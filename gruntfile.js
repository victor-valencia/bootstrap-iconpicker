module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: false,
                preserveComments: 'some'
            },
            main: {
                files: {
                    'bootstrap-iconpicker/js/bootstrap-iconpicker.min.js': ['bootstrap-iconpicker/js/bootstrap-iconpicker.js'],
                }
            },
            iconset: {
                files: {
                    'bootstrap-iconpicker/js/iconset/iconset-elusiveicon-2.0.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-elusiveicon-2.0.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.0.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.0.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.1.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.1.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.2.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.2.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.3.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.3.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.4.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.4.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.5.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.5.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.6.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.6.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.7.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.7.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-glyphicon.min.js':             ['bootstrap-iconpicker/js/iconset/iconset-glyphicon.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-ionicon-1.5.2.min.js':         ['bootstrap-iconpicker/js/iconset/iconset-ionicon-1.5.2.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-mapicon-2.1.0.min.js':         ['bootstrap-iconpicker/js/iconset/iconset-mapicon-2.1.0.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-materialdesign-1.1.1.min.js':  ['bootstrap-iconpicker/js/iconset/iconset-materialdesign-1.1.1.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-octicon-2.1.2.min.js':         ['bootstrap-iconpicker/js/iconset/iconset-octicon-2.1.2.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-typicon-2.0.6.min.js':         ['bootstrap-iconpicker/js/iconset/iconset-typicon-2.0.6.js'],
                    'bootstrap-iconpicker/js/iconset/iconset-weathericon-1.2.0.min.js':     ['bootstrap-iconpicker/js/iconset/iconset-weathericon-1.2.0.js']
                }
            }
        },
        concat: {
            options: {
                stripBanners: {block: true},
            },
            iconset: {
                src: [
                    'bootstrap-iconpicker/js/iconset/iconset-elusiveicon-2.0.0.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-fontawesome-4.7.0.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-glyphicon.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-ionicon-1.5.2.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-mapicon-2.1.0.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-materialdesign-1.1.1.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-octicon-2.1.2.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-typicon-2.0.6.min.js',
                    'bootstrap-iconpicker/js/iconset/iconset-weathericon-1.2.0.min.js'
                ],
                dest: 'bootstrap-iconpicker/js/iconset/iconset-all.min.js'
            }
        },
        cssmin: {
            target: {
                files: {
                    'bootstrap-iconpicker/css/bootstrap-iconpicker.min.css': ['bootstrap-iconpicker/css/bootstrap-iconpicker.css'],
                }
            }
        },
        watch: {
            js: {
                files: ['bootstrap-iconpicker/js/**/*.js'], // which files to watch
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['bootstrap-iconpicker/css/*.css'], // which files to watch
                tasks: ['cssmin'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugin.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
