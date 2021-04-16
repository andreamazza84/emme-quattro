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
//import app from  '@/scss/app.scss'

export default {

}
</script>
<style lang="scss">

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7f7;
}

#nav {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: $darkcolor;
  .container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

#main{
  padding-top: 100px;
  min-height: 100vh;
}

#footer{
  min-height: 300px;
  width: 100%;
  background-color: $darkcolor;
}
</style>

