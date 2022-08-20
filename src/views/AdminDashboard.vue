<template>
  <div>
    <DeleteOption
      class="delModal"
      v-if="isDelete"
      :itemname="itemName"
      :itemid="itemId"
      @canceldelete="canceldelete"
    />
    <AdminHeader />
    <AdminNavPills @category="choosecategory" />
    <DataList :itemlist="datalist" @delete="deletemodal" />
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import DataList from "../components/DataList.vue";
import AdminNavPills from "../components/AdminNavPills.vue";
import DeleteOption from "../components/DeleteOption.vue";
import adminAPI from "../api/adminapi";

export default {
  data() {
    return {
      datalist: [],
      category_id: "",
      isDelete: false,
      itemId: "",
      itemName: "",
    };
  },
  components: {
    AdminHeader,
    DataList,
    AdminNavPills,
    DeleteOption,
  },
  methods: {
    async fetchlatest() {
      try {
        const response = await adminAPI.getlatest();

        if (response.status !== 200) {
          throw new Error(response.message);
        }
        // console.log(response.data.data.items);
        this.datalist = response.data.data.items;
        // this.categories = response.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async fetcategoryitem(category_id) {
      try {
        const response = await adminAPI.getcategoryitem(category_id);

        if (response.status !== 200) {
          throw new Error(response.message);
        }
        // console.log(response.data.data.items);
        this.datalist = response.data.data.items;
        // this.categories = response.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    choosecategory(category_id) {
      this.category_id = category_id;
      if (this.category_id > 0) {
        this.fetcategoryitem(this.category_id);
      } else {
        this.fetchlatest();
      }
    },
    deletemodal(name, id) {
      this.isDelete = true;
      this.itemName = name;
      this.itemId = id;
    },
    canceldelete() {
      this.isDelete = false;
      this.choosecategory(this.category_id);
    },
  },
  created() {
    this.category_id = this.$route.params.category_id;
    if (this.category_id > 0) {
      this.fetcategoryitem(this.category_id);
    } else {
      this.fetchlatest();
    }
  },
};
</script>

<style scoped>
.delModal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
