import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueLocalStorage from 'vue-localstorage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '@/components/Home'
import Support from '@/components/Support'
import About from '@/components/About'
import Login from '@/components/Login'

import UserIndex from '@/components/users/UserIndex'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueLocalStorage)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'user-index',
      component: UserIndex,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const accessToken = window.localStorage.getItem('access_token')
  if (accessToken && to.name === 'login') {
    next({name: 'home'})
  }

  if (to.meta.requiresAuth) {
    if (accessToken) {
      next()
    } else {
      next({name: 'home'})
    }
  } else {
    next()
  }
})

export default router
