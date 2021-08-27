<template>
  <div class="about pt-200">
    <div class="container90">
     <div class="row flex justify-center">
      <div class="col-lg-8 col-md-10 col-sm-12 colonna storia">
        <h2 class="py-2-2">La nostra storia</h2>
        <div class="content" v-html="story.content.rendered"></div>      
      </div>
      <!-- <div class="col-lg-6 col-md-12 col-sm-12 colonna cosa-facciamo">
        <h2 class="py-2-2" v-html="whatWeDo.title.rendered"></h2>
        <div class="content" v-html="whatWeDo.content.rendered"></div>
      </div> -->
     </div>

    </div>
  </div>
</template>
<script>
export default {
  computed: {
    story: function () {
      return this.$store.state.posts.find(element => {
        return element.slug === "lazienda"
      });
    }
  },
}
</script>
<style lang="scss">
  .about{
    .colonna{
      padding: 0 1rem 1rem 1rem;

      .content{
        text-align: justify;
        p{
          line-height: 2;
          margin-bottom: 1rem;
        }
      }
    }
  }
</style>
