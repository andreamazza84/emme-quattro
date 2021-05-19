<template>
  <div class="container">
    <div class="card-container row">
      <div class="card col-lg-4 col-md-6 col-sm-12" 
      v-for="article in news" 
      :key="article.slug"
      >
        <router-link class="innerlink" 
          :to="{
            name: 'ArticoloDescrizione',
            params: {slug: article.slug}
          }"
        >
          <h4 class="title" v-html="article.title.rendered"></h4>
          <div class="img shadow" :style="`background-image: url(${article.acf.image.url})`" @click="savePosition(), scrollToTop()"></div>
        </router-link>
      </div>
    </div>
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
    news: function(){
      return this.$store.state.news;
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