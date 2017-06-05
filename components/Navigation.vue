<template>
	<div id="navigation">
		<div class="nav__main">
			<div class="nav__wrapper">
				<div class="section--full">
					<div class="section--content">
						<div class="nav__grid">
							<div class="nav__brand">
								<nuxt-link to="/">test name</nuxt-link>
							</div>
							<div class="nav__menu">
								<a class="nav__item" href="#" @click.prevent="toggle()">work</a>
								<nuxt-link class="nav_item" to="info">info</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<SlideOut :openMenu="isOpen" :navItems="menuItems"></SlideOut>
	</div>
</template>

<script>
import axios from 'axios';
import SlideOut from './navigation/SlideOut.vue';
export default {
	props: {
		entryData: ''
	},
	components: {
		SlideOut
	},
	head() {
		return {
			title: 'Home',
			meta: [{ hid: 'description', name: 'description', content: 'Index Page' }]
		};
	},
	data() {
		return {
			navData: '',
			menuItems: [],
			isOpen: false,
			openText: 'Open'
		};
	},
	created() {
		const vm = this;
		axios
			.get('https://backend-65b11.firebaseio.com/work.json')
			.then(function(response) {
				let obj = response.data;
				let array = Object.keys(obj).map(function(k) {
					return obj[k];
				});
				vm.navData = array;
				let menuData = [];
				array.forEach(function(item) {
					menuData.push({ title: item.title, link: '/work/' + item.slug });
				});
				vm.menuItems = menuData;
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	methods: {
		makeLink(item) {
			return '/work/' + item.slug;
		},
		open() {
			this.openText = 'Close';
			this.isOpen = true;
			// let folders = document
			// 	.getElementById('folders')
			// 	.querySelector('.screen--full');
			// console.log(folders);
			// folders.classList.add('back');
		},
		close() {
			this.openText = 'Open';
			this.isOpen = false;
			// let folders = document
			// 	.getElementById('folders')
			// 	.querySelector('.screen--full');
			// console.log(folders);
			// folders.classList.remove('back');
		},
		toggle() {
			console.log('damn toggle', this.isOpen);
			if (this.isOpen) {
				this.close();
			} else {
				this.open();
			}
		},
		routeClose() {
			this.isOpen = false;
		}
	},
	watch: {
		$route() {
			this.routeClose();
		}
	}
};
</script>

<style lang="scss">

//G L O B A L S
.section--full {
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
}

.section--half {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
}

.section--content {
	max-width: 90%;
	margin: 0 auto;
}

// N A V

#navigation {

	.nav__main {
			position: fixed;
		height: auto;
			top: 0;
			left: 0;
			right: 0;
			z-index: 5; background: white;
		.nav__wrapper {
			.nav__grid { width: 100%; display: flex; flex-flow: row; justify-content: space-between; margin: 10px auto;
				.nav__brand { }
				.nav__menu { display: flex; flex-flow: row;
					.nav__item {
						flex: 1;
						&:first-of-type {
							margin-right: 15px;
						}
					}
				}
			}
		}
	}
}

</style>
