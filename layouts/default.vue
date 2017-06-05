<template>

		<div class="default__template">
			<!-- <navigation></navigation> -->

	    <nuxt />
		<!-- <contact-footer></contact-footer> -->
	</div>

</template>

<script>
<<<<<<< HEAD
export default {
	transition: 'page'
=======
import Navigation from '~components/Navigation.vue';
import ContactFooter from '~components/ContactFooter.vue';

export default {
  transition: 'page',
  components: {
    Navigation,
    ContactFooter
  }
>>>>>>> 9b786ea09bc2fa2844c5a9fe7c67f686a5239643
};
</script>


<style>
.default__template {
	height: 100%;
	width: 100%;
	position: relative;
}
</style>
