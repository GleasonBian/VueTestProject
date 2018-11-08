<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <v-aside></v-aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import { Vheader } from "@/components/routerTab/header";
import { Vaside } from "@/components/routerTab/aside";
export default {
  name:'index'
}
</script>
<style>

</style>


