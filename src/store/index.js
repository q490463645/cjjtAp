import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    loginInfo: {
      username: "",
      nickname: "",
      isLogin: false
    }
  },
  mutations: {
    login(state, data) {
      state.loginInfo = data;
      sessionStorage.setItem("loginInfo", JSON.stringify(data));
    },
    logout(state) {
      let data = {
        username: "",
        nickname: "",
        isLogin: false
      };
      state.loginInfo = data;
      sessionStorage.setItem("loginInfo", JSON.stringify(data));
    }
  },
  actions: {}
});
