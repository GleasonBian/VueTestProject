<template>
<div>
  <h1>父组件</h1>
  <quote-child-components></quote-child-components>
</div>
</template>
<script>
  //1.引入子组件
  import Child from './Child'
export default {
    data() {
      return {}
    },
    methods:{

    },
    //2. 注册组件
    components:{
      // 2.1: quote-child-components 是在template中使用的名子,不能使用驼峰,html不认识大小写
      // 2.2: Child 是 import 组件的名字
       'quote-child-components':Child
    }
}
</script>
<style>

</style>


