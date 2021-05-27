<template>
  <baseItemsDescription parent="news" :slug="slug"/>
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
    position:{
      type: Number,
    }
  }
}
</script>

