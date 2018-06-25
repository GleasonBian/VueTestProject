<template>
  <div>
    <p>Input Component</p>
    <input type="text" v-model="message" placeholder="输入消息发送给dialog组件">
    <button @click="sendMessage">发送消息</button>
  </div>
</template>
<script>
export default {
  name: "inputCom",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage(val) {
      // 事件名字自定义，用不同的名字区别事件
      this.$root.bus.$emit("changeMsg", this.message);
    }
  }
};
</script>
<style scoped>
</style>
