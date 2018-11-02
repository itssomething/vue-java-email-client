import Vue from 'vue'
import Router from 'vue-router'
import Compose from '../components/Compose'
import Main from '../components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/compose',
      name: 'Compose',
      component: Compose
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
