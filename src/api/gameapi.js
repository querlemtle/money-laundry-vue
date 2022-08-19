import axios from "axios";

const baseURL = "https://money-laundry.herokuapp.com/v1/api";

export const apiHelper = axios.create({
  baseURL,
});

export default {
  getcategories() {
    return apiHelper.get("/games/categories", {});
  },
  getgamequestion(id) {
    return apiHelper.get(`/games/categories/${id}/levels`, {});
  },
  getgameitems(gameid) {
    return apiHelper.get(`/games/levels/${gameid}/items`, {});
  },
};
