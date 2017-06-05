const webpack = require('webpack');
const axios = require('axios');

module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		titleTemplate: '%s | Mateo Marquez',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
<<<<<<< HEAD
	build: {
		vendor: ['axios'],
		/*
    ** Run ESLINT on save
    */
		extend(config, ctx) {
			// if (ctx.isServer) {
			config.node = { fs: 'empty' };
			// config.module.rules.push({
			// enforce: 'pre',
			// test: /\.(js|vue)$/,
			// loader: 'eslint-loader',
			// exclude: /(node_modules)/
			// node: {
			//   fs: 'empty'
			// }
			// })
		}
	},
	generate: {
		// routes: ['/work/test-tes', '/work/mateo-marquez']
		routes: function() {
			var arr = [];
			return axios
				.get('https://backend-65b11.firebaseio.com/work.json')
				.then(res => {
					Object.keys(res.data).forEach(function(key) {
						arr.push(key);
					});
					// console.log(res);
					// var map = new Map(Object.entries(res.data));
					// var mData = Array.from(map);
					// console.log(mData);
					return arr.map(slug => {
						return '/work/' + slug;
					});
				});
		}
	},
	minify: {
		collapseBooleanAttributes: true,
		collapseWhitespace: true,
		decodeEntities: true,
		minifyCSS: false,
		minifyJS: true,
		processConditionalComments: true,
		removeAttributeQuotes: false,
		removeComments: false,
		removeEmptyAttributes: true,
		removeOptionalTags: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: false,
		removeStyleLinkTypeAttributes: false,
		removeTagWhitespace: false,
		sortAttributes: true,
		sortClassName: true,
		trimCustomFragments: true,
		useShortDoctype: true
	}
};
=======
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
>>>>>>> 9b786ea09bc2fa2844c5a9fe7c67f686a5239643
