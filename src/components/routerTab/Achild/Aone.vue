<template>
  <div>
    <router-link to="/index/aaa/atwo">
      加载Atow组件1
    </router-link>
    <router-link to="/index/atwo">
      加载Atow组件2
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'Aone'
}
</script>
<style scoped>

</style>

