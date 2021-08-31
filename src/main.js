import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from './plugins/vuetify'

// Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD2OJw8sN-KSp5G9d4e_5kswxA8hAVmxSM',
    libraries: 'places',
  }
});

//Axios
Vue.use(VueAxios, axios);

// *!* Cambiare in fase di deploy 
// Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json';
// Vue.axios.defaults.baseURL = 'https://emmequattro.altervista.org/wordpress/wp-json';
Vue.axios.defaults.baseURL = 'https://www.m4srl.it/office/wp-json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
