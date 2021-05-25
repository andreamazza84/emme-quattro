<template>
  <div class="items-menu pt-200">
    <section class="items">
      <div class="container">
        <div class="card-container row">
          <div class="card col-lg-4 col-md-6 col-sm-12" 
          v-for="item in items" 
          :key="item.slug">
            <div class="link-to-description">
              <h4 class="title my-2-1" v-html="item.title.rendered"></h4>
              <div class="img shadow" 
                :style="`background-image: url(${item.acf.image.url})`" 
                @click="savePosition(), scrollToTop()">
                <router-link class="innerlink" :to="{name: child, params: {slug: item.slug}}"></router-link>
              </div>
            </div>
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
    //console.log(this.name);
  },
}
</script>

<style lang="scss" scoped>
.items-menu{
  width: 100%;
  height: 100%;
  section.items{
    position: relative;
    padding-bottom: 2rem;
    .title{
      color: $darkcolor;
      height: 3rem;
      font-size: $normal;
      text-transform: uppercase;
    }
    .img{
      position: relative;
      margin: auto;
      max-width: 300px;
      min-width: 200px;
      width: 30vh;
      max-height: 300px;
      min-height: 200px;
      height: 30vh;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: transform 300ms;
      &:hover{
        transform: scale(1.1);
      }
      .innerlink{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
}
</style>