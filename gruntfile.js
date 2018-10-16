

module.exports = function(grunt) {

    var banner = require('./banner.js');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: {
                    'temp/css/bootstrap-iconpicker.min.css': ['src/css/bootstrap-iconpicker.css'],
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                preserveComments: 'some'
            },
            main: {
                files: {
                    'temp/js/bootstrap-iconpicker.min.js': ['src/js/bootstrap-iconpicker.js'],
                }
            },
            iconset: {
                files: {
                    'temp/js/iconset/iconset-elusiveicon-all.min.js':       ['src/js/iconset/iconset-elusiveicon-all.js'],
                    'temp/js/iconset/iconset-flagicon-all.min.js':          ['src/js/iconset/iconset-flagicon-all.js'],
                    'temp/js/iconset/iconset-fontawesome-4-all.min.js':     ['src/js/iconset/iconset-fontawesome-4-all.js'],
                    'temp/js/iconset/iconset-fontawesome-5-all.min.js':     ['src/js/iconset/iconset-fontawesome-5-all.js'],
                    'temp/js/iconset/iconset-glyphicon-all.min.js':         ['src/js/iconset/iconset-glyphicon-all.js'],
                    'temp/js/iconset/iconset-ionicon-all.min.js':           ['src/js/iconset/iconset-ionicon-all.js'],
                    'temp/js/iconset/iconset-mapicon-all.min.js':           ['src/js/iconset/iconset-mapicon-all.js'],
                    'temp/js/iconset/iconset-materialdesign-all.min.js':    ['src/js/iconset/iconset-materialdesign-all.js'],
                    'temp/js/iconset/iconset-octicon-all.min.js':           ['src/js/iconset/iconset-octicon-all.js'],
                    'temp/js/iconset/iconset-typicon-all.min.js':           ['src/js/iconset/iconset-typicon-all.js'],
                    'temp/js/iconset/iconset-weathericon-all.min.js':       ['src/js/iconset/iconset-weathericon-all.js']
                }
            }
        },
        concat: {
            mainCSS: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker.css')
                },
                src: 'src/css/bootstrap-iconpicker.css',
                dest: 'dist/css/bootstrap-iconpicker.css'
            },
            mainCSSMin: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker.min.css')
                },
                src: 'temp/css/bootstrap-iconpicker.min.css',
                dest: 'dist/css/bootstrap-iconpicker.min.css'
            },
            mainJS: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker.js')
                },
                src: 'src/js/bootstrap-iconpicker.js',
                dest: 'dist/js/bootstrap-iconpicker.js'
            },
            mainJSMin: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker.min.js')
                },
                src: 'temp/js/bootstrap-iconpicker.min.js',
                dest: 'dist/js/bootstrap-iconpicker.min.js'
            },
            iconsetJS: {
                options: {
                    //stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker-iconset.js')
                },
                src: [
                    'src/js/iconset/iconset-elusiveicon-all.js',
                    'src/js/iconset/iconset-flagicon-all.js',
                    'src/js/iconset/iconset-fontawesome-4-all.js',
                    'src/js/iconset/iconset-fontawesome-5-all.js',
                    'src/js/iconset/iconset-glyphicon-all.js',
                    'src/js/iconset/iconset-ionicon-all.js',
                    'src/js/iconset/iconset-mapicon-all.js',
                    'src/js/iconset/iconset-materialdesign-all.js',
                    'src/js/iconset/iconset-octicon-all.js',
                    'src/js/iconset/iconset-typicon-all.js',
                    'src/js/iconset/iconset-weathericon-all.js'
                ],
                dest: 'dist/js/bootstrap-iconpicker-iconset-all.js'
            },
            iconsetJSMin: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker-iconset.min.js')
                },
                src: [
                    'temp/js/iconset/iconset-elusiveicon-all.min.js',
                    'temp/js/iconset/iconset-flagicon-all.min.js',
                    'temp/js/iconset/iconset-fontawesome-4-all.min.js',
                    'temp/js/iconset/iconset-fontawesome-5-all.min.js',
                    'temp/js/iconset/iconset-glyphicon-all.min.js',
                    'temp/js/iconset/iconset-ionicon-all.min.js',
                    'temp/js/iconset/iconset-mapicon-all.min.js',
                    'temp/js/iconset/iconset-materialdesign-all.min.js',
                    'temp/js/iconset/iconset-octicon-all.min.js',
                    'temp/js/iconset/iconset-typicon-all.min.js',
                    'temp/js/iconset/iconset-weathericon-all.min.js'
                ],
                dest: 'dist/js/bootstrap-iconpicker-iconset-all.min.js'
            },
            bundleJSMin: {
                options: {
                    stripBanners: {block: true},
                    banner: banner.get('bootstrap-iconpicker.bundle.min.js')
                },
                src: [
                    'dist/js/bootstrap-iconpicker-iconset-all.min.js',
                    'dist/js/bootstrap-iconpicker.min.js'
                ],
                dest: 'dist/js/bootstrap-iconpicker.bundle.min.js'
            }
        },
        clean: {
            folder: ['temp']
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'], // which files to watch
                tasks: ['uglify', 'concat:mainJS', 'concat:mainJSMin', 'concat:iconsetJS', 'concat:iconsetJSMin', 'concat:bundleJSMin'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/css/*.css'], // which files to watch
                tasks: ['cssmin', 'concat:mainCSS', 'concat:mainCSSMin'],
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
