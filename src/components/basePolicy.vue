<template>
  <div class="info container90 pt-200">
    <div class="p-rel" v-if="policy">
      <h2 class="title py-2-2" v-html="policy.title.rendered"></h2>
      <div class="content" v-html="policy.content.rendered"></div>
      <!-- Navigation buttons -->
      <a @click="$router.back()" class="navigation-link"><i class="fas fa-times-circle close"></i></a>
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
  created(){
    this.retrieveData();
  }
}
</script>