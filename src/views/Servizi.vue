<template>
    <div class="prodotti_servizi">
        <section class="servizi">
            <h1>Servizi</h1>
        </section>
        
        <section class="dettagli">
            <div class="container">
                <h3>Servizi suddivisi per ambito di applicazione</h3>
                <ul class="cards">
                    <li class="card" 
                    v-for="servizio in servizi" 
                    :key="servizio.slug"
                    >
                        <router-link class="innerlink" :to="{
                            name: 'ServiziDescrizione',
                            params: {slug: servizio.slug}
                        }">
                            <span v-html="servizio.title.rendered"></span>
                            <img :src="servizio.acf.image.url" :alt="servizio.acf.image.alt">
                        
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
        <router-view :key="$route.path"/>
    </div> 
</template>
<script>
import store from "@/store.js";

export default {
    
    data(){
        return{
            servizi: Object.freeze(store.servizi),
        }
    },
}
</script>
