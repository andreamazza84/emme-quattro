<template>
  <section id="navbar" :style="`height: ${navbar.height}`">
    <div v-if="showBars" class="container">
      <router-link to="/" class="home-page"><div class="logo" :style="`width: ${logo.width}; height: ${logo.height}`"></div></router-link>
      <i class="menu-hamburger" @click="showHide()"></i>
      
      <!-- Mobile Menu -->
      <div v-if="showMenu" class="mobile-menu">
          <i class="close-menu" @click="showHide()"></i>
          <router-link class="mobile-menu-link" to="/"><span @click="showHide()">Home</span></router-link>
          <router-link class="mobile-menu-link" to="/chi-siamo"><span @click="showHide()">Chi Siamo</span></router-link>
          <router-link class="mobile-menu-link" to="/prodotti"><span @click="showHide()">Prodotti</span></router-link>
          <router-link class="mobile-menu-link" to="/servizi"><span @click="showHide()">Servizi</span></router-link>
          <router-link class="mobile-menu-link" to="/news"><span @click="showHide()">News</span></router-link>
          <router-link class="mobile-menu-link" to="/contatti"><span @click="showHide()">Contatti</span></router-link>
          <router-link class="mobile-menu-link" to="/area-clienti"><span @click="showHide()">Area<br>Clienti</span></router-link>
      </div>
    </div>
    <!-- Desktop Menu -->
    <div v-else class="container desktop-menu">
      <router-link class="desktop-menu-link" to="/chi-siamo">Chi Siamo</router-link>
      <router-link class="desktop-menu-link" to="/prodotti">Prodotti</router-link>
      <router-link class="desktop-menu-link" to="/servizi">Servizi</router-link>
      <router-link class="desktop-menu-link home-page" to="/"><div class="logo"></div></router-link>
      <router-link class="desktop-menu-link" to="/news">News</router-link>
      <router-link class="desktop-menu-link" to="/contatti">Contatti</router-link>
      <router-link class="desktop-menu-link" to="/area-clienti">Area<br>Clienti</router-link>
    </div>

  </section>
</template>
<script>
export default {
  data(){
    return{
      showBars: false,
      showMenu: false,
      closeMenu: false,
      window: {       // dichiarazione iniziale per la variabile window
        width: 0,
        height: 0,
      },
      navbar:{
        width: 0,
        height: '150px'
      },
      logo: {
        width: '130px',
        height: '130px'
      }
    }
  },
  methods:{
    /**  
    * @window_resize Shows menu hamburger under 992px screen width    
    */
    mediaWidth: function() {
        //mobile 768px
        //tablet 992px
        //desktop 1200px
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
        if(window.innerWidth > 1200) {
          this.showBars = false;
          this.showManu = false;
        }
        if(window.innerWidth  <= 1200){
            this.showBars = true;
        }
    },
    /**
      @click shows the menu for mobile devices
     */
    showHide: function(){
      if(this.showMenu){
        this.showMenu = false;
      }
      else{
        this.showMenu = true;
      }
    },
    navbarHeight: function(){
      //console.log(window.scrollY);
      let lastKnownScrollPosition = window.scrollY;
      if(lastKnownScrollPosition != 0){
        this.navbar.height = '100px';
        this.logo.width = '85px';
        this.logo.height = '85px';
      }
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
    window.addEventListener('scroll', this.navbarHeight);
  },
  mounted(){
    this.mediaWidth();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
    window.removeEventListener('scroll', this.navbarHeight);

  },
}
</script>
