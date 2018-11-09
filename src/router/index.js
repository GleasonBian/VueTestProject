import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//1.引入 组件
import Child from '@/components/VueRouter/child/child'
import Parent from '@/components/VueRouter/parent/parent'
import ParentCildComm from '@/components/Parent-childComponentsCommunication/Parent'
import GettingStarted from '@/components/learnBasicsVue/GettingStarted'
import NonParentChildCommunication from '@/components/Non-parent-childComponentsCommunicate/nonParentChildCommunication'
import CustomeDirective from '@/components/CustomDirective/CustomDirective'


//2.使用 Router
Vue.use(Router)
//3.在 下面配置路由
export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/child',
      name: 'ChildComponent',
      component: Child
    },
    {
      path: '/parent',
      name: 'ParentComponent',
      component: Parent
    },
    {
      path: '/ParentChildComm',
      name: 'ParentChildComponentsComm',
      component: ParentCildComm
    },
    {
      path: '/GetStart',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/NonParentChild',
      name: 'NonParentChildCommunication',
      component: NonParentChildCommunication
    },
    {
      path: '/CustomeDirective',
      name: 'CustomeDirective',
      component: CustomeDirective
    },
    {
      path: '/index',//  注意 / 代表根目录
      name: 'index',
      component: resolve => require(['@/components/routerTab/index.vue'],resolve), //懒加载组件
      children:[
        {
          path:'aaa', // A 组件
          component: resolve => require(['@/components/routerTab/A.vue'], resolve),
          children:[
            {
              path:'aone',
              component: resolve => require(['@/components/routerTab/Achild/Aone'],resolve),
            },{
              path: 'atwo',
              component: resolve => require(['@/components/routerTab/Achild/Atow'], resolve)
            }
          ]
        },
        {
          path: 'bbb', // B 组件
          component: resolve => require(['@/components/routerTab/B.vue'],resolve)
        },
        {
          path: 'ccc', // C 组件
          component: resolve => require(['@/components/routerTab/C.vue'],resolve)
        }
      ]
    }
  ]
})
