import axios from "axios";

const baseURL = "https://money-laundry.herokuapp.com/v1/api";

export const apiHelper = axios.create({
  baseURL,
});

export default {
  getcategories() {
    return apiHelper.get("/categories", {});
  },
  getgamequestion(id) {
    return apiHelper.get(`/categories/${id}`, {});
  },
  getgameitems(gameid) {
    return apiHelper.get(`/games/${gameid}`, {});
  },
};
