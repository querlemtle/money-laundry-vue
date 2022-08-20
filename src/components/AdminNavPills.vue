<template>
  <div class="container mt-4 mb-2">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills">
          <li class="nav-item" @click="cahangecategory()">
            <router-link class="nav-link" aria-current="page" to="newest"
              >最近更新</router-link
            >
          </li>
          <li
            class="nav-item"
            v-for="i in categories"
            :key="i.id"
            @click="cahangecategory(i.id)"
          >
            <router-link class="nav-link" :to="{ path: `${i.id}` }">{{
              i.type
            }}</router-link>
          </li>
          <li class="ms-auto">
            <router-link
              class="btn btn-warning"
              :to="{ path: '/admin/option/new' }"
              >新增選項</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "../api/gameapi";

export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    cahangecategory(id) {
      this.$emit("category", id);
    },
    async fetchCategories() {
      try {
        const response = await userAPI.getcategories();

        if (response.status !== 200) {
          throw new Error(response.message);
        }
        // console.log(response.data);
        this.categories = response.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped src="@/assets/css/adminNavPills.css"></style>
