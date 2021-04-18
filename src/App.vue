<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/chi-siamo">Chi Siamo</router-link>
        <router-link to="/prodotti">Prodotti</router-link>
        <router-link to="/servizi">Servizi</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contatti">Contatti</router-link>
        <router-link to="/area-clienti">Area Clienti</router-link>
      </div>
    </div>
    
    <router-view id="main"/>
    
    <div id="footer">
    
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  export default {
  //props: ["store"], 
  //Prodotti
  data(){
    return {
      prodotti: [],
      servizi: [],
      store: {},
    }
  },
  methods: {
    //API Call - GET method
    // apiGETstore: function(category){
    //   let store = [];
    //   axios
    //   .get(`http://localhost:8880/wp-json/wp/v2/${category}`)
    //   .then(response =>{
    //     for(let element in response.data){
    //         store.unshift(response.data[element]);
    //       }
    //     })
    //   .catch(error => {
    //     console.log(error);
    //     });
    //   return store;
    // }
  }, 

  created(){
    // this.apiGETstore('prodotti');
    // this.apiGETstore('servizi');
    // this.store = {"prodotti" : this.apiGETstore('prodotti'), "servizi" : this.apiGETstore('servizi')};
    // console.log(this.store); 
    //console.log(this.apiGETstore('prodotti'));
  },
}
</script>

<style lang="scss">
  @import "~@/scss/commons/variables.scss";
  @import "~@/scss/commons/common.scss";
  @import "~@/scss/commons/general.scss";
</style>