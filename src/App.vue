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
export default {}
</script>

<style lang="scss">
@import "~@/scss/commons/variables.scss";
@import "~@/scss/commons/common.scss";
@import "~@/scss/commons/general.scss";
</style>

