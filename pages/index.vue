<template>
		<div class="home">
			<!-- <div class="home__content">
				<div class="content is-small">
					<ul>
						<li v-for="work in works">
							<nuxt-link :to="`/work/${work.slug}`">{{work.title}}</nuxt-link>
						</li>
					</ul>
				</div>
			</div> -->
			<!-- <article class="vh-100 dt w-100 bg-dark-pink">
			  <div class="dtc v-mid tc white ph3 ph4-l">
			    <h1 class="f6 f2-m f-subheadline-l fw6 tc">Vertically centering things in css is easy!</h1>
			  </div>
			</article> -->
			<section class="main__section">
				<h1 v-parallax="0.2" class="main__title">Flow through life with grace and ease</h1>
				<div class="main__section--bg"></div>
			</section>

			<mission></mission>

			<plans></plans>


			<section class="main__section benefits__section">
				<div v-parallax="0.1" class="section__cta">
					<h3 class="main__title cta--title">
						A regular yoga practice has shown itself to be an effective antidote for the stress of modern-day challenges in business and in life.
					</h3>
					<button type="button" name="button">See all benefits</button>
				</div>

				<div class="benefits__section--bg"></div>
			</section>

			<!-- <section class="benefits__section">
				<div class="benefits__section--bg"></div>
			</section> -->

			<section class="contact__section">

				<div class="grid">
					<div class="grid__item">
						<div class="grid__item--inner">
							<div class="container" >
			  			<h1 class="title--lg">Contact</h1>
							<p class="copy--reg">Reach out for assistance choosing the right path for your company.</p>
			  <form class="form" action="#" >
			    <fieldset class="form-fieldset ui-input __first">
			      <input type="text" id="username" tabindex="0" />
			      <label for="username">
			        <span data-text="Name">Name</span>
			      </label>
			    </fieldset>

			    <fieldset class="form-fieldset ui-input __second">
			      <input type="email" id="email" tabindex="0" />
			      <label for="email">
			        <span data-text="EMAIL">EMAIL</span>
			      </label>
			    </fieldset>

					<fieldset class="form-fieldset ui-input __first">
						<input type="text" id="username" tabindex="0" />
						<label for="username">
							<span data-text="About..">About..</span>
						</label>
					</fieldset>
			    <div class="form-footer">
			      <input type="submit" class="button--dark" value="Submit" />
			    </div>
			  </form>
			</div>



						</div>

					</div>
				</div>
				<!-- <article class="pa4">
					<form action="sign-up_submit" method="get" accept-charset="utf-8">
						<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
							<legend class="ph0 mh0 fw6 clip">Sign Up</legend>
							<div class="mt3">
								<label class="db fw4 lh-copy f6" for="email-address">Email address</label>
								<input class="pa2 input-reset bg-transparent w-100 measure contact__input" type="email" name="email-address"  id="email-address">
							</div>
							<div class="mt3">
								<label class="db fw4 lh-copy f6" for="password">Password</label>
								<input class="b pa2 input-reset bg-transparent contact__input" type="password" name="password"  id="password">
							</div>
							<div class="mt3">
								<label class="db fw4 lh-copy f6" for="password">Content</label>
								<textarea class=" pa2 input-reset bg-transparent contact__textarea" type="text" name="password"  id="password"></textarea>
							</div>
						</fieldset>
						<div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"></div>
					</form>
				</article> -->



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
	background-image: url('./../assets/media/class.jpg');
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
		background-image: url('../assets/media/class.jpg');
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
