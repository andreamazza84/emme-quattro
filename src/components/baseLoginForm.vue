<template>
  <div class="w-full max-w-xs mx-auto">
    <form @submit.prevent="login()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input v-model="form.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="form.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="•••••••••••">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
        <baseErrorMessage :text="error.message"/>
      </div>
    </form>
    
  </div>
</template>
<script>
import baseErrorMessage from '@/components/baseErrorMessage.vue'

export default {
  components: {
    baseErrorMessage
  },
  data(){
    return {
      form: {
        username: '',
        password: ''
      },
      error:{
        message: ''
      },
    }
  },
  methods: {
    async login() {
      try{
        const result = await this.$store.dispatch('login', this.form);
        const { redirect = false } = this.$route.query;
        const path = redirect ? decodeURI(redirect) : '/';
        this.$router.push({ path });
      }
      catch(error){
        console.log("Error:");
        console.log(error);
        console.log(error.response.data.message);
        this.error.message = error.response.data.message;
      }
    }
  },
  mounted(){
  }
}
</script>