import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    base:"http://172.16.1.100:8080/datacenter",
    loginInfo: {
      username: "",
      nickname: "",
      isLogin: false
    },
    data7Details:{
    	jgrq: "",
			kgrq: "",
			orgcode: "",
			type:"owner",
			dw:""
    }
  },
  mutations: {
  	setData7Details(state,data){
  		 state.data7Details=data;
  	},
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
