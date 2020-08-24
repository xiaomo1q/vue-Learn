import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex);
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(e)
}

const store = new vuex.Store({
  state:{
    count: 1,
    city: defaultCity
  },
  mutations:{
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {e}
    }
  },
  actions:{

  }
})
