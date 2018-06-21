<template>
  <div>
    <h1>父组件</h1>
    <h3>一.引用组件</h3>
    <ul>
      <li>一.1:使用 import 引入需要的组件</li>
      <li>一.2. 注册组件</li>
      <li>一.2.1: quote-child-components 是在template中使用的名子,不能使用驼峰,html不认识大小写</li>
      <li>一.2.2: Child 是 import 组件的名字</li>
    </ul>
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
    <quote-child-components :to-child-data="msg" :from-msg="toChild" :id="idOne"></quote-child-components>
    <h3>三.子组件与父组件通信</h3>
    <ul>
      <li>
        <h4>说明:</h4>
        <p>在vue中不允许子组件改变父组件数据，因为vue是单向数据传递，可以通过触发事件来通知父组件改变数据，从而达到改变子组件数据的目的.</p>
      </li>
      <li>三.1:在子组件内</li>
      <li>三.6:在父组件页面引入子组件</li>
      <li>三.7:在父组件内定义一个供子组件触发的方法: ChengeParent</li>
      <li>三.8:在父组件引用子组件的地方 使用 v-con(简写:@) 绑定 在子组件$emit内定义的方法名 responseChild 并调用父组件内的方法 : @responseChild="ChengeParent" </li>
      <li>父组件数据被子组件修改:<span style="font-size:20px;color:red;font-weight:800;">{{ParentData}}</span></li>
    </ul>

    <quote-child-components :from-msg="toChild" @responseChild="ChengeParent" :id="idTwo"></quote-child-components>
  </div>
</template>
<script>
//一.引用组件
// 一.1:使用 import 引入需要的组件
import Child from "./Child";
export default {
  data() {
    return {
      msg: [1, 2, 3],
      toChild: "我是被引用的子组件",
      ParentData: 1,
      idOne: 1,
      idTwo: 2
    };
  },
  methods: {
    ChengeParent(event) {
      this.ParentData++;
      alert(event);
    }
  },
  //一.2. 注册组件
  components: {
    // 一.2.1: quote-child-components 是在template中使用的名子,不能使用驼峰,html不认识大小写
    // 一.2.2: Child 是 import 组件的名字
    "quote-child-components": Child
  }
};
</script>
<style scoped>

</style>
