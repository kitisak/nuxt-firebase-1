<template>
<<<<<<< HEAD
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
=======
<div class="home">
<Folders/>
</div>
>>>>>>> 9b786ea09bc2fa2844c5a9fe7c67f686a5239643
</template>

<script>
import axios from 'axios';
<<<<<<< HEAD
// import Moltin from '~plugins/moltin.js'
=======

import Folders from '../components/Folders.vue';
>>>>>>> 9b786ea09bc2fa2844c5a9fe7c67f686a5239643

// someitmes we need to run scripts only on the client side.
if (process.BROWSER_BUILD) {
  // require('~plugins/vue-waypoint')
}

export default {
<<<<<<< HEAD
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
=======
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
    return {
      works: data
    };
  },
  data() {
    return {
      text: 'not-trigger-yet'
    };
  },
  components: {
    Folders
  },
  mounted() {},
  methods: {}
>>>>>>> 9b786ea09bc2fa2844c5a9fe7c67f686a5239643
};
</script>

<style lang="scss">


</style>
