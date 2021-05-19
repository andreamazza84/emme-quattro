<template>
  <section class="descrizione">
    <div class="box-container container">
      <!-- Description -->
      <div class="box-row row">
        <h2 class="col-lg-12 product-title" v-html="article.title.rendered"></h2>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="img shadow" :style="`background-image: url(${article.acf.image.url})`" :alt="article.acf.image.alt"></div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-10 col-offset-sm-1">
          <p class="content" v-html="article.content.rendered"></p>
        </div>
      </div>

      <!-- Download -->
      <div class="box-row row" v-if="article.acf.acqua || article.acf.solvente || article.acf.olii">
        <h3 class="col-lg-12 download-title">Scarica la documentazione</h3>
        <div class="col-lg-6 col-sm-12" v-if="article.acf.acqua">
          <div class="download" >
            <a class="pdf" :href="article.acf.acqua.url">{{article.title.rendered}} <span class="acqua">all'acqua</span></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12" v-if="article.acf.solvente">
          <div class="download">
            <a class="pdf" :href="article.acf.solvente.url">{{article.title.rendered}} <span class="solvente">al solvente</span></a>
          </div>
        </div>
        <div class="col-lg-12" v-if="article.acf.olii">
          <div class="download">
            <a class="pdf" :href="article.acf.olii.url">{{article.title.rendered}} <span class="olii"></span></a>
          </div>
        </div>
      </div>

    
    <router-link to="/news" class="close-link"><div class="close" @click="scrollToLastPosition()"></div></router-link>
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
    news: function(){
      return this.$store.state.news
    },
    article: function(){
      return this.news.find(
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

