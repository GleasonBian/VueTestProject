<template>
  <div>
    <h3>非父子组件通信</h3>
    <b>以下实现步骤:</b>
    <ul>
      <li>1.在 main.js 中 添加data属性
        <pre class="prettyprint" v-text="mainJSCode">
        </pre>
      </li>
      <li> 2.添加需要通信的非父子组件(项目中实现的步骤)</li>
      <li>
        2.1:创建 input.vue
        <pre v-text="inputCode" class="prettyprint"></pre>
      </li>
      <li>
        2.2创建 dialog.vue
        <pre v-text="dialogCode" class="prettyprint">
        </pre>
      </li>
      <li>
        2.3:nonParentChildCommunication.vue
        <pre v-text="nonParentChildCommCode" class="prettyprint"></pre>
      </li>
    </ul>
    <hr height="10px" color="red">
    <b>以下是效果:</b>
    <i-nput></i-nput>
    <hr>
    <Dialog></Dialog>
  </div>
</template>
<script>
import Input from "./input";
import Dialog from "./dialog";
export default {
  name: "nonParentChildcommunication",
  data() {
    return {
      mainJSCode: `
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
      `,
      inputCode: `
          template:
            <div>
              <p>Input Component!</p>
              <input type="text" v-model="message" >
              <button @click="sendMessage">发送消息</button>
            </div>

          script:
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
      `,
      dialogCode: `
        template:
          <div>
            <p>Dialog Component!</p>
            <p>Input Component Transmit Message：{{InputMessage}}</p>
          </div>

        script:
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
      `,
      nonParentChildCommCode: `
        template:
          Input></Input>
          <hr height="10px" color="red">
          <Dialog></Dialog>

        script:
          import Input from "./input";
          import Dialog from "./dialog";
          export default{
            components: {
              Input,
              Dialog
            }
          }
      `
    };
  },
  methods: {},
  components: {
    Input,
    Dialog
  }
};
</script>
<style scoped>
pre.prettyprint {
  margin: 0 0 24px;
  padding: 10px 0px 4px 0px;
  background-color: #f6f8fa;
  border: none;
}
b {
  color: rgb(0, 47, 255);
}
</style>
