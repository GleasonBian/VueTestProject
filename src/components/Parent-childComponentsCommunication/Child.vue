<template>
  <div>
    <h1>子组件<span>({{fromMsg}})</span></h1>
    <ul v-for="(item,index) in toChildData" :key="item.id">
      <li>{{index}}:{{item}}</li>
    </ul>
    <div v-if="!(id==1)">
      <h2>触发父组件方法</h2>
      <!-- 三.1:定义触父组件的方法 "changeParentMethod -->
      <button @click="changeParentMethod">修改父组件数据</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    toChildData: Array,
    fromMsg: {
      type: String,
      default: ""
    },
    id: Number
  },
  methods: {
    getMsg() {
      //console.log(this.toChildData);
    },
    changeParentMethod() {
      // 三.2:通过 $emit 调用父组件方法
      // 三.3:第一个参数 在父组件 页面应用子组件的地方 定义的 供子组件触发方法的名称 responseChild
      // 三.4:第二参数 带给父组件的数据
      // 三.5:转到父组件
      this.$emit("responseChild", "收到来自子组件的消息");
    }
  },
  created() {
    this.getMsg();
  },
  components: {}
};
</script>
<style>
</style>
