<template>
  <section class="descrizione pt-200">
    <div class="box-container container">

      <!-- Description -->
      <div class="box-row row">
        <h2 class="item-title title" v-html="item.title.rendered"></h2>
        <div class="col-lg-8 col-offset-lg-2 col-md-12 col-offset-md-0 col-sm-12 col-offset-sm-0">
          <div class="img shadow" :style="`background-image: url(${item.acf.image.url})`" :alt="item.acf.image.alt"></div>
          <div v-show="(parent === 'news')" class="date"><em>Pubblicato il : </em>{{lastUpdate(item.date)}}</div>
        </div>
        <div class="col-lg-8 col-offset-lg-2 col-md-10 col-offset-md-1 col-sm-10 col-offset-sm-1">
          <span class="content" v-html="item.content.rendered"></span>
        </div>
      </div>

      <!-- Download -->
      <div class="box-row row" v-if="item.acf.acqua || item.acf.solvente || item.acf.olii">
        <h3 class="col-lg-12 download-title title">Scarica la documentazione</h3>
        <div class="col-lg-6 col-sm-12" v-if="item.acf.acqua">
          <div class="download" >
            <a class="pdf" :href="item.acf.acqua.url">{{item.title.rendered}} <span class="acqua">all'acqua</span></a>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12" v-if="item.acf.solvente">
          <div class="download">
            <a class="pdf" :href="item.acf.solvente.url">{{item.title.rendered}} <span class="solvente">al solvente</span></a>
          </div>
        </div>
        <div class="col-lg-12" v-if="item.acf.olii">
          <div class="download">
            <a class="pdf" :href="item.acf.olii.url">{{item.title.rendered}} <span class="olii"></span></a>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="navigation">
        <a @click="$router.back(), scrollToLastPosition()" class="navigation-link"><i class="fas fa-arrow-circle-left back"></i></a>
        <!-- <router-link :to="`/${parent}`" class="navigation-link"><i class="fas fa-times-circle close"></i></router-link> -->
      </div>

    </div>
    
  </section>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    // position:{
    //   type: Number,
    // },
    parent:{
      type: String,
      required: true
    }
  },
  data(){
    return {
      date: '',
    }
  },
  computed: {
    items: function(){
      return this.$store.state[this.parent]
    },
    item: function(){
      return this.items.find(
        element => element.slug === this.slug
      );
    },
  },
  methods:{
    scrollToLastPosition: function(){
      //console.log(this.$store.state.scroll);
      window.scrollTo({top: this.$store.state.scroll, behavior: 'auto'});
    },
    lastUpdate: function(date){
      const d = new Date(date);
      const monthIndex = d.getMonth();
      const months = [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre'
      ];
      const year = d.getFullYear();
      const month = months[monthIndex];
      const day = d.getDate();
      const formatted = `${day} ${month} ${year}`
      return formatted  
    },
  },
  mounted(){
    //console.log(this.slug);
  }
}
</script>
<style lang="scss" scoped>
.descrizione{
  background-color: $lightcolor;
  color: $darkcolor;
  .box-container{
    position: relative;
    .box-row{
      width: 100%;
      padding: 1rem 0;
      .title{
        color: $darkcolor;
        margin: auto;
        margin-bottom: 2rem;
      }
      .item-title{
        height: max-content;
        width: 100%;
        margin-top: 3rem;
        text-transform: uppercase;
      }
      .img{
        width: 100%;
        height: 400px;
        margin-bottom: 2rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        &:hover,
        &:focus{
          transform: none;
        }
      }
      .date{
        margin-bottom: 2rem;
      }
      .content{
        font-size: $text;
        text-align: justify;
        line-height: 2;
        ul{
          margin-left: 1rem;
          margin-top: 1rem;
          text-align: left;
          li{
            line-height: 2rem;
            list-style: circle;
          }
        }
      }
      .download{
        text-align: center;
        width: 200px;
        height: 200px;
        margin: auto;
        margin-bottom: 1rem;
        border-radius: 50%;
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: border 300ms;
        &:hover,
        &:focus{
          border: 1px solid $borderlightcolor;
        }
        .pdf{
          width: 90%;
          margin: auto;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          color: $darkcolor;
          span{
            font-weight: 600;
          }
          .acqua{
            color: $primary;
          }
          .solvente{
            color: $secondary;
          }
          &::before{
            font-family: $fontAwesome;
            content: "\f1c1";
            font-size: $xxlarge;
          }  
          &::first-letter{
            text-transform: uppercase;
          }
        }
      }
    }
    .navigation{
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
      .navigation-link{
        i{
          font-size: $xlarge;
          color: $darkcolor;
          transition: color 300ms;
        }
        i:hover{
          color: $secondary;
        }
        i:first-of-type{
          margin-right: 1rem;
        }
      } 
    }
  }
}
</style>

