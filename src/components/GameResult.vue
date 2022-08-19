<template>
  <div class="position">
    <div
      class="news_area animate__animated animate__rotateInUpRight"
      :class="{ 'd-none': !iserror }"
    >
      <p class="date">{{ date }}</p>
      <h1 class="news_title">{{ typetitle }}反受害 洗錢詐騙新招</h1>
      <div class="news_text">
        <p class="news_description">
          {{ gamedescription }}
        </p>
        <p class="news_law">{{ gamelaw }}</p>
      </div>
      <slot></slot>
    </div>
    <div
      class="news_area animate__animated animate__rotateInUpRight"
      :class="{ 'd-none': !iswinner }"
    >
      <p class="date">{{ date }}</p>
      <h1 class="news_title">{{ typetitle }}法律王 識破洗錢詐騙</h1>
      <div class="d-flex">
        <div class="man"></div>
        <p class="winnertext">成功避免詐騙!!!<br />將犯罪者一網打盡!</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isError: false,
      date: "",
    };
  },
  props: {
    iserror: {
      type: Boolean,
      default: false,
    },
    iswinner: {
      type: Boolean,
      default: false,
    },
    typetitle: {
      type: String,
      default: "",
    },
    gamedescription: {
      type: String,
      default: "",
    },
    gamelaw: {
      type: String,
      default: "",
    },
  },
  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      this.date = `${year}年${month + 1}月${day}日`;
    },
    gameback() {
      this.$emit("gameback", 111);
    },
  },
  created() {
    this.getDate();
  },
};
</script>

<style scoped>
.position {
  position: absolute;
}
.Gamereset {
  position: absolute;
  top: 480px;
  right: 20px;
}
.news_area {
  background-image: url("./../assets/pictures/newspaper.jpg");
  width: 800px;
  height: 520px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
}

.man {
  margin-left: -70px;
  margin-top: -40px;
  width: 400px;
  height: 300px;
  background-image: url("https://media.giphy.com/media/yMByKc6xaOCR7Pkn0L/giphy.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.date {
  font-family: "Edu VIC WA NT Beginner", cursive;
  padding-top: 10px;
  padding-right: 10px;
  text-align: end;
  margin-bottom: 130px;
}

.news_title {
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-weight: bold;
  text-align: center;
  margin-bottom: 28px;
}

.news_text {
  font-family: "Edu VIC WA NT Beginner", cursive;
  display: flex;
  font-size: 16px;
}

.winnertext {
  margin-top: 40px;
  text-align: center;
  font-family: "Edu VIC WA NT Beginner", cursive;
  margin-left: 250px;
  font-weight: bold;
  font-size: 25px;
}

.news_description {
  font-family: "Edu VIC WA NT Beginner", cursive;
  margin-left: 15px;
  width: 220px;
  height: 220px;
  text-align: start;
  overflow: hidden;
}

.news_law {
  font-family: "Edu VIC WA NT Beginner", cursive;
  margin-left: 350px;
  width: 220px;
  height: 220px;
  text-align: start;
  overflow: hidden;
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
