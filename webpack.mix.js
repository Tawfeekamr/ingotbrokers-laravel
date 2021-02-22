const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/assets/css/owl.carousel.min.css', 'public/assets/css')
    .postCss('resources/assets/css/slicknav.css', 'public/assets/css')
    .postCss('resources/assets/css/flaticon.css', 'public/assets/css')
    .postCss('resources/assets/css/animate.min.css', 'public/assets/css')
    .postCss('resources/assets/css/magnific-popup.css', 'public/assets/css')
    .postCss('resources/assets/css/fontawesome-all.min.css', 'public/assets/css')
    .postCss('resources/assets/css/themify-icons.css', 'public/assets/css')
    .postCss('resources/assets/css/slick.css', 'public/assets/css')
    .postCss('resources/assets/css/nice-select.css', 'public/assets/css')
    .postCss('resources/assets/css/marquee.css', 'public/assets/css')
    .postCss('resources/assets/css/style.css', 'public/assets/css')
    // .js('resources/assets/js/vendor/modernizr-3.5.0.min.js', 'public/assets/js/vendor')
    // .js('resources/assets/js/vendor/jquery-1.12.4.min.js', 'public/assets/js/vendor')
    // .js('resources/assets/js/marquee.js', 'public/assets/js')
    // .js('resources/assets/js/popper.min.js', 'public/assets/js')
    // .js('resources/assets/js/bootstrap.min.js', 'public/assets/js')
    // .js('resources/assets/js/jquery.slicknav.min.js', 'public/assets/js')
    // .js('resources/assets/js/owl.carousel.min.js', 'public/assets/js')
    // .js('resources/assets/js/slick.min.js', 'public/assets/js')
    // .js('resources/assets/js/jquery.sticky.js', 'public/assets/js')
    // .js('resources/assets/js/plugins.js', 'public/assets/js')
    // .js('resources/assets/js/main.js', 'public/assets/js')
    .sourceMaps();
