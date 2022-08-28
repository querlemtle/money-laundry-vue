<template>
  <div class="chat-container">
    <h3 class="chat-header p-3">洗錢防治小幫手</h3>
    <div class="chat-body d-flex flex-column" ref="chatBody">
      <div class="links-wrapper d-flex flex-column align-items-end">
        <router-link class="chat-link" to="/game">資訊查詢</router-link>
        <router-link class="chat-link" to="/game">遊戲專區</router-link>
        <router-link class="chat-link" to="/game">與我聯絡</router-link>
      </div>
      <div class="bot-message m-3 d-flex align-items-center">
        <div class="bot-avatar align-self-start me-2"></div>
        <div class="message-wrapper d-flex flex-column gap-1">
          <div class="bot-message-content p-2">哈囉，需要什麼協助呢？</div>
          <div class="time-stamp">
            {{ chatOpenTime | customDateFormat }}
          </div>
        </div>
      </div>
      <div
        :class="`${message.agent}-message`"
        v-for="(message, index) in messageList"
        :key="index"
      >
        <div
          class="bot-avatar align-self-start me-2"
          v-if="message.agent === 'bot'"
        ></div>
        <div
          :class="{ 'm-3': message.agent === 'user' }"
          class="message-wrapper d-flex flex-column"
        >
          <div :class="`${message.agent}-message-content p-2`">
            {{ message.text }}
          </div>
          <div class="time-stamp">
            {{ message.createdAt | customDateFormat }}
          </div>
        </div>
      </div>
    </div>
    <div class="chat-footer d-flex align-items-center gap-2 p-3">
      <input
        type="text"
        name="chat-input"
        class="chat-input p-1"
        placeholder="告訴我你在想什麼..."
        v-model.trim="inputMessage"
        @keydown.enter="sendMessage"
      />
      <div class="chat-send" @click.prevent.stop="sendMessage">
        <i class="fa-solid fa-paper-plane send-icon fa-xl"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { customDateFormatter } from "../utils/mixins";

export default {
  name: "Chatroom",
  mixins: [customDateFormatter],
  data() {
    return {
      messageList: [],
      chatOpenTime: new Date().toISOString(),
      inputMessage: "",
      isBotTyping: false,
    };
  },
  watch: {
    messageList: function () {
      // DOM渲染完新訊息後，卷軸自動下拉
      this.$nextTick(() => {
        this.updateScrollPosition();
      });
    },
  },
  methods: {
    sendMessage() {
      if (!this.inputMessage) {
        return;
      } else {
        // 將使用者輸入訊息加入訊息列表內
        this.messageList.push({
          agent: "user",
          text: this.inputMessage.trim(),
          createdAt: new Date().toISOString(),
        });
        // 機器人回覆
        this.sendBotReply();
        // 清空訊息
        this.inputMessage = "";
      }
    },
    updateScrollPosition() {
      this.$refs.chatBody.scroll({
        top: this.$refs.chatBody.scrollHeight,
        behavior: "smooth",
      });
    },
    sendBotReply() {
      setTimeout(() => {
        this.messageList.push({
          agent: "bot",
          text: "感謝您的意見！",
          createdAt: new Date().toISOString(),
        });
      }, 1000);
    },
  },
};
</script>

<style scoped src="@/assets/css/chatroom.css"></style>
