<template>
  <div class="login">
    <div class="container mx-auto px-4">
      <div class="flex -mx-4">
        <div class="w-full">
          <h1>Use this page to login</h1>
        </div>
      </div>
      <div class="flex -mx-4">
        <div class="w-full">
          <baseLoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseLoginForm from '@/components/baseLoginForm'
export default {
  components: {
    baseLoginForm
  } 
}
</script>