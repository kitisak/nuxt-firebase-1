<template>
		<div class="about">
			<section class="main__section">
				<div class="section__wrapper">
					<div class="page__content" v-parallax="-1">
						<p class="copy--reg">
							Amanda Agricola discovered yoga at the tumultuous age of 14. She was fortunate enough to have a teacher who introduced her to the chakras. Intrigued by the intelligence and wisdom of the subtle body she has continued to develop her understanding of it ever since. She has relied on yoga for almost half of her life to help with pain, stress, and emotional management. In 2015 she became an RYT 200 hour Hatha certified Yoga instructor with Charm City Yoga. Continuing her education in 2016 she completed 60 more hours with 30A studio in Florida learning about the Emotional Anatomy of the body and has integrated that knowledge into her own practice and teachings. As a working artist, she is devoted to a yoga practice that helps to keep her in balance and inspired so that she can continue to create and share what she is continuously learning and uncovering about life, the body and this beautiful yogic journey.
						</p>
					</div>
				</div>
				<div class="about__section--bg"></div>
			</section>
		</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

import Plans from '../components/sections/Plans.vue'
import Mission from '../components/sections/Mission.vue'


if (process.BROWSER_BUILD) {

	// require('~plugins/vue-waypoint')

}


export default {
	components: {
		Plans,
		Mission
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
    let { data } = await axios.get('https://backend-65b11.firebaseio.com/work.json')
    return {
      works: data,
    }
  },
	data() {
		return {
			text: 'not-trigger-yet'
		}
	},
	mounted() {

	},
	methods: {
		handleScroll: function(evt, el) {
  		console.log('hi', evt, el)
    },
		test() {
			console.log('ddamnnnnnnnn')
		},
		onScroll:function(e, position){
  		this.position = position;
			console.log(position)
			console.log(e)

  	}
	}

}
</script>

<style lang="scss">

#__nuxt, html, body {
	min-height: 100%;
}

.about { height: 100%;
	.main__section { height: auto;
		.about__section--bg {
			background-image: url('./../assets/media/bio.png');
			background-position: center;
			background-size: cover;
			content: ' ';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			opacity: 0.8;
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
		}
		.page__content {
			max-width:90%; margin: 0 auto; background: white; padding: 2% 4%; margin-top: 160px;
		}
	}
}

.about__section {
	.grid { display: flex; flex-flow: row; align-items: center; width: 90%; margin: 0 auto;
			.grid__item { flex: 1;
				.plans-grid__inner { border: 0px; max-width: 100%; }
			}
		}
}

// .contact__section.in-viewport {
// 	background: orange;
// }
// .contact__section.fully-in-viewport {
// 	background: green;
// }
// .contact__section.above-viewport {
// 	background: blue;
// }
// .contact__section.below-viewport {
// 	border-bottom: 10vh dotted black;
// }



$sand: #DCB99B;
$tar: #47464f;
$tarDark: #43424a;


@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700|Trirong:400,700');
// body:before, body:after {
//     content: "";
//     position: fixed;
//     background: #3a3a38;
//     left: 0;
//     right: 0;
//     height: 15px;
//
// }
// body:before {
//     top: 0;
// }
// body:after {
//     bottom: 0;
// }
// body {
//     border-left: 15px solid #3a3a38;
//     border-right: 15px solid #3a3a38;
// }

$bezier: cubic-bezier(0.215, 0.610, 0.355, 1.000);
$time: 300ms;

.benefits__section--bg {
	background-image: url('./../assets/media/benefits.jpg');
	background-position: center;
	background-size: cover;
	content: ' ';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: 0.8;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.benefits__section {
	.section__cta {
	}

}

.container {
  max-width: 500px;
  margin: 0 auto;
  // padding: 20px 16px 40px 16px;

  text-align: center;
}

.form-footer {
  margin-top: 4em;
}

.ui-input {
  position: relative;
  padding: 0;
  border: 0;
}

.ui-input input {
  border: 0;
  background: none;
  padding: 16px 0 16px 0;
  font-size: 24px;
  outline: 0;
  width: 100%;
  tap-highlight-color: rgba(0,0,0,0);
  touch-callout: none;
}

.ui-input input + label {
  position: relative;
  display: block;
  padding: 8px 0 8px 0;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: .0875em;
  font-weight: 500;
  text-align: left;

  &::before, &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
  }

  &::before {
    background-color: $tar;
  }

  &::after {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $time $bezier;
    background-color: $sand;
    height: 2px;
  }

  span {
    position: relative;
    color: &tarDark;
    transition: color $time $bezier;

    &::after {
      content: attr(data-text);
      position: absolute;
      overflow: hidden;
      left: 0;
      transform: scaleX(1);
      white-space: nowrap;
      color: #fff;

      background-image: linear-gradient(to right,
          $sand 50%,
          rgba(255,255,255,0) 0%);
      background-position: 100% 50%;
      background-size: 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      backface-visibility: hidden;
      perspective: 1000;
      transform: translateZ(0);

      transition: background-position $time $bezier;
    }
  }
}

.ui-input input:focus,
.ui-input input.error,
.ui-input input:invalid,
.ui-input input.filled {

  & + label {

    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    span::after {
      color: $sand;
      background-image: linear-gradient(to right,
      rgba(255,255,255,1) 50%,
      rgba(255,255,255,0) 0%);
      background-position: 0% 50%;
    }
  }
}

.ui-input input.filled {
  color: #ffffff;

  & + label {

    &::after {
      background-color: #ffffff;
    }

    span::after {
      background-image: linear-gradient(to right,
        #ffffff 50%,
        rgba(255,255,255,0) 0%);
      background-position: 0% 50%;
    }
  }
}

.ui-input input:focus {
  color: $sand;

  & + label {

    &::after {
      background-color: $sand;
    }

    span::after {
      background-image: linear-gradient(to right,
        $sand 50%,
        rgba(255,255,255,0) 0%);
      background-position: 0% 50%;
    }
  }
}

.ui-input input.error,
.ui-input input:invalid {
  color: #E66161;

  & + label {

    &::after {
      background-color: #E66161;
    }

    span::after {
      background-image: linear-gradient(to right,
        #E66161 50%,
        rgba(255,255,255,0) 0%);
      background-position: 0% 50%;
    }
  }
}

.btn--submit {
  border: 0;
  background-color: #50617A;
  padding: 18px 30px 18px 30px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: .0875em;
  font-weight: 500;
  border-radius: 100px;
  outline: 0;
  transition: background-color $time $bezier,
              color $time $bezier;
}

.btn--submit:focus,.btn--submit:active,
.btn--submit:hover {
  background-color: $sand;
  color: white;
}

.__first, .__second, .__third, .__fourth {
  animation-name: fadeIn;
  animation-duration: 180ms;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

.__first { animation-delay: 0; }
.__second { animation-delay: 80ms; }
.__third { animation-delay: 180ms; }
.__fourth { animation-delay: 360ms; }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}



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


input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px whitesmoke inset;
}

.contact__input, .contact__textarea {
border: 0px;
border-bottom: 2px solid $tar;
}

.copy--meta {
	font-size: 0.8em;
	color: white;
	font-family: 'Trirong', serif;
	font-style: italic;
	line-height: 1.3;
	font-weight: 100;
	letter-spacing: 0.1em;
	text-align: left;
}

.copy--big {
	margin: 0;
	font-size: 1.2em;
	text-align: center !important;
	font-weight: 400;
	letter-spacing: 1px;

}

.--emp {

}
.no-margin {
	margin: 0;
}

h1 {
	font-family: 'Trirong', serif;
	font-size: 3em;
	font-weight: 500;
	line-height: 1.6;
	font-style: italic;
	letter-spacing: 0.75px;
}

h3 {
	font-family: sans-serif;
	font-size: 2.5em;
	font-weight: 500;
	letter-spacing: 0.75px;
	line-height: 1.6;

}

h4 {
	font-family: 'Trirong', serif;
	font-size: 1em;
	font-weight: 200;
	letter-spacing: 0.75px;
	line-height: 1.6;
}


p, a {
	font-family: 'Quicksand', sans-serif;
}
.copy--bold {
	font-weight: 700;
	font-size: 110%;
	color: #92A2B1;
}

.copy--reg {
	font-family: 'Quicksand', sans-serif;
	font-size: 1em;
	font-weight: 200;
	letter-spacing: 0.75px;
	line-height: 1.8;
}

.title--lg {
	font-style: normal;
	font-family: 'Quicksand', sans-serif;
	margin-top: 0;
	margin-bottom: 10px;

}

.title--sub {
	font-family: 'Trirong', serif;
	font-size: 1.6em;
	font-weight: 500;
	letter-spacing: 3px;
	line-height: 1.8;
	text-transform: uppercase;
	color: #DCB99B;
}

.cta--title {
	font-size: 1.8em;
	font-family: 'Trirong', serif;
}


.section__cta {
	text-align: center;
}

button, .button {

	background: transparent;
	outline: 0;
	box-shadow: none;
	border: 2px solid white;
	padding: 1em 1.8em;
	font-size: 1.2em;
	font-weight: 700;
	text-transform: uppercase;
	color: white;
	letter-spacing: 2px;
	margin-top: 45px;
	max-width: 300px;

	&:hover {

			color: #92A2B1;
			border: 2px solid #92A2B1;
			background: white;
			cursor: pointer;

	}

}


button, .button--dark {

	background: transparent;
	outline: 0;
	box-shadow: none;
	border: 2px solid $tarDark;
	padding: 1em 1.8em;
	font-size: 1.2em;
	font-weight: 700;
	text-transform: uppercase;
	color: $tar;
	letter-spacing: 2px;
	margin-top: 45px;
	max-width: 300px;

	&:hover {

			color: #92A2B1;
			border: 2px solid #92A2B1;
			background: white;
			cursor: pointer;

	}

}



a {
	font-size: 1em;
	font-weight: 500;
	letter-spacing: 4px;
	line-height: 1.6;
	font-style: italic;
}

.main__title {
	width: 90%;
	max-width: 800px;
	text-align: center;
	color: white;
	margin: 0 auto;
}

.contact__section {
	background: white;
}

html,
body {
  margin: 0;
}
section {
  height: 100vh;
  width: 100%;
}
section:nth-child(1) {
  // background: lightblue;
}
section:nth-child(2) {
  background: white;
	// height: auto;
}
section:nth-child(3) {
  // background: rgb(71, 70, 79);
	// height: auto;
}
section:nth-child(4) {
  // background: red;
}
section:nth-child(5) {
  background: white;
}


.content-bg--img {
position: relative;
width: 100%;
height: 300px;
}

.content--box {
position: relative;
width: 100%;
background: white;
left: 0px;
padding: 4%;
}

// section {
// 	overflow: hidden;
// }



.contact__section {
	article {
			background: transparent;
			// border: 1px solid black;
	}
}

.contact__section {
	.grid { display: flex; flex-flow: row; align-items: center; width: 90%; margin: 0 auto;
			.grid__item { flex: 1;
				.plans-grid__inner { border: 0px; max-width: 100%; }
			}
		}
}

.main__section, .contact__section {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	flex-flow: column;
	.main__section--bg {
		background-image: url('./../assets/media/flow_one.jpg');
		background-position: center;
		background-size: cover;
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
	}
}




.benefits__section {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	.benefits__section--bg {
		background-image: url('../assets/media/benefits.jpg');
		background-position: center;
		background-size: cover;
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
	}
}

.content {
	max-width: 90%;
	margin: 0 auto;
	height: 100%;
}


.mission__section {
	.content__50:nth-child(1) {
		flex: 1;
		order: 1;
	}
}

// .mission__section {
// 	overflow: hidden;
// }



@include min-screen(650px) {


	.content-bg--img {

	height: 600px;
	}


	.mission__section {
		.content__50:nth-child(1) {
			flex: 1;
			order: initial;
		}
	}

.mission__section {
	//display: initial;
}

	.content-bg--img {
	position: relative;
	width: 100%;
	height: 600px;
	}

	.content--box {
	position: relative;
	width: 100%;
	background: white;
	left: -50px;
	padding: 4%;
	}

	h1 {
		font-family: 'Trirong', serif;
		font-size: 5em;
		font-weight: 500;
		font-style: italic;
		letter-spacing: 0.75px;
	}

	h3 {
		font-family: 'Trirong', serif;
		font-size: 2.5em;
		font-weight: 500;
		font-style: italic;
		letter-spacing: 0.75px;
		line-height: 1.6;

	}

	.copy--reg {
		// font-family: 'Trirong', serif;
		font-size: 1.4em;
		font-weight: 200;
		letter-spacing: 0.75px;
		line-height: 1.6;
	}

	.copy--bold {
		font-weight: 700;
		font-size: 110%;
		color: #92A2B1;
	}


}

</style>
