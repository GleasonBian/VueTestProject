<template>
  <div>
    <h3>全局自定义指令</h3>
    <p>作用:对普通 DOM 元素进行底层操作</p>
    <div v-lang="color">{{num}}</div>
    <p>
      <button @click="add">add</button>
    </p>
    <h3>实现全局自定义指令步骤</h3>
    <ul>
      <li>1.在 main.js 中
        <pre>
          //创建 Vue 全局指令
          Vue.directive('lang', function (el, binding) {
            console.log(el) //输出 绑定全局自定指令的 元素
            console.log(binding) //输出的是一个对象obj
            el.style = 'color:' + binding.value //binding.value就是color颜色red。
          })
        </pre>
        注意: 在 Vue 实例 前创建自定义指令
        <!-- 今天啥也没做推个假数据 -->
        <!-- 修改了简历 -->
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    name: 'GlobalCustomDirective',
    data: function () {
      return {
        num: 10,
        color: 'red'
      }
    },
    methods: {
      add: function () {
        this.num++;
      }
    },
    created(){
      this.add();
    }
  };
</script>
<style scoped>
</style>