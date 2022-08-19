<template>
  <div>
    <SiteHeader />
    <div class="wrap d-flex justify-content-center align-items-center">
      <form
        class="d-flex flex-column align-items-center"
        @submit.prevent="handleSubmit"
      >
        <h4 class="title py-3">管理者登入</h4>
        <div class="account my-3">
          <label for="account">帳號：</label>
          <input
            type="text"
            name="account"
            :class="{ 'error-input': isAccountEmpty }"
            v-model="account"
          />
          <div v-show="isAccountEmpty" class="error-message ms-5">
            請輸入帳號
          </div>
        </div>
        <div class="password my-3">
          <label for="password">密碼：</label>
          <input
            type="password"
            name="password"
            :class="{ 'error-input': isPasswordEmpty }"
            v-model="password"
          />
          <div v-if="isPasswordEmpty" class="error-message ms-5">
            請輸入密碼
          </div>
        </div>
        <button
          class="send-btn align-self-end px-4 py-2 my-2"
          :disabled="isProcessing"
        >
          送出
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader.vue";
import adminAPI from "../api/adminapi";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminLogin",
  components: {
    SiteHeader,
  },
  data() {
    return {
      account: "",
      password: "",
      isAccountEmpty: false,
      isPasswordEmpty: false,
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果未填寫帳號或密碼，防止請求送出
        if (this.account.trim() === "") {
          this.isAccountEmpty = true;
          return;
        } else {
          this.isAccountEmpty = false;
        }

        if (this.password.trim() === "") {
          this.isPasswordEmpty = true;
          return;
        } else {
          this.isPasswordEmpty = false;
        }
        // 暫時禁用按鈕
        this.isProcessing = true;
        const response = await adminAPI.login({
          account: this.account,
          password: this.password,
        });

        // 錯誤處理
        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        // 登入成功：提示並轉址
        localStorage.setItem("token", response.data.token);
        Toast.fire({
          icon: "success",
          title: "登入成功！",
        });
        this.$router.push("/admin/dashboard/newest");
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

<style scoped src="@/assets/css/adminLogin.css"></style>
