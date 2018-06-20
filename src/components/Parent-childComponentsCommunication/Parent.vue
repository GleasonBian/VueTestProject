<template>
<div>
  <h1>父组件</h1>

  <h3>父组件传递数据给子组件</h3>
  <ul>
    <li>1.在 data 中定义需要传递的数据</li>
    <li>2.在template中引用子组件的地方使用v-bind(简写 ':')绑定数据</li>
    <li>3.切换到 到 子组件(Child.vue)中使用props接收来自父组件的数据</li>
  </ul>
  <quote-child-components :transmit-to-child-components=msg></quote-child-components>
</div>
</template>
<script>
  //1.引入子组件
  import Child from './Child'
export default {
    data() {
      return {
        msg:[1,2,3]
      }
    },
    methods:{

    },
    //2. 注册组件
    components:{
      // 2.1: quote-child-components 是在template中使用的名子,不能使用驼峰,html不认识大小写
      // 2.2: Child 是 import 组件的名字
       'quote-child-components':Child
    }
}
</script>
<style>

</style>


