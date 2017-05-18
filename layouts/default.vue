<template>

		<div class="default__template">
			<navigation></navigation>

	    <nuxt />
		<contact-footer></contact-footer>
	</div>

</template>

<script>

import Navigation from '~components/Navigation.vue'
import ContactFooter from '~components/ContactFooter.vue'


export default {
	transition: 'page',
	components: {
		Navigation,
		ContactFooter
	}
}

</script>


<style>
.default__template {
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
