import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//1.引入 组件
import Child from '@/components/VueRouter/child/child'
import Parent from '@/components/VueRouter/parent/parent'
import ParentCildComm from '@/components/Parent-childComponentsCommunication/Parent'
//2.使用 Router
Vue.use(Router)
//3.在 下面配置路由
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
    },
    {
      path:'/ParentChildComm',
      name: 'ParentChildComponentsComm',
      component: ParentCildComm
    }
  ]
})
