import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import stady from  '@/components/stady'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stady',
      component: stady,
    }
    // {
    //   path: '/',
    //   name: 'stady',
    //   component: stady,
    // }

  ]
})
