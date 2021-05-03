<template>
<div class="home">
  <carousel :per-page="1">
    <slide v-for="image in carosello" :key="image.slug">
      <img :src="image.acf.image.url" alt="">
    </slide>
  </carousel>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
  data(){
    return {
      carosello: this.$store.state.carosello,
    }
  }
}
</script>

