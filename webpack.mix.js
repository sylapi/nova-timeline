let mix = require('laravel-mix')


require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/tool.js', 'js')
  .vue({ version: 3 })
  .	postCss("resources/css/tool.css", "css", [require("tailwindcss")])

  .nova('sylapi/timeline')
