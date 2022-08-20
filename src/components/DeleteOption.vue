<template>
  <div>
    <div class="box d-flex">
      <i class="fa-solid fa-triangle-exclamation fa-3x mx-4"></i>
      <div class="text">
        <div class="title">是否確認刪除？</div>
        <div class="content">選項：{{ itemname }}</div>
        <div class="btnarea">
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteOption(itemid)"
          >
            確認
          </button>
          <button type="button" class="btn btn-secondary" @click="cancel()">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from "../api/adminapi";
import { Toast } from "../utils/helpers";

export default {
  props: {
    itemname: {
      type: String,
      default: "",
    },
    itemid: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    async deleteOption(id) {
      try {
        const response = await adminAPI.deleteitem(id);

        if (response.status !== 200) {
          throw new Error(response.message);
        }
        // console.log(response);
        Toast.fire({
          icon: "success",
          title: "刪除成功！",
        });
        await this.cancel();
      } catch (error) {
        // console.log(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    cancel() {
      this.$emit("canceldelete");
    },
  },
};
</script>

<style scoped src="@/assets/css/deleteOption.css"></style>
