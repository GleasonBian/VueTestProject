import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Child from '@/components/VueRouter/child/child'
import Parent from '@/components/VueRouter/parent/parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/child',
      name:'ChildComponent',
      component:Child
    },
    {
      path:'/parent',
      name:'ParentComponent',
      component:Parent
    }
  ]
})
