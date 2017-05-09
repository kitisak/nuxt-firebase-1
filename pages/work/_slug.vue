<template>
  <div class="work__single">
		<div class="section">
				<div class="content">
					<h1 v-if="work.title">{{ work.title }}</h1>
					<h2>{{ work.details }}</h2>
					<p>{{ work.description }}</p>
				</div>
				<div class="work__media">
					<div class="" v-for="image in work.gallery">
						<img data-action="zoom" class="bg__image img-zoomable" :src="image">
					</div>
				</div>
		</div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
	head () {
		return {
			title: this.work.title,
			meta: [
				{ hid: 'description', name: 'description', content: this.work.description }
			]
		}
	},
	async asyncData( {params} ) {
		console.log(params)
		let { data } = await axios.get('https://backend-65b11.firebaseio.com/work/' + params.slug + '.json')
		return {
			work: data
		}
	}

}
</script>

<style>

img {
  width: 100%;
	display: block;
}

.work__single {
	max-width: 800px;
	margin: 0 auto;

}

.bg__image {
	margin-bottom: 25px;
}

</style>
