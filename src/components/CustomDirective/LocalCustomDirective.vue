<template>
  <div>
    <h3>局部自定义指令(聚焦输入)</h3>
    <p>当页面加载时获得焦点</p>
    <input type="text" v-focus>
    <h4>实现步骤</h4>
    <ul>
      <li>1.使用directive属性</li>
      <li>2.定义参数 focus </li>
      <li>3.自定义指令:inserted 一个函数</li>
      <pre>
        directives: {
          focus: {
            // 指令的定义
            inserted: function (el) {
              el.focus()
            }
          }
        }
      </pre>
    </ul>
  </div>

</template>
<script>
  export default {
    name:'LocalCustomDirective',
    data() {
      return{}
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  };
</script>
<style scoped>
</style>