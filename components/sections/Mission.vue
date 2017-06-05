<template lang="html">
	<section class="mission__section">

		<div class="content__row">
			<div class="content__50">
				<div class="content__inner content-bg--img">
					<div v-parallax.absY="0.1" :breakpoint="'(min-width: 650px)'" class="mission__section--bg"></div>
				</div>
			</div>

			<div class="content__50">

				<div class="content__inner">
					<div v-parallax="-0.5" breakpoint="'(min-width: 650px)'" class="content--box">
						<p class="copy--reg">
							<strong class="copy--bold">Flowy offers yoga classes that meet you where you are.</strong> Why break your work flow, rush to class at lunch, and stress over finding a parking place when Flowy brings a peaceful yoga break right to your door. You provide the space and may and we provide the rest. We take pride in helping people to stay grounded and connected in our ever increasingly fast-paced, highly digital and hyper-stimulated world. The yoga classes provided by Flowy are catered to individual skill levels and needs, and encourage slowing down, reconnecting with the senses, and renewing the spirit.
						</p>
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


.mission__section--bg {
	background-image: url('./../../assets/media/flow_two.jpg');
	background-position: center;
	background-size: cover;
	content: ' ';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	opacity: 0.8;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.mission__section {
	height: auto;
	.content__row { height: 100%;
		display: flex;
		flex-flow: column;
		//align-items: center;
		.content__50 {
			flex: 1;
			.content__inner {
				padding: 8% 4%;
			}
		}
	}
}

@include min-screen(650px) {

.mission__section {
	height: 100vh;
	.content__row {
		display: flex;
		flex-flow: row;
		align-items: center;
		.content__50 {
			flex: 1;
		}
	}
}



}

</style>
