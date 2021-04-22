<template>
  <div class="protected">
    <h1>This is a protected page</h1>
    <p>Only logged in users are going to be able to see this page</p>
    <button @click="logout()">Logout</button>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    logout: function(){
      if(this.$store.state.user != null){
        this.$store.dispatch('logout');
        //redirect 
        this.$router.push('/');
        alert('Il logout è avvenuto correttamente');
      }
    }
  },
}
</script>