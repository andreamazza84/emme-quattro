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
            servizi: store.servizi,
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss">
.cards{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .card{
        display: flex;
        flex-direction: column;
        align-items: space-around;
        justify-content: center;
        width: calc(100% / 6);
        min-height: 300px;
        padding: 20px;
        border: 1px solid #aaa;
        list-style: none;
            img{
                width: 100%;
                height: 100%;
        }
    }
}

</style>