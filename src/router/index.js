import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import City from '../views/City.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/city/:city',
    name: 'City',
    component: City,
    // man wechselt erst die Route wenn Daten geladen sind
    beforeEnter: (to, from, next)  => {
      store.dispatch('fetchWeatherForStore', to.params.city).then(response => {
        console.log(response)
        next()
      }).catch (err => {
        console.log(err)
      })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// immer wenn die Route wechselt kommt beforeEach in das Spiel
  /*
router.beforeEach( (to, from, next) => {
  console.log('beforeEach')
  console.log(from)
  console.log(to)
  next()
})
   */

export default router
