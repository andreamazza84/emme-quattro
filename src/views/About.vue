<template>
  <div class="about pt-200">
    <div class="container90">
     <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12 colonna storia">
        <h2 class="py-2-2" v-html="story.title.rendered"></h2>
        <div class="content" v-html="story.content.rendered"></div>      
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 colonna cosa-facciamo">
        <h2 class="py-2-2" v-html="whatWeDo.title.rendered"></h2>
        <div class="content" v-html="whatWeDo.content.rendered"></div>
      </div>
     </div>

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  computed:{
    posts: function(){
      return this.$store.state.posts;
    },
    story: function(){
      return this.$store.state.posts.find(element => 
        element.slug === "lazienda"
      );
    },
    whatWeDo: function(){
      return this.$store.state.posts.find(element =>
      element.slug === "cosa-facciamo"
      );
    }
  },
}
</script>
