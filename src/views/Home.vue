<template>
<div class="home">
  <carousel class="carousel" :per-page="1">
    <slide class="slide" v-for="image in carosello" :key="image.slug">
      <div class="image" :style="`background-image:url(${image.acf.image.url})`"></div>
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

