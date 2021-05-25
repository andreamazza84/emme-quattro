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
          <li><a class="facebook" href="https://www.facebook.com"><i class="fab fa-facebook-square"></i></a></li>
          <li><a class="linkedin" href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
          <li><a class="instagram" href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a></li>
        </ul>
        
        <ul class="menu">
          <li>
            <router-link class="footer-menu-links" to="/chi-siamo"><span @click="scrollToTopAuto()">chi siamo</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/prodotti"><span @click="scrollToTopAuto()">prodotti</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/servizi"><span @click="scrollToTopAuto()">servizi</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/news"><span @click="scrollToTopAuto()">news</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/contatti"><span @click="scrollToTopAuto()">contatti</span></router-link>
          </li>
          <li>
            <router-link class="footer-menu-links" to="/area-clienti"><span @click="scrollToTopAuto()">area clienti</span></router-link>
          </li>
        </ul>
        
      </div>
      <div class="scroll-to-top" @click="scrollToTop()"><i class="fas fa-chevron-up"></i></div>
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
    padding: 2rem;
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
    height: 1px;
    background-color: $lightcolor;
  }

  .scroll-to-top{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
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
