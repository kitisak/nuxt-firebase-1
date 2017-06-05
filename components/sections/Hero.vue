<template lang="html">
	<div class="plans-grid__item">
		<div class="plans-grid__inner">
			<div class="plans--grid__content">
				<div class="plans-grid__row">
					<div class="plans-grid__box">
						<img src="./../../assets/media/lotus.svg" alt="">
					</div>
					<div class="plans-grid__box">
						<img src="./../../assets/media/lotus.svg" alt="">
					</div>
					<div class="plans-grid__box">
						<img src="./../../assets/media/lotus.svg" alt="">
					</div>
					<div class="plans-grid__box">
						<img src="./../../assets/media/lotus.svg" alt="">
					</div>
					<div class="plans-grid__box">
						<img src="./../../assets/media/lotus.svg" alt="">
					</div>
				</div>
				<h3 class="title--sub no-margin">
					Five Star
				</h3>
				<p class="copy--big --emp">Once a week = $100</p>
			</div>
		</div>
	</div>
</template>

<script>

// import VueWaypoint from '~plugins/vue-waypoint'

export default {
	data() {
		return {
			text: 'not-trigger-yet'
		}
	},
	methods: {
		inHandler () {
		this.text = 'going in'
		},
		outHandler () {
		this.text = 'going out'
		}
	}
}
</script>

<style lang="css">


</style>
