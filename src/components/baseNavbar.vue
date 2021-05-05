<template>
  <div>
    <section id="navbar" :style="`height: ${navbar.height}`">

      <!-- Mobile Menu -->
      <div v-if="showBars" class="container">
        <router-link to="/" class="home-page">
          <div class="logo" :style="`transform: scale(${logo.scale})`"></div>
        </router-link>
        <i class="menu-hamburger" @click="showHide()"></i>
        
        <div v-if="showMenu" class="mobile-menu">
            <i class="close-menu" @click="showHide()"></i>
            <router-link class="mobile-menu-link" to="/"><span class="link" @click="showHide()">Home</span></router-link>
            <router-link class="mobile-menu-link" to="/chi-siamo"><span class="link" @click="showHide()">Chi Siamo</span></router-link>
            <router-link class="mobile-menu-link" to="/prodotti"><span class="link" @click="showHide()">Prodotti</span></router-link>
            <router-link class="mobile-menu-link" to="/servizi"><span class="link" @click="showHide()">Servizi</span></router-link>
            <router-link class="mobile-menu-link" to="/news"><span class="link" @click="showHide()">News</span></router-link>
            <router-link class="mobile-menu-link" to="/contatti"><span class="link" @click="showHide()">Contatti</span></router-link>
            <router-link class="mobile-menu-link" to="/area-clienti"><span class="link" @click="showHide()">Area<br>Clienti</span></router-link>
        </div>
      </div>
      <!-- Desktop Menu -->
      <div v-else class="container desktop-menu">
        <router-link class="desktop-menu-link" to="/chi-siamo"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Chi Siamo</span></router-link>
        <router-link class="desktop-menu-link" to="/prodotti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Prodotti</span></router-link>
        <router-link class="desktop-menu-link" to="/servizi"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Servizi</span></router-link>
        <router-link class="desktop-menu-link home-page" to="/">
          <div class="logo" :style="`transform: scale(${logo.scale})`" @click="scrollToTop()"></div>
        </router-link>
        <router-link class="desktop-menu-link" to="/news"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">News</span></router-link>
        <router-link class="desktop-menu-link" to="/contatti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Contatti</span></router-link>
        <router-link class="desktop-menu-link" to="/area-clienti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Area<br>Clienti</span></router-link>
      </div>
    </section>

    <section id="jingle">
      <div class="container" v-show="jingle.show">
        <div class="content">il colore su misura</div>
      </div>
    </section>
  </div>
</template>
<script>
import routes from '../router/index';
export default {
  data(){
    return{
      router: routes,
      showBars: false,
      showMenu: false,
      closeMenu: false,
      window: { 
        width: 0,
        height: 0,
        scrollY: 0,
      },
      navbar:{
        width: 0,
        height: '150px',
      },
      logo: {
        scale: '100%',
      },
      jingle:{
        show: true,
      },
      link:{
        size: '1.5rem',
      },
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
          this.showMenu = false;
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
      this.window.scrollY = window.scrollY;
      //console.log(this.window.scrollY);
      if(this.window.scrollY === 0){
        this.navbar.height = '150px';
        this.logo.scale = '100%';
        this.jingle.show = true;
        this.link.size = '1.5rem';
      }
      else{
        //this.$emit('scroll');
        this.navbar.height = '90px';
        this.logo.scale = '65%';
        this.jingle.show = false;
        this.link.size = '1.2rem';
      }
    },
    scrollToTop: function(){
      window.scrollTo(0,0);
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
    window.addEventListener('scroll', this.navbarHeight);
  },
  mounted(){
    this.mediaWidth();
    this.navbarHeight();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
    window.removeEventListener('scroll', this.navbarHeight);
  },
}
</script>
