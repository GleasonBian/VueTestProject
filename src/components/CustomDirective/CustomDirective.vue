<template>
<div>
  <h1>自定义指令</h1>
  <p><b>作用:</b>&nbsp; &nbsp;对普通 DOM 元素进行底层操作</p>
  <local-custom-directive></local-custom-directive>
  <hr>
  <global-custom-directive></global-custom-directive>
</div>
</template>
<script>
import GlobalCustomDirective from "./GlobalCustomDirective";
import LocalCustomDirective from "./LocalCustomDirective";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    GlobalCustomDirective,
    LocalCustomDirective
  }
};
</script>
<style scoped>
</style>
