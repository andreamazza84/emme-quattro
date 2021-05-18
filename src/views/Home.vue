<template>
<div class="home pt-90">
  <section class="container top">
    <carousel class="carousel big-carousel" 
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
        <router-link class="btn" to="/contatti"> <span @click="scrollToTopAuto()">Contattaci</span></router-link>
      </div>
    </div>
  </section>


  <section class="container90 bottom">
    <div class="row area-riservata">
      <div class="col-lg-6 col-md-6 col-sm-12 left">
        <!-- <img src="~@/assets/dima-pechurin-JUbjYFvCv00-unsplash_1200x800.jpg" alt="area clienti"> -->
      </div>
      <div class="col-lg-6 col-sm-12 right">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor officiis, odio consequatur ad ullam quod recusandae repellat facere ex quis asperiores molestiae ipsum hic eum aspernatur, cum alias sint voluptas.</p>
        <router-link class="btn" to="/area-clienti"><span @click="scrollToTopAuto()">Accedi all'area riservata</span></router-link>
      </div>
    </div>
    
    <div class="row contattaci">
      <div class="col-lg-6 col-md-8 col-sm-12 call-out-col">
        <div class="call-out shadow">
          <div class="search-for">
            Contattaci per maggiori informazioni
          </div>
          <router-link class="btn" to="/contatti">
            <span @click="scrollToTopAuto()">Contattaci</span>
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-md-4 col-sm-0"></div>
    </div>
    
    <div class="row articles">
      <carousel class="carousel small-carousel"
      :per-page="show"
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
    </div>
  </section>
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
    return {
      window:{
        width: 0
      },
      show: 4,
    }
  },
  computed:{
    carosello: function(){
      return this.$store.state.carosello
    }
  },
  methods:{
    scrollToTopAuto: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    /** Shows menu hamburger under 992px screen width
    * @window_resize     
    */
    mediaWidth: function() {
        //mobile 768px
        //tablet 992px
        //desktop 1200px
        this.window.width = window.innerWidth;
        if(this.window.width  <= 992 && this.window.width  > 768){
          this.show = 2;
        }
        else if(this.window.width  <= 1200 && this.window.width  > 992){
          this.show = 3;
        }
        else if(this.window.width  <= 768){
          this.show = 1;
        }
        else if(this.window.width > 1200) {
          this.show = 4;
        }
    },
  },
   created() {
    window.addEventListener('resize', this.mediaWidth);
  },
  mounted(){
    this.mediaWidth();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
  },
}
</script>

