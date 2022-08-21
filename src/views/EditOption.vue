<template>
  <div>
    <AdminHeader />
    <div class="wrap">
      <h4 class="title text-center py-3">修改選項</h4>
      <OptionForm :initial-categories="categories" />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import OptionForm from "../components/OptionForm.vue";
import gameAPI from "../api/gameapi";
import adminAPI from "../api/adminapi";
import { Toast } from "../utils/helpers";

export default {
  name: "EditOption",
  components: {
    AdminHeader,
    OptionForm,
  },
  data() {
    return {
      categories: [],
    };
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params;
    this.fetchItemDetail(id);
    next();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await gameAPI.getcategories();
        this.categories = response.data.data;
      } catch (error) {
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async fetchItemDetail(itemId) {
      try {
        const response = await adminAPI.getItemDetail(itemId);
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/createOption.css"></style>
