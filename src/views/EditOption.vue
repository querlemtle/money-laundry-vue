<template>
  <div>
    <AdminHeader />
    <div class="wrap">
      <h4 class="title text-center py-3">修改選項</h4>
      <EditForm
        :initial-categories="categories"
        :toadd="itemDetail"
        :categoryarray="levellist"
        :itemid="itemId"
      />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import EditForm from "../components/EditForm.vue";
import gameAPI from "../api/gameapi";
import adminAPI from "../api/adminapi";
import { Toast } from "../utils/helpers";

export default {
  name: "EditOption",
  components: {
    AdminHeader,
    EditForm,
  },
  data() {
    return {
      categories: [],
      itemDetail: {},
      itemId: -1,
      levellist: [],
      gamelevelTotal: 5,
      categoryArray: [],
    };
  },
  created() {
    const { option_id } = this.$route.params;
    // console.log("Itemid:", option_id);
    this.fetchCategories();
    this.fetchItemDetail(option_id);
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await gameAPI.getcategories();
        this.categories = response.data.data;
        // console.log(this.categories);
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
        // console.log(response.data.data.item);
        this.itemDetail = response.data.data.item;
        this.itemId = Number(itemId);
        this.fetchGamequestion(this.itemDetail.categoryId);
        // console.log(this.itemDetail);
      } catch (error) {
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async fetchGamequestion(id) {
      try {
        const response = await gameAPI.getgamequestion(id);

        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        // console.log(response.data);

        const data = response.data.data.Levels;
        this.levellist = data;
        this.gamelevelTotal = this.levellist.length;
        console.log(this.levellist);
        this.creatarray(this.gamelevelTotal);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    creatarray(length) {
      var arr = new Array();
      for (var i = 0; i < length; i++) {
        arr[i] = i + 1;
      }
      this.categoryArray = arr;
    },
  },
  // computed: {
  //   getgamelevel() {
  //     console.log(this.itemDetail.categoryId);
  //     this.fetchGamequestion(this.itemDetail.categoryId);
  //     console.log(this.gamelevelTotal);
  //     return this.gamelevelTotal;
  //   },
  // },
};
</script>

<style scoped src="@/assets/css/createOption.css"></style>
