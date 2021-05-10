<template>
    <div class="prodotti_servizi">
        <section class="prodotti">
            
            <div class="container">
              <div class="card-container row">
                <div class="card col-lg-4 col-md-4 col-sm-12" 
                v-for="prodotto in prodotti" 
                :key="prodotto.slug"
                >
                  <router-link class="innerlink" 
                    :to="{
                      name: 'ProdottiDescrizione',
                      params: {slug: prodotto.slug}
                    }"
                  >
                      <div class="img" :style="`background-image: url(${prodotto.acf.image.url})`" @click="scrollToTop()">
                        <h4 class="title" v-html="prodotto.title.rendered"></h4>
                      </div>
                      <!-- <img :src="prodotto.acf.image.url" :alt="prodotto.acf.image.alt"> -->
                  </router-link>
                </div>
              </div>
            </div>
                
            <!-- Router View  -->
            <router-view :key="$route.path" />
            <!-- /Router View  -->

        </section>
    </div> 
</template>
<script>
export default {
  data(){
      return{
          prodotti: this.$store.state.prodotti,
      }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 20, behavior: 'smooth'});
    },
  },
}
</script>
