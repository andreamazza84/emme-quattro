//http://localhost:8880/wp-json/wp/v2/prodotti

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

//Views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Prodotti from '../views/Prodotti.vue'
import Servizi from '../views/Servizi.vue'
import News from '../views/News.vue'
import Contatti from '../views/Contatti.vue'

//Children
import ProdottiDescrizione from '../views/ProdottiDescrizione.vue'
import ServiziDescrizione from '../views/ServiziDescrizione.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    navbar: true,
    desktop: 4,
    mobile: 1
  },
  {
    path: '/chi-siamo',
    name: 'About',
    component: About,
    navbar: true,
    desktop: 1,
    mobile: 2
  },
  {
    path: '/prodotti',
    name: 'Prodotti',
    props: true,
    component: Prodotti,
    children: [{ 
        path: ":slug",
        name: "ProdottiDescrizione",
        props: true,
        component: ProdottiDescrizione
        //component: () => import(/* webpackChunkName: "ProdottiDescrizione" */ "../views/ProdottiDescrizione.vue"),
    }],
    navbar: true,
    desktop: 2,
    mobile: 3
  },
  {
    path: '/servizi',
    name: 'Servizi',
    props: true,
    component: Servizi,
    children: [{
        path: ":slug",
        name: "ServiziDescrizione",
        props: true,
        component: ServiziDescrizione
    }],
    navbar: true,
    desktop: 3,
    mobile: 4
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    navbar: true,
    desktop: 5,
    mobile: 5
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: Contatti,
    navbar: true,
    desktop: 6,
    mobile: 6
  },
  {
    //LAZY LOAD
    path: '/area-clienti',
    name: 'AreaClienti',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AreaClienti.vue'),
    navbar: true,
    desktop: 7,
    mobile: 7
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/protected',
    name: 'Protected',
    component: () => import(/* webpackChunkName: "protected" */ '../views/Protected.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if user is logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      // we have a state.user object but
      // we need to check if the token is still valid
      try{
        const { status } = await store.dispatch('validate')
        // user is logged in with a valid token
        next()
      }catch(e){
        // the token is invalid so we will have the user login again
        // clear the token and user info
        store.commit('DELETE_USER')
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    }
  } else {
    // this is not a protected route
    next()
  }
})

export default router
