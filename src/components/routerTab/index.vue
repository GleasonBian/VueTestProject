<template>
<!--  这里使用 element-ui 布局 -->
  <el-container>
    <!-- 头部 -->
    <el-header>
      <Vheader></Vheader>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <Vaside></Vaside>
      </el-aside>
      <el-main>
      <!-- 主体 也是 点击侧边栏中选项 加载对应组件 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
//  引入 头部组件 和 侧边栏组件
  import Vheader from "@/components/routerTab/header";
  import  Vaside from "@/components/routerTab/aside";
  export default {
    name: 'index',
    components: {
      Vheader,
      Vaside
    },
  }
</script>
<style>
</style>