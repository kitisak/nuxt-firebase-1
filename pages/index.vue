<template>
<div class="home">
<Folders/>
</div>
</template>

<script>
import axios from 'axios';

import Folders from '../components/Folders.vue';

if (process.BROWSER_BUILD) {
  // require('~plugins/vue-waypoint')
}

export default {
  head() {
    return {
      title: 'Home',
      meta: [{ hid: 'description', name: 'description', content: 'Index Page' }]
    };
  },
  async asyncData() {
    let { data } = await axios.get(
      'https://backend-65b11.firebaseio.com/work.json'
    );
    return {
      works: data
    };
  },
  data() {
    return {
      text: 'not-trigger-yet'
    };
  },
  components: {
    Folders
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">


</style>
