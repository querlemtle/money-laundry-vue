import { apiHelper } from "./gameapi";

export default {
  login({ account, password }) {
    return apiHelper.post("/admin/login", {
      account,
      password,
    });
  },
};
