<template>
<div>
  <local-custom-directive></local-custom-directive>
  <hr>
  <global-custom-directive></global-custom-directive>
</div>
</template>
<script>
import GlobalCustomDirective from "./GlobalCustomDirective";
import LocalCustomDirective from "./LocalCustomDirective";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    GlobalCustomDirective,
    LocalCustomDirective
  }
};
</script>
<style scoped>
</style>
