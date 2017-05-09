<template>
		<section class="home">
			<div class="home__content">
				<div class="content is-small">
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
import axios from 'axios'
import Moltin from '~plugins/moltin.js'
import URLSearchParams from 'url-search-params';


if (process.BROWSER_BUILD) {
	// require('~plugins/moltin.js');
}

var params = new URLSearchParams();
params.append('client_id', 'dSZxfQFcGKaS3LIOsg7cZKk4B0q5yJoQKV9iYlWsZz');
params.append('client_secret', 'KqQjA3JhpF60qBDtYuLnpDWDCyLXW6xA2dPULhufCx');
params.append('grant_type', 'client_credentials');


export default {
	props: {
		wors: ''
	},
	head () {
		return {
			title: 'Home',
			meta: [
				{ hid: 'description', name: 'description', content: 'Index Page' }
			]
		}
	},
  async asyncData() {

		// let { auth } = await axios({
		// 							  method: 'post',
		// 							  url: 'https://api.moltin.com/oauth/access_token',
		// 								headers: {
		// 										'content-type': 'application/x-www-form-urlencoded'
		// 								},
		// 							  data: { params }
		// 							})
		//axios.post('https://api.moltin.com/oauth/access_token') //Moltin.Products.All()
    let { data } = await axios.get('https://backend-65b11.firebaseio.com/work.json')
    return {
      works: data
			// tokens: auth
    }
  },
	mounted() {
		Moltin.Authenticate().then((response) => {
		  console.log('authenticated', response);
		});

		// const products = Moltin.Products.All().then((products) => {
		//   console.log(products);
		// });






	// 	curl -X "POST" "https://api.moltin.com/oauth/access_token" \
  // -d "client_id=XXXX" \
  // -d "client_secret=XXXX" \
  // -d "grant_type=client_credentials"

	}

}
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
