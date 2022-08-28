<template>
  <div class="chat-bot">
    <transition name="toggle-chat">
      <Chatroom v-if="isChatOpen" />
    </transition>
    <div class="toggle-icon" @click.prevent.stop="toggleChatbot">
      <transition name="icon-fade">
        <div key="bot" class="bot-icon" v-if="!isChatOpen"></div>
        <div key="cross" class="cross-icon" v-else></div>
      </transition>
    </div>
  </div>
</template>

<script>
import Chatroom from "./Chatroom";

export default {
  name: "ChatbotUI",
  components: {
    Chatroom,
  },
  data() {
    return {
      isChatOpen: false,
    };
  },
  methods: {
    toggleChatbot() {
      this.isChatOpen = !this.isChatOpen;
    },
  },
};
</script>

<style scoped src="@/assets/css/chatbot.css"></style>
