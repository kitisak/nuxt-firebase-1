<template>

		<div class="default__template">
			<navigation></navigation>
	    <nuxt />
		<!-- <contact-footer></contact-footer> -->
	</div>

</template>

<script>
import Navigation from '../components/Navigation';

export default {
	transition: 'page',
	components: {
		Navigation
	}
};
</script>


<style lang="scss">
body {
	-webkit-font-smoothing: antialiased;
}
.default__template {
	height: 100%;
	width: 100%;
	position: relative;
	margin-top: 60px;
}
</style>
