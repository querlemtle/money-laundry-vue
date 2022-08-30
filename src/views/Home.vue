<template>
  <div class="body">
    <UserHeader />
    <div class="container">
      <div class="content">
        <div class="banner">
          <h2>你好, 有想過一夜致富嗎?</h2>
          <h3>小心!你的行為將成為犯罪</h3>
        </div>
        <div class="library">
          <div class="library_box">
            <div class="library_pic">
              <router-link to="/fqa">
                <h4 class="library_box_text">法規資料庫查詢</h4>
              </router-link>
            </div>
          </div>
          <div class="library_text">
            <h4>近期相關判決</h4>
            <p>
              依洗錢防制法第7條第1項，銀行對於客戶應進
              行確認客戶身分程序，並應包括實質受益人之審查。依洗錢防制法第15條第1項第3款，收受、持有之財物，有規避第7條至第10條所定洗錢
            </p>
          </div>
        </div>
      </div>
      <div class="aside">
        <h4>四種容易觸犯洗錢行為你知道嗎?</h4>
        <div class="gameview"></div>
        <router-link to="/game"><h5>立即體驗遊戲</h5></router-link>
      </div>
    </div>
    <Chatbot />
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
import Chatbot from "../components/ChatbotUI.vue";

export default {
  name: "Home",
  components: {
    UserHeader,
    Chatbot,
  },
};
</script>

<style scoped src="@/assets/css/home.css"></style>
