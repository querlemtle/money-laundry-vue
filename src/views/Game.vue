<template>
  <div class="body">
    <UserHeader />
    <GameStart
      v-if="isResetGame"
      @starting="start"
      class="animate__animated animate__zoomIn"
    />
    <GameView
      v-if="isGameing"
      @backing="gameback"
      class="animate__animated animate__zoomIn"
    />
    <Chatbot />
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";
import GameStart from "../components/GameStart.vue";
import GameView from "../components/GameView.vue";
import Chatbot from "../components/ChatbotUI.vue";

export default {
  data() {
    return {
      isGameing: false,
      isResetGame: true,
    };
  },
  components: {
    UserHeader,
    GameStart,
    GameView,
    Chatbot,
  },
  methods: {
    start() {
      this.isGameing = true;
      this.isResetGame = false;
    },
    gameback() {
      this.isGameing = false;
      this.isResetGame = true;
    },
  },
};
</script>

<style scoped>
.body {
  background-color: #d8ccc1;
}
</style>
