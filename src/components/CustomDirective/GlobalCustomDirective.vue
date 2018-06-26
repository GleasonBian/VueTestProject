<template>
  <div>
    <h3>全局自定义指令</h3>
    <p>作用:对普通 DOM 元素进行底层操作</p>
    <div v-lang="color">{{num}}</div>
    <!---->
    <p>
      <button @click="add">add</button>
    </p>
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
    }
  };
</script>
<style scoped>
</style>