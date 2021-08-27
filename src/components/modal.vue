<template>
  <div v-if="show" class="modal-wrapper">
    <i class="fas fa-times-circle"></i>
    <div class="modal-container container90">
      <h2 class="py-2-2 title" v-html="policy.title.rendered"></h2>
      <div class="content" v-html="policy.content.rendered"></div>
    </div>
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
  // data(){
  //   return{
  //     show: false,
  //   }
  // },
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
<style lang="scss">
.modal-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background-color: $modaltrasparency;
  i{
    position: absolute;
  }
  .modal-container{
    margin: auto;
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin: 202px auto;
    background-color: $lightcolor;
    border-radius: 5px;
    overflow-Y: scroll;
    overflow-X: hidden;
    .content{
      margin-bottom: 400px;
    }
  }
}
</style>