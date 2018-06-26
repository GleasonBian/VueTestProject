<template>
<div>
  <LocalCustomDirective></LocalCustomDirective>
  <hr>
  <GlobalCustomDirective></GlobalCustomDirective>
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
