<template>
  <el-menu
    default-active="2"
    :router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>侧边栏</span>
      </template>
      <el-menu-item index="/index/editorStoreInfo">A组件</el-menu-item>
      <el-menu-item index="/index/viewStoreInfo">B组件</el-menu-item>
      <el-menu-item index="/index/viewStoreInfo">C组件</el-menu-item>
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

