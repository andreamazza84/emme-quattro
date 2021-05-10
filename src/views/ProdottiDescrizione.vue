<template>
  <section id="descrizione-prodotti">
    <div class="container">
      <div class="box row">
        <div class="col-lg-4">
          <div class="img" :style="`background-image: url(${prodotto.acf.image.url})`" :alt="prodotto.acf.image.alt">
          </div>
          <!-- <img :src="prodotto.acf.image.url"> -->
        </div>
        <div class="col-lg-6">
          <h3 class="title product-title"><span v-html="prodotto.title.rendered"></span></h3>
          <p class="descrizione"><span v-html="prodotto.content.rendered"></span></p>
        </div>
        <div class="col-lg-2">
          <div class="download">
            <div class="pdf"></div>
          </div>
        </div>
      </div>
    <router-link to="/prodotti" class="close-link"><div class="close" @click="scrollToTop()"></div></router-link>
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
  },
  data(){
    return {
      prodotti: this.$store.state.prodotti,
    }
  },
  computed: {
    prodotto: function(){
      return this.prodotti.find(
        element => element.slug === this.slug
      );
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
}

</script>

