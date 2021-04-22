<template>
  <section id="about">
    <div class="container">
      <h3>Descrizione</h3>
      <h4 class="title product-title"><span v-html="servizio.title.rendered"></span></h4>
      <div class="box">
        <img :src="servizio.acf.image.url" :alt="servizio.acf.image.alt">
        <p class="description product-description"><span v-html="servizio.content.rendered"></span></p>
      </div>
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
  },
  data(){
    return {
      servizi: this.$store.state.servizi,
    }
  },
  computed: {
    servizio: function(){
      return this.servizi.find(
        element => element.slug === this.slug
      );
    }
  },
}

</script>

<style lang="scss" scoped>
#about{
  .box{
    display: flex;
    img{
      width: 200px;
    }
    .product-description{
      text-align: justify;
    }
  } 
}
</style>