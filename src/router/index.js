import Vue from 'vue'
import Router from 'vue-router'
import ButtonPage from '@/components/ButtonPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ButtonPage
    }
  ]
})
