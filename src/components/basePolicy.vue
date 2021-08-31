<template>
  <div class="info container90 pt-200">
    <div class="p-rel" v-if="policy">
      <h2 class="title py-2-2" v-html="policy.title.rendered"></h2>
      <div class="content" v-html="policy.content.rendered"></div>
      <!-- Navigation buttons -->
      <a @click="closeTab()" class="navigation-link"><i class="fas fa-times-circle close"></i></a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props:{
    slug:{
      type: String,
      required: true,
    },
  },
  data(){
    return {
      content: null,
      policy: null,
    }
  },
  methods: {
    closeTab: function () {
      window.close();
    },
    retrieveContent: function(slug){
      return this.content.find((element) => {
        return element.slug === slug;
      });
    },
    retrieveData: function(){
      return new Promise(async(resolve, reject) =>{
        try{
          const { data } = await axios.get(`/wp/v2/pages`);
          resolve(data);
          this.content = this.$store.state.pages ?? data;
          this.policy = this.retrieveContent(this.slug);
        }
        catch(error){
          console.log(error);
          console.log(reject);
        }
      });
    },
  },
  mounted () {
    this.retrieveData();
  }
}
</script>
<style lang="scss">
  .info{
    padding-left: 2rem;
    padding-right: 2rem;
    .content{
      text-align: justify;
      p{
        line-height: 2;
        margin-bottom: 1rem;
      }
    }
    .title{
      width: 80%;
      height: 3rem;
      margin-top: 3rem;
      margin-bottom: 2rem;
      text-align: left;
      text-transform: uppercase;
    }
    table{
      width: 100%;
      margin-bottom: 2rem;
      border: 1px solid $borderlightcolor;
      border-collapse: collapse;
      font-size: $small;
      text-align: center;
      table{
        border: none;
      }
      thead{
        font-weight: bold;
        text-transform: uppercase;
        border: 1px solid $borderlightcolor;
        td{
          padding: 5px 0;
        }
      }
      td{
        max-width: 150px;
        width: max-content;
      }
    }
    a{
      color: $primary;
      &:hover{
        color: $primary-hover;
      }
    }
    .navigation-link{
      position: absolute;
      top: -1rem;
      right: 0;
      cursor: pointer;
      i{
        font-size: $xlarge;
        color: $darkcolor;
        transition: color 300ms;
      }
      i:hover{
        color: $secondary;
      }
    } 
  }
</style>