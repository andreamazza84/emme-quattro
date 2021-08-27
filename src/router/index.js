// Back Office REST API:
//http://localhost:8880/wp-json/wp/v2/prodotti

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

//Views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Services from '../views/Services.vue'
import Contatti from '../views/Contatti.vue'
// import News from '../views/News.vue'
// import Err404 from '../views/Err404.vue'


//Children
// import NewsMenu from '../views/NewsMenu.vue'
// import NewsDescription from '../views/NewsDescription.vue'
import ProductsMenu from '../views/ProductsMenu.vue'
import ProductsDescription from '../views/ProductsDescription.vue'
import ServicesMenu from '../views/ServicesMenu.vue'
import ServicesDescription from '../views/ServicesDescription.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chi-siamo',
    name: 'About',
    component: About,
  },
  // {
  //   path: '/prodotti',
  //   name: 'Prodotti',
  //   props: true,
  //   component: Prodotti,
  //   children: [{ 
  //       path: ":slug",
  //       name: "ProdottiDescrizione",
  //       props: true,
  //       component: ProdottiDescrizione
  //       //component: () => import(/* webpackChunkName: "ProdottiDescrizione" */ "../views/ProdottiDescrizione.vue"),
  //   }],
  // },
  
  // {
  //   path: '/news',
  //   props: true,
  //   component: News,
  //   children: [
  //     {
  //       path: '/',
  //       props: true,
  //       name: 'NewsMenu',
  //       component: NewsMenu
  //     },
  //     {
  //       path: ":slug",
  //       props: true,
  //       name: "NewsDescription",
  //       component: NewsDescription
  //     },
  //   ],
  // },
  {
    path: '/prodotti',
    props: true,
    component: Products,
    children: [
      {
        path: '/',
        props: true,
        name: 'ProductsMenu',
        component: ProductsMenu
      },
      {
        path: ":slug",
        props: true,
        name: "ProductsDescription",
        component: ProductsDescription
      },
    ],
  },
  {
    path: '/servizi',
    props: true,
    component: Services,
    children: [
      {
        path: '/',
        props: true,
        name: 'ServicesMenu',
        component: ServicesMenu
      },
      {
        path: ":slug",
        props: true,
        name: "ServicesDescription",
        component: ServicesDescription
      },
    ],
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: Contatti
  },
  // {
  //   //LAZY LOAD
  //   path: '/area-clienti',
  //   name: 'AreaClienti',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AreaClienti.vue'),
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  // },
  // {
  //   path: '/protected',
  //   name: 'Protected',
  //   component: () => import(/* webpackChunkName: "protected" */ '../views/Protected.vue'),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    props: true,
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  },
  {
    path: '/informativa-area-contatti',
    name: 'Informativa',
    props: true,
    component: () => import(/* webpackChunkName: "informativa" */ '../views/Informativa.vue')
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    props: true,
    component: () => import(/* webpackChunkName: "cookie" */ '../views/CookiePolicy.vue')
  },
  { path: '/*', 
    name: 'Err404',
    component: () => import(/* webpackChunkName: "Err404" */ '../views/Err404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
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
        await store.dispatch('validate')
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
