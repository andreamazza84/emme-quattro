import Vue from 'vue'
import App from './App.vue'

// Vue-Router
import router from './router'

// Vuex
import store from '@/store'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global Registration
// ****** //
// import upperFirst from 'loadsh/upperfirst'
// import camelCase from 'loadsh/camelCase'

// // Require in a case component context
// const requireComponent = require. context(
//   '.', false, /base-[\w-]+\.vue$/
// );

// requireComponent.keys().forEach(fileName =>{
//   // Get component config
//   const componentConfig = requireComponent(fileName);
// });

// //Get Pascalcase name of component 
// const componentName = upperFirst(
//   camelCase(fileName.replace(/^\. \//, '').replace(/\. \w+$/, ''))
// );

// //Register component globally
// Vue.component(componentName, componentConfig.default || componentConfig);
// ****** // 

//Axios
Vue.use(VueAxios, axios);

// *!* Cambiare in fase di deploy 
Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json';

//FontAwesome
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
