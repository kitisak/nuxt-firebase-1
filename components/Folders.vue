<template>
  <div id="folders">

<div class="screen--full">

	<div class="screen--inner">

		<div class="folders--grid">

			<article class="folder" :style="{ top: rTop(), right: rRight() }" @mouseover="bringFront">

				<div class="folder--icon">
					<img src="../assets/media/folder_icon.jpg" alt="">
				</div>
				<div class="folder--title">
					udfhsdujfhjds .web
				</div>

			</article>

			<article class="folder" :style="{ top: rTop(), right: rRight() }">

				<div class="folder--icon">
					<img src="../assets/media/folder_icon.jpg" alt="">
				</div>
				<div class="folder--title">
					udfhsdujfhjds .web
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
  data() {
    return {};
  },
  mounted() {
    //do something after mounting vue instance
    this.rTop();
  },
  methods: {
    rTop() {
      return Math.floor(Math.random() * 90) + 1 + '%';
    },
    rRight() {
      return Math.floor(Math.random() * 90) + 1 + '%';
    },
    bringFront() {
      console.log(event.target);
      event.target.classList.add('focused');
    }
  }
};
</script>
<style lang="scss">

.screen--full { position: fixed; top: 0; left: 0; right: 0; bottom: 0;
	.screen--inner { width: 100%; height: 100%; position: relative;
		.folders--grid {
			width: 100%; height: 100%;
		}
	}
}

.folder {
	max-width: 150px; border: 1px solid green; display: flex; flex-flow: column; align-items: center; justify-content: center; position: absolute; top: 40%; right: 10%;
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
}

</style>
