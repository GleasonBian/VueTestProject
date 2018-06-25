<template>
  <div>
    <p>Dialog Component!</p>
    <p>Input Component Transmit Message：{{InputMessage}}</p>
  </div>
</template>
<script>
export default {
  name: "dialogCom",
  data() {
    return {
      message: "hello input",
      InputMessage: ""
    };
  },
  mounted() {
    this.$root.bus.$on("changeMsg", Value => {
      this.print(Value);
    });
  },
  methods: {
    print(Value) {
      this.InputMessage = Value;
    }
  },
  beforeDestroy() {
    this.$root.bus.$off("changeMsg");
  }
};
</script>

<style scoped>
</style>
