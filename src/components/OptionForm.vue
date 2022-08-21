<template>
  <div class="wrap">
    <form class="d-flex flex-column">
      <div class="categoryId">
        <label for="categoryId">關卡類別</label>
        <select
          name="categoryId"
          @blur="handleCategoryChange"
          v-model="toadd.categoryId"
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
        <input type="text" name="name" v-model="toadd.name" />
      </div>
      <div class="level">
        <label for="levelId">屬於哪個關卡？</label>
        <select name="levelId" v-model="toadd.levelId">
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
              :value="option.checked"
              v-model="toadd.isLegal"
            />
            <label for="legal">{{ option.name }}</label>
          </span>
        </div>
      </div>
      <div class="error-context">
        <label for="description">錯誤事件敘述</label>
        <textarea name="description" v-model="toadd.description"></textarea>
      </div>
      <div class="law">
        <label for="law">法律條文</label>
        <textarea name="law" v-model="toadd.law"></textarea>
      </div>
      <div class="w-100 button-container d-flex justify-content-end">
        <button class="return-btn px-4 py-2 my-2" :disabled="isProcessing">
          <router-link
            class="nav-btn"
            :to="subHeaderRouterrouter"
            @click.native.prevent="handleOpenModal(subHeaderRouterrouter)"
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
          @click.prevent.stop="handleFormSubmit(toadd)"
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
      subHeaderRouterrouter: { path: "/admin/dashboard/newest" },
      toadd: {
        categoryId: "",
        name: "",
        levelId: "",
        isLegal: false,
        description: "",
        law: "",
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
          checked: true,
        },
        {
          value: 0,
          name: "否",
          checked: false,
        },
      ],
    };
  },
  methods: {
    handleOpenModal(route) {
      if (this.IsV2User) {
        this.$router.push(route);
      } else {
        this.openModal("changeUserType", "user.changeUserType");
      }
    },
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
        toadd.isPublished = false;
        //以下為Put方法
        //   console.log(id, toadd);
        //   const response = await adminAPI.putItem(id, toadd);
        //   // 錯誤處理
        //   if (response.status !== 200) {
        //     throw new Error(response);
        //   }
        //   console.log(response);
        //   this.isProcessing = false;
        // } catch (error) {
        //   this.isProcessing = false;
        //   console.error(error.response);
        //   Toast.fire({
        //     icon: "error",
        //     title: error.response,
        //   });
        // }
        const response = await adminAPI.addOption(toadd);
        // 錯誤處理
        if (response.status !== 201) {
          throw new Error(response.data.message);
        }
        console.log(response);
        this.isProcessing = false;
        Toast.fire({
          icon: "success",
          title: response.data.status,
        });
        // this.handleOpenModal(this.subHeaderRouterrouter);
      } catch (error) {
        this.isProcessing = false;
        console.error(error.response.data.message);
        Toast.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
    async handleFormSubmit(toadd) {
      try {
        // 暫時禁用按鈕
        this.isProcessing = true;
        toadd.isPublished = true;
        const response = await adminAPI.addOption(toadd);
        // 錯誤處理
        if (response.status !== 201) {
          throw new Error(response.data.message);
        }
        console.log(response);
        this.isProcessing = false;
        Toast.fire({
          icon: "success",
          title: response.data.status,
        });
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
