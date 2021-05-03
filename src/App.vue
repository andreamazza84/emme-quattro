<template>
  <div id="app">
    <div id="nav">
      <section class="top">
        <div class="container">
          <router-link to="/chi-siamo" class="box">Chi Siamo</router-link>
          <router-link to="/prodotti" class="box">Prodotti</router-link>
          <router-link to="/servizi" class="box">Servizi</router-link>
          <router-link to="/" id="home" class="box"><div class="logo"></div></router-link>
          <router-link to="/news" class="box">News</router-link>
          <router-link to="/contatti" class="box">Contatti</router-link>
          <router-link to="/area-clienti" class="box">Area<br>Clienti</router-link>
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
        this.retrieveData('carosello');

    }, 
}
</script>

<style lang="scss">
  @import "~@/scss/app.scss";
</style>