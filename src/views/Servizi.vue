<template>
  <div class="prodotti_servizi pt-200">
      <section class="servizi">
      
        <div class="container">
          <div class="card-container row">
            <div class="card col-lg-4 col-md-6 col-sm-12" 
            v-for="servizio in servizi" 
            :key="servizio.slug"
            >
              <router-link class="innerlink" 
                :to="{
                  name: 'ServiziDescrizione',
                  params: {slug: servizio.slug}
                  }"
                >
                  <h4 class="title" v-html="servizio.title.rendered"></h4>
                  <div class="img shadow" :style="`background-image: url(${servizio.acf.image.url})`" @click="savePosition(), scrollToTop()" :alt="servizio.acf.image.alt"> </div>  
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
        window:{
        scrollY: 0,
      }
    }
  },
  computed:{
    servizi: function(){
      return this.$store.state.servizi;
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
