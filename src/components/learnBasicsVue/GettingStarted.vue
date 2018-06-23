<template>
<div>
  <h3>条件渲染</h3>
  <ul>
    <li v-if="display">现在你看到我了</li>
  </ul>
</div>

</template>
<script>
export default {
  data(){
    return{
      display:true
    }
  }
}
</script>
<style scoped>

</style>
