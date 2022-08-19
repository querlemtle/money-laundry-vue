<template>
  <div>
    <AdminHeader />
    <div class="wrap">
      <form class="d-flex flex-column">
        <h4 class="title text-center py-3">新增 / 修改選項</h4>
        <div class="category-id">
          <label for="category-id">關卡類別</label>
          <select name="category-id">
            <option value="">求職</option>
            <option value="">創業</option>
            <option value="">投資</option>
            <option value="">賭博</option>
          </select>
        </div>
        <div class="description">
          <label for="description">選項描述</label>
          <input type="text" name="description" />
        </div>
        <div class="level">
          <label for="level">屬於哪個關卡？</label>
          <!-- <div class="arrow-down"></div> -->
          <select name="level">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="legal">
          <span for="legal">是否合法？</span>
          <div class="radio-container">
            <span class="radio-option">
              <input type="radio" name="legal" />
              <label for="legal">是</label>
            </span>
            <span class="radio-option">
              <input type="radio" name="legal" />
              <label for="legal">否</label>
            </span>
          </div>
        </div>
        <div class="error-context">
          <label for="error-context">錯誤事件敘述</label>
          <textarea name="error-context"></textarea>
        </div>
        <div class="law">
          <label for="law">法律條文</label>
          <textarea name="law"></textarea>
        </div>
        <div class="w-100 button-container d-flex justify-content-end">
          <button class="return-btn px-4 py-2 my-2">
            <router-link
              class="nav-btn"
              :to="{ path: '/admin/dashboard/newest' }"
              >返回列表</router-link
            >
          </button>
          <button class="save-btn px-4 py-2 my-2">儲存草稿</button>
          <button class="send-btn px-4 py-2 my-2">發佈</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";

export default {
  name: "CreateOption",
  components: {
    AdminHeader,
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {},
};
</script>

<style scoped src="@/assets/css/createOption.css"></style>
