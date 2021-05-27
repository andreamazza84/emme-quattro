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


  <section class="container bottom">
    <div class="row area-riservata">
      <div class="col-lg-6 col-md-6 col-sm-12 left">
        <!-- <img src="~@/assets/dima-pechurin-JUbjYFvCv00-unsplash_1200x800.jpg" alt="area clienti"> -->
      </div>
      <div class="col-lg-4 col-offset-lg-1 col-md-5 col-offset-md-0 col-sm-11 col-offset-sm-0 right">
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
    
    <div class="row articles clear" @click="scrollToTopAuto()">
      <router-link  class="tag fl" to="/news">
        <p class="news rotate">news</p>
      </router-link>
      
      <carousel class="carousel small-carousel fl"
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
        <slide class="slide" v-for="article in news" :key="article.slug">
          <router-link 
          :to="`/news/${article.slug}`" 
          class="article image" 
          :style="`background-image:url(${article.acf.image.url})`"
        >
            <div class="preview" @click="storePosition()">
              <h4 class="title">{{article.title.rendered}}</h4>
              <span class="excerpt" v-html="article.excerpt.rendered"></span>
            </div>
          </router-link> 
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
    },
    news: function(){
      return this.$store.state.news
    },
  },
  methods:{
    scrollToTopAuto: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    storePosition: function(){
      this.$store.commit('SET_SCROLL', window.scrollY);
      console.log(this.$store.state.scroll);
    },
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

