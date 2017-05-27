// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import EventBus from './EventBus'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const accessToken = window.localStorage.getItem('access_token')
    if (accessToken) {
      next()
    } else {
      next({name: 'Home'})
    }
  } else {
    next()
  }
})

Vue.use(VueLocalStorage)
Vue.prototype.$bus = EventBus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
