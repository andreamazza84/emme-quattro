<template>
  <div id="footer">

    <section class="footer-top">
      <div class="container footer-container">
      
        <div class="logo">
          <router-link class="home-page-link" to="/">
              <div class="clear-logo" alt="logo M4"></div>
          </router-link>
        </div>

        <ul class="contatti">
          <li>EMME QUATTRO SRL</li>
          <li>Rappresentanze vernici legno</li>
          <li>Via Pantanelli 115/117</li>
          <li>61025 Montelabbate (PU)</li>
          <li><hr></li>
          <li>Tel. 0721 498949 | Fax. 0721 498395</li>
          <li>P.IVA 01198290411</li>  
        </ul>

        <ul class="social">
          <li><a class="facebook" href="https://www.facebook.com/EmmeQuattroSrl/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
          <!-- <li><a class="linkedin" href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li> -->
          <!-- <li><a class="instagram" href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a></li> -->
        </ul>
        
        <ul class="menu">
          <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/">home</router-link>
          </li>
          <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/chi-siamo">chi siamo</router-link>
          </li>
          <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/prodotti">prodotti</router-link>
          </li>
          <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/servizi">servizi</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/news">news</router-link>
          </li> -->
          <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/contatti">contatti</router-link>
          </li>
          <!-- <li>
            <router-link @click.native="scrollToTopAuto()" class="footer-menu-links" to="/area-clienti">area clienti</router-link>
          </li> -->
        </ul>
        
      </div>
      <div class="sticky-arrow">
        <div class="scroll-to-top" @click="scrollToTop()"><i class="fas fa-chevron-up"></i></div>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="policies row">
        <div class="col-lg-4 col-md-4 col-sm-12 policy-link"><router-link @click.native="scrollToTopAuto()" :to="{name: 'Privacy'}" target="_blank,fullscreen=no">Privacy Policy</router-link></div>
        <div class="col-lg-4 col-md-4 col-sm-12 policy-link"><router-link @click.native="scrollToTopAuto()" :to="{name: 'CookiePolicy' }" target="_blank,fullscreen=no">Cookie policy</router-link></div>
        <div class="col-lg-4 col-md-4 col-sm-12 policy-link"><router-link @click.native="scrollToTopAuto()" :to="{name: 'Informativa'}" target="_blank,fullscreen=no">Informativa area contatti</router-link></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'baseFooter',
  props: {
    //msg: String
  },
  data(){
    return{
      logoM4:{
        path: 'M4_2021_clear_logo_only.svg'
      },
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    scrollToTopAuto: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
  },

}
</script>
<style lang="scss" scoped>
#footer{
  width: 100%;
  background-color: $darkcolor;
  color: $lightcolor;
  
  .footer-top{
    padding: 0 2rem;
    padding-top: 2rem;
    position: relative;
    min-height: 260px;
    .footer-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: left;
      & > *{
        min-width: max-content;
        padding-bottom: 2rem;
      }
      .logo{
        flex-basis: calc(100% / 12 * 2);
        .home-page-link{
          .clear-logo{
            height: 78px;
            width: 78px;
            background-image: url($logo-footer);
            background-repeat: no-repeat;
            background-size: cover;
            background-position-x: left;
            margin-left: 14px;
          }
        }
      }
      .contatti{
        flex-basis: calc(100% / 12 * 3);
        text-align: right;
        & hr{
          display: inline-block;
          width: 80%;
          max-width: 40vw;          
          margin-top: 1rem;
          margin-bottom: 1rem;
          color: $lightcolor;
          border-top: 1px;
          border-left: 0;
          border-right: 0;
        }
      }
      .social{
        flex-basis: calc(100% / 12 * 3);
        display: flex;
        justify-content: center;
        i{
          font-size: $xlarge;
          margin: 0 1rem;
          transition: color 300ms;
          &:hover{
              color: $secondary;
            }
          }
        }

      .menu{
        flex-basis: calc(100% / 12 * 4);
        text-transform: capitalize;
        li{
          height: 2rem;
          .footer-menu-links{
            transition: color 300ms;
            &:hover{
              color: $secondary;
            }
          }
        }
      }
    }
  }

  .footer-bottom{
    background-color: $darkcolor2;
    .policies{
      width: 90%;
      height: 100%;
      margin: auto;
      color: $secondary;
      font-size: $small;
      .policy-link{
        //border: 1px solid white;
        margin: 1rem 0;
        a{
          display: block;
          height: 1.5rem;
          border-bottom: 1px solid transparent;
          div{
            transition: letter-spacing 300ms;
          }
          div:hover{
            letter-spacing: 1px;
          }
        }
        .router-link-active{
          font-weight: 800;
        }
      }
    }
  }

  .sticky-arrow{
    position: sticky;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    .scroll-to-top{
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $darkcolor2;
      color: $lightcolor;
      border-radius: 5px;
      cursor: pointer;
      transition: color 300ms;
      i{
        font-size: $large;
        font-weight: 800;
      }
      &:hover{
        color: $secondary;
      }
    }
  }

}
@media all and (min-width: 769px) and (max-width: 1200px){
  #footer{
    .footer-top{
      .footer-container{
        .logo{
          flex-basis: calc(100% / 12 * 6);
          .home-page-link{
            .clear-logo{
              margin: 0;
            }
          }
        }
        .contatti{
          flex-basis: calc(100% / 12 * 6);
          text-align: left;
        }
        .social{
          flex-basis: calc(100% /12 * 6);
          justify-content: flex-start;
          li:first-child i{
            margin-left: 0;
          }  
        }
        .menu{
          flex-basis: calc(100% / 12 * 6);
        }
      }  
    }
  }
}

@media all and (max-width: 768px) {
  #footer{
    .footer-top{
      .footer-container{
        .logo,
        .contatti,
        .social,
        .menu{
          flex-basis: 100%;
          text-align: center;
        }
        .logo{
          .home-page-link{
            .clear-logo{
              margin: auto;
            }
          }
        }
      }
    }
  }
}
</style>
