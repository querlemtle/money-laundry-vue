<template>
  <div class="container">
    <div class="man w800"></div>
    <button type="button" class="Gamestart dashed" @click="gamestart">
      GameStart
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    gamestart() {
      this.$emit("starting");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
* {
  font-family: "Edu VIC WA NT Beginner", "Noto Sans TC";
  box-sizing: border-box;
}
.container {
  height: 800px;
  width: 1000px;
  background-image: url("https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  margin: 0 auto;
  margin-top: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 170px;
  padding-bottom: 100px;
  padding-left: 132px;
  text-align: end;
  position: relative;
}
.man {
  height: 400px;
  background-image: url("https://media.giphy.com/media/qQJBEm2e9qOkh9W1Z7/giphy.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.w800 {
  width: 800px;
}
.Gamestart {
  margin-right: 80px;
  width: 180px;
  height: 80px;
  border-radius: 10px;
  border: 3px solid white;
  font-size: 30px;
}
.dashed {
  background-color: rgba(0, 0, 0, 0);
  border-width: 2px 3px 2px 5px;
  border-radius: 90% 6% 93% 5% / 5% 94% 7% 95%;
  /* 做出傾斜的視覺感 */
  transform: rotate(2deg);
  border: dashed black 2px;
}
</style>
