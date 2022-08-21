import { apiHelper } from "./gameapi";
const getToken = () => localStorage.getItem("token");

export default {
  login({ account, password }) {
    return apiHelper.post("/admin/login", {
      account,
      password,
    });
  },
  getlatest() {
    return apiHelper.get("/admin/items/latest_10", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getcategoryitem(category_id) {
    return apiHelper.get(`/admin/categories/${category_id}/items`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteitem(item_id) {
    return apiHelper.delete(`/admin/items/${item_id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getSuggestLevels({ categoryId }) {
    return apiHelper.get(`/admin/categories/${categoryId}/suggest_levels`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  addOption(formData) {
    return apiHelper.post("/admin/item", formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getCurrentUser() {
    return apiHelper.get("/current_user", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getItemDetail(itemId) {
    return apiHelper.get(`/admin/items/${itemId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  putItem(itemId, formData) {
    return apiHelper.put(`/admin/items/${itemId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
