<template>
  <div>
    <AdminHeader />
    <div class="wrap">
      <h4 class="title text-center py-3">新增選項</h4>
      <OptionForm :initial-categories="categories" />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import OptionForm from "../components/OptionForm.vue";
import gameAPI from "../api/gameapi";
import { Toast } from "../utils/helpers";

export default {
  name: "CreateOption",
  components: {
    AdminHeader,
    OptionForm,
  },
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
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
  },
};
</script>

<style scoped src="@/assets/css/createOption.css"></style>
