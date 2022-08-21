<template>
  <div class="container d-flex">
    <div class="leftside">
      <div class="title">{{ gamequestion }}</div>
      <div class="man"></div>
    </div>
    <div class="itemarea">
      <button
        class="item dashed animate__animated animate__backInDown"
        v-for="i in categories"
        :key="i.id"
        @click="getcategory(i.id, i.type)"
        :class="{ animate__backOutDown: isAnimate }"
        :disabled="isDisabled"
      >
        <div>
          {{ i.type }}
        </div>
      </button>
      <button
        class="item dashed animate__animated animate__backInDown"
        v-for="i in gameitems"
        :key="i.id"
        @click="getResult(i.isLegal, i.law, i.description)"
        :class="{ animate__backOutDown: isAnimate }"
        :disabled="isDisabled"
      >
        <div>
          {{ i.name }}
        </div>
      </button>
    </div>
    <GameResult
      :iserror="isError"
      :iswinner="isWinner"
      :typetitle="typetitle"
      :gamedescription="gamedescription"
      :gamelaw="gamelaw"
    >
      <button type="button" class="Gamereset dashed" @click="gameback()">
        Gamereset
      </button>
    </GameResult>
  </div>
</template>

<script>
import userAPI from "../api/gameapi";
import GameResult from "../components/GameResult.vue";

export default {
  data() {
    return {
      gamequestion: "請選擇遊戲關卡",
      categories: [],
      typetitle: "",
      categoryId: "",
      gamequestionid: "",
      gameitems: [],
      gamelevel: 1,
      gamelaw: "",
      gamedescription: "",
      levellist: [],
      isLegal: false,
      isAnimate: false,
      isError: false,
      isWinner: false,
      isDisabled: false,
    };
  },
  components: {
    GameResult,
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await userAPI.getcategories();

        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        // console.log(response.data);
        this.categories = response.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async fetchGamequestion(id) {
      this.isAnimate = true;
      try {
        const response = await userAPI.getgamequestion(id);

        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        // console.log(response.data);

        const data = response.data.data.Levels;
        this.levellist = JSON.parse(JSON.stringify(data));
        this.gamequestionid = this.levellist[this.gamelevel - 1].id;
        // console.log(this.gamequestionid);
        this.gamequestion = "Q" + this.gamelevel + ". 以下情境何者沒有犯法？";
        this.isAnimate = false;
        this.isAns = true;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async fetchGameitems(id) {
      this.isAnimate = true;
      try {
        this.categories = [];
        const response = await userAPI.getgameitems(id);

        if (response.status !== 200) {
          throw new Error(response.data.message);
        }
        console.log(response.data.data.Items);
        this.gameitems = response.data.data.Items;
        this.isAnimate = false;
        this.isDisabled = false;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async getcategory(category, type) {
      this.isDisabled = true;
      this.categoryId = category;
      this.typetitle = type;
      await this.fetchGamequestion(this.categoryId);
      await this.fetchGameitems(this.gamequestionid);
    },
    getResult(isLegal, law, description) {
      this.isDisabled = true;
      if (isLegal) {
        if (this.gamelevel === 5) {
          this.isWinner = true;
        } else {
          this.gamelevel++;
          this.gamequestionid = this.levellist[this.gamelevel - 1].id;
          this.gamequestion = "Q" + this.gamelevel + ". 以下情境何者沒有犯法？";
          this.fetchGameitems(this.gamequestionid);
        }
      } else {
        this.isError = true;
        this.gamedescription = description;
        this.gamelaw = law;
      }
    },
    gameback() {
      this.$emit("backing");
    },
  },
  created() {
    this.fetchCategories();
  },
  computed: {
    isCorrect() {
      return {
        border: this.isAns ? "green dashed 5px" : "red dashed 5px",
      };
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
  margin-top: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 160px;
  padding-bottom: 120px;
  padding-left: 130px;
  text-align: end;
  position: relative;
}
.leftside {
  width: 350px;
}
.man {
  height: 400px;
  background-image: url("https://media.giphy.com/media/yMByKc6xaOCR7Pkn0L/giphy.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.w800 {
  width: 800px;
}

.title {
  display: block;
  width: 350px;
  font-size: 45px;
  text-align: start;
  height: 120px;
  padding: 0 10px;
  overflow-wrap: break-word;
}

.itemarea {
  margin-left: 80px;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.item {
  text-align: center;
  line-height: 70px;
  width: 350px;
  height: 80px;
  font-size: 24px;
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

.correct {
  border: 5px dashed green;
}

.error {
  border: 5px dashed red;
}
</style>
