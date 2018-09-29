import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/router/Top'
import Input from '@/router/Input'
import Confirm from '@/router/Confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    }
  ]
})
