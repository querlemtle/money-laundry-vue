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
        <button class="send-btn align-self-end px-4 py-2 my-2">送出</button>
      </form>
    </div>
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader.vue";

export default {
  name: "adminLogin",
  components: {
    SiteHeader,
  },
  data() {
    return {
      account: "",
      password: "",
      isAccountEmpty: false,
      isPasswordEmpty: false,
    };
  },
  methods: {
    handleSubmit() {
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

      console.log("傳送請求...");
    },
  },
};
</script>

<style scoped src="@/assets/css/adminLogin.css"></style>
