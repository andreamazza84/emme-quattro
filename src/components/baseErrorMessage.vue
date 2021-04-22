<template>
    <div v-if="text" id="message">
      <div class="error">
        {{text}}
      </div>
    </div>
</template>
<script>
export default {
    props: {
      text: String
    },
    data(){
      return {
        //text: null,
      }
    }
}
</script>
<style lang="scss">
  #message{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    margin: 20x 0;
    .error{
      color: red;
      background-color: pink;
      width: 100%;
      height: 100%;
    }
  }
</style>