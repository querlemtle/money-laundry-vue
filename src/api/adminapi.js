import { apiHelper } from "./gameapi";
const getToken = () => localStorage.getItem("token");

export default {
  login({ account, password }) {
    return apiHelper.post("/admin/login", {
      account,
      password,
    });
  },
  getSuggestLevels({ categoryId }) {
    return apiHelper.get(`/admin/categories/${categoryId}/suggest_levels`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  addOption({ formData, isPublished }) {
    return apiHelper.post(
      "/admin/item",
      { formData, isPublished },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
};
