import axios from "axios";

const baseURL = "https://money-laundry.herokuapp.com/v1/api/games";

export const apiHelper = axios.create({
  baseURL,
});

export default {
  getcategories() {
    return apiHelper.get("/categories", {});
  },
  getgamequestion(id) {
    return apiHelper.get(`/categories/${id}/levels`, {});
  },
  getgameitems(gameid) {
    return apiHelper.get(`/levels/${gameid}/items`, {});
  },
};
