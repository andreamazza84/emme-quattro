import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// Vue.axios.defaults.baseURL = 'http://localhost:8880/wp-json'; (vedi main.js)

export default new Vuex.Store({
  state: {
    user: null,
    register: null,
    prodotti: null,
    servizi: null,
    carosello: null,
    contatti: null,
    pages: null,
    scroll: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    DELETE_USER(state) {
      state.user = null;
    },
    REGISTER_USER(state, register) {
      state.register = register;
    },
    SET_PRODOTTI(state, prodotti){
      state.prodotti = prodotti.reverse();
    },
    SET_SERVIZI(state, servizi){
      state.servizi = servizi.reverse();
    },
    SET_SLIDER(state, carosello){
      // const carosello_fallback = [
      //   "./@/assets/carosello/carosello_1.jpg",
      //   "./@/assets/carosello/carosello_2.jpg",
      //   "./@/assets/carosello/carosello_3.jpg",
      //   "./@/assets/carosello/carosello_4.jpg"
      // ]; 

      // carosello.forEach((image, index) =>{
      //   image.acf.image.url = undefined ?? carosello_fallback[index] 
      // });
            
      state.carosello = carosello.reverse();
      //console.log(state.carosello);
    },
    SET_PAGES(state, pages){
      state.pages = pages;
    },
    SET_CONTATTI(state, contatti){
      let id = null; let slug = null; let title = null; let content = null;
      let array = [];
      const parser = new DOMParser();
      for(const element of contatti){
        id = element.id;
        slug = element.slug;
        title = element.title.rendered;
        content = parser.parseFromString(element.content.rendered, "text/html");
        content = content.body.firstChild.textContent;
        array.push({id, slug, title, content});
      }
      state.contatti = array.reverse();
    },
    SET_POSTS(state, posts){
      state.posts = posts;
    },
    SET_NEWS(state, news){
      state.news = news;
    },
    SET_SCROLL(state, scroll){
      state.scroll = scroll;
    },
  },
  actions: {
    //Login
    login({ commit }, credentials){
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await axios.post(`/jwt-auth/v1/token`, credentials);
          commit('SET_USER', data);
          resolve(data);
        }catch(e){
          reject(e);
        }
      })
    },
    validate({ state }) {
      return axios({
        url: `/jwt-auth/v1/token/validate`, 
        method: 'post',
        headers: {
          'Authorization': `Bearer ${state.user.token}`
        }
      })
    },
    //Logout
    logout({ commit }){
      commit('DELETE_USER', 'null');
    },
    //Registration
    register({ commit }, credentials){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.post(`/wp/v2/users/register`, credentials);
          commit('REGISTER_USER', data);
          resolve(data);
        }
        catch(error){
          reject(error);
        }
      });
    },
    reset({ commit }, credentials){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.post(`/wp/v2/users/lost-password`, credentials);
          resolve(data); 
        }
        catch(error){
          reject(error);
        }
      });
    },
    // Recupera i prodotti e i servizi
    retrieveData({ commit }, item){
      return new Promise(async (resolve, reject) =>{
        try{
          const { data } = await axios.get(`/wp/v2/${item}`);
          if(item === "prodotti"){ return commit('SET_PRODOTTI', data); }
          if(item === "servizi"){ return commit ('SET_SERVIZI', data); }
          if(item === "carosello"){ return commit ('SET_SLIDER', data); }
          if(item === "contatti"){ return commit('SET_CONTATTI', data); }
          if(item === "pages"){ return commit('SET_PAGES', data); }
          if(item === "posts"){ return commit('SET_POSTS', data); }
          if(item === "news"){ return commit('SET_NEWS', data); }
          resolve(data);
        }
        catch(error){
          reject(error);
        }
      });
    },

  },

  modules: {}
})
