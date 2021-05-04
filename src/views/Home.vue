<template>
<div class="home">
  <div class="container">
    <carousel class="carousel" 
    :per-page="1"
    :autoplay="true"
    :autoplayTimeout="3000"
    :loop="true"
    :paginationEnabled="true"
    paginationPosition="bottom-overlay"
    paginationActiveColor="#ed7124"
    paginationColor="#ed712455"
    :paginationSize="15"
    :paginationPadding="15"
    :touchDrag="true"
    :mouseDrag="true"
    >
      <slide class="slide" v-for="image in carosello" :key="image.slug">
        <div class="image" :style="`background-image:url(${image.acf.image.url})`"></div>
      </slide>
    </carousel>

    <div class="overlay row">
      <div class="col-lg-4 col-offset-lg-8 call-out">
        
      <router-link class="mobile-menu-link" to="/contatti"><span>Contattaci</span></router-link>
      </div>
    </div>
  </div>
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

