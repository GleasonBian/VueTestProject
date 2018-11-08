<template>
  <el-menu
    default-active="2"
    :router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>侧边栏</span>
      </template>
      <!-- 这里 的 index 代表 要去的路由  -->
      <el-menu-item index="/index/aaa">A组件</el-menu-item>
      <el-menu-item index="/index/bbb">B组件</el-menu-item>
      <el-menu-item index="/index/ccc">C组件</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name:'aside'
}
</script>
<style>

</style>

