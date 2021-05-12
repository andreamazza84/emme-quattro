<template>
  <div class="prodotti_servizi">
    <section class="prodotti">
        
      <div class="container">
        <div class="card-container row">
          <div class="card col-lg-4 col-md-6 col-sm-12" 
          v-for="prodotto in prodotti" 
          :key="prodotto.slug"
          >
            <router-link class="innerlink" 
              :to="{
                name: 'ProdottiDescrizione',
                params: {slug: prodotto.slug}
              }"
            >
              <h4 class="title" v-html="prodotto.title.rendered"></h4>
              <div class="img shadow" :style="`background-image: url(${prodotto.acf.image.url})`" @click="savePosition(), scrollToTop()"></div>
            </router-link>
          </div>
        </div>
      </div>
          
      <!-- Router View  -->
      <router-view :key="$route.path" :position="window.scrollY"/>
      <!-- /Router View  -->

    </section>
    </div> 
</template>
<script>
export default {
  data(){
    return{
      prodotti: this.$store.state.prodotti,
      window:{
        scrollY: 0,
      }
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    savePosition: function(){
      this.window.scrollY = window.scrollY; 
    },
  },
}
</script>
