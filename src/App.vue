<template>
  <div id="app">
    <div id="nav">
    <section class="top">
      <div class="container">
        <router-link to="/chi-siamo">Chi Siamo</router-link>
        <router-link to="/prodotti">Prodotti</router-link>
        <router-link to="/servizi">Servizi</router-link>
        <router-link to="/" id="home"><div class="logo"></div></router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contatti">Contatti</router-link>
        <router-link to="/area-clienti">Area<br>Clienti</router-link>
      </div>
    </section>
    <section class="bottom">
      <div class="container">
        <div class="jingle">il colore su misura</div>
      </div>
    </section>
    </div>
    
    <router-view id="main"/>
    
    <div id="footer">
    
    </div>
  </div>
</template>

<script>
  export default {
  data(){
    return {}
  },
  methods:{
        async retrieveData(item){
            try{
                const result = await this.$store.dispatch('retrieveData', item);
            }
            catch(error){
                console.log("Error", error);
            }
        }
    },
    mounted(){
        this.retrieveData('prodotti');
        this.retrieveData('servizi');

    }, 
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>