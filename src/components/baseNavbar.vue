<template>
  <div>
    <section id="navbar" :style="`height: ${navbar.height}`">

      <!-- Mobile Menu -->
      <div v-if="showBars" class="container menu-hamburger">
        <router-link to="/" class="home-page">
          <div class="logo" :style="logoStyle"></div>
        </router-link>
        <i class="icon-hamburger" @click="showHide()"></i>
        
        <div v-if="showMenu" class="container mobile-menu">
            <i class="close-menu" @click="showHide()"></i>
            <router-link class="mobile-menu-link" to="/"><span class="link" @click="showHide(); scrollToTop()">Home</span></router-link>
            <router-link class="mobile-menu-link" to="/chi-siamo"><span class="link" @click="showHide(); scrollToTop()">Chi Siamo</span></router-link>
            <router-link class="mobile-menu-link" to="/prodotti"><span class="link" @click="showHide(); scrollToTop()">Prodotti</span></router-link>
            <router-link class="mobile-menu-link" to="/servizi"><span class="link" @click="showHide(); scrollToTop()">Servizi</span></router-link>
            <router-link class="mobile-menu-link" to="/news"><span class="link" @click="showHide(); scrollToTop()">News</span></router-link>
            <router-link class="mobile-menu-link" to="/contatti"><span class="link" @click="showHide(); scrollToTop()">Contatti</span></router-link>
            <router-link class="mobile-menu-link" to="/area-clienti"><span class="link" @click="showHide(); scrollToTop()">Area<br>Clienti</span></router-link>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div v-else class="container container90 desktop-menu">
        <router-link class="desktop-menu-link" to="/chi-siamo"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Chi Siamo</span></router-link>
        <router-link class="desktop-menu-link" to="/prodotti"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Prodotti</span></router-link>
        <router-link class="desktop-menu-link" to="/servizi"><span class="link" @click="scrollToTop()" :style="`font-size: ${link.size}`">Servizi</span></router-link>
        <router-link class="desktop-menu-link home-page" to="/">
          <div class="logo" :style="logoStyle" @click="scrollToTop()"></div>
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
        dim: '130px',
      },
      jingle:{
        show: true,
      },
      link:{
        size: '1.5rem',
      },
    }
  },
  computed:{
    logoStyle() {
      return {'width': this.logo.dim, 'height': this.logo.dim};
      },
    },

  methods:{
    /** Scrolls page to top.
    * @click 
    */
    scrollToTop: function(){
      window.scrollTo(0,0);
    },
    /** Shows the menu for mobile devices
    * @click 
    */
    showHide: function(){
      if(this.showMenu){
        this.showMenu = false;
      }
      else{
        this.showMenu = true;
      }
    },
    /** Shows menu hamburger under 992px screen width
    * @window_resize     
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
    /** Adjusts the navbar height on the scroll position.
    * @window_scroll 
    */
    navbarHeight: function(){
      this.window.scrollY = window.scrollY;
      this.navbar.height = '90px';
      this.jingle.show = false;
      this.link.size = '1.2rem';
      if(this.window.scrollY === 0){
        this.navbar.height = '150px';
        this.jingle.show = true;
        this.link.size = '1.5rem';
      }
    },
    /** Re-render navbar logo dimensions
    * @window_scroll 
    * @window_resize
    */
    logoScale: function(){
      this.logo.dim = '78px';
      if(this.window.scrollY === 0){
        this.logo.dim = '90px';
        if(this.window.width > 1200){
          this.logo.dim = '130px';
        }
      }
    },
  },
  created() {
    window.addEventListener('resize', this.mediaWidth);
    window.addEventListener('scroll', this.navbarHeight);
    window.addEventListener('resize', this.logoScale);
    window.addEventListener('scroll', this.logoScale);
  },
  mounted(){
    this.mediaWidth();
    this.navbarHeight();
    this.logoScale();
  },
  distroyed() {
    window.removeEventListener('resize', this.mediaWidth);
    window.removeEventListener('scroll', this.navbarHeight);
    window.removeEventListener('resize', this.logoScale);
    window.removeEventListener('scroll', this.logoScale);
  },
}
</script>
<style lang="scss" scoped>
#navbar{
  height: 150px;
  padding: 0 2rem;
  background-color: $lightcolor;
  transition: height 300ms;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home-page{
    .logo{
      width: 130px;
      height: 130px;
      margin: auto;
      background-image: url($logo-nav);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
      transition: all 300ms;
    }
  }
  .desktop-menu{
    .desktop-menu-link {
      flex-basis: 130px;
      color: $darkcolor;
      font-weight: bold;
      font-size: $large;
      transition: all 300ms;
      &.router-link-exact-active,
      &:hover,
      &:focus {
        color: $primary;
      }
      .link{
        transition: all 300ms;
      }
    }
  }
  
  .icon-hamburger{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid $borderlightcolor;
    border-radius: 3px;
    color: $darkcolor;
    cursor: pointer;
    &::before{
      font-family: "Font Awesome 5 Free"; 
      font-size: 2rem;
      font-weight: 900; 
      content: "\f0c9";
    }
    &:hover,
    &:focus{
      color: $primary;
    }
  }
  
  .mobile-menu{
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $darktrasparency;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & > *{
      width: max-content;
    }
    .close-menu{
      position: absolute;
      right: 40px;
      top: 20px;
      &::before{
        font-family: "Font Awesome 5 Free"; 
        font-size: 2rem;
        font-weight: 900; 
        content: "\f00d";
        color: $lightcolor;
        cursor: pointer;
      }
    }
    .mobile-menu-link{
      color: $lightcolor;
      font-weight: bold;
      font-size: 1.5rem;
      transition: color 300ms;
      &.router-link-exact-active, 
      &:hover, 
      &:focus {
        color: $primary;
      }
    }
  }
}

#jingle{
  width: 100%;
  color: $lightcolor;
  background-color: $darkcolor;
  border-bottom: 2px solid $darkcolor;
  .container{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: display 300ms;
    .content{
      font-size: 1.2em;
      letter-spacing: 0.6em;
    }
  }
}
</style>