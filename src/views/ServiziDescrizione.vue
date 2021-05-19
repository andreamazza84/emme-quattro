<template>
  <section class="descrizione">
    <div class="box-container container">
      <!-- Description -->
      <div class="box-row row">
        <h2 class="col-lg-12 product-title" v-html="servizio.title.rendered"></h2>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="img shadow" :style="`background-image: url(${servizio.acf.image.url})`" :alt="servizio.acf.image.alt"></div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-10 col-offset-sm-1">
          <p class="content" v-html="servizio.content.rendered"></p>
        </div>    
      </div>

    <router-link to="/servizi" class="close-link"><div class="close" @click="scrollToLastPosition()"></div></router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    position:{
      type: Number,
    },
  },
  data(){
    return {}
  },
  computed: {
    servizi: function(){
      return this.$store.state.servizi
    },
    servizio: function(){
      return this.servizi.find(
        element => element.slug === this.slug
      );
    }
  },
  methods:{
    scrollToLastPosition: function(){
      window.scrollTo({top: this.position, behavior: 'auto'});
    },
  },
}

</script>
