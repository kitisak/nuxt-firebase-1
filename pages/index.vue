<template>
		<section class="home">
			<div class="home__content">
				<div class="content">
					<ul>
						<li v-for="work in works">
							<nuxt-link :to="`/work/${work.slug}`">{{work.title}}</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
		</section>
</template>

<script>
import axios from 'axios';
// import Moltin from '~plugins/moltin.js'

// someitmes we need to run scripts only on the client side.
if (process.BROWSER_BUILD) {
	// require('~plugins/moltin.js');
}

export default {
	layout: 'default',
	head() {
		return {
			title: 'Home',
			meta: [{ hid: 'description', name: 'description', content: 'Index Page' }]
		};
	},
	async asyncData() {
		let { data } = await axios.get(
			'https://backend-65b11.firebaseio.com/work.json'
		);
		console.log('SSR: ', data);
		return {
			works: data
		};
	},
	created() {
		console.log('Created: ', this.works);
	},
	mounted() {
		console.log('Mounted: ', this.works);
	}
};
</script>

<style lang="scss">
html, body {
	height: 100%;
	width: 100%;
}
#__nuxt, default__template {
	height: 100%;
	width: 100%;
}

.home { height: 100%; width: 100%;
	position: relative;
	flex-flow: column;
	justify-content: center;
	display: flex;
	align-items: center;
	.home__content {
		text-align: center;
		display: inline-block;
		padding: 25px;
		// border: 1px solid black;
	}
}


</style>
