<template>
  <div>
    <h3>一.局部自定义指令</h3>
    <ul>
      <li>
        <b>示例:</b> &nbsp;&nbsp;当页面加载时下面 输入框 获得焦点
      </li>
      <li>
        <p><input type="text" v-focus></p>
      </li>
      <li>
        <h4>实现步骤</h4>
        <ul>
          <li>1.使用directive属性</li>
          <li>2.定义参数 focus </li>
          <li>3.自定义指令:inserted 一个函数</li>
          <pre class="prettyprint">
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
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  name: "LocalCustomDirective",
  data() {
    return {};
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
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
