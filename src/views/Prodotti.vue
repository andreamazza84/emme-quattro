<template>
    <div class="prodotti_servizi">
        <section class="prodotti">
            <h1>Prodotti</h1>
        </section>
        
        <section class="dettagli">
            <div class="container">
                <h3>Prodotti suddivisi per ambito di applicazione</h3>
                <ul class="cards">
                    <li class="card" 
                    v-for="prodotto in prodotti" 
                    :key="prodotto.slug"
                    >
                        <router-link class="innerlink" :to="{
                            name: 'ProdottiDescrizione',
                            params: {slug: prodotto.slug}
                        }">
                            <span v-html="prodotto.title.rendered"></span>
                            <img :src="prodotto.acf.image.url" :alt="prodotto.acf.image.alt">
                        
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
        <router-view :key="$route.path"/>
    </div> 
</template>
<script>
import apigetdata from "@/apicall.js";

export default {
    
    data(){
        return{
            prodotti: Object.freeze(apigetdata.prodotti),
        }
    },
}
</script>
