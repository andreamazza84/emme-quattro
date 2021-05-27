<template>
    <div id="error-message">
      <div v-if="error" class="error">
        {{text}}
      </div>
      <div v-if="success" class="success">
        {{text}}
      </div>
    </div>
</template>
<script>
export default {
  props: {
    text: String,
    error: Boolean,
    success: Boolean,
  },
}
</script>
<style lang="scss" scoped>
  #error-message{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: max-content;
    margin: 20px;
    > div{
      width: 100%;
      font-size: $normal;
      //padding: 0.5rem;
    }
    .error{
      color: red;
      background-color: pink;
    }
    .success{
      color: green;
      background-color: lightgreen;
    }
  }
</style>