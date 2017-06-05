<template>
		<section class="home">
		<Folders :entryData="works"/>

			<!-- <div class="home__content">
				<div class="content">
					<ul>
						<li v-for="work in works">
							<nuxt-link :to="`/work/${work.slug}`">{{work.title}}</nuxt-link>
						</li>
					</ul>
				</div>
			</div> -->
		</section>
</template>

<script>
import axios from 'axios';
import Folders from '../components/Folders.vue';

export default {
	layout: 'default',
	components: {
		Folders
	},
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
	}
};
</script>

<style lang="scss">


</style>
