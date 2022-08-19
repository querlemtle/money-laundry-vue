import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: "",
      isAdmin: 0,
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
    },
    // 登出，移除 token
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});
