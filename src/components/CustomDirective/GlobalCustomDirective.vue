<template>
  <div>
    <h3>二.全局自定义指令</h3>
    <p><b>示例:</b>&nbsp;使用全局自定指令(v-lang)将 Auto Increase: 结果变为红色 </p>
    <div>
      <button @click="add">add</button>
      <span>Auto Increase: <b v-lang="color">{{num}}</b></span>
    </div>
    <h3>实现全局自定义指令步骤</h3>
    <ul>
      <li>在 main.js 中
        <pre class="prettyprint">
          //创建 Vue 全局指令
          Vue.directive('lang', function (el, binding) {
            console.log(el) //输出 绑定全局自定指令的 元素
            console.log(binding) //输出的是一个对象obj
            el.style = 'color:' + binding.value //binding.value就是color颜色red。
          })
        </pre>
      </li>
      <li>注意: 在 Vue 实例 前创建自定义指令</li>
    </ul>
  </div>

</template>
<script>

export default {
  name: "GlobalCustomDirective",
  data: function() {
    return {
      num: 10,
      color: "red"
    };
  },
  methods: {
    add: function() {
      this.num++;
    }
  },
  created() {
    this.add();
  }
};
</script>
<style scoped>
pre.prettyprint {
  margin: 0 0 24px;
  padding: 10px 0px 4px 0px;
  background-color: #f6f8fa;
  border: none;
}
</style>
