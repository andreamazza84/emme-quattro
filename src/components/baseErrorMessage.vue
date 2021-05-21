<template>
    <div v-if="text" id="error-message">
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
  #error-message{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
    margin: 20px;
    .error{
      color: red;
      background-color: pink;
      width: 100%;
      height: 100%;
    }
  }
</style>