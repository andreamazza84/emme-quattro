<template>
  <div class="news pt-200">
    <section class="articles">
      <div class="container">
        <div class="card-container row">
          <div class="card col-lg-4 col-md-6 col-sm-12" 
          v-for="item in items" 
          :key="item.slug"
          >
            <router-link class="innerlink" 
              :to="{
                name: child,
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
    </section>
  </div> 
</template>

<script>
export default {
  props:{
    name: {
      type: String,
      required: true
    },
    child:{
      type: String,
      required: true
    }
  },
  data(){
    return{
      window:{
        scrollY: 0,
      },
    }
  },
  computed:{
    items: function(){
      return this.$store.state[this.name];
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
