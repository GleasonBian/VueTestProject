<template>
  <div>
    <h1>子组件</h1>
    <ul v-for="(item,index) in toChildData">
      <li>{{index}}:{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    toChildData: Array
  },
  methods: {
    getMsg() {
      console.log(this.toChildData);
    }
  },
  created() {
    this.getMsg();
  },
  components: {}
};
</script>
<style>
</style>
