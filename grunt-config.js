'use strict';

module.exports = {
    build: {
        rootDir: 'build',
        hrtechDir: 'build/static/hrtech',
        indexFile : 'build/static/hrtech/index.html',
        wildcards: {
            styles: 'build/static/hrtech/app/**/*.css',
            styleFolder: 'build/static/hrtech/app/**/css'
        },
        distScriptsFile: 'build/static/hrtech/hrtech.min.js',
        distStylesFile: 'build/static/hrtech/hrtech.min.css',
        distVendorDir: 'build/static/hrtech/vendor',
        vendorScriptsFile: 'build/static/hrtech/vendor/js/vendor.min.js',
        vendorStylesFile: 'build/static/hrtech/vendor/css/vendor.min.css'
    },
    app: {
        wildcards: {
            less: 'app/**/*.less',
            html: 'app/**/*.html',
            scripts: [
                'app/app.js',
                'app/app-controller.js',
                'app/**/*-module.js',
                'app/**/*-config.js',
                'app/**/*.js',
                '!app/**/*-spec.js'
            ],
            resources: 'resources/*.*',
            vendorJsSrc: [
                'vendor/jquery/dist/jquery.js',
                'vendor/jqueryui/jquery-ui.js',
                'vendor/jquery.animate-enhanced/jquery.animate-enhanced.min.js',
                'vendor/jquery.easing/js/jquery.easing.js',
                'vendor/bootstrap/dist/js/bootstrap.js',
                'vendor/angular/angular.js',
                'vendor/angular-resource/angular-resource.js',
                'vendor/angular-ui-router/release/angular-ui-router.js',
                'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
                'vendor/angular-cookie/angular-cookie.js',
                'vendor/angular-cookies/angular-cookies.js',
                'vendor/angular-sanitize/angular-sanitize.min.js',
                'vendor/angular-aria/angular-aria.js',
                'vendor/angular-animate/angular-animate.min.js',
                'vendor/angular-material/angular-material.js',
                'vendor/angular-load/angular-load.js',
                'vendor/d3/d3.js',
                'vendor/modernizr/modernizr.js',
                'vendor/log4javascript/log4javascript.js',
                'vendor/lodash/lodash.js',
                'vendor/bootstrap-colorpickersliders/dist/tinycolor.js',
                'vendor/bootstrap-colorpickersliders/dist/bootstrap.colorpickersliders.js',
                'vendor/datatables/media/js/jquery.dataTables.js',
                'vendor/angular-datatables/dist/angular-datatables.js',
                'vendor/phoneformat/PhoneFormat.js',
                'vendor/intl-tel-input/build/js/intlTelInput.min.js',
                'vendor/intl-tel-input/lib/libphonenumber/build/utils.js',
                'vendor/angular-ui-slider/src/slider.js',
                'vendor/moment/min/moment-with-locales.min.js',
                'vendor/detectizr/dist/detectizr.min.js',
                'vendor/angular-ui-grid/ui-grid.min.js',
                'vendor/moment/min/moment-with-locales.min.js'
            ],
            vendorStyleSrc: [
                'vendor/bootstrap/dist/css/bootstrap.min.css',
                'vendor/font-awesome/css/font-awesome.css'
            ],
            vendorFonts: [
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                'vendor/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
                'vendor/font-awesome/fonts/FontAwesome.otf',
                'vendor/font-awesome/fonts/fontawesome-webfont.eot',
                'vendor/font-awesome/fonts/fontawesome-webfont.svg',
                'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
                'vendor/font-awesome/fonts/fontawesome-webfont.woff',
                'vendor/font-awesome/fonts/fontawesome-webfont.woff2'
            ],
            vendorUiGridFonts: []
        }
    }
};