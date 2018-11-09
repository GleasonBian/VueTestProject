<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Vue 路由</h3>
    <ul>
      <li>1.创建 VueRouter 文件夹</li>
      <li>2.创建 VueRouter/Parent/parent.vue 文件(创建对应file and folder)</li>
      <li>3.创建 VueRouter/Child/child.vue 文件(创建对应 file and folder) </li>
      <li>4.打开src/router/index.js</li>
      <li>5.做如下配置
        <div>
          import Child from '@/components/VueRouter/child/child'
          <br> import Parent from '@/components/VueRouter/parent/parent'
          <br> Vue.use(Router)
          <p>
            在 export default new Router里做如下配置
            <br> { path:'/child', name:'ChildComponent', component:Child },
            <br> { path:'/parent', name:'ParentComponent', component:Parent }
          </p>
        </div>
      </li>
      <li>
        <p>
          点击下列连接 进行路由跳转
          <br>
          <router-link to="/parent">To Parent component</router-link>
          <br>
          <router-link to="/child">To Child component</router-link>
        </p>
      </li>
    </ul>
    <h3>vue 父子组件通信</h3>
    <ul>
      <router-link to="/ParentChildComm"> 父子组件通信</router-link>
    </ul>
    <h3>非父子组件通信</h3>
    <ul>
      <li><router-link to="/NonParentChild">非父子组件通信</router-link></li>
    </ul>
    <h3>自定义指令</h3>
    <ul>
      <li><router-link to="/CustomeDirective">自定义指令</router-link></li>
    </ul>
    <h3>路由切换</h3>
    <ul>
      <li><router-link to="/index">路由切换</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
