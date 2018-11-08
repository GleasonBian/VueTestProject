<template>
  <div>
    <h1>自定义指令</h1>
    <p>
      <b>作用:</b>&nbsp; &nbsp;对普通 DOM 元素进行底层操作</p>
    <div>
      <pre  onclick="hljs.copyCode(event)"><code  class="language-javascript hljs"><ol  class="hljs-ln" style="width: 944px;"><li ><div  class="hljs-ln-numbers"><div  data-line-number="1" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">Vue.directive(<span  class="hljs-string">"commd"</span>,{</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="2" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			<span  class="hljs-comment">// 当该指令第一次绑定到元素上时调用，只调用一次，可以用来执行初始化操作(简言之，指令绑定到元素)</span></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="3" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			bind:<span  class="hljs-function"><span  class="hljs-keyword">function</span>(<span  class="hljs-params"></span>)</span>{<span  class="hljs-comment">//</span><strong ><span  style="color: rgb(255, 0, 0);"><span  class="hljs-comment">常用！！！</span></span></strong></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="4" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">				alert(<span  class="hljs-string">"当该指令第一次绑定到元素上时调用，只调用一次，可以用来执行初始化操作"</span>)</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="5" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			},</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="6" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			<span  class="hljs-comment">//被绑定有自定义指令的元素插入到DOM中时调用，在这里是插入到了#container中（简言之，元素插入到DOM元素中）</span></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="7" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			inserted:<span  class="hljs-function"><span  class="hljs-keyword">function</span>(<span  class="hljs-params"></span>)</span>{</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="8" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">				alert(<span  class="hljs-string">"被绑定有自定义指令的元素插入到DOM（父节点）中时调用，在这里是插入到了#container中"</span>)</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="9" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			},</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="10" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			<span  class="hljs-comment">// 当被绑定的元素所在模板更新时调用</span></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="11" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			update:<span  class="hljs-function"><span  class="hljs-keyword">function</span>(<span  class="hljs-params"></span>)</span>{</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="12" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">				alert(<span  class="hljs-string">"当被绑定的元素所在模板更新时调用"</span>)</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="13" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			},</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="14" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			<span  class="hljs-comment">// 当被绑定的元素所在模板完成一次更新时调用（模板更新后调用）</span></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="15" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			componentUpdated:<span  class="hljs-function"><span  class="hljs-keyword">function</span>(<span  class="hljs-params"></span>)</span>{</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="16" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">				alert(<span  class="hljs-string">"当被绑定的元素所在模板完成一次更新时调用（模板更新后调用）"</span>)</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="17" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			},</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="18" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			<span  class="hljs-comment">// 当指令和元素解绑的时候调用，只执行一次(因为毕竟解绑一次就完成了嘛！)</span></div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="19" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			unbind:<span  class="hljs-function"><span  class="hljs-keyword">function</span>(<span  class="hljs-params"></span>)</span>{</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="20" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">				alert(<span  class="hljs-string">"当指令和元素解绑的时候调用，只执行一次(因为毕竟解绑一次就完成了嘛！)"</span>)</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="21" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">			}</div></div></li><li ><div  class="hljs-ln-numbers"><div  data-line-number="22" class="hljs-ln-line hljs-ln-n"></div></div><div  class="hljs-ln-code"><div  class="hljs-ln-line">		})</div></div></li></ol></code><div  data-title="复制" class="hljs-button"></div></pre>
      <ul>
        <li>bind，inserted，update...都是指令的钩子函数，在该指令不同的阶段执行不同的方法，常用的钩子函数是bind和update</li>
      </ul>
    </div>
    <local-custom-directive></local-custom-directive>
    <hr>
    <global-custom-directive></global-custom-directive>
    <hr>
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
* {
  box-sizing: border-box;
}

pre {
  font-family: Consolas, Inconsolata, Courier, monospace;
  font-size: 14px;
  line-height: 22px;
  color: #000;
  position: relative;
  box-sizing: inherit;
  outline: 0;
}

code ol {
  margin: 0;
  overflow: hidden;
}

.hljs-ln {
  border-collapse: collapse;
}

code ol li div.hljs-ln-numbers {
  width: 24px;
  border-right: 1px solid #c5c5c5;
}

ol,
ul {
  list-style: none;
}

pre code {
  display: block;
  font-size: 14px;
  line-height: 22px;
  overflow-x: auto;
  white-space: pre;
  word-wrap: normal;
  border-radius: 4px;
  padding: 8px;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #abb2bf;
  background: #282c34;
}
</style>
