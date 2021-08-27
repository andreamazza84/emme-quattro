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
              <div class="img shadow" :style="`background-image: url(${item.acf.image.url})`">
                <router-link class="innerlink"
                  @click.native="storePosition(), scrollToTop()" 
                  :to="{name: child, params: {slug: item.slug}}">
                </router-link>
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
    },
    // position: {
    //   type: Number,
    // }
  },
  data(){
    return{
      window:{
        scrollY: null,
      },
    }
  },
  computed:{
    items: function () {
      return this.$store.state[this.name];
    }
  },
  methods:{
    scrollToTop: function () {
      window.scrollTo({top: 0, behavior: 'auto'});
    },
    storePosition: function () {
      this.window.scrollY = Math.floor(window.scrollY);
      this.$store.commit('SET_SCROLL', this.window.scrollY);
    },
  },
}
</script>

<style lang="scss" scoped>
.items-menu{
  width: 100%;
  height: 100%;
  section.items{
    padding-bottom: 2rem;
    .title{
      color: $darkcolor;
      height: max-content;
      min-height: 3rem;
      font-size: $medium;
      font-weight: 700;
      text-transform: uppercase;
    }
    .link-to-description{
      width: 100%;
      padding: 0 2rem;
      .title{
      display: flex;
      flex-direction: column;
      align-items: center;
      }
      .img{
        position: relative;
        margin: auto;
        width: 30vh;
        max-width: 300px;
        min-width: 200px;
        height: 30vh;
        max-height: 300px;
        min-height: 200px;
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
}
</style>