import Vue from "vue";
import Vuex from "vuex";
import adminAPI from "../api/adminapi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: "",
      isAdmin: 0,
    },
    isAuthenticated: false,
    optionId: -1,
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
    setOption(state, optionId) {
      state.optionId = optionId;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const response = await adminAPI.getCurrentUser();
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        const { id, account, isAdmin } = response.data.data.currentUser;
        commit("setCurrentUser", { id, account, isAdmin });
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
    async fetchOption(id) {
      try {
        const response = await adminAPI.getItemDetail(id);
        console.log(response);
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
  },
  modules: {},
});
