<template>
	<footer id="contact-footer" class="footer">

		<div class="footer__social">
			<a href="#">FB / IG</a>
		</div>

		<div class="footer__appointment">
			<a href="tel:2053813122">call</a>
		</div>

		<div class="footer__contact">
			<a href="#">legal</a>
		</div>

	</footer>
</template>

<script>

</script>

<style lang="scss">

.footer {
	display: flex;
	align-items: center;
	bottom: 0;
	width: 100%;
	padding: 1% 4%;
	background: #47464f;
	color: white;
		a {
			color: white;
		}
	.footer__social {
		flex: 1;
		text-align: left;
	}
	.footer__appointment {
		flex: 1;
		text-align: center;
	}
	.footer__contact {
		flex: 1;
		text-align: right;

	}
}


</style>
