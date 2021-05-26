<template>
  <div v-if="show" class="modal container90 pt-200" v-show="policy.content">
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
    },
    show: {
      type: Boolean,
      required: true,
    },
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
  // async mounted(){
  //   this.policy = await this.retrieveContent(this.content);
  // }
}
</script>
<style lang="scss" scoped>
.modal{
  position: absolute;
  top: 2rem;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
}
</style>