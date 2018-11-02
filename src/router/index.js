import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import Compose from '../components/Compose'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/compose',
      name: 'Compose',
      component: Compose
    }
  ]
})
