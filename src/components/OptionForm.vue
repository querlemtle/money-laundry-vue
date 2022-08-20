<template>
  <div class="wrap">
    <form class="d-flex flex-column">
      <div class="categoryId">
        <label for="categoryId">關卡類別</label>
        <select
          name="categoryId"
          @blur="handleCategoryChange"
          v-model="categoryId"
        >
          <option value="" selected disabled>請選擇關卡類別</option>
          <option
            v-for="category in initialCategories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.type }}
          </option>
        </select>
      </div>
      <div class="description">
        <label for="name">選項描述</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <div class="level">
        <label for="levelId">屬於哪個關卡？</label>
        <select name="levelId">
          <option v-if="!isSuggestLevelsExist" value="" selected disabled>
            請先選擇關卡類別
          </option>
          <option
            v-for="level in suggestLevels"
            :key="level.id"
            :value="level.id"
          >
            {{ level.level }}
          </option>
        </select>
        <!-- spinner -->
        <div
          v-if="isLevelLoading"
          class="spinner-border text-primary"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="isLegal">
        <span for="isLegal">是否合法？</span>
        <div class="radio-container">
          <span
            class="radio-option"
            v-for="option in legalOptions"
            :key="option.value"
          >
            <input
              type="radio"
              name="legal"
              :value="option.value"
              v-model="option.checked"
            />
            <label for="legal">{{ option.name }}</label>
          </span>
        </div>
      </div>
      <div class="error-context">
        <label for="description">錯誤事件敘述</label>
        <textarea name="description" v-model="description"></textarea>
      </div>
      <div class="law">
        <label for="law">法律條文</label>
        <textarea name="law" v-model="law"></textarea>
      </div>
      <div class="w-100 button-container d-flex justify-content-end">
        <button class="return-btn px-4 py-2 my-2" :disabled="isProcessing">
          <router-link class="nav-btn" :to="{ path: '/admin/dashboard/newest' }"
            >返回列表</router-link
          >
        </button>
        <button
          type="submit"
          class="save-btn px-4 py-2 my-2"
          @click.prevent.stop="handleFormSave"
          :disabled="isProcessing"
        >
          儲存草稿
        </button>
        <button
          type="submit"
          class="send-btn px-4 py-2 my-2"
          @click.prevent.stop="handleFormSubmit"
          :disabled="isProcessing"
        >
          發佈
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import adminAPI from "../api/adminapi";
import { Toast } from "../utils/helpers";

export default {
  name: "OptionForm",
  props: {
    initialCategories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isSuggestLevelsExist: false,
      isLevelLoading: false,
      isProcessing: false,
      suggestLevels: [
        {
          id: 0,
          level: 0,
          category: "",
        },
      ],
      legalOptions: [
        {
          value: 1,
          name: "是",
          checked: false,
        },
        {
          value: 0,
          name: "否",
          checked: false,
        },
      ],
      categoryId: "",
      name: "",
      levelId: "",
      description: "",
      law: "",
      isPublished: false,
    };
  },
  methods: {
    async handleCategoryChange(event) {
      // 取得類別 id 並轉成 number
      const categoryId = +event.target.value;
      try {
        // add spinner
        this.isLevelLoading = true;
        const response = await adminAPI.getSuggestLevels({ categoryId });
        this.suggestLevels = [...response.data.data.suggestLevels];
        // 隱藏下拉選單的預設選項
        this.isSuggestLevelsExist = true;
        this.isLevelLoading = false;
      } catch (error) {
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async handleFormSave(event) {
      try {
        // 暫時禁用按鈕
        this.isProcessing = true;
        this.isPublished = false;
        const form = event.target.closest("form");
        const formData = new FormData(form);
        // test formData
        for (let [name, value] of formData.entries()) {
          console.log(`${name}: ${value}`);
        }
        const response = await adminAPI.addOption({
          formData,
          isPublished: this.isPublished,
        });
        // 錯誤處理
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        console.log(response);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async handleFormSubmit(event) {
      try {
        // 暫時禁用按鈕
        this.isProcessing = true;
        this.isPublished = true;
        const form = event.target.closest("form");
        const formData = new FormData(form);

        const response = await adminAPI.addOption({
          formData,
          isPublished: this.isPublished,
        });
        // 錯誤處理
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        console.log(response);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
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
