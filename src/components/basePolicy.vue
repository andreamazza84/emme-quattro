<template>
  <div class="info container90 pt-200 p-rel" v-show="policy.content">
  <div class="p-rel">
    <h2 class="py-2-2 title" v-html="policy.title.rendered"></h2>
    <div class="content" v-html="policy.content.rendered"></div>
    <!-- Navigation buttons -->
    <a @click="$router.back()" class="navigation-link"><i class="fas fa-times-circle close" @click="scrollToLastPosition()"></i></a>
  </div>
  </div>
</template>
<script>

export default {
  props:{
    content:{
      type: String,
      required: true,
    }
  },
  computed:{
    policy: function(){
      return this.retrieveContent(this.content);
    }
  },
  methods: {
    retrieveContent: function(slug){
      return this.$store.state.pages.find((element) => {
        return element.slug === slug;
      });
    }
  },
}
</script>