<template>
  <div class="container">
    <div class="card-container row">
      <div class="card col-lg-4 col-md-6 col-sm-12" 
      v-for="item in items" 
      :key="item.slug"
      >
        <router-link class="innerlink" 
          :to="{
            name: component.name,
            params: {slug: item.slug}
          }"
        >
          <h4 class="title" v-html="item.title.rendered"></h4>
          <div class="img shadow" 
            :style="`background-image: url(${item.acf.image.url})`" 
            @click="savePosition(), scrollToTop()">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      window:{
        scrollY: 0,
      },
      component:{
        name: 'ProductsDescription',
      },
    }
  },
  computed:{
    //## modificare questo elemento ##
    items: function(){
      return this.$store.state.prodotti;
    }
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    savePosition: function(){
      this.window.scrollY = window.scrollY; 
    },
  },
  mounted(){
  },
}
</script>
