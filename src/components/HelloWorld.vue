<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/parent">To Parent component</router-link>
    <router-link to="/child">To Child component</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
