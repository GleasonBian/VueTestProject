// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      bus: new Vue() // 给data添加一个 名字为eventHub 的空vue实例,用来传输非父子组件的数据
    }
  },
  router,
  components: {
    App
  },
  template: '<App/>',

}).$mount('#app'); // 手动挂载，#app
Vue.directive('lang', function (el, binding) {
  console.log(el) //标签<div v-lang="color">{{num}}</div>
  console.log(binding) //输出的是一个对象obj
  el.style = 'color:' + binding.value //binding.value就是color颜色red。
})