<template>
  <section class="descrizione">
    <div class="box-container container">
      <!-- Description -->
      <div class="box-row row">
        <h2 class="col-lg-12 product-title" v-html="item.title.rendered"></h2>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="img shadow" :style="`background-image: url(${item.acf.image.url})`" :alt="item.acf.image.alt"></div>
        </div>
        <div class="col-lg-7 col-md-5 col-sm-10 col-offset-sm-1">
          <p class="content" v-html="item.content.rendered"></p>
        </div>
      </div>

      <!-- Download -->
      <div class="box-row row" v-if="item.acf.acqua || item.acf.solvente || item.acf.olii">
        <h3 class="col-lg-12 download-title">Scarica la documentazione</h3>
        <div class="col-lg-6 col-sm-12" v-if="item.acf.acqua">
          <div class="download" >
            <a class="pdf" :href="item.acf.acqua.url">{{item.title.rendered}} <span class="acqua">all'acqua</span></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12" v-if="item.acf.solvente">
          <div class="download">
            <a class="pdf" :href="item.acf.solvente.url">{{item.title.rendered}} <span class="solvente">al solvente</span></a>
          </div>
        </div>
        <div class="col-lg-12" v-if="item.acf.olii">
          <div class="download">
            <a class="pdf" :href="item.acf.olii.url">{{item.title.rendered}} <span class="olii"></span></a>
          </div>
        </div>
      </div>

    
    <router-link :to="page.previous" class="close-link"><div class="close" @click="scrollToLastPosition()"></div></router-link>
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
      date: '',
      page:{
        previous: '/servizi'
      },
    }
  },
  computed: {
    // ## Cambiare il campo "news"##
    items: function(){
      return this.$store.state.servizi
    },
    item: function(){
      return this.items.find(
        element => element.slug === this.slug
      );
    },
  },
  methods:{
    scrollToLastPosition: function(){
      window.scrollTo({top: this.position, behavior: 'auto'});
    },
    lastUpdate: function(date){
      const d = new Date(date);
      const monthIndex = d.getMonth();
      const months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre'
      ];
      const year = d.getFullYear();
      const month = months[monthIndex];
      const day = d.getDate();
      const formatted = `${day} ${month} ${year}`
      return formatted  
    },
  },
}

</script>

