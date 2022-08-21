<template>
  <div class="wrap">
    <form class="d-flex flex-column">
      <div class="categoryId">
        <label for="categoryId">關卡類別</label>
        <select name="categoryId" @blur="handleCategoryChange">
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
        <input type="text" name="name" />
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
            <input type="radio" name="legal" :value="option.value" />
            <label for="legal">{{ option.name }}</label>
          </span>
        </div>
      </div>
      <div class="error-context">
        <label for="description">錯誤事件敘述</label>
        <textarea name="description"></textarea>
      </div>
      <div class="law">
        <label for="law">法律條文</label>
        <textarea name="law"></textarea>
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
          @click.prevent.stop="handleFormSave(toadd)"
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
      toadd: {
        categoryId: 94,
        name: "s",
        levelId: 634,
        isLegal: false,
        description: "s",
        law: "s",
        isPublished: false,
      },
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
      devaddoption: {
        categoryId: "",
        name: "",
        levelId: "",
        description: "",
        law: "",
        isPublished: false,
      },
    };
  },
  methods: {
    async handleCategoryChange(event) {
      // 取得類別 id 並轉成 number
      const categoryId = +event.target.value;
      try {
        if (categoryId) {
          // add spinner
          this.isLevelLoading = true;

          const response = await adminAPI.getSuggestLevels({ categoryId });
          this.suggestLevels = [...response.data.data.suggestLevels];
          // 隱藏關卡下拉選單的預設選項
          this.isSuggestLevelsExist = true;
          this.isLevelLoading = false;
        } else {
          return;
        }
      } catch (error) {
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async handleFormSave(toadd) {
      try {
        // 暫時禁用按鈕

        this.isProcessing = true;
        const form = event.target.closest("form");
        const formData = new FormData(form);
        formData.append("isPublished", false);
        const payload = JSON.stringify(...formData);
        console.log(payload);
        // Test code：迴圈印出 formData
        // for (let [name, value] of formData.entries()) {
        //   console.log(`${name}: ${value}`);
        // }

        // let payload = {
        //   categoryId: formData.get("categoryId"),
        //   levelId: formData.get("levelId"),
        //   name: formData.get("name"),
        //   isLegal: false,
        //   description: formData.get("description"),
        //   law: formData.get("law"),
        //   isPublished: false,
        // };
        // this.toadd.categoryId = parseInt(formData.get("categoryId"));
        // this.toadd.name = formData.get("name");
        // this.toadd.levelId = parseInt(formData.get("levelId"));
        //isLegal是test
        // this.toadd.isLegal = false;
        // this.toadd.description = this.description;
        // this.toadd.law = this.law;
        // this.toadd.isPublished = false;
        // payload = JSON.stringify(payload);
        // console.log(payload);
        // const response = await adminAPI.addOption(payload);
        // 錯誤處理
        // if (response.status !== 201 || response.status !== 200) {
        //   throw new Error(response.data.message);
        // }
        // console.log(response);

        // await funcation (event ){
        //   this.isProcessing = true;
        //   this.isPublished = false;
        //   const form = event.target.closest("form");
        //   const formData = new FormData(form);

        //   //用一個新的物件(toadd)傳送資料
        //   toadd.categoryId = parseInt(formData.get("categoryId"));
        //   toadd.name = formData.get("name");
        //   toadd.levelId = parseInt(formData.get("levelId"));
        //   //isLegal是test
        //   toadd.isLegal = false;
        //   toadd.description = this.description;
        //   toadd.law = this.law;
        //   toadd.isPublished = this.isPublished;
        //   // this.toadd = JSON.stringify(this.toadd);

        //   console.log(toadd);
        // }

        const response = await adminAPI.addOption(toadd);
        // 錯誤處理
        if (response.status !== 201) {
          throw new Error(response);
        }
        console.log(response);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.error(error.response);
        Toast.fire({
          icon: "error",
          title: error.response,
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
