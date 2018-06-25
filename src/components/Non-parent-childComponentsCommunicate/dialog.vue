<template>
  <div>
    <p>Dialog Component</p>
    <p>Receive Message From Input Component：<span :class="active">{{InputMessage}}</span></p>
  </div>
</template>
<script>
export default {
  name: "dialogCom",
  data() {
    return {
      message: "hello input",
      InputMessage: "未收到消息",
      active: "MessageNo"
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
  },
  computed: {
    classObject() {
      return {
        isReceived: this.InputMessage == "未收到消息" ? true : false
      };
    }
  },
  watch: {
    InputMessage: function() {
      console.log(this.active);
      this.active =
        this.InputMessage == "未收到消息" ? "MessageNo" : "MessageOk";
    }
  }
};
</script>

<style scoped>
.isReceived {
  color: red;
}
.MessageOk {
  color: green;
}
.MessageNo {
  color: red;
}
</style>
