<template>
  <section id="descrizione-prodotti">
    <div class="container">
      <h3>Descrizione</h3>
      <h4 class="title product-title"><span v-html="prodotto.title.rendered"></span></h4>
      <div class="box row">
        <img class="col-lg-4" :src="prodotto.acf.image.url" :alt="prodotto.acf.image.alt">
        <p class="col-lg-8 description product-description"><span v-html="prodotto.content.rendered"></span></p>
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
      prodotti: this.$store.state.prodotti,
    }
  },
  computed: {
    prodotto: function(){
      return this.prodotti.find(
        element => element.slug === this.slug
      );
    }
  },
}

</script>

