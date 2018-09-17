import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/test',
      name: 'Test',
      // component: test
      component: () => import('@/components/test')
    }
  ]
})
