<template>
  <div class="news pt-200">
    <section class="articles">
      <router-view/>
      <router-view name="helper"/>
      <!-- Router View  -->
      <!-- <router-view :key="$route.path" :position="window.scrollY"/> -->
      <!-- /Router View  -->

    </section>
    </div> 
</template>

</script>
