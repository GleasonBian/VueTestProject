<template>
  <div>
    <h1>父组件</h1>

    <h3>二.父组件传递数据给子组件</h3>
    <ul>
      <li>二.1.在 data 中定义需要传递的数据</li>
      <li>二.2.在template中引用子组件的地方使用v-bind(简写 ':')绑定数据</li>
      <li>二.3.切换到 到 子组件(Child.vue)中使用props接收来自父组件的数据</li>
    </ul>
    <!--
      二.4:注意:
        二.4.1:使用 v-bind 绑定 要传递给子组件的数据
        二.4.2:to-child-data : 给子组件的数据名字,必须短横线命名
        二.4.3:在 child.vue 文件 props 属性中 接收来自父组件的数据
        二.4.4:使用 toChildData 驼峰命名, 名字必须与父组件传递数名称一致 否则子组件接收不到数据
    -->
    <quote-child-components :to-child-data="msg"></quote-child-components>
  </div>
</template>
<script>
//一.引用组件
// 一.1:使用 import 引入需要的组件
import Child from "./Child";
export default {
  data() {
    return {
      msg: [1, 2, 3]
    };
  },
  methods: {},
  //一.2. 注册组件
  components: {
    // 一.2.1: quote-child-components 是在template中使用的名子,不能使用驼峰,html不认识大小写
    // 一.2.2: Child 是 import 组件的名字
    "quote-child-components": Child
  }
};
</script>
<style>
</style>
