<template lang="html">

	<section class="plans__section">
<div class="section__wrapper">
	<div class="plans-grid">

		<div class="plans-grid__item">
			<div class="plans-grid__inner no-padding-top">
				<div class="plans--grid__content">
					<p class="copy--reg">
						An RYT 200 hour certified yoga teacher will come to the space you designate in your office, at least ten minutes before the time you have agreed on, and offer a special class catered to the skill level and needs of the students. All props will be provided, and the students bring their own mat.
					</p>
					<p class="copy--reg">
						The packages with more than one class per week offer a price cut. These options are great for a work culture where people basically live at work. The times classes are offered can vary, allowing more flexibility for different schedules.
					</p>
				</div>
			</div>
		</div>

	</div>

	<div class="plans-grid">

		<div class="plans-grid__item">
			<div class="plans-grid__inner">
				<div class="plans--grid__content">
					<div class="plans-grid__row">
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
					</div>
					<h3 class="title--sub no-margin">
						Ganesh's
					</h3>
					<p class="copy--big --emp">1 class per week</p>
					<span class="copy--big plan__price">$100</span>
				</div>
			</div>
		</div>

		<div class="plans-grid__item">
			<div class="plans-grid__inner">
				<div class="plans--grid__content">
					<div class="plans-grid__row">
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>

					</div>
					<h3 class="title--sub no-margin">
						Dancing Shiva
					</h3>
					<p class="copy--big --emp">2 classes per week</p>
					<span class="copy--big plan__price">$200</span>

				</div>
			</div>
		</div>

		<div class="plans-grid__item">
			<div class="plans-grid__inner">
				<div class="plans--grid__content">
					<div class="plans-grid__row">
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
					</div>
					<h3 class="title--sub no-margin">
						Lakshmi's
					</h3>
					<p class="copy--big --emp">3 classes per week</p>
					<span class="copy--big plan__price">$300</span>

					<!-- <p class="copy--meta">
						This options is great for a work culture where people basically live at work. The times classes are offered can vary, allowing more flexibility for different schedules.
					</p> -->
				</div>
			</div>
		</div>

		<div class="plans-grid__item">
			<div class="plans-grid__inner">
				<div class="plans--grid__content">
					<div class="plans-grid__row">
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
					</div>
					<h3 class="title--sub no-margin">
						Kali
					</h3>
					<p class="copy--big --emp">4 classes per week</p>
					<span class="copy--big plan__price">$400</span>

					<!-- <p class="copy--meta">
						This options is great for a work culture where people basically live at work. The times classes are offered can vary, allowing more flexibility for different schedules.
					</p> -->
				</div>
			</div>
		</div>

		<div class="plans-grid__item">
			<div class="plans-grid__inner">
				<div class="plans--grid__content">
					<div class="plans-grid__row">
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
						<div class="plans-grid__box">
							<img src="../../assets/media/lotus.svg" alt="">
						</div>
					</div>
					<h3 class="title--sub no-margin">
						Tara
					</h3>
					<p class="copy--big --emp">5 classes per week</p>
					<span class="copy--big plan__price">$500</span>

					<!-- <p class="copy--meta">
						This options is great for a work culture where people basically live at work. The times classes are offered can vary, allowing more flexibility for different schedules.
					</p> -->
				</div>
			</div>
		</div>



	</div>

</div>

	</section>

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

<style lang="scss">

@mixin mq($args...) {
  $media-type: 'only screen';
  $media-type-key: 'media-type';
  $args: keywords($args);
  $expr: '';

  @if map-has-key($args, $media-type-key) {
    $media-type: map-get($args, $media-type-key);
    $args: map-remove($args, $media-type-key);
  }

  @each $key, $value in $args {
    @if $value {
      $expr: "#{$expr} and (#{$key}: #{$value})";
    }
  }

  @media #{$media-type} #{$expr} {
    @content;
  }
}


@mixin min-screen($min) {
  @include mq($min-width: $min) {
    @content;
  }
}

$sand: #DCB99B;
$tar: #47464f;
$tarDark: #43424a;

.section--full {

}

.no-padding-top {
	padding-top: 0px !important;
}

.plans__section {
	.grid { display: table; flex-flow: row; align-items: center; width: 90%; margin: 0 auto;
			.grid__item { flex: 1;
				.plans-grid__inner { border: 0px; max-width: 100%; }
			}
		}
	.plans-grid__row { display: flex; flex-flow: row; justify-content: center; align-items: center; align-content: space-around;  max-width: 80%; margin: 0 auto;
		.plans-grid__box { flex: 1; text-align: center;
			img { min-width: 30px; max-width: 30px; }
		}

	}
}


.plans__section { width: 100%; padding: 8% 0; height: auto; padding-bottom: 16%;

	background: rgb(71, 70, 79);

	.plans-grid { text-align: center; display: table; flex-flow: column; width: 90%; margin: 0 auto;
		&:nth-child(1) {
			.plans-grid__item { padding-bottom: 1%;
				.plans-grid__inner { border: 0px; max-width: 100%; }
			}
		}

		.plans-grid__item { flex: 1; height: 100%; padding-bottom: 4%; display: inline-block; margin: auto 2%;

			.plans-grid__inner { height: 100%; border: 2px solid $tarDark; padding: 25px; border-radius: 10px; max-width: 300px; margin: 0 auto;


				.plans--grid__content { text-align: center; color: white;
						h5 { text-align: center; }
						p { text-align: left; }

				}

			}

		}

	}

}


.section__wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.plan__price {
	color: $sand;
	padding-top: 10px;
	display: block;
	font-size: 1.6em;
}

// @include min-screen(650px) {
//
// .plans__section {
// 	height: 100vh;
// }
//
// }

@include min-screen(650px) {
	// .plans__section {
	// 	height: 100vh;
	// }
}

@include min-screen(950px) {
	.plans__section {
		height: 100vh;
		padding-bottom: 8%;
	}

}

</style>
