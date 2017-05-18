const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Mateo Marquez Marquez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS settings
  */
	css: ['assets/main.css', 'assets/tachyons.css'],

  /*
  ** Build configuration
  */
  build: {
		vendor: ['axios', 'vue-parallax-js', 'vue-in-viewport-directive' ],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
      // if (ctx.isServer) {
				// config.node = { fs: 'empty' }
        // config.module.rules.push({
          // enforce: 'pre',
          // test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          // exclude: /(node_modules)/
					// node: {
					//   fs: 'empty'
					// }
        // })
				// config.node = {
				// 	console: 'empty',
				// 	fs: 'empty',
				// 	net: 'empty',
				// 	tls: 'empty'
				// }
      // }
  },
	plugins: [ { src: '~plugins/vue-parallax', ssr: false }, { src: '~plugins/viewport-directive', ssr: false } ]

}
