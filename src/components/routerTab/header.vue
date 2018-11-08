<template>
 <h1 style="text-align:center"> 头部组件 </h1>
</template>
<script>
export default {
  name:'header',
      data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style>

</style>



