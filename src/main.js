// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import layer from 'vue-layer'
import Vant from '../node_modules/vant'
import App from './App'
import router from './router'
import store from './store'
import 'jquery'
import './assets/font/search/iconfont.css'
import './assets/font/close/iconfont.css'
import './assets/font/iconfont/iconfont.css'
Vue.use(Vant);
Vue.use(vuex);
Vue.prototype.$layer = layer(Vue);
Vue.prototype.axios =axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})



