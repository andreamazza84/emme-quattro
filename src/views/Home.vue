<template>
<div class="home pt-90">
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
      <div class="col-lg-4 col-offset-lg-7 col-md-6 col-offset-md-5 col-sm-10 col-offset-sm-1 call-out shadow">
        <div class="search-for">
          Cerchi una vernice oppure un colore in particolare?<br>Con M4 hai tante soluzioni per i <span>privati</span> e tanti servizi dedicati alle <span>imprese</span>
        </div>
        <router-link class="btn" to="/contatti">
          Contattaci
        </router-link>
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
  props: {
    scroll: {
      type: Boolean,
    }
  },
  data(){
    return {}
  },
  computed:{
    carosello: function(){
      return this.$store.state.carosello
    }
  },
}
</script>

