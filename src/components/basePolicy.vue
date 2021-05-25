<template>
  <div class="info container90 pt-200" v-show="policy.content">
    <h2 class="py-2-2 title" v-html="policy.title.rendered"></h2>
    <div class="content" v-html="policy.content.rendered"></div>
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
      return this.retrieveData(this.content);
      //retrieveData(content)
    }
  },
  methods: {
    retrieveData: function(slug){
      return this.$store.state.pages.find((element) => {
        return element.slug === slug;
      });
    }
  },
}
</script>
<style lang="scss" scoped>
.info{
  text-align: justify;
  .content::v-deep{
    p{
      line-height: 2;
      margin-bottom: 1rem;
    }
  }
  .title::v-deep{
    h3{
      text-transform: uppercase;
      padding: 2rem 0 0.5rem;
    }
  }
}
</style>