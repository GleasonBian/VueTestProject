<template>
<div>
  <h3>非父子组件通信</h3>
  <Input></Input>
  <hr height="10px" color="red">
  <Dialog></Dialog>
</div>
</template>
<script>
import Input from "./input";
import Dialog from "./dialog";
export default {
  name: "nonParentChildcommunication",
  data() {
    return {};
  },
  methods: {},
  components: {
    Input,
    Dialog
  }
};
</script>
<style scoped>
</style>

