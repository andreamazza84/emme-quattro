<template>
  <section id="navbar">
    <div v-if="showBars" class="container">
      <router-link to="/" class="home-page"><div class="logo"></div></router-link>
      <i class="menu-hamburger" @click="mediaMenu()"></i>
      <div v-if="showMenu" class="overlay">
        <router-link to="/">Home</router-link>
        <router-link to="/chi-siamo" >Chi Siamo</router-link>
        <router-link to="/prodotti" >Prodotti</router-link>
        <router-link to="/servizi" >Servizi</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/contatti">Contatti</router-link>
        <router-link to="/area-clienti">Area<br>Clienti</router-link>
      </div>
    </div>
    <div v-else class="container">
      <router-link to="/chi-siamo" >Chi Siamo</router-link>
      <router-link to="/prodotti" >Prodotti</router-link>
      <router-link to="/servizi" >Servizi</router-link>
      <router-link to="/" class="home-page"><div class="logo"></div></router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/contatti">Contatti</router-link>
      <router-link to="/area-clienti">Area<br>Clienti</router-link>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      showBars: false,
      showMenu: false,
      window: {       // dichiarazione iniziale per la variabile window
        width: 0,
        height: 0,
      },
    }
  },
  methods:{
    /**  
    * @window_resize Shows menu hamburger under 992px screen width    
    */
    mediaWidth: function() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        let width = 0;
        //tablet
        if(window.innerWidth > 992) {
          this.showBars = false;
          this.showManu = false;
        }
        // //mobile
        // else if(window.innerWidth  <= 768){
        //     this.show = this.size.sm; //1
        // }
        //desktop
        if(window.innerWidth  <= 992){
            this.showBars = true;
        }
        //width = (100/this.show);
        //this.cardWidth = width.toString() + '%';
        //console.log(this.cardWidth);
    },
    /**
      @click shows the menu for mobile devices
     */
    mediaMenu: function(){
      if(this.showMenu){
        this.showMenu = false;
      }
      else{
        this.showMenu = true;
      }
      //console.log(this.showMenu);
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
  },
  mounted(){
    this.mediaWidth();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
  },
}
</script>
