<template>
<div id="single">
  <div class="work__single">
<div class="single__wrapper">

<div class="section--half">

<div class="section--content">
					<div class="work__content">
						<h1 v-if="work.title">{{ work.title }}</h1>
						<h2>{{ work.details }}</h2>
						<p>{{ work.description }}</p>
					</div>
					<div class="work__media">
						<div class="" v-for="image in work.gallery">
							<img class="bg__image" :src="image">
						</div>
					</div>

</div>

</div>

</div>

</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
	head() {
		return {
			title: this.work.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.work.description
				}
			]
		};
	},
	async asyncData({ params }) {
		console.log(params);
		let { data } = await axios.get(
			'https://backend-65b11.firebaseio.com/work/' + params.slug + '.json'
		);
		return {
			work: data
		};
	},
	mounted() {
		let routes = () => {
			return axios
				.get('https://backend-65b11.firebaseio.com/work.json')
				.then(function(response) {
					console.log(response.data);
					let obj = response.data;
					let arrRoutes = [];
					// function resetValuesToZero(obj) {
					Object.keys(obj).forEach(function(key) {
						// console.log('/work/' + key);
						arrRoutes.push('/work/' + key);
						// return '/work/' + user;
					});
					return arrRoutes;
					// }
					// response.map(user => {
					// 	// return '/work/' + user.slug;
					// 	console.log(user.slug);
					// });
				})
				.catch(function(error) {
					console.log(error);
				});
		};

		console.log(routes());
		// let routes = () => {
		// 	axios.get('https://backend-65b11.firebaseio.com/work.json').then(res => {
		// 		console.log(res);
		// 		// return res.data.map(user => {
		// 		// 	return '/work/' + user.slug;
		// 		// });
		// 	});
		// };
		// console.log(routes);
	}
};
</script>

<style lang="scss">

#single {

}


img {
  width: 100%;
	display: block;
}

.work__single {

}

.work__media {
	margin-top: 45px;
}

.bg__image {
	margin-bottom: 25px;
}

</style>
