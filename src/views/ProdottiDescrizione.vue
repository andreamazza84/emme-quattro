<template>
  <section class="descrizione">
    <div class="box-container container">
      <!-- Description -->
      <div class="box-row row">
        <h2 class="col-lg-12 product-title" v-html="prodotto.title.rendered"></h2>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="img" :style="`background-image: url(${prodotto.acf.image.url})`" :alt="prodotto.acf.image.alt"></div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-10 col-offset-sm-1">
          <p class="content" v-html="prodotto.content.rendered"></p>
        </div>
      </div>

      <!-- Download -->
      <div class="box-row row" v-if="prodotto.acf.acqua || prodotto.acf.solvente || prodotto.acf.olii">
        <h3 class="col-lg-12 download-title">Scarica la documentazione</h3>
        <div class="col-lg-6 col-sm-12" v-if="prodotto.acf.acqua">
          <div class="download" >
            <a class="pdf" :href="prodotto.acf.acqua.url">{{prodotto.title.rendered}} <span class="acqua">all'acqua</span></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12" v-if="prodotto.acf.solvente">
          <div class="download">
            <a class="pdf" :href="prodotto.acf.solvente.url">{{prodotto.title.rendered}} <span class="solvente">al solvente</span></a>
          </div>
        </div>
        <div class="col-lg-12" v-if="prodotto.acf.olii">
          <div class="download">
            <a class="pdf" :href="prodotto.acf.olii.url">{{prodotto.title.rendered}} <span class="olii"></span></a>
          </div>
        </div>
      </div>

    
    <router-link to="/prodotti" class="close-link"><div class="close" @click="scrollToLastPosition()"></div></router-link>
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
    scrollToLastPosition: function(){
      window.scrollTo({top: this.position, behavior: 'auto'});
    },
  },
}

</script>

