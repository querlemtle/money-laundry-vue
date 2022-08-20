<template>
  <div>
    <SiteHeader />
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
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader.vue";
import GameStart from "../components/GameStart.vue";
import GameView from "../components/GameView.vue";

export default {
  data() {
    return {
      isGameing: false,
      isResetGame: true,
    };
  },
  components: {
    SiteHeader,
    GameStart,
    GameView,
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
