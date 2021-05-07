<template>
    <div class="prodotti_servizi">
        <section class="prodotti">
          <h1 class="title">Prodotti</h1>
        </section>
        
        <section class="dettagli">
            <div class="container">
              <h3 class="description">Prodotti suddivisi per ambito di applicazione</h3>
              <router-view :key="$route.path"/>
              <div class="card-container row">
                <div class="card col-lg-4 col-md-6 col-sm-12" 
                v-for="prodotto in prodotti" 
                :key="prodotto.slug"
                >
                  <router-link class="innerlink" :to="{
                      name: 'ProdottiDescrizione',
                      params: {slug: prodotto.slug}
                  }">
                      <div v-html="prodotto.title.rendered"></div>
                      <img :src="prodotto.acf.image.url" :alt="prodotto.acf.image.alt">
                  </router-link>
                </div>
              </div>
            </div>
        </section>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            prodotti: this.$store.state.prodotti,
        }
    },
}
</script>
