<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <h5>Vue 路由</h5>
      <li>1.创建 VueRouter 文件夹</li>
      <li>2.创建 VueRouter/Parent/parent.vue 文件(创建对应file and folder)</li>
      <li>3.创建 VueRouter/Child/child.vue 文件(创建对应 file and folder) </li>
      <li>4.打开src/router/index.js</li>
      <li>5.做如下配置
        <div>
          import Child from '@/components/VueRouter/child/child' import Parent from '@/components/VueRouter/parent/parent' Vue.use(Router)
          在 export default new Router里做如下配置
          <p>
            { path:'/child', name:'ChildComponent', component:Child }, { path:'/parent', name:'ParentComponent', component:Parent }
          </p>
        </div>
      </li>
    </ul>
    <router-link to="/parent">To Parent component</router-link>
    <router-link to="/child">To Child component</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>