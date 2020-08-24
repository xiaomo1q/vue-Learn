import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex);
export const store = new vuex.Store({
  state: {
    count: 0,
    counit: 0,
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    decrement (state) {
      state.count--;
    },
    add (state) {
      state.counit++;
    },
    del (state) {
      state.counit--;
    },

  }
})



