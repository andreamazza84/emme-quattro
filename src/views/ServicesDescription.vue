<template>
  <baseItemsDescription parent="servizi" :slug="slug"/>
</template>

<script>
import baseItemsDescription from '@/components/baseItemsDescription'
export default {
  components:{
    baseItemsDescription
  },
  props:{
    slug: {
      type: String,
      required: true
    },
  }
}
</script>

