<template>
  <div>
    <!-- 条件渲染 -->
    <h1 v-if="seen">{{msg}}XYYYYYYYYYYYYYYYY</h1>
    <!-- 事件 -->
    <h2 @click="reverseMessage">{{!!seen ? 'false': 'true'}}</h2>
    <!-- v-bind 元素绑定  -->
    <span :title="msg">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
    <!-- 条件循环 -->
    <ol>
      <li v-for="(todo,index) in todos" :key="index">{{todo.text}}</li>
    </ol>

    <!-- 双向绑定 -->
    <p>{{ message }}</p>
    <input v-model="message" />
    <!-- 组件 -->
    <index-main :imgArr="imgArr" :index="index" @next='index++' @prev='index--'/>
    
  </div>
</template>

<script>
import IndexMain from "./main/index";
export default {
  name: "layout",
  components: { IndexMain },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
      message: "Hello Vue!",
      index: 0,
      imgArr: [
        "https://i.loli.net/2020/08/22/F1pxADBJQdNbeyE.png",
        "https://i.loli.net/2020/08/22/3IUPKmM17Qah46x.png",
        "https://i.loli.net/2020/08/22/UN42s3LdaxmBbVQ.png",
        "https://i.loli.net/2020/08/22/TgykW28VeEj9PoG.png",
      ],
    };
  },
  methods: {
    reverseMessage: function () {
      this.seen = !this.seen;
    },
  },
};
</script>

<style>
</style>