const path = require('path')
const mix = require('laravel-mix');

<<<<<<< HEAD
console.log(__dirname);
let webpackConfig = {
  resolve: {
    alias: {
      '~orchid': path.resolve(`${__dirname}`, '../../../vendor/orchid/platform/resources'),
    },
  },
  stats: {
      children: true,
  },
=======
let webpackConfig = {
  resolve: {
    alias: {
      '~orchid': path.resolve(`${__dirname}`, 'vendor/orchid/platform/resources'),
    },
  },
>>>>>>> e01cb1d96073e301871d8918df99682630cb0de5
};

if (mix.inProduction()) {
  mix.version();

  mix.options({
    clearConsole: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  });
}

mix.webpackConfig(webpackConfig);

mix.sass('resources/sass/app.scss', 'css/repeater.css').
  js('resources/js/app.js', 'js/repeater.js').
  setPublicPath('public').
  version();
