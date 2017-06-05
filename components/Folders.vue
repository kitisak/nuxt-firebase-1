<template>
  <div id="folders">
		<div class="screen--full">
			<div class="screen--inner">
				<div class="folders--grid">
					<article v-for="work in entryData" class="folder" :style="{ top: rTop(), right: rRight() }" @mouseover="bringFront" @mouseleave="putBack" @click="workLink(work)">
						<div class="folder--icon">
							<img src="../assets/media/folder_icon.jpg" alt="">
						</div>
						<div class="folder--title">
							{{work.title}}
						</div>
					</article>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
	name: 'folders',
	props: {
		entryData: ''
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {
		rTop() {
			return Math.floor(Math.random() * 80) + 1 + '%';
		},
		rRight() {
			return Math.floor(Math.random() * 80) + 1 + '%';
		},
		bringFront() {
			event.target.classList.add('focused');
		},
		putBack() {
			event.target.classList.remove('focused');
		},
		touchHandler() {
			// event.target.classList.add('focused');
		},
		workLink(work) {
			this.$router.push('/work/' + work.slug);
		}
	}
};
</script>
<style lang="scss">

.screen--full { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3;
&.back {
	z-index: -1;
}
	.screen--inner { width: 100%; height: 100%; position: relative;
		.folders--grid {
			width: 100%; height: 100%;
		}
	}
}

.folder {
	max-width: 150px; display: flex; flex-flow: column; align-items: center; justify-content: center; position: absolute; top: 40%; right: 10%; z-index: initial;
	.folder--icon { pointer-events: none;
		flex: 1;
		img { pointer-events: none;
			width: 100%;
			display: block;
		}
	}
	.folder--title { pointer-events: none;
		flex: 1;
	}
&.focused {
	z-index: 4;
}
}

</style>
