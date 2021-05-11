<template>
  <section id="descrizione-prodotti">
    <div class="box-container container">
      <div class="box-row row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="img" :style="`background-image: url(${prodotto.acf.image.url})`" :alt="prodotto.acf.image.alt">
          </div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-10 col-offset-sm-1">
          <h3 class="title product-title"><span v-html="prodotto.title.rendered"></span></h3>
          <p class="descrizione"><span v-html="prodotto.content.rendered"></span></p>
        </div>
      </div>
      
      <div class="box-row row" v-if="prodotto.acf.file">
        <div class="col-lg-6">
          <div class="download acqua">
            <a class="pdf" :href="prodotto.acf.file.url">{{prodotto.title.rendered}} <span>all'acqua</span></a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="download solvente">
            <a class="pdf" :href="prodotto.acf.file.url">{{prodotto.title.rendered}} <span>al solvente</span></a>
          </div>
        </div>
      </div>

    <router-link to="/prodotti" class="close-link"><div class="close"></div></router-link>
    
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

